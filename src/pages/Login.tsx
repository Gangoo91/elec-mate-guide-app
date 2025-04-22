
import { useEffect, memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "@/components/Logo";
import LoginForm from "@/components/login/LoginForm";
import MainLayout from "@/components/layout/MainLayout";
import GlassCard from "@/components/shared/GlassCard";
import { useAuth } from "@/hooks/useAuth";
import { Loader2 } from "lucide-react";

const Login = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isRedirecting, setIsRedirecting] = useState(false);
  
  // Redirect authenticated users based on preferred role
  useEffect(() => {
    if (user) {
      setIsRedirecting(true);
      const preferredRole = localStorage.getItem('preferredRole');
      console.log("Login - User authenticated, preferred role:", preferredRole);
      
      // Add a small delay to show loading state and prevent jarring transitions
      const redirectTimeout = setTimeout(() => {
        if (preferredRole === 'apprentice') {
          console.log("Login - Redirecting to apprentice hub");
          navigate("/apprentice-hub", { replace: true });
        } else {
          console.log("Login - Redirecting to dashboard");
          navigate("/dashboard", { replace: true });
        }
      }, 300);
      
      return () => clearTimeout(redirectTimeout);
    }
  }, [user, navigate]);

  // Memoize the logo component to prevent unnecessary re-renders
  const MemoizedLogo = memo(() => <Logo size={70} />);
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
                <p className="text-[#FFC900]/70">Redirecting to your dashboard...</p>
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
