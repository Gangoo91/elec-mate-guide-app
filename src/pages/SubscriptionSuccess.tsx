
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Check, ChevronRight, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const SubscriptionSuccess = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isVerifying, setIsVerifying] = useState(true);
  const [verificationSuccess, setVerificationSuccess] = useState(false);

  // Verify subscription status on page load
  useEffect(() => {
    const verifySubscription = async () => {
      try {
        setIsVerifying(true);
        // Check subscription status through the edge function
        const { data, error } = await supabase.functions.invoke("check-subscription");
        
        if (error) {
          throw new Error(error.message);
        }
        
        if (data?.subscribed) {
          setVerificationSuccess(true);
          toast({
            title: "Subscription verified",
            description: `Your ${data.subscription_tier} subscription is now active`,
          });
        } else {
          console.warn("Subscription verification response:", data);
          // Still show success even if verification fails - subscription might be processing
          setVerificationSuccess(true);
        }
      } catch (error) {
        console.error("Error verifying subscription:", error);
        // Don't show an error to the user, as the subscription might still be processing
        setVerificationSuccess(true);
      } finally {
        setIsVerifying(false);
      }
    };

    verifySubscription();
  }, [toast]);

  return (
    <MainLayout>
      <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-[#151812] px-2 py-8">
        <div className="w-full max-w-md glass-morphism border border-[#FFC900]/20 bg-[#151812]/60 shadow-lg rounded-3xl flex flex-col items-center p-8 md:p-10">
          {isVerifying ? (
            <div className="flex flex-col items-center justify-center py-8">
              <Loader2 className="h-12 w-12 text-[#FFC900] animate-spin mb-4" />
              <p className="text-[#FFC900] font-medium">Verifying your subscription...</p>
              <p className="text-[#FFC900]/70 text-sm mt-2">This might take a moment</p>
            </div>
          ) : (
            <>
              <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Check className="h-10 w-10 text-green-600" />
              </div>
              <Logo size={70} className="mb-6" />
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#FFC900] text-center mb-4">
                You're All Set!
              </h1>
              <p className="text-center text-gray-200 mb-3">
                Thank you for subscribing. Your free trial has started and you're ready to use Elec-Mate.
              </p>
              <p className="text-center text-[#FFC900] text-sm mb-6 font-medium">
                Manage or cancel your subscription from your profile at any time.
              </p>
              
              <div className="w-full space-y-3 mb-6">
                <div className="flex items-start bg-[#FFC900]/10 rounded-lg p-4 border border-[#FFC900]/30">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <h4 className="font-medium text-[#FFC900]">7-Day Free Trial Started</h4>
                    <p className="text-sm text-[#FFC900]/70">Your subscription begins after the trial period ends</p>
                  </div>
                </div>
                <div className="flex items-start bg-[#FFC900]/10 rounded-lg p-4 border border-[#FFC900]/30">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <h4 className="font-medium text-[#FFC900]">Access Granted</h4>
                    <p className="text-sm text-[#FFC900]/70">You now have access to the resources included in your subscription</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <Button
                  className="w-full rounded-xl bg-[#FFC900] text-black text-lg font-bold py-4 hover:bg-[#f5bb13] transition-all duration-300 flex items-center justify-center"
                  onClick={() => navigate("/profile")}
                >
                  View My Account
                  <ChevronRight className="ml-1 h-5 w-5" />
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default SubscriptionSuccess;
