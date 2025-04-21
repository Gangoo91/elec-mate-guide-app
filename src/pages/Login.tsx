
import Logo from "@/components/Logo";
import LoginForm from "@/components/login/LoginForm";

const Login = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-[#151812] px-2 py-8 overflow-auto">
    <div className="w-full max-w-md bg-transparent flex flex-col items-center animate-fade-in">
      <Logo size={80} />
      <LoginForm />
    </div>
  </div>
);

export default Login;
