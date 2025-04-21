
import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import type { SubscriptionInfo } from "@/types/subscription";

export const useSubscription = () => {
  const [isChecking, setIsChecking] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [subscription, setSubscription] = useState<SubscriptionInfo | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const checkSubscription = useCallback(async (silent = false) => {
    try {
      if (!silent) {
        setIsChecking(true);
      } else {
        setIsRefreshing(true);
      }
      
      // Clear any previous errors
      setError(null);
      
      // Add a timestamp parameter to avoid caching issues
      const { data, error: apiError } = await supabase.functions.invoke("check-subscription", {
        body: { timestamp: Date.now() }
      });
      
      if (apiError) throw new Error(apiError.message);
      
      setSubscription(data);
      
      if (!silent && data?.subscribed) {
        toast({
          title: "Subscription active",
          description: `Your ${data.subscription_tier || 'Premium'} subscription is active`,
        });
      }
    } catch (error: any) {
      const errorMessage = error?.message || "Please try again later";
      setError(errorMessage);
      
      if (!silent) {
        toast({
          title: "Could not retrieve subscription",
          description: errorMessage,
          variant: "destructive",
        });
      }
      console.error("Error checking subscription:", error);
    } finally {
      setIsChecking(false);
      setIsRefreshing(false);
    }
  }, [toast]);

  useEffect(() => {
    checkSubscription();

    const checkInterval = setInterval(() => {
      checkSubscription(true);
    }, 60000);

    return () => {
      clearInterval(checkInterval);
    };
  }, [checkSubscription]);

  return {
    isChecking,
    isRefreshing,
    subscription,
    error,
    checkSubscription
  };
};
