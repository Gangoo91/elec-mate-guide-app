
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
  const [initialized, setInitialized] = useState(false);

  // Function to refresh the session manually
  const refreshSession = useCallback(async () => {
    try {
      console.log("Manually refreshing auth session");
      const { data, error } = await supabase.auth.getSession();
      if (error) throw error;
      
      setSession(data.session);
      setUser(data.session?.user ?? null);
      
      // Cache auth data for faster initial loads
      if (data.session?.user) {
        sessionStorage.setItem('userAuthData', JSON.stringify(data.session.user));
        sessionStorage.setItem('userAuthenticated', 'true');
        sessionStorage.setItem('lastAuthRefresh', Date.now().toString());
        console.log("Session refreshed - user is authenticated");
      } else {
        sessionStorage.removeItem('userAuthData');
        sessionStorage.removeItem('userAuthenticated');
        sessionStorage.removeItem('lastAuthRefresh');
        console.log("Session refreshed - no authenticated user");
      }
    } catch (error) {
      console.error("Error refreshing session:", error);
      // Clear user data on error
      setUser(null);
      setSession(null);
      sessionStorage.removeItem('userAuthData');
      sessionStorage.removeItem('userAuthenticated');
      sessionStorage.removeItem('lastAuthRefresh');
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (initialized) return;
    
    console.log("Auth provider initializing");
    
    // Check for cached user authentication first for faster initial state
    const hasAuthenticated = sessionStorage.getItem('userAuthenticated') === 'true';
    if (hasAuthenticated) {
      const storedUser = sessionStorage.getItem('userAuthData');
      if (storedUser) {
        try {
          const parsedUser = JSON.parse(storedUser);
          setUser(parsedUser);
          console.log("Retrieved user from sessionStorage");
        } catch (e) {
          console.error("Error parsing stored user data:", e);
          sessionStorage.removeItem('userAuthData');
          sessionStorage.removeItem('userAuthenticated');
        }
      }
    }
    
    // Set up the auth state change listener first
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, currentSession) => {
      console.log("Auth state changed:", event);
      
      setSession(currentSession);
      setUser(currentSession?.user ?? null);
      
      // Cache auth data for faster initial loads
      if (currentSession?.user) {
        sessionStorage.setItem('userAuthData', JSON.stringify(currentSession.user));
        sessionStorage.setItem('userAuthenticated', 'true');
        sessionStorage.setItem('lastAuthRefresh', Date.now().toString());
        sessionStorage.setItem('authVerified', 'true');
        
        // Ensure preferred role is set when auth changes
        if (!localStorage.getItem('preferredRole')) {
          localStorage.setItem('preferredRole', 'apprentice');
        }
      } else {
        sessionStorage.removeItem('userAuthData');
        sessionStorage.removeItem('userAuthenticated');
        sessionStorage.removeItem('lastAuthRefresh');
        sessionStorage.removeItem('authVerified');
      }
      
      setLoading(false);
    });

    // Then check for existing session
    const initialSessionCheck = async () => {
      try {
        const { data } = await supabase.auth.getSession();
        console.log("Initial session check:", data.session ? "exists" : "none");
        
        setSession(data.session);
        setUser(data.session?.user ?? null);
        
        if (data.session?.user) {
          sessionStorage.setItem('userAuthData', JSON.stringify(data.session.user));
          sessionStorage.setItem('userAuthenticated', 'true');
          sessionStorage.setItem('lastAuthRefresh', Date.now().toString());
          sessionStorage.setItem('authVerified', 'true');
          
          // Set default role if not already set
          if (!localStorage.getItem('preferredRole')) {
            localStorage.setItem('preferredRole', 'apprentice');
          }
        } else {
          sessionStorage.removeItem('userAuthData');
          sessionStorage.removeItem('userAuthenticated');
          sessionStorage.removeItem('lastAuthRefresh');
          sessionStorage.removeItem('authVerified');
        }
      } catch (e) {
        console.error("Session check error:", e);
        // Clear user data on error
        setUser(null);
        setSession(null);
        sessionStorage.removeItem('userAuthData');
        sessionStorage.removeItem('userAuthenticated');
        sessionStorage.removeItem('lastAuthRefresh');
        sessionStorage.removeItem('authVerified');
      } finally {
        setLoading(false);
        setInitialized(true);
      }
    };
    
    initialSessionCheck();

    // Add a safety timeout in case the auth check gets stuck
    const safetyTimer = setTimeout(() => {
      if (loading) {
        console.log("Auth loading timeout triggered");
        setLoading(false);
        setInitialized(true);
      }
    }, 2000);

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
