
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { stripePriceIds } from "@/config/subscriptionPlans";
import { useNavigate } from 'react-router-dom';

type SubscriptionContextType = {
  isLoading: boolean;
  selectedPlan: string;
  billingCycle: "monthly" | "yearly";
  checkingAuth: boolean;
  error: string | null;
  lastResponse: any; // For debugging
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
  const [checkingAuth, setCheckingAuth] = useState(false); // Changed from true to avoid blocking render
  const [error, setError] = useState<string | null>(null);
  const [lastResponse, setLastResponse] = useState<any>(null);
  const { toast } = useToast();
  const { user, session } = useAuth();
  const navigate = useNavigate();

  // Handle auth state changes with error handling
  useEffect(() => {
    try {
      // Only mark as checking if we need to
      if (!user || !session) {
        setCheckingAuth(true);
      } else {
        setCheckingAuth(false);
        console.log("Authenticated user:", user.email);
      }
    } catch (err) {
      console.error("Auth check error:", err);
      setCheckingAuth(false); // Ensure we don't block rendering on error
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
    
    try {
      // Get the price ID for the selected plan
      const price_id = stripePriceIds[selectedPlan][billingCycle];
      
      console.log("Starting checkout with:", {
        plan: selectedPlan,
        cycle: billingCycle,
        price_id: price_id
      });
      
      // Validate price_id exists
      if (!price_id) {
        throw new Error(`Invalid price ID for ${selectedPlan} (${billingCycle})`);
      }
      
      // Add timestamp to log for tracking timing issues
      console.log(`Invoking create-checkout with price_id: ${price_id} at ${new Date().toISOString()}`);
      
      // Call the edge function with the price_id
      const { data, error: functionError } = await supabase.functions.invoke("create-checkout", {
        body: { 
          price_id,
          success_url: `${window.location.origin}/subscription/success` // Ensure proper success URL
        }
      });
      
      // Store full response for debugging
      setLastResponse({
        timestamp: new Date().toISOString(),
        data,
        error: functionError
      });
      
      console.log("Checkout response:", data, functionError);

      if (functionError) {
        throw new Error(functionError?.message || "Failed to create checkout session");
      }

      if (!data || !data.url) {
        throw new Error("No checkout URL returned from server");
      }

      console.log(`Redirecting to checkout: ${data.url}`);
      
      // Try opening checkout in the same window (more reliable)
      window.location.href = data.url;
      
    } catch (error: any) {
      const errorMessage = error?.message || "Unknown error";
      console.error("Checkout error:", errorMessage);
      setError(errorMessage);
      setLastResponse({ 
        timestamp: new Date().toISOString(), 
        error: errorMessage,
        errorStack: error?.stack 
      });
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
    lastResponse,
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
