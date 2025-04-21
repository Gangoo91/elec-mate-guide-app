import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "@/components/Logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "", confirmPassword: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (!value.trim()) {
      setErrors(prev => ({ ...prev, email: "Email is required" }));
    } else if (!validateEmail(value)) {
      setErrors(prev => ({ ...prev, email: "Please enter a valid email" }));
    } else {
      setErrors(prev => ({ ...prev, email: "" }));
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    if (!value.trim()) {
      setErrors(prev => ({ ...prev, password: "Password is required" }));
    } else if (value.length < 8) {
      setErrors(prev => ({ ...prev, password: "Password must be at least 8 characters" }));
    } else {
      setErrors(prev => ({ ...prev, password: "" }));
    }
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setConfirmPassword(value);
    if (value !== password) {
      setErrors(prev => ({ ...prev, confirmPassword: "Passwords do not match" }));
    } else {
      setErrors(prev => ({ ...prev, confirmPassword: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Reset errors
    setErrors({ email: "", password: "", confirmPassword: "" });

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

    if (confirmPassword !== password) {
      setErrors(prev => ({ ...prev, confirmPassword: "Passwords do not match" }));
      isValid = false;
    }

    if (isValid) {
      setIsSubmitting(true);

      // Simulate signup process (replace with real backend call)
      setTimeout(() => {
        setIsSubmitting(false);
        toast({
          title: "Signup Successful",
          description: "Your account has been created 🎉",
        });
        navigate("/dashboard"); // Redirect to the dashboard after successful signup
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#151812] px-2 py-8 overflow-auto">
      <div className="w-full max-w-md bg-transparent flex flex-col items-center animate-fade-in">
        {/* Logo placed prominently */}
        <Logo size={80} />
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#FFC900] text-center mb-8 mt-6 leading-tight drop-shadow-[0_0_8px_rgba(255,201,0,0.75)] tracking-wide select-none">
          Create Your Account
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
                className={`bg-[#222822]/70 border-none placeholder:text-gray-400 text-white rounded-2xl text-lg px-5 py-4 shadow transition-all duration-300 ${
                  errors.email ? "border-red-500 focus-visible:ring-red-500" : "focus-visible:ring-[#FFC900]"
                }`}
              />
              {errors.email && <p className="text-red-400 text-sm mt-1 pl-2 animate-fade-in">{errors.email}</p>}
            </div>

            <div className="space-y-1">
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                aria-label="Password"
                className={`bg-[#222822]/70 border-none placeholder:text-gray-400 text-white rounded-2xl text-lg px-5 py-4 shadow transition-all duration-300 ${
                  errors.password ? "border-red-500 focus-visible:ring-red-500" : "focus-visible:ring-[#FFC900]"
                }`}
              />
              {errors.password && <p className="text-red-400 text-sm mt-1 pl-2 animate-fade-in">{errors.password}</p>}
            </div>

            <div className="space-y-1">
              <Input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                aria-label="Confirm Password"
                className={`bg-[#222822]/70 border-none placeholder:text-gray-400 text-white rounded-2xl text-lg px-5 py-4 shadow transition-all duration-300 ${
                  errors.confirmPassword ? "border-red-500 focus-visible:ring-red-500" : "focus-visible:ring-[#FFC900]"
                }`}
              />
              {errors.confirmPassword && (
                <p className="text-red-400 text-sm mt-1 pl-2 animate-fade-in">{errors.confirmPassword}</p>
              )}
            </div>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-2xl bg-[#FFC900] hover:bg-[#f5bb13] text-black font-bold text-lg py-6 h-auto mb-4 shadow-none border-none disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-lg transition-all duration-300"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <Loader2 className="animate-spin mr-2" size={20} />
                CREATING ACCOUNT...
              </span>
            ) : (
              "SIGN UP"
            )}
          </Button>

          <div className="mt-8 text-center text-white text-base">
            Already have an account?<br />
            <Link to="/login" className="text-[#FFC900] font-semibold hover:underline">
              Log In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
