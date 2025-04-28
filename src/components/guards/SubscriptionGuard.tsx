
import React, { useState, useEffect, ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";

type SubscriptionGuardProps = {
  children: ReactNode;
  requiredTier: "Apprentice" | "Electrician";
};

type SubscriptionStatus = {
  subscribed: boolean;
  subscription_tier: string | null;
};

const tierAccess = {
  Apprentice: ["Apprentice"],
  Electrician: ["Electrician", "Apprentice"],
};

export const SubscriptionGuard = ({ children, requiredTier }: SubscriptionGuardProps) => {
  const { user, loading } = useAuth();
  
  // Always bypass the subscription check for now
  // This effectively disables the guard completely, allowing access to all routes
  return <>{children}</>;
};

export default SubscriptionGuard;
