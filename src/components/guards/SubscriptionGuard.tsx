
import React, { useState, useEffect, ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type SubscriptionGuardProps = {
  children: ReactNode;
  requiredTier: "Apprentice" | "Electrician" | "Employer";
};

type SubscriptionStatus = {
  subscribed: boolean;
  subscription_tier: string | null;
};

const tierAccess = {
  Apprentice: ["Apprentice"],
  Electrician: ["Electrician", "Apprentice"],
  Employer: ["Employer", "Electrician", "Apprentice"],
};

export const SubscriptionGuard = ({ children, requiredTier }: SubscriptionGuardProps) => {
  const [loading, setLoading] = useState(true);
  const [subscription, setSubscription] = useState<SubscriptionStatus | null>(null);
  const location = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    const checkSubscription = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase.functions.invoke("check-subscription");
        
        if (error) throw error;
        setSubscription(data);
      } catch (error: any) {
        console.error("Error checking subscription:", error);
        toast({
          title: "Access error",
          description: "There was a problem verifying your subscription status.",
          variant: "destructive",
        });
        setSubscription({ subscribed: false, subscription_tier: null });
      } finally {
        setLoading(false);
      }
    };

    checkSubscription();
  }, [toast]);

  if (loading) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center">
        <Loader2 className="h-12 w-12 text-[#FFC900] animate-spin mb-4" />
        <p className="text-[#FFC900]/70">Verifying subscription...</p>
      </div>
    );
  }

  // Check if user has an active subscription
  if (!subscription?.subscribed) {
    toast({
      title: "Subscription required",
      description: "Please subscribe to access this content.",
      variant: "destructive",
    });
    return <Navigate to="/subscription" state={{ from: location }} replace />;
  }

  // Check if user's tier has access to the required tier
  const userTier = subscription.subscription_tier || "Apprentice";
  const allowedTiers = tierAccess[userTier as keyof typeof tierAccess] || [];
  
  if (!allowedTiers.includes(requiredTier)) {
    toast({
      title: "Access denied",
      description: `Your ${userTier} subscription doesn't include access to ${requiredTier} resources. Please upgrade your plan.`,
      variant: "destructive",
    });
    return <Navigate to="/profile" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default SubscriptionGuard;
