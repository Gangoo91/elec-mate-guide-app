
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "@/components/Logo";
import LoginForm from "@/components/login/LoginForm";
import MainLayout from "@/components/layout/MainLayout";
import GlassCard from "@/components/shared/GlassCard";
import { useAuth } from "@/hooks/useAuth";

const Login = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  // Redirect authenticated users to dashboard
  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  return (
    <MainLayout>
      <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-[#151812] px-1 py-6 sm:px-4">
        <div className="w-full max-w-sm sm:max-w-md">
          <GlassCard>
            <div className="flex justify-center w-full mb-2">
              <Logo size={70} />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#FFC900] text-center mb-7 mt-4 leading-tight drop-shadow-[0_0_4px_rgba(255,201,0,0.5)] tracking-wide select-none">
              Welcome Back
            </h1>
            <LoginForm />
          </GlassCard>
        </div>
      </div>
    </MainLayout>
  );
};

export default Login;
