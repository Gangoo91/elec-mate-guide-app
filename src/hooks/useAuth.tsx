
import { useEffect, useState, createContext, useContext, useCallback } from "react";
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
  const refreshSession = useCallback(async () => {
    try {
      console.log("Refreshing auth session");
      const { data, error } = await supabase.auth.getSession();
      if (error) throw error;
      
      setSession(data.session);
      setUser(data.session?.user ?? null);
      
      // Cache auth data for faster initial loads
      if (data.session?.user) {
        sessionStorage.setItem('userAuthenticated', 'true');
        console.log("Session refreshed - user is authenticated");
      } else {
        sessionStorage.removeItem('userAuthenticated');
        console.log("Session refreshed - no authenticated user");
      }
    } catch (error) {
      console.error("Error refreshing session:", error);
      // Clear user data on error
      setUser(null);
      setSession(null);
      sessionStorage.removeItem('userAuthenticated');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    console.log("Auth provider initializing");
    
    // Set loading state initially
    setLoading(true);
    
    // Set up the auth state change listener first for future changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, currentSession) => {
      console.log("Auth state changed:", event);
      
      setSession(currentSession);
      setUser(currentSession?.user ?? null);
      
      // Update session storage
      if (currentSession?.user) {
        sessionStorage.setItem('userAuthenticated', 'true');
      } else {
        sessionStorage.removeItem('userAuthenticated');
      }
      
      setLoading(false);
    });

    // Check for existing session
    const initialSessionCheck = async () => {
      try {
        const { data } = await supabase.auth.getSession();
        console.log("Initial session check:", data.session ? "exists" : "none");
        
        setSession(data.session);
        setUser(data.session?.user ?? null);
        
        if (data.session?.user) {
          sessionStorage.setItem('userAuthenticated', 'true');
          
          // Set default role if not already set
          if (!localStorage.getItem('preferredRole')) {
            localStorage.setItem('preferredRole', 'apprentice');
          }
        } else {
          sessionStorage.removeItem('userAuthenticated');
        }
      } catch (e) {
        console.error("Session check error:", e);
        // Clear user data on error
        setUser(null);
        setSession(null);
        sessionStorage.removeItem('userAuthenticated');
      } finally {
        setLoading(false);
      }
    };
    
    initialSessionCheck();

    // Safety timeout to prevent infinite loading
    const safetyTimer = setTimeout(() => {
      if (loading) {
        console.log("Auth loading timeout triggered");
        setLoading(false);
      }
    }, 2000);

    return () => {
      subscription.unsubscribe();
      clearTimeout(safetyTimer);
    };
  }, []);

  return (
    <AuthContext.Provider value={{ session, user, loading, refreshSession }}>
      {children}
    </AuthContext.Provider>
  );
};
