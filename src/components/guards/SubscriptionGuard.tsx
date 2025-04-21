
import React, { useState, useEffect, ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";

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
  const { user, loading } = useAuth();
  
  // Always bypass the subscription check for now
  // This effectively disables the guard completely, allowing access to all routes
  return <>{children}</>;
  
  /* Original subscription checking code is commented out below
  
  const [loading, setLoading] = useState(true);
  const [subscription, setSubscription] = useState<SubscriptionStatus | null>(null);
  const [showToast, setShowToast] = useState(false);
  const location = useLocation();
  const { toast } = useToast();

  // Set this to true to bypass subscription checks during development
  const bypassSubscriptionCheck = true;

  useEffect(() => {
    if (bypassSubscriptionCheck) {
      setLoading(false);
      setSubscription({ subscribed: true, subscription_tier: "Employer" });
      return;
    }

    const checkSubscription = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase.functions.invoke("check-subscription");
        
        if (error) throw error;
        setSubscription(data);
      } catch (error: any) {
        console.error("Error checking subscription:", error);
        setSubscription({ subscribed: false, subscription_tier: null });
        setShowToast(true);
      } finally {
        setLoading(false);
      }
    };

    checkSubscription();
  }, []);

  // Handle toast separately to avoid React warning
  useEffect(() => {
    if (showToast) {
      toast({
        title: "Access error",
        description: "There was a problem verifying your subscription status.",
        variant: "destructive",
      });
      setShowToast(false);
    }
  }, [showToast, toast]);

  if (loading) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center">
        <Loader2 className="h-12 w-12 text-[#FFC900] animate-spin mb-4" />
        <p className="text-[#FFC900]/70">Verifying subscription...</p>
      </div>
    );
  }

  if (bypassSubscriptionCheck) {
    return <>{children}</>;
  }

  if (!subscription?.subscribed) {
    // Use local storage to prevent toast from showing on every render
    const hasShownSubscriptionToast = localStorage.getItem('hasShownSubscriptionToast');
    if (!hasShownSubscriptionToast) {
      toast({
        title: "Subscription required",
        description: "Please subscribe to access this content.",
        variant: "destructive",
      });
      localStorage.setItem('hasShownSubscriptionToast', 'true');
      // Clear this after 5 seconds to allow it to show again if needed
      setTimeout(() => localStorage.removeItem('hasShownSubscriptionToast'), 5000);
    }
    return <Navigate to="/subscription" state={{ from: location }} replace />;
  }

  const userTier = subscription.subscription_tier || "Apprentice";
  const allowedTiers = tierAccess[userTier as keyof typeof tierAccess] || [];
  
  if (!allowedTiers.includes(requiredTier)) {
    // Use local storage to prevent toast from showing on every render
    const hasShownTierToast = localStorage.getItem('hasShownTierToast');
    if (!hasShownTierToast) {
      toast({
        title: "Access denied",
        description: `Your ${userTier} subscription doesn't include access to ${requiredTier} resources. Please upgrade your plan.`,
        variant: "destructive",
      });
      localStorage.setItem('hasShownTierToast', 'true');
      // Clear this after 5 seconds to allow it to show again if needed
      setTimeout(() => localStorage.removeItem('hasShownTierToast'), 5000);
    }
    return <Navigate to="/profile" state={{ from: location }} replace />;
  }

  return <>{children}</>;
  */
};

export default SubscriptionGuard;
