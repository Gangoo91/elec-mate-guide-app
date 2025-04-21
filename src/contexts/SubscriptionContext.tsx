
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { stripePriceIds } from "@/config/subscriptionPlans";

type SubscriptionContextType = {
  isLoading: boolean;
  selectedPlan: string;
  billingCycle: "monthly" | "yearly";
  checkingAuth: boolean;
  error: string | null;
  setSelectedPlan: (plan: string) => void;
  setBillingCycle: (cycle: "monthly" | "yearly") => void;
  handleCheckout: () => Promise<void>;
};

const SubscriptionContext = createContext<SubscriptionContextType | null>(null);

export const useSubscription = () => {
  const context = useContext(SubscriptionContext);
  if (!context) {
    throw new Error('useSubscription must be used within a SubscriptionProvider');
  }
  return context;
};

export const SubscriptionProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("Electrician");
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();
  const { user, session } = useAuth();

  useEffect(() => {
    setCheckingAuth(!user || !session);
    if (user && session) {
      console.log("Authenticated user:", user.email);
    }
  }, [user, session]);

  const handleCheckout = async () => {
    if (!session || !user) {
      toast({
        title: "Authentication required",
        description: "Please log in to subscribe",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setError(null);
    console.log("Starting checkout with:", {
      plan: selectedPlan,
      cycle: billingCycle,
      price_id: stripePriceIds[selectedPlan][billingCycle]
    });

    try {
      const price_id = stripePriceIds[selectedPlan][billingCycle];
      console.log("Invoking create-checkout with price_id:", price_id);
      
      const { data, error } = await supabase.functions.invoke("create-checkout", {
        body: { price_id }
      });
      
      console.log("Checkout response:", data, error);

      if (error || !data?.url) {
        throw new Error(error?.message || "Failed to create checkout session");
      }

      console.log("Redirecting to checkout:", data.url);
      window.location.href = data.url;
    } catch (error: any) {
      const errorMessage = error?.message || "Unknown error";
      console.error("Checkout error:", errorMessage);
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

  const value = {
    isLoading,
    selectedPlan,
    billingCycle,
    checkingAuth,
    error,
    setSelectedPlan,
    setBillingCycle,
    handleCheckout
  };

  return (
    <SubscriptionContext.Provider value={value}>
      {children}
    </SubscriptionContext.Provider>
  );
};
