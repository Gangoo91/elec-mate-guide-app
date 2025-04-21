
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

export const subscriptionPlans = [
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

export const stripePriceIds: Record<string, { monthly: string; yearly: string }> = {
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

export const useSubscription = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("Electrician");
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const { user, session } = useAuth();

  const handleCheckout = async () => {
    if (!session || !user) {
      toast({
        title: "Authentication required",
        description: "Please log in to subscribe to a plan",
        variant: "destructive",
      });
      navigate("/login", {
        state: { from: location, message: "Please log in to subscribe" }
      });
      return;
    }

    setIsLoading(true);
    setError(null);

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

  return {
    isLoading,
    selectedPlan,
    setSelectedPlan,
    billingCycle,
    setBillingCycle,
    error,
    handleCheckout
  };
};
