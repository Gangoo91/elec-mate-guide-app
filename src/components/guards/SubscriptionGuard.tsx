
import React from "react";
import { useAuth } from "@/hooks/useAuth";
import { ReactNode } from "react";
import { useSubscription } from "@/hooks/useSubscription";

type SubscriptionGuardProps = {
  children: ReactNode;
  requiredTier: "Apprentice" | "Electrician";
};

export const SubscriptionGuard = ({ children, requiredTier }: SubscriptionGuardProps) => {
  const { user } = useAuth();
  const { subscription } = useSubscription();

  // Check if user has an active subscription
  const hasSubscription = subscription?.subscribed;
  
  // Check if user's subscription tier meets the required tier
  const hasSufficientTier = () => {
    if (!hasSubscription || !subscription?.subscription_tier) return false;
    
    // If the required tier is Apprentice, any subscription is sufficient
    if (requiredTier === "Apprentice") return true;
    
    // If the required tier is Electrician, only Electrician tier is sufficient
    if (requiredTier === "Electrician") {
      return subscription.subscription_tier === "Electrician";
    }
    
    return false;
  };

  // Only render children if user is authenticated and has correct subscription
  if (user && hasSubscription && hasSufficientTier()) {
    return <>{children}</>;
  }
  
  // Return null if the conditions aren't met
  return null;
};

export default SubscriptionGuard;
