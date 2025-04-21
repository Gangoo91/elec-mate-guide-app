
import React from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import Logo from "@/components/Logo";
import GlassCard from "@/components/shared/GlassCard";
import SubscriptionPlanCard from "@/components/subscription/SubscriptionPlanCard";
import BillingCycleSelector from "@/components/subscription/BillingCycleSelector";
import SubscriptionSecurityInfo from "@/components/subscription/SubscriptionSecurityInfo";
import { subscriptionPlans } from "@/config/subscriptionPlans";
import { useSubscription } from "@/contexts/SubscriptionContext";
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog";

const SubscriptionContent = () => {
  const {
    isLoading,
    selectedPlan,
    billingCycle,
    checkingAuth,
    error,
    setSelectedPlan,
    setBillingCycle,
    handleCheckout
  } = useSubscription();

  // Add console logs to debug the checkout process
  const handleCheckoutClick = async () => {
    console.log("Starting checkout process");
    try {
      await handleCheckout();
    } catch (err) {
      console.error("Checkout error:", err);
    }
  };

  return (
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
          onClick={handleCheckoutClick}
          disabled={isLoading || checkingAuth}
          className="w-full rounded-xl bg-[#FFC900] hover:bg-[#f5bb13] text-black font-bold text-lg py-5 mt-0 mb-3 shadow-none border-none disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-lg transition-all duration-300"
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <Loader2 className="animate-spin mr-2" size={20} />
              Redirecting...
            </span>
          ) : checkingAuth ? (
            <span className="flex items-center justify-center">
              <Loader2 className="animate-spin mr-2" size={20} />
              Checking session...
            </span>
          ) : (
            'Enter Payment Details'
          )}
        </Button>

        <SubscriptionSecurityInfo />
        
        <p className="text-[10px] sm:text-xs text-gray-400 mt-2 text-center">
          Secure payment powered by Stripe.<br />
          You can cancel, upgrade, or manage your subscription any time in your profile settings.
        </p>
        
        {/* Debug Dialog - only in development */}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" size="sm" className="mt-4 text-xs opacity-50 w-full">
              Debug Info
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md bg-black/90 border-yellow-600/30 text-yellow-500 text-xs">
            <DialogTitle>Debug Subscription Info</DialogTitle>
            <pre className="overflow-auto max-h-[70vh] p-4">
              {JSON.stringify(
                {
                  selectedPlan,
                  billingCycle,
                  isLoading,
                  checkingAuth,
                  priceId: stripePriceIds[selectedPlan]?.[billingCycle],
                  error,
                },
                null,
                2
              )}
            </pre>
          </DialogContent>
        </Dialog>
      </GlassCard>
    </div>
  );
};

import { stripePriceIds } from "@/config/subscriptionPlans";
export default SubscriptionContent;
