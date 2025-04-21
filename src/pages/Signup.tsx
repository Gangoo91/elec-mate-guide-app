
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "@/components/Logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear the specific error when user starts typing again
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset errors
    setErrors({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    
    // Validate inputs
    let isValid = true;
    
    if (!formData.name.trim()) {
      setErrors(prev => ({ ...prev, name: "Name is required" }));
      isValid = false;
    }
    
    if (!formData.email) {
      setErrors(prev => ({ ...prev, email: "Email is required" }));
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      setErrors(prev => ({ ...prev, email: "Please enter a valid email" }));
      isValid = false;
    }
    
    if (!formData.password) {
      setErrors(prev => ({ ...prev, password: "Password is required" }));
      isValid = false;
    } else if (formData.password.length < 8) {
      setErrors(prev => ({ ...prev, password: "Password must be at least 8 characters" }));
      isValid = false;
    }
    
    if (!formData.confirmPassword) {
      setErrors(prev => ({ ...prev, confirmPassword: "Please confirm your password" }));
      isValid = false;
    } else if (formData.password !== formData.confirmPassword) {
      setErrors(prev => ({ ...prev, confirmPassword: "Passwords do not match" }));
      isValid = false;
    }
    
    if (isValid) {
      setIsSubmitting(true);
      
      // Simulate signup (replace with actual auth when backend is ready)
      setTimeout(() => {
        setIsSubmitting(false);
        toast({
          title: "Account Created",
          description: "This would register your account when connected to a backend.",
        });
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#151812] px-2">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-transparent flex flex-col items-center relative">
        {/* Back button */}
        <button
          type="button"
          aria-label="Go back"
          className="absolute left-0 top-6 flex items-center px-2 py-2 rounded-full hover:bg-white/10 transition"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="text-[#FFC900]" size={28} />
        </button>

        <Logo size={80} />

        {/* Updated title styling with yellow color and shadow */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#FFC900] text-center mb-8 mt-6 leading-tight drop-shadow-[0_0_8px_rgba(255,201,0,0.75)] tracking-wide select-none">
          Elec-Mate
        </h1>

        <div className="w-full space-y-4 mb-6">
          <div>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="bg-[#222822]/70 border-none placeholder:text-gray-400 text-white rounded-2xl text-lg px-5 py-4 shadow"
            />
            {errors.name && <p className="text-red-400 text-sm mt-1 pl-2">{errors.name}</p>}
          </div>
          
          <div>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="bg-[#222822]/70 border-none placeholder:text-gray-400 text-white rounded-2xl text-lg px-5 py-4 shadow"
            />
            {errors.email && <p className="text-red-400 text-sm mt-1 pl-2">{errors.email}</p>}
          </div>
          
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
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
          
          <div className="relative">
            <Input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="bg-[#222822]/70 border-none placeholder:text-gray-400 text-white rounded-2xl text-lg px-5 py-4 shadow"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              aria-label={showConfirmPassword ? "Hide password" : "Show password"}
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            {errors.confirmPassword && <p className="text-red-400 text-sm mt-1 pl-2">{errors.confirmPassword}</p>}
          </div>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-2xl bg-[#FFC900] hover:bg-[#f5bb13] text-black font-bold text-lg py-3 mb-6 shadow-none border-none disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "SIGNING UP..." : "SIGN UP"}
        </Button>

        <div className="text-center text-gray-200 text-base mb-5">
          By signing up, you agree to our{" "}
          <Link
            to="/terms"
            className="font-semibold text-[#FFC900] hover:underline"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            to="/privacy"
            className="font-semibold text-[#FFC900] hover:underline"
          >
            Privacy Policy
          </Link>
          .
        </div>
        <div className="text-center text-white text-base">
          Already have an account?{" "}
          <Link to="/login" className="text-[#FFC900] font-semibold hover:underline">
            Log in
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
