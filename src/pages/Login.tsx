import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Github, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberedEmail");
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }
  }, []);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    
    if (!newEmail.trim()) {
      setErrors(prev => ({ ...prev, email: "Email is required" }));
    } else if (!validateEmail(newEmail)) {
      setErrors(prev => ({ ...prev, email: "Please enter a valid email" }));
    } else {
      setErrors(prev => ({ ...prev, email: "" }));
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    
    if (!newPassword.trim()) {
      setErrors(prev => ({ ...prev, password: "Password is required" }));
    } else if (newPassword.length < 8) {
      setErrors(prev => ({ ...prev, password: "Password must be at least 8 characters" }));
    } else {
      setErrors(prev => ({ ...prev, password: "" }));
    }
  };

  const handleRememberMeChange = (checked: boolean) => {
    setRememberMe(checked);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    setErrors({ email: "", password: "" });
    
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
    } else if (password.length < 8) {
      setErrors(prev => ({ ...prev, password: "Password must be at least 8 characters" }));
      isValid = false;
    }
    
    if (isValid) {
      setIsSubmitting(true);
      
      if (rememberMe) {
        localStorage.setItem("rememberedEmail", email);
      } else {
        localStorage.removeItem("rememberedEmail");
      }
      
      setTimeout(() => {
        setIsSubmitting(false);
        toast({
          title: "Login Successful",
          description: "Welcome back to Elec-Mate!",
        });
      }, 1500);
    }
  };

  const handleSocialLogin = (provider: string) => {
    toast({
      title: `${provider} Login`,
      description: `${provider} authentication would be implemented here.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#151812] px-2 py-8 overflow-auto">
      <div className="w-full max-w-md bg-transparent flex flex-col items-center animate-fade-in">
        <Logo size={80} />
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#FFC900] text-center mb-8 mt-6 leading-tight drop-shadow-[0_0_8px_rgba(255,201,0,0.75)] tracking-wide select-none">
          Elec-Mate
        </h1>
        
        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <div className="space-y-4">
            <div className="space-y-1">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                aria-label="Email"
                className={`bg-[#222822]/70 border-none placeholder:text-gray-400 text-white rounded-2xl text-lg px-5 py-4 shadow transition-all duration-300 ${errors.email ? 'border-red-500 focus-visible:ring-red-500' : 'focus-visible:ring-[#FFC900]'}`}
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1 pl-2 animate-fade-in">
                  {errors.email}
                </p>
              )}
            </div>
            
            <div className="space-y-1">
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  aria-label="Password"
                  className={`bg-[#222822]/70 border-none placeholder:text-gray-400 text-white rounded-2xl text-lg px-5 py-4 shadow transition-all duration-300 ${errors.password ? 'border-red-500 focus-visible:ring-red-500' : 'focus-visible:ring-[#FFC900]'}`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white focus:outline-none focus:text-white transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-400 text-sm mt-1 pl-2 animate-fade-in">
                  {errors.password}
                </p>
              )}
            </div>
          </div>
          
          <div className="flex items-center">
            <Checkbox 
              id="remember-me" 
              checked={rememberMe}
              onCheckedChange={handleRememberMeChange}
              className="border-[#FFC900] data-[state=checked]:bg-[#FFC900] data-[state=checked]:text-black"
            />
            <label 
              htmlFor="remember-me" 
              className="ml-2 text-gray-300 cursor-pointer select-none text-sm"
            >
              Remember me
            </label>
            
            <Link
              to="/forgot-password"
              className="text-[#FFC900] font-semibold hover:underline ml-auto text-sm"
            >
              Forgot password?
            </Link>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-2xl bg-[#FFC900] hover:bg-[#f5bb13] text-black font-bold text-lg py-6 h-auto mb-4 shadow-none border-none disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-lg transition-all duration-300"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <Loader2 className="animate-spin mr-2" size={20} />
                LOGGING IN...
              </span>
            ) : (
              "LOG IN"
            )}
          </Button>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-600" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-[#151812] px-2 text-gray-400">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <Button 
              type="button"
              onClick={() => handleSocialLogin("Google")}
              variant="outline"
              className="bg-transparent border border-gray-600 hover:bg-gray-800 text-white"
            >
              <img src="/lovable-uploads/photo-1573804633927-bfcbcd909acd" alt="Google" className="w-5 h-5 mr-2" />
              Google
            </Button>
            <Button 
              type="button"
              onClick={() => handleSocialLogin("GitHub")}
              variant="outline"
              className="bg-transparent border border-gray-600 hover:bg-gray-800 text-white"
            >
              <Github size={20} className="mr-2" />
              GitHub
            </Button>
          </div>
        </form>

        <div className="mt-8 text-center text-white text-base">
          Don't have an account?<br />
          <Link to="/signup" className="text-[#FFC900] font-semibold hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
