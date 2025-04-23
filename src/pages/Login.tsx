
import { useEffect, memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "@/components/Logo";
import LoginForm from "@/components/login/LoginForm";
import MainLayout from "@/components/layout/MainLayout";
import GlassCard from "@/components/shared/GlassCard";
import { useAuth } from "@/hooks/useAuth";
import { Loader2 } from "lucide-react";
import { useUserPreferences } from "@/hooks/useUserPreferences";

const Login = () => {
  const { user, loading, refreshSession } = useAuth();
  const navigate = useNavigate();
  const [isRedirecting, setIsRedirecting] = useState(false);
  const { setPreferredRole } = useUserPreferences();

  // On component mount, ensure we have the latest session
  useEffect(() => {
    refreshSession();
  }, [refreshSession]);
  
  // Redirect authenticated users to apprentice hub
  useEffect(() => {
    if (!loading && user) {
      setIsRedirecting(true);
      console.log("Login - User authenticated, redirecting to apprentice hub");
      
      // Set preferred role to apprentice
      setPreferredRole('apprentice');
      
      // Add a small delay to show loading state and prevent jarring transitions
      const redirectTimeout = setTimeout(() => {
        navigate("/apprentice-hub", { replace: true });
      }, 300);
      
      return () => clearTimeout(redirectTimeout);
    }
  }, [user, loading, navigate, setPreferredRole]);

  // Memoize the logo component to prevent unnecessary re-renders
  const MemoizedLogo = memo(() => (
    <Logo 
      size={70} 
      onClick={(e) => {
        e.preventDefault();
        navigate('/welcome');
      }}
    />
  ));
  MemoizedLogo.displayName = "MemoizedLogo";

  return (
    <MainLayout>
      <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-[#151812] px-1 py-6 sm:px-4">
        <div className="w-full max-w-sm sm:max-w-md">
          <GlassCard>
            <div className="flex justify-center w-full mb-2">
              <MemoizedLogo />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FFC900] text-center mb-7 mt-4 leading-tight drop-shadow-[0_0_4px_rgba(255,201,0,0.5)] tracking-wide select-none">
              Welcome Back
            </h1>
            
            {isRedirecting ? (
              <div className="flex flex-col items-center justify-center py-4">
                <Loader2 className="h-8 w-8 animate-spin text-[#FFC900] mb-3" />
                <p className="text-[#FFC900]/70">Redirecting to Apprentice Hub...</p>
              </div>
            ) : (
              <LoginForm />
            )}
          </GlassCard>
        </div>
      </div>
    </MainLayout>
  );
};

export default Login;
