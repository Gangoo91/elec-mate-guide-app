
import React, { useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, Calendar, Loader2, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useSubscription } from "@/hooks/useSubscription";
import { SubscriptionBenefits } from "@/components/subscription/SubscriptionBenefits";
import { SubscriptionControls } from "@/components/subscription/SubscriptionControls";
import { NoSubscriptionState } from "@/components/subscription/NoSubscriptionState";
import { ProfileForm } from "@/components/profile/ProfileForm";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

const Profile = () => {
  const { isChecking, isRefreshing, subscription, checkSubscription } = useSubscription();
  const { user } = useAuth();

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return "N/A";
    return new Date(dateStr).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  // Load profile data when component mounts
  useEffect(() => {
    const loadProfile = async () => {
      if (!user?.id) return;
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();
          
        if (error) throw error;
        // Update form with existing data if available
        if (data) {
          const form = document.querySelector('form');
          if (form) {
            const firstNameInput = form.querySelector('input[name="first_name"]') as HTMLInputElement;
            const lastNameInput = form.querySelector('input[name="last_name"]') as HTMLInputElement;
            if (firstNameInput) firstNameInput.value = data.first_name || '';
            if (lastNameInput) lastNameInput.value = data.last_name || '';
          }
        }
      } catch (error) {
        console.error('Error loading profile:', error);
      }
    };

    loadProfile();
  }, [user?.id]);

  return (
    <MainLayout>
      <div className="container max-w-4xl px-4 py-12">
        <h1 className="text-3xl font-bold text-[#FFC900] mb-8">Profile Settings</h1>

        <ProfileForm />

        <Card className="bg-[#22251e] border-[#FFC900]/20">
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

                <SubscriptionBenefits tier={subscription.subscription_tier || undefined} />
                <SubscriptionControls isRefreshing={isRefreshing} onRefresh={() => checkSubscription()} />
              </div>
            ) : (
              <NoSubscriptionState />
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
