
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import SignupFormFields from "@/components/signup/SignupFormFields";
import { useSignupForm } from "@/hooks/useSignupForm";
import MainLayout from "@/components/layout/MainLayout";

const Signup = () => {
  const {
    plan, email, password, confirmPassword, errors,
    handlePlanChange,
    handleEmailChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    resetErrors,
    validateAll,
    setPlan, setEmail, setPassword, setConfirmPassword
  } = useSignupForm();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  // Check for preselected plan from navigation state
  useEffect(() => {
    const state = location.state as { preselectedPlan?: string } | null;
    if (state?.preselectedPlan) {
      handlePlanChange(state.preselectedPlan);
    }
  }, [location.state]);

  const onPlanChange = (value: string) => handlePlanChange(value);
  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => handleEmailChange(e.target.value);
  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => handlePasswordChange(e.target.value);
  const onConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => handleConfirmPasswordChange(e.target.value);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    resetErrors();

    if (!validateAll()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Special message for tutor signups
    const isTutor = plan === "tutor";
    
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { plan }
      }
    });
    
    // If user signed up as a tutor, create an entry in tutor_approvals table
    if (data?.user && isTutor) {
      try {
        await supabase
          .from('tutor_approvals')
          .insert({
            user_id: data.user.id,
            is_approved: false
          });
      } catch (err) {
        console.error("Error creating tutor approval record:", err);
      }
    }
    
    setIsSubmitting(false);

    if (error) {
      toast({
        title: "Signup Failed",
        description: error.message,
        variant: "destructive",
      });
      return;
    }

    if (isTutor) {
      toast({
        title: "Tutor Signup Successful",
        description: "Your tutor account has been created. Please check your email for confirmation and email your tutor credentials to complete the approval process.",
      });
    } else {
      toast({
        title: "Signup Successful",
        description: "Check your email to confirm your account.",
      });
    }
    
    // Navigate to appropriate page
    if (isTutor) {
      navigate("/tutors"); // Direct tutors to tutor page where they'll see approval pending
    } else {
      navigate("/subscription"); // Others go to subscription page
    }
  };

  return (
    <MainLayout>
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-[#151812] px-2 py-8">
        <div className="w-full max-w-md glass-morphism rounded-3xl border border-[#FFC900]/15 bg-[#151812]/40 shadow-lg flex flex-col items-center animate-fade-in p-8 md:p-10">
          <div className="flex justify-center w-full">
            <Logo size={80} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#FFC900] text-center mb-8 mt-6 leading-tight drop-shadow-[0_0_4px_rgba(255,201,0,0.5)] tracking-wide select-none">
            Create Your Account
          </h1>

          <form onSubmit={handleSubmit} className="w-full space-y-6">
            <SignupFormFields
              plan={plan}
              email={email}
              password={password}
              confirmPassword={confirmPassword}
              errors={errors}
              onPlanChange={onPlanChange}
              onEmailChange={onEmailChange}
              onPasswordChange={onPasswordChange}
              onConfirmPasswordChange={onConfirmPasswordChange}
            />

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
    </MainLayout>
  );
};

export default Signup;
