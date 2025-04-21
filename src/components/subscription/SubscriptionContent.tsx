
import React, { useState, useEffect } from "react";
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
import { stripePriceIds } from "@/config/subscriptionPlans";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

const SubscriptionContent = () => {
  const {
    isLoading,
    selectedPlan,
    billingCycle,
    checkingAuth,
    error,
    lastResponse,
    setSelectedPlan,
    setBillingCycle,
    handleCheckout
  } = useSubscription();

  const [stripeDebugInfo, setStripeDebugInfo] = useState<any>(null);
  const [checkoutAttempts, setCheckoutAttempts] = useState(0);
  const [showDirectLink, setShowDirectLink] = useState(false);

  useEffect(() => {
    // Only show direct link option if we've had multiple attempts
    if (checkoutAttempts > 1 && lastResponse?.data?.url) {
      setShowDirectLink(true);
    }
  }, [checkoutAttempts, lastResponse]);

  // Add comprehensive logging to the checkout process
  const handleCheckoutClick = async () => {
    console.log("Starting checkout process");
    console.log("Selected Plan:", selectedPlan);
    console.log("Billing Cycle:", billingCycle);
    const priceId = stripePriceIds[selectedPlan][billingCycle];
    console.log("Price ID:", priceId);
    
    // Store debug info
    setStripeDebugInfo({
      timestamp: new Date().toISOString(),
      plan: selectedPlan,
      cycle: billingCycle,
      priceId: priceId,
      sessionInfo: { 
        user: "authenticated", 
        status: "starting checkout",
        checkoutAttempt: checkoutAttempts + 1
      }
    });
    
    // Track number of attempts
    setCheckoutAttempts(prev => prev + 1);
    
    try {
      await handleCheckout();
    } catch (err) {
      console.error("Detailed Checkout Error:", err);
      setStripeDebugInfo(prev => ({
        ...prev,
        error: err instanceof Error ? err.message : String(err),
        errorTimestamp: new Date().toISOString()
      }));
    }
  };

  // Handle direct link click
  const handleDirectLinkClick = () => {
    if (lastResponse?.data?.url) {
      window.open(lastResponse.data.url, '_blank');
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
          <Alert variant="destructive" className="mb-4 bg-red-900/20 border border-red-500/50 text-red-300">
            <AlertTitle>Error:</AlertTitle>
            <AlertDescription className="text-sm">{error}</AlertDescription>
            {showDirectLink && lastResponse?.data?.url && (
              <div className="mt-3">
                <Button 
                  size="sm" 
                  variant="outline" 
                  onClick={handleDirectLinkClick}
                  className="w-full border-red-500/50 hover:border-red-500 hover:bg-red-900/30"
                >
                  Try Direct Link to Checkout
                </Button>
              </div>
            )}
          </Alert>
        )}

        <Button
          onClick={handleCheckoutClick}
          disabled={isLoading || checkingAuth}
          className="w-full rounded-xl bg-[#FFC900] hover:bg-[#f5bb13] text-black font-bold text-lg py-5 mt-0 mb-3 shadow-none border-none disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-lg transition-all duration-300"
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <Loader2 className="animate-spin mr-2" size={20} />
              Redirecting to Stripe...
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
        
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" size="sm" className="mt-4 text-xs opacity-50 w-full">
              Checkout Debug Info
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md bg-black/90 border-yellow-600/30 text-yellow-500 text-xs">
            <DialogTitle>Checkout Debug Information</DialogTitle>
            <div className="space-y-2 overflow-auto max-h-[400px]">
              <div>
                <strong>Selected Plan:</strong> {selectedPlan}
              </div>
              <div>
                <strong>Billing Cycle:</strong> {billingCycle}
              </div>
              <div>
                <strong>Price ID:</strong> {stripePriceIds[selectedPlan][billingCycle]}
              </div>
              <div>
                <strong>Loading State:</strong> {isLoading ? 'Yes' : 'No'}
              </div>
              <div>
                <strong>Checking Auth:</strong> {checkingAuth ? 'Yes' : 'No'}
              </div>
              <div>
                <strong>Checkout Attempts:</strong> {checkoutAttempts}
              </div>
              {error && (
                <div>
                  <strong>Error:</strong> {error}
                </div>
              )}
              {stripeDebugInfo && (
                <>
                  <div className="mt-4 pt-2 border-t border-yellow-600/30">
                    <strong>Last Checkout Attempt:</strong>
                  </div>
                  <pre className="text-[10px] overflow-auto max-h-[150px] p-2 bg-black/50 rounded border border-yellow-600/20">
                    {JSON.stringify(stripeDebugInfo, null, 2)}
                  </pre>
                </>
              )}
              {lastResponse && (
                <>
                  <div className="mt-4 pt-2 border-t border-yellow-600/30">
                    <strong>Last API Response:</strong>
                  </div>
                  <pre className="text-[10px] overflow-auto max-h-[150px] p-2 bg-black/50 rounded border border-yellow-600/20">
                    {JSON.stringify(lastResponse, null, 2)}
                  </pre>
                </>
              )}
              <div className="mt-4 pt-2 border-t border-yellow-600/30">
                <strong>Browser Information:</strong>
              </div>
              <div>
                <strong>User Agent:</strong> {navigator.userAgent}
              </div>
              <div>
                <strong>Platform:</strong> {navigator.platform}
              </div>
              <div>
                <strong>Languages:</strong> {navigator.languages?.join(', ')}
              </div>
              <div>
                <strong>Cookies Enabled:</strong> {navigator.cookieEnabled ? 'Yes' : 'No'}
              </div>
              <div>
                <strong>Online:</strong> {navigator.onLine ? 'Yes' : 'No'}
              </div>
              <div>
                <strong>Screen Size:</strong> {window.innerWidth}x{window.innerHeight}
              </div>
              <div>
                <strong>Current URL:</strong> {window.location.href}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </GlassCard>
    </div>
  );
};

export default SubscriptionContent;
