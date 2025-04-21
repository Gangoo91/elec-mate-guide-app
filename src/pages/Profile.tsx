import React, { useState, useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, CreditCard, Calendar, ShieldCheck, RefreshCcw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Badge } from "@/components/ui/badge";

type SubscriptionInfo = {
  subscribed: boolean;
  subscription_tier: string | null;
  subscription_end: string | null;
  price_id: string | null;
  billing_period: string | null;
};

const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isManaging, setIsManaging] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [subscription, setSubscription] = useState<SubscriptionInfo | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    checkSubscription();

    const checkInterval = setInterval(() => {
      checkSubscription(true);
    }, 60000);

    return () => {
      clearInterval(checkInterval);
    };
  }, []);

  const checkSubscription = async (silent = false) => {
    try {
      if (!silent) {
        setIsChecking(true);
      } else {
        setIsRefreshing(true);
      }
      
      const { data, error } = await supabase.functions.invoke("check-subscription");
      if (error) throw new Error(error.message);
      
      console.log("Subscription status:", data);
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

  const handleManualRefresh = () => {
    checkSubscription();
  };

  const handleManageSubscription = async () => {
    setIsManaging(true);
    try {
      const { data, error } = await supabase.functions.invoke("customer-portal");
      
      if (error) {
        throw new Error(error.message);
      }
      
      if (data?.url) {
        window.location.href = data.url;
      } else {
        throw new Error("Failed to get customer portal URL");
      }
    } catch (error: any) {
      toast({
        title: "Could not access subscription management",
        description: error?.message || "Please try again later",
        variant: "destructive",
      });
      setIsManaging(false);
    }
  };

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return "N/A";
    return new Date(dateStr).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <MainLayout>
      <div className="container max-w-4xl px-4 py-12">
        <h1 className="text-3xl font-bold text-[#FFC900] mb-8">Profile Settings</h1>

        <Card className="mb-10 bg-[#22251e] border-[#FFC900]/20">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-[#FFC900] flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Subscription
                </CardTitle>
                <CardDescription className="text-[#FFC900]/70">
                  Manage your subscription and billing information
                </CardDescription>
              </div>
              {!isChecking && subscription && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-[#FFC900]/30 text-[#FFC900]/70 hover:bg-[#FFC900]/10"
                  onClick={handleManualRefresh}
                  disabled={isRefreshing}
                >
                  {isRefreshing ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <RefreshCcw className="h-4 w-4" />
                  )}
                  <span className="ml-1 sr-only md:not-sr-only">Refresh</span>
                </Button>
              )}
            </div>
          </CardHeader>
          <CardContent>
            {isChecking ? (
              <div className="flex items-center justify-center py-8">
                <Loader2 className="h-8 w-8 animate-spin text-[#FFC900]" />
                <span className="ml-2 text-[#FFC900]/70">Checking subscription status...</span>
              </div>
            ) : subscription?.subscribed ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-[#FFC900]">Current Plan</h3>
                    <div className="flex items-center mt-1">
                      <Badge className="bg-[#FFC900] text-black font-medium">
                        {subscription.subscription_tier || "Premium"} Plan
                      </Badge>
                      <span className="ml-2 text-sm text-[#FFC900]/70">
                        ({subscription.billing_period || "Monthly"})
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center text-[#FFC900]/70">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="text-sm">
                      Renews: {formatDate(subscription.subscription_end)}
                    </span>
                  </div>
                </div>

                <div className="bg-[#151812]/60 rounded-lg p-4 border border-[#FFC900]/10">
                  <h4 className="text-sm font-medium text-[#FFC900] mb-2">Your Access Includes:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-[#FFC900]/80">
                        {subscription.subscription_tier === "Apprentice" ? "Apprentice resources" : 
                         subscription.subscription_tier === "Electrician" ? "Apprentice and Electrician resources" :
                         "Full access to all platform resources"}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-[#FFC900]/80">Priority support via email</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-[#FFC900]/80">Cancel or change plans anytime</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto border-[#FFC900]/50 text-[#FFC900] hover:bg-[#FFC900]/10"
                    onClick={handleManageSubscription}
                    disabled={isManaging}
                  >
                    {isManaging ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Please wait...
                      </>
                    ) : (
                      <>
                        <CreditCard className="mr-2 h-4 w-4" />
                        Manage Subscription
                      </>
                    )}
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-full sm:w-auto border-[#FFC900]/30 text-[#FFC900]/70 hover:bg-[#FFC900]/10"
                    onClick={handleManualRefresh}
                    disabled={isRefreshing}
                  >
                    {isRefreshing ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <RefreshCcw className="h-4 w-4" />
                    )}
                    <span className="ml-2 sm:hidden">Refresh Subscription Status</span>
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center py-6">
                <ShieldCheck className="h-12 w-12 text-[#FFC900]/50 mx-auto mb-3" />
                <h3 className="text-xl font-medium text-[#FFC900] mb-2">No Active Subscription</h3>
                <p className="text-[#FFC900]/70 mb-4">
                  Subscribe to access premium features and resources
                </p>
                <Button
                  className="bg-[#FFC900] text-black hover:bg-[#f5bb13] font-medium"
                  onClick={handleStartSubscription}
                >
                  Start 7-Day Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            )}
          </CardContent>
          {subscription?.subscribed && (
            <CardFooter className="flex justify-between border-t border-[#FFC900]/10 pt-4">
              <div className="text-sm text-[#FFC900]/60 flex items-center">
                <ShieldCheck className="h-4 w-4 mr-1" />
                Securely managed through Stripe
              </div>
            </CardFooter>
          )}
        </Card>
      </div>
    </MainLayout>
  );
};

export default Profile;
