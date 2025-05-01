
import React from "react";
import { useAuth } from "@/hooks/useAuth";

type SubscriptionGuardProps = {
  children: ReactNode;
  requiredTier: "Apprentice" | "Electrician";
};

export const SubscriptionGuard = ({ children }: SubscriptionGuardProps) => {
  // Always bypass the subscription check
  // This effectively disables the guard completely, allowing access to all routes
  return <>{children}</>;
};

export default SubscriptionGuard;
