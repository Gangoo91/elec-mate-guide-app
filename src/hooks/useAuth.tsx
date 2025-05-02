
import { useEffect, useState, createContext, useContext } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { Session, User } from "@supabase/supabase-js";

type UserRole = "apprentice" | "electrician" | "tutor" | "employer";

type AuthContextType = {
  session: Session | null;
  user: User | null;
  loading: boolean;
  userRole: UserRole | null;
  isTutorApproved: boolean;
};

const AuthContext = createContext<AuthContextType>({
  session: null,
  user: null,
  loading: true,
  userRole: null,
  isTutorApproved: false,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState<UserRole | null>(null);
  const [isTutorApproved, setIsTutorApproved] = useState(false);

  // Fetch user role and tutor approval status
  useEffect(() => {
    const fetchUserDetails = async () => {
      if (!user) return;
      
      try {
        // Get user metadata to determine role
        const role = user.user_metadata?.plan as UserRole || null;
        setUserRole(role);
        
        // If user is a tutor, check if they are approved
        if (role === "tutor") {
          // In a real implementation, query a tutor_approvals table
          // For now, we'll check if the user's email contains certain keywords for demo purposes
          // This would be replaced with a proper database query in production
          const approvalStatus = await supabase
            .from('tutor_approvals')
            .select('is_approved')
            .eq('user_id', user.id)
            .single();
            
          // If we have a record and it's approved
          if (approvalStatus.data && approvalStatus.data.is_approved) {
            setIsTutorApproved(true);
          } else {
            setIsTutorApproved(false);
          }
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
        setIsTutorApproved(false);
      }
    };

    if (user) {
      fetchUserDetails();
    } else {
      setUserRole(null);
      setIsTutorApproved(false);
    }
  }, [user]);

  useEffect(() => {
    // Listen for changes immediately
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, s) => {
      setSession(s);
      setUser(s?.user ?? null);
      setLoading(false);
    });

    // Fetch initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ session, user, loading, userRole, isTutorApproved }}>
      {children}
    </AuthContext.Provider>
  );
};
