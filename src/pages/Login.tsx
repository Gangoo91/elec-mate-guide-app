
import Logo from "@/components/Logo";
import LoginForm from "@/components/login/LoginForm";
import MainLayout from "@/components/layout/MainLayout";

const Login = () => (
  <MainLayout>
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-[#151812] px-2 py-8 sm:px-4">
      <div className="w-full max-w-md glass-morphism rounded-3xl border border-[#FFC900]/15 bg-[#151812]/40 shadow-lg flex flex-col items-center animate-fade-in p-5 sm:p-8 md:p-10">
        <div className="flex justify-center w-full">
          <Logo size={80} />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FFC900] text-center mb-8 mt-6 leading-tight drop-shadow-[0_0_4px_rgba(255,201,0,0.5)] tracking-wide select-none">
          Welcome Back
        </h1>
        <LoginForm />
      </div>
    </div>
  </MainLayout>
);

export default Login;
