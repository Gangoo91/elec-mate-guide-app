
import { useEffect, useState, createContext, useContext } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { Session, User } from "@supabase/supabase-js";

type AuthContextType = {
  session: Session | null;
  user: User | null;
  loading: boolean;
  refreshSession: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  session: null,
  user: null,
  loading: true,
  refreshSession: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Function to refresh the session manually
  const refreshSession = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.getSession();
      if (error) throw error;
      
      setSession(data.session);
      setUser(data.session?.user ?? null);
    } catch (error) {
      console.error("Error refreshing session:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Set a flag to track if this is the first authentication check
    let isFirstAuthCheck = true;

    // Listen for changes in auth state
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, s) => {
      console.log("Auth state changed:", event);
      setSession(s);
      setUser(s?.user ?? null);
      
      // Only set loading to false after the first auth check
      if (isFirstAuthCheck) {
        isFirstAuthCheck = false;
      }
      setLoading(false);
    });

    // Fetch initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log("Initial session loaded:", session ? "exists" : "none");
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Check for network issues and session validity periodically
    const intervalId = setInterval(() => {
      if (navigator.onLine) {
        supabase.auth.getSession().then(({ data: { session: currentSession } }) => {
          // Only update if there's a change in session status
          if ((!session && currentSession) || (session && !currentSession)) {
            setSession(currentSession);
            setUser(currentSession?.user ?? null);
          }
        });
      }
    }, 60000); // Check every minute

    return () => {
      subscription.unsubscribe();
      clearInterval(intervalId);
    };
  }, []);

  return (
    <AuthContext.Provider value={{ session, user, loading, refreshSession }}>
      {children}
    </AuthContext.Provider>
  );
};
