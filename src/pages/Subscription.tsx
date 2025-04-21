import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Logo from "@/components/Logo";
import MainLayout from "@/components/layout/MainLayout";
import { Loader2, Lock, ShieldCheck } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

const stripePriceIds: Record<string, { monthly: string; yearly: string }> = {
  Apprentice: {
    monthly: "price_1RGIaQ2RKw5t5RAmh7lzac0R",
    yearly: "price_1RGIbj2RKw5t5RAm8xkaH5I2",
  },
  Electrician: {
    monthly: "price_1RGIdw2RKw5t5RAmEWjKbGx1",
    yearly: "price_1RGId02RKw5t5RAm2iGQJ9xU",
  },
  Employer: {
    monthly: "price_1RGIgX2RKw5t5RAma3zfsmAc",
    yearly: "price_1RGIhM2RKw5t5RAmhTfWgGLO",
  },
};

const subscriptionPlans = [
  {
    name: "Apprentice",
    monthlyPrice: "£2.99",
    yearlyPrice: "£29.99",
    description: "Access to all apprentice resources and training tools",
  },
  {
    name: "Electrician",
    monthlyPrice: "£6.99",
    yearlyPrice: "£69.99",
    description: "Access to electrician and apprentice resources",
  },
  {
    name: "Employer",
    monthlyPrice: "£49.99",
    yearlyPrice: "£499.99",
    description: "Full access to all platform features and resources",
  },
];

const Subscription = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState("Electrician");
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const { user, session, loading: authLoading } = useAuth();

  useEffect(() => {
    setIsCheckingAuth(true);
    if (authLoading) return;

    if (user && session) {
      setIsAuthenticated(true);
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
      setIsCheckingAuth(false);
    }
  }, [user, session, authLoading, navigate, location, toast]);

  const handleCheckout = async () => {
    setIsLoading(true);
    setError(null);

    if (!session || !user) {
      setIsLoading(false);
      setError("You must be logged in to subscribe.");
      toast({
        title: "Authentication error",
        description: "Please log in again to continue with your subscription",
        variant: "destructive",
      });
      navigate("/login", { 
        state: { from: location, message: "Please log in to subscribe" } 
      });
      return;
    }

    try {
      const { data: { session: latestSession } } = await supabase.auth.getSession();
      if (!latestSession || !latestSession.access_token) {
        throw new Error("Session token missing or expired! Please log in again.");
      }

      const price_id = stripePriceIds[selectedPlan][billingCycle];
      console.log("Starting checkout with price ID:", price_id);

      const { data, error } = await supabase.functions.invoke("create-checkout", {
        body: { price_id },
        headers: {
          Authorization: `Bearer ${latestSession.access_token}`,
        },
      });

      if (error || !data) {
        console.error("Supabase function error:", error);
        throw new Error(error?.message || "Payment error occurred (unexpected/no data)");
      }

      if (!data.url) {
        console.error("No checkout URL returned:", data);
        throw new Error("Failed to create checkout session");
      }

      console.log("Redirecting to checkout URL:", data.url);
      window.location.href = data.url;
    } catch (error: any) {
      console.error("Checkout error:", error);
      const errorMessage = error?.message || "Unknown error";
      setError(errorMessage);
      toast({
        title: "Payment initiation failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

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
      <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-[#151812] px-2 py-8">
        <div className="w-full max-w-md glass-morphism rounded-3xl border border-[#FFC900]/15 bg-[#151812]/40 shadow-lg flex flex-col items-center animate-fade-in p-8 md:p-10">
          <div className="flex justify-center w-full mb-6">
            <Logo size={80} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#FFC900] text-center mb-4 leading-tight drop-shadow-[0_0_4px_rgba(255,201,0,0.5)] tracking-wide select-none">
            Start Your 7-Day Free Trial
          </h1>
          <p className="text-center text-gray-300 mb-3 max-w-md">
            Enjoy full access to all Elec-Mate features for 7 days. After your trial, your subscription starts automatically and you will be billed {billingCycle}.
          </p>

          <div className="flex justify-center gap-2 my-2">
            <Button
              variant={billingCycle === "monthly" ? "default" : "outline"}
              className={`rounded-full px-7 py-2 ${billingCycle === "monthly" ? "bg-[#FFC900] text-black font-bold" : "border-[#FFC900] text-[#FFC900]"}`}
              onClick={() => setBillingCycle("monthly")}
              disabled={isLoading}
            >Monthly</Button>
            <Button
              variant={billingCycle === "yearly" ? "default" : "outline"}
              className={`rounded-full px-7 py-2 ${billingCycle === "yearly" ? "bg-[#FFC900] text-black font-bold" : "border-[#FFC900] text-[#FFC900]"}`}
              onClick={() => setBillingCycle("yearly")}
              disabled={isLoading}
            >Yearly <span className="ml-1 text-xs font-semibold">(Save 17%)</span></Button>
          </div>

          <div className="w-full my-6 space-y-3">
            {subscriptionPlans.map((plan) => (
              <div 
                key={plan.name}
                onClick={() => setSelectedPlan(plan.name)}
                className={`flex items-center justify-between p-4 rounded-xl transition-all cursor-pointer ${
                  selectedPlan === plan.name 
                    ? "bg-[#FFC900]/20 border-2 border-[#FFC900]" 
                    : "bg-[#151812]/80 border border-[#FFC900]/30 hover:border-[#FFC900]/60"
                }`}
              >
                <div className="flex-1">
                  <h3 className="text-[#FFC900] font-semibold">{plan.name} Plan</h3>
                  <p className="text-sm text-[#FFC900]/70">{plan.description}</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="font-bold text-[#FFC900]">
                    {billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                    <span className="text-xs font-normal">
                      {billingCycle === "monthly" ? "/mo" : "/yr"}
                    </span>
                  </span>
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                    selectedPlan === plan.name 
                      ? "bg-[#FFC900]" 
                      : "border border-[#FFC900]/50"
                  }`}>
                    {selectedPlan === plan.name && (
                      <div className="w-2.5 h-2.5 rounded-full bg-black"></div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-[#FFC900] font-semibold mb-6">
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
            className="w-full rounded-2xl bg-[#FFC900] hover:bg-[#f5bb13] text-black font-bold text-lg py-6 h-auto mb-4 shadow-none border-none disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-lg transition-all duration-300"
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

          <div className="flex items-center w-full justify-center gap-3 mt-2 mb-3">
            <div className="flex items-center text-xs text-[#FFC900]/60">
              <Lock className="h-3 w-3 mr-1" />
              Secure payment
            </div>
            <div className="h-3 w-[1px] bg-[#FFC900]/30"></div>
            <div className="flex items-center text-xs text-[#FFC900]/60">
              <ShieldCheck className="h-3 w-3 mr-1" />
              SSL encrypted
            </div>
          </div>
          
          <p className="text-xs text-gray-400 mt-2 text-center">
            Secure payment powered by Stripe.<br />
            You can cancel, upgrade, or manage your subscription any time in your profile settings.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Subscription;
