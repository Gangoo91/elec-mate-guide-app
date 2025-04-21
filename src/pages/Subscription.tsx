
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Logo from "@/components/Logo";
import MainLayout from "@/components/layout/MainLayout";
import { Loader2 } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import GlassCard from "@/components/shared/GlassCard";
import SubscriptionPlanCard from "@/components/subscription/SubscriptionPlanCard";
import BillingCycleSelector from "@/components/subscription/BillingCycleSelector";
import SubscriptionSecurityInfo from "@/components/subscription/SubscriptionSecurityInfo";
import { useSubscription, subscriptionPlans } from "@/hooks/useSubscription";

const Subscription = () => {
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const { user, session, loading: authLoading } = useAuth();
  const {
    isLoading,
    selectedPlan,
    setSelectedPlan,
    billingCycle,
    setBillingCycle,
    error,
    handleCheckout
  } = useSubscription();

  // Check authentication once when component mounts
  useEffect(() => {
    if (authLoading) return;

    if (user && session) {
      setIsCheckingAuth(false);
    } else {
      toast({
        title: "Authentication required",
        description: "Please log in to subscribe to a plan",
        variant: "destructive",
      });
      navigate("/login", { 
        state: { from: location, message: "Please log in to subscribe" } 
      });
    }
  }, [user, session, authLoading, navigate, location, toast]);

  if (isCheckingAuth || authLoading) {
    return (
      <MainLayout>
        <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center">
          <Loader2 className="h-12 w-12 text-[#FFC900] animate-spin mb-4" />
          <p className="text-[#FFC900]">Preparing subscription options...</p>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-[#151812] px-1 py-6 sm:px-3 md:px-2">
        <div className="w-full max-w-md">
          <GlassCard className="p-4 sm:p-6 md:p-10">
            <div className="flex justify-center w-full mb-6">
              <Logo size={70} />
            </div>
            
            <h1 className="text-2xl sm:text-4xl font-extrabold text-[#FFC900] text-center mb-4 leading-tight drop-shadow-[0_0_4px_rgba(255,201,0,0.5)] tracking-wide select-none">
              Start Your 7-Day Free Trial
            </h1>
            
            <p className="text-center text-gray-300 mb-3 max-w-md text-xs sm:text-base">
              Enjoy full access to all Elec-Mate features for 7 days. After your trial, your subscription starts automatically and you will be billed {billingCycle}.
            </p>

            <BillingCycleSelector 
              billingCycle={billingCycle} 
              setBillingCycle={setBillingCycle} 
              isLoading={isLoading} 
            />

            <div className="w-full my-4 space-y-2">
              {subscriptionPlans.map((plan) => (
                <SubscriptionPlanCard
                  key={plan.name}
                  name={plan.name}
                  monthlyPrice={plan.monthlyPrice}
                  yearlyPrice={plan.yearlyPrice}
                  description={plan.description}
                  isSelected={selectedPlan === plan.name}
                  billingCycle={billingCycle}
                  onSelect={() => setSelectedPlan(plan.name)}
                />
              ))}
            </div>

            <p className="text-center text-[#FFC900] font-semibold mb-6 text-xs sm:text-sm">
              Cancel anytime — no commitment, no hidden fees.
            </p>

            {error && (
              <div className="w-full p-3 mb-4 bg-red-900/20 border border-red-500/50 text-red-300 rounded-lg text-sm">
                <p className="font-semibold">Error:</p>
                <p>{error}</p>
              </div>
            )}

            <Button
              onClick={handleCheckout}
              disabled={isLoading}
              className="w-full rounded-xl bg-[#FFC900] hover:bg-[#f5bb13] text-black font-bold text-lg py-5 mt-0 mb-3 shadow-none border-none disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-lg transition-all duration-300"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <Loader2 className="animate-spin mr-2" size={20} />
                  Redirecting...
                </span>
              ) : (
                `Enter Payment Details`
              )}
            </Button>

            <SubscriptionSecurityInfo />
            
            <p className="text-[10px] sm:text-xs text-gray-400 mt-2 text-center">
              Secure payment powered by Stripe.<br />
              You can cancel, upgrade, or manage your subscription any time in your profile settings.
            </p>
          </GlassCard>
        </div>
      </div>
    </MainLayout>
  );
};

export default Subscription;
