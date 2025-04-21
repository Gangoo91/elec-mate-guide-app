
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Logo from "@/components/Logo";
import MainLayout from "@/components/layout/MainLayout";
import { Loader2, Lock, ShieldCheck, X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const subscriptionPlans = [
  {
    name: "Apprentice",
    price: "£3.99",
    description: "Access to all apprentice resources and training tools",
  },
  {
    name: "Electrician",
    price: "£6.99",
    description: "Access to electrician and apprentice resources",
  },
  {
    name: "Employer",
    price: "£9.99",
    description: "Full access to all platform features and resources",
  },
];

const Subscription = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("Electrician");
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("create-checkout");
      if (error) throw new Error(error.message);
      if (data?.url) {
        window.location.href = data.url;
      } else {
        throw new Error("Failed to get checkout URL");
      }
    } catch (error: any) {
      toast({
        title: "Payment initiation failed",
        description: error?.message || "Unknown error",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Optionally display a success notification if redirected from checkout
  React.useEffect(() => {
    if (location.search.includes("checkout=success")) {
      toast({
        title: "Subscription started!",
        description: "You have started your free trial. Welcome to Elec-Mate!",
        variant: "default", // Changed from "success" to "default" to fix the TypeScript error
      });
      navigate("/subscription/success", { replace: true });
    }
    if (location.search.includes("checkout=cancel")) {
      toast({
        title: "Payment was cancelled",
        description: "You can try again to enter your payment details.",
        variant: "destructive",
      });
    }
  }, [location, toast, navigate]);

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
            Enjoy full access to all Elec-Mate features for 7 days. After your trial, your subscription starts automatically and you will be billed monthly.
          </p>

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
                <div className="flex items-center gap-3">
                  <span className="font-bold text-[#FFC900]">{plan.price}<span className="text-xs font-normal">/mo</span></span>
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
              "Enter Payment Details"
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
