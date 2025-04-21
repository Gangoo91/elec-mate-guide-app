
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import type { SubscriptionInfo } from "@/types/subscription";

export const useSubscription = () => {
  const [isChecking, setIsChecking] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [subscription, setSubscription] = useState<SubscriptionInfo | null>(null);
  const { toast } = useToast();

  const checkSubscription = async (silent = false) => {
    try {
      if (!silent) {
        setIsChecking(true);
      } else {
        setIsRefreshing(true);
      }
      
      const { data, error } = await supabase.functions.invoke("check-subscription");
      if (error) throw new Error(error.message);
      
      setSubscription(data);
      
      if (!silent && data?.subscribed) {
        toast({
          title: "Subscription active",
          description: `Your ${data.subscription_tier || 'Premium'} subscription is active`,
        });
      }
    } catch (error: any) {
      if (!silent) {
        toast({
          title: "Could not retrieve subscription",
          description: error?.message || "Please try again later",
          variant: "destructive",
        });
      }
      console.error("Error checking subscription:", error);
    } finally {
      setIsChecking(false);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    checkSubscription();

    const checkInterval = setInterval(() => {
      checkSubscription(true);
    }, 60000);

    return () => {
      clearInterval(checkInterval);
    };
  }, []);

  return {
    isChecking,
    isRefreshing,
    subscription,
    checkSubscription
  };
};
