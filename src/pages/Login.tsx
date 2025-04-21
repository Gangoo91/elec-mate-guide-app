
import Logo from "@/components/Logo";
import LoginForm from "@/components/login/LoginForm";
import MainLayout from "@/components/layout/MainLayout";
import BackButton from "@/components/navigation/BackButton";

const Login = () => (
  <MainLayout>
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-[#151812] px-2 py-8 overflow-auto">
      <div className="w-full max-w-md bg-transparent flex flex-col items-center animate-fade-in">
        <BackButton />
        <Logo size={80} />
        <LoginForm />
      </div>
    </div>
  </MainLayout>
);

export default Login;
