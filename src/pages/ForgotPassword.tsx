
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Loader2, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    
    if (newEmail && !validateEmail(newEmail)) {
      setError("Please enter a valid email");
    } else {
      setError("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError("Email is required");
      return;
    }
    
    if (!validateEmail(email)) {
      setError("Please enter a valid email");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate password reset email (replace with actual logic when backend is ready)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Reset Email Sent",
        description: "Check your inbox for password reset instructions.",
      });
    }, 1500);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-[#151812] px-2 py-8">
      <div className="w-full max-w-md glass-morphism rounded-3xl border border-[#FFC900]/15 bg-[#151812]/40 shadow-lg flex flex-col items-center animate-fade-in p-8 md:p-10 relative">
        <Link
          to="/login"
          className="absolute left-0 top-6 flex items-center px-2 py-2 rounded-full hover:bg-white/10 transition"
          aria-label="Back to login"
        >
          <ArrowLeft className="text-[#FFC900]" size={28} />
        </Link>

        <Logo size={80} />

        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#FFC900] text-center mb-4 mt-6 leading-tight drop-shadow-[0_0_8px_rgba(255,201,0,0.75)] tracking-wide select-none">
          Reset Password
        </h1>

        {!isSubmitted ? (
          <>
            <p className="text-gray-300 mb-8 text-center">
              Enter your email address and we'll send you a link to reset your password.
            </p>

            <form onSubmit={handleSubmit} className="w-full space-y-6">
              <div className="space-y-1">
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                  aria-label="Email"
                  className={`bg-[#222822]/70 border-none placeholder:text-gray-400 text-white rounded-2xl text-lg px-5 py-4 shadow transition-all duration-300 ${error ? 'border-red-500 focus-visible:ring-red-500' : 'focus-visible:ring-[#FFC900]'}`}
                />
                {error && <p className="text-red-400 text-sm mt-1 pl-2 animate-fade-in">{error}</p>}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-2xl bg-[#FFC900] hover:bg-[#f5bb13] text-black font-bold text-lg py-6 h-auto mb-6 shadow-none border-none disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-lg transition-all duration-300"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <Loader2 className="animate-spin mr-2" size={20} />
                    SENDING...
                  </span>
                ) : (
                  "SEND RESET LINK"
                )}
              </Button>
            </form>
          </>
        ) : (
          <div className="text-center space-y-6 animate-fade-in">
            <div className="flex justify-center">
              <CheckCircle size={60} className="text-green-500" />
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-white">Email Sent!</h2>
              <p className="text-gray-300 max-w-sm">
                We've sent a password reset link to <span className="text-[#FFC900] font-semibold">{email}</span>.
                Please check your inbox and follow the instructions.
              </p>
            </div>
            <div className="pt-4">
              <p className="text-gray-400 text-sm">
                Didn't receive an email?{" "}
                <button
                  onClick={handleSubmit}
                  className="text-[#FFC900] font-semibold hover:underline"
                >
                  Resend
                </button>
              </p>
            </div>
          </div>
        )}

        <div className="mt-12 text-center text-gray-400">
          Remember your password?{" "}
          <Link to="/login" className="text-[#FFC900] font-semibold hover:underline">
            Back to login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
