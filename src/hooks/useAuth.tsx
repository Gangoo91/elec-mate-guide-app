
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
  const [initialized, setInitialized] = useState(false);

  // Check localStorage first for a faster initial state
  useEffect(() => {
    const hasAuthenticated = localStorage.getItem('userAuthenticated') === 'true';
    if (hasAuthenticated) {
      // This will be overridden by the actual session check, but prevents flickering
      const storedUser = localStorage.getItem('userAuthData');
      if (storedUser) {
        try {
          const parsedUser = JSON.parse(storedUser);
          setUser(parsedUser);
          setLoading(false);
        } catch (e) {
          // Invalid stored data, will be fixed by the actual auth check
        }
      }
    }
    
    setInitialized(true);
  }, []);

  // Function to refresh the session manually
  const refreshSession = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.getSession();
      if (error) throw error;
      
      setSession(data.session);
      setUser(data.session?.user ?? null);
      
      // Cache auth data for faster initial loads
      if (data.session?.user) {
        localStorage.setItem('userAuthData', JSON.stringify(data.session.user));
        localStorage.setItem('userAuthenticated', 'true');
      } else {
        localStorage.removeItem('userAuthData');
        localStorage.removeItem('userAuthenticated');
      }
    } catch (error) {
      console.error("Error refreshing session:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!initialized) return;
    
    console.log("Auth provider initialized");
    
    // First check for existing session synchronously to prevent flicker
    const initialSessionCheck = async () => {
      try {
        const { data } = await supabase.auth.getSession();
        console.log("Initial session check:", data.session ? "exists" : "none");
        setSession(data.session);
        setUser(data.session?.user ?? null);
        
        // Cache auth data for faster initial loads
        if (data.session?.user) {
          localStorage.setItem('userAuthData', JSON.stringify(data.session.user));
          localStorage.setItem('userAuthenticated', 'true');
        } else {
          localStorage.removeItem('userAuthData');
          localStorage.removeItem('userAuthenticated');
        }
      } catch (e) {
        console.error("Session check error:", e);
      } finally {
        setLoading(false);
      }
    };
    
    initialSessionCheck();

    // Then set up the auth state change listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, currentSession) => {
      console.log("Auth state changed:", event);
      
      setSession(currentSession);
      setUser(currentSession?.user ?? null);
      
      // Cache auth data for faster initial loads
      if (currentSession?.user) {
        localStorage.setItem('userAuthData', JSON.stringify(currentSession.user));
        localStorage.setItem('userAuthenticated', 'true');
      } else {
        localStorage.removeItem('userAuthData');
        localStorage.removeItem('userAuthenticated');
      }
      
      setLoading(false);
    });

    // Add a safety timeout in case the auth check gets stuck
    const safetyTimer = setTimeout(() => {
      if (loading) {
        console.log("Auth loading timeout triggered");
        setLoading(false);
      }
    }, 1000); // Reduced timeout

    return () => {
      subscription.unsubscribe();
      clearTimeout(safetyTimer);
    };
  }, [initialized]);

  return (
    <AuthContext.Provider value={{ session, user, loading, refreshSession }}>
      {children}
    </AuthContext.Provider>
  );
};
