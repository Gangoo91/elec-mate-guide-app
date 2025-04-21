
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "@/components/Logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Eye, EyeOff, Github, Loader2 } from "lucide-react";
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
  const [passwordStrength, setPasswordStrength] = useState(0);
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Calculate password strength
  useEffect(() => {
    const password = formData.password;
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    
    setPasswordStrength(strength);
  }, [formData.password]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    validateField(name, value);
  };

  const validateField = (name: string, value: string) => {
    // Clear the specific error when user starts typing again
    switch (name) {
      case "name":
        if (!value.trim()) {
          setErrors(prev => ({ ...prev, name: "Name is required" }));
        } else {
          setErrors(prev => ({ ...prev, name: "" }));
        }
        break;
        
      case "email":
        if (!value) {
          setErrors(prev => ({ ...prev, email: "Email is required" }));
        } else if (!validateEmail(value)) {
          setErrors(prev => ({ ...prev, email: "Please enter a valid email" }));
        } else {
          setErrors(prev => ({ ...prev, email: "" }));
        }
        break;
        
      case "password":
        if (!value) {
          setErrors(prev => ({ ...prev, password: "Password is required" }));
        } else if (value.length < 8) {
          setErrors(prev => ({ ...prev, password: "Password must be at least 8 characters" }));
        } else {
          setErrors(prev => ({ ...prev, password: "" }));
        }
        
        // Also check confirm password match if it has been entered
        if (formData.confirmPassword && value !== formData.confirmPassword) {
          setErrors(prev => ({ ...prev, confirmPassword: "Passwords do not match" }));
        } else if (formData.confirmPassword) {
          setErrors(prev => ({ ...prev, confirmPassword: "" }));
        }
        break;
        
      case "confirmPassword":
        if (!value) {
          setErrors(prev => ({ ...prev, confirmPassword: "Please confirm your password" }));
        } else if (value !== formData.password) {
          setErrors(prev => ({ ...prev, confirmPassword: "Passwords do not match" }));
        } else {
          setErrors(prev => ({ ...prev, confirmPassword: "" }));
        }
        break;
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
    
    // Validate all fields
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
          title: "Account Created Successfully",
          description: "Welcome to Elec-Mate! Your account has been created.",
        });
        
        // Redirect to login after successful signup
        setTimeout(() => navigate("/login"), 1500);
      }, 1500);
    }
  };

  const handleSocialSignup = (provider: string) => {
    // Would normally integrate with OAuth provider
    toast({
      title: `${provider} Signup`,
      description: `${provider} authentication would be implemented here.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#151812] px-2 py-8 overflow-auto">
      <div className="w-full max-w-md bg-transparent flex flex-col items-center relative animate-fade-in">
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

        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#FFC900] text-center mb-8 mt-6 leading-tight drop-shadow-[0_0_8px_rgba(255,201,0,0.75)] tracking-wide select-none">
          Elec-Mate
        </h1>

        <form onSubmit={handleSubmit} className="w-full space-y-5">
          <div className="space-y-4">
            <div className="space-y-1">
              <Input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className={`bg-[#222822]/70 border-none placeholder:text-gray-400 text-white rounded-2xl text-lg px-5 py-4 shadow transition-all duration-300 ${errors.name ? 'border-red-500 focus-visible:ring-red-500' : 'focus-visible:ring-[#FFC900]'}`}
              />
              {errors.name && <p className="text-red-400 text-sm mt-1 pl-2 animate-fade-in">{errors.name}</p>}
            </div>
            
            <div className="space-y-1">
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={`bg-[#222822]/70 border-none placeholder:text-gray-400 text-white rounded-2xl text-lg px-5 py-4 shadow transition-all duration-300 ${errors.email ? 'border-red-500 focus-visible:ring-red-500' : 'focus-visible:ring-[#FFC900]'}`}
              />
              {errors.email && <p className="text-red-400 text-sm mt-1 pl-2 animate-fade-in">{errors.email}</p>}
            </div>
            
            <div className="space-y-2">
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
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
              {errors.password && <p className="text-red-400 text-sm mt-1 pl-2 animate-fade-in">{errors.password}</p>}
              
              {/* Password strength indicator */}
              {formData.password && (
                <div className="space-y-1">
                  <div className="flex gap-1">
                    <div className={`h-1 flex-1 rounded-full ${passwordStrength >= 1 ? 'bg-red-500' : 'bg-gray-700'}`}></div>
                    <div className={`h-1 flex-1 rounded-full ${passwordStrength >= 2 ? 'bg-yellow-500' : 'bg-gray-700'}`}></div>
                    <div className={`h-1 flex-1 rounded-full ${passwordStrength >= 3 ? 'bg-green-500' : 'bg-gray-700'}`}></div>
                    <div className={`h-1 flex-1 rounded-full ${passwordStrength >= 4 ? 'bg-green-600' : 'bg-gray-700'}`}></div>
                  </div>
                  <p className="text-xs text-gray-400">
                    {passwordStrength === 0 && "Very weak password"}
                    {passwordStrength === 1 && "Weak password"}
                    {passwordStrength === 2 && "Medium password"}
                    {passwordStrength === 3 && "Strong password"}
                    {passwordStrength === 4 && "Very strong password"}
                  </p>
                </div>
              )}
            </div>
            
            <div className="space-y-1">
              <div className="relative">
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`bg-[#222822]/70 border-none placeholder:text-gray-400 text-white rounded-2xl text-lg px-5 py-4 shadow transition-all duration-300 ${errors.confirmPassword ? 'border-red-500 focus-visible:ring-red-500' : 'focus-visible:ring-[#FFC900]'}`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white focus:outline-none focus:text-white transition-colors"
                  aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.confirmPassword && <p className="text-red-400 text-sm mt-1 pl-2 animate-fade-in">{errors.confirmPassword}</p>}
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
                SIGNING UP...
              </span>
            ) : (
              "SIGN UP"
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

          <div className="grid grid-cols-2 gap-4 mb-4">
            <Button 
              type="button"
              onClick={() => handleSocialSignup("Google")}
              variant="outline"
              className="bg-transparent border border-gray-600 hover:bg-gray-800 text-white"
            >
              <img src="/lovable-uploads/photo-1573804633927-bfcbcd909acd" alt="Google" className="w-5 h-5 mr-2" />
              Google
            </Button>
            <Button 
              type="button"
              onClick={() => handleSocialSignup("GitHub")}
              variant="outline"
              className="bg-transparent border border-gray-600 hover:bg-gray-800 text-white"
            >
              <Github size={20} className="mr-2" />
              GitHub
            </Button>
          </div>

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
    </div>
  );
};

export default Signup;
