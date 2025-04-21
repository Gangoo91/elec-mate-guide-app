
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset errors
    setErrors({ email: "", password: "" });
    
    // Validate inputs
    let isValid = true;
    
    if (!email) {
      setErrors(prev => ({ ...prev, email: "Email is required" }));
      isValid = false;
    } else if (!validateEmail(email)) {
      setErrors(prev => ({ ...prev, email: "Please enter a valid email" }));
      isValid = false;
    }
    
    if (!password) {
      setErrors(prev => ({ ...prev, password: "Password is required" }));
      isValid = false;
    }
    
    if (isValid) {
      setIsSubmitting(true);
      
      // Simulate authentication (replace with actual auth when backend is ready)
      setTimeout(() => {
        setIsSubmitting(false);
        toast({
          title: "Login Attempted",
          description: "This would connect to your authentication service.",
        });
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#151812] px-2">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-transparent flex flex-col items-center">
        <Logo size={80} />
        {/* Updated title styling with yellow color and shadow, similar to Signup */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#FFC900] text-center mb-8 mt-6 leading-tight drop-shadow-[0_0_8px_rgba(255,201,0,0.75)] tracking-wide select-none">
          Elec-Mate
        </h1>
        <div className="w-full space-y-4 mb-6">
          <div>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email"
              className="bg-[#222822]/70 border-none placeholder:text-gray-400 text-white rounded-2xl text-lg px-5 py-4 shadow"
            />
            {errors.email && <p className="text-red-400 text-sm mt-1 pl-2">{errors.email}</p>}
          </div>
          
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-label="Password"
              className="bg-[#222822]/70 border-none placeholder:text-gray-400 text-white rounded-2xl text-lg px-5 py-4 shadow"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            {errors.password && <p className="text-red-400 text-sm mt-1 pl-2">{errors.password}</p>}
          </div>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-2xl bg-[#FFC900] hover:bg-[#f5bb13] text-black font-bold text-lg py-3 mb-6 shadow-none border-none disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "LOGGING IN..." : "LOG IN"}
        </Button>

        <div className="w-full text-center">
          <Link
            to="/forgot-password"
            className="text-[#FFC900] font-semibold hover:underline text-base"
          >
            Forgot password?
          </Link>
        </div>

        <div className="mt-20 text-center text-white text-base">
          Don't have an account?<br />
          <Link to="/signup" className="text-[#FFC900] font-semibold hover:underline">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
