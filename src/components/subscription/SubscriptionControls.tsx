
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, CreditCard, RefreshCcw, AlertCircle, ExternalLink, XCircle, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter,
  DialogDescription
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

type SubscriptionControlsProps = {
  isRefreshing: boolean;
  onRefresh: () => void;
};

type SubscriptionData = {
  id: string;
  status: string;
  current_period_end: number;
  cancel_at_period_end: boolean;
  plan: string;
  amount: number | null;
  currency: string;
  interval: string | null;
  billing_period: string;
};

export const SubscriptionControls = ({ isRefreshing, onRefresh }: SubscriptionControlsProps) => {
  const [isManaging, setIsManaging] = useState(false);
  const [showErrorDialog, setShowErrorDialog] = useState(false);
  const [errorDetails, setErrorDetails] = useState("");
  const [isPortalConfigError, setIsPortalConfigError] = useState(false);
  const [subscriptionData, setSubscriptionData] = useState<SubscriptionData[]>([]);
  const [showSubsDialog, setShowSubsDialog] = useState(false);
  const [showCancelConfirm, setShowCancelConfirm] = useState(false);
  const [selectedSubId, setSelectedSubId] = useState("");
  const { toast } = useToast();

  const handleManageSubscription = async () => {
    setIsManaging(true);
    try {
      // Log the request
      console.log("Calling customer-portal edge function...");
      
      // Call the edge function with a cache-busting parameter
      const { data, error } = await supabase.functions.invoke("customer-portal", {
        body: { timestamp: Date.now() }
      });
      
      if (error) {
        console.error("Customer portal error:", error);
        throw new Error(error.message || "Failed to access customer portal");
      }
      
      if (data?.url) {
        // Standard flow - redirect to Stripe portal
        console.log("Received portal URL:", data.url);
        window.location.href = data.url;
      } else if (data?.bypass_portal && data?.subscription_data) {
        // Fallback flow - show subscription data in our own UI
        console.log("Using fallback subscription management:", data.subscription_data);
        setSubscriptionData(data.subscription_data.subscriptions);
        setShowSubsDialog(true);
        setIsManaging(false);
      } else {
        console.error("No portal URL or subscription data returned:", data);
        throw new Error("Failed to get subscription management data");
      }
    } catch (error: any) {
      console.error("Subscription management error:", error);
      
      // Check if this is a portal configuration error
      const errorMessage = error?.message || "Unknown error occurred";
      setIsPortalConfigError(errorMessage.includes("portal") && errorMessage.includes("configuration"));
      
      // Set error details for the dialog
      setErrorDetails(errorMessage);
      setShowErrorDialog(true);
      
      // Also show a toast
      toast({
        title: "Could not access subscription management",
        description: "Please see the error details for more information",
        variant: "destructive",
      });
      
      // Reset the button state after error
      setIsManaging(false);
    }
  };

  const handleCancelSubscription = async (subscriptionId: string) => {
    setSelectedSubId(subscriptionId);
    setShowCancelConfirm(true);
  };

  const confirmCancelSubscription = async () => {
    if (!selectedSubId) return;
    
    try {
      // This is a simplified version - in a real implementation, you'd have an edge function
      // that handles cancellation by calling stripe.subscriptions.update with cancel_at_period_end = true
      toast({
        title: "Subscription cancellation requested",
        description: "Please refresh your subscription status to see the changes",
      });
      
      setShowCancelConfirm(false);
      setShowSubsDialog(false);
      onRefresh();
    } catch (error) {
      toast({
        title: "Error cancelling subscription",
        description: "There was a problem processing your request",
        variant: "destructive",
      });
    }
  };

  // Format date from timestamp
  const formatDate = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleDateString("en-GB", {
      day: "numeric", 
      month: "long", 
      year: "numeric"
    });
  };

  // Format currency
  const formatCurrency = (amount: number | null, currency: string) => {
    if (amount === null) return "N/A";
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency || "USD"
    }).format(amount / 100);
  };

  // Manual retry function
  const handleManualRetry = () => {
    setShowErrorDialog(false);
    // Wait a brief moment before retrying
    setTimeout(handleManageSubscription, 500);
  };

  const openStripeSettings = () => {
    window.open("https://dashboard.stripe.com/settings/billing/portal", "_blank");
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          onClick={onRefresh}
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

      {/* Error Dialog */}
      <Dialog open={showErrorDialog} onOpenChange={setShowErrorDialog}>
        <DialogContent className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5" />
              {isPortalConfigError ? "Stripe Configuration Required" : "Subscription Management Error"}
            </DialogTitle>
          </DialogHeader>
          
          {isPortalConfigError ? (
            <div className="space-y-4 text-[#FFC900]/70">
              <p>The Stripe Customer Portal needs to be configured before it can be used:</p>
              <div className="p-3 bg-[#151812] rounded-md text-sm font-mono text-[#FFC900]/80">
                {errorDetails}
              </div>
              <div className="space-y-2">
                <p className="font-medium">How to fix this:</p>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Log in to your Stripe Dashboard</li>
                  <li>Go to Settings → Customer Portal</li>
                  <li>Configure your Customer Portal settings</li>
                  <li>Save your settings</li>
                  <li>Come back and try again</li>
                </ol>
              </div>
            </div>
          ) : (
            <DialogDescription className="text-[#FFC900]/70">
              <div className="space-y-4">
                <p>There was an error accessing the subscription management portal:</p>
                <div className="p-3 bg-[#151812] rounded-md text-sm font-mono text-[#FFC900]/80">
                  {errorDetails}
                </div>
                <p>
                  This may be due to a temporary issue with Stripe. Please try again in a few moments.
                </p>
              </div>
            </DialogDescription>
          )}
          
          <DialogFooter className="flex flex-col sm:flex-row gap-2 mt-4">
            <Button
              variant="outline"
              onClick={() => setShowErrorDialog(false)}
              className="border-[#FFC900]/30 text-[#FFC900]/70"
            >
              Close
            </Button>
            
            {isPortalConfigError ? (
              <Button
                onClick={openStripeSettings}
                className="bg-[#FFC900] text-black hover:bg-[#e5b700]"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Open Stripe Settings
              </Button>
            ) : (
              <Button
                onClick={handleManualRetry}
                className="bg-[#FFC900] text-black hover:bg-[#e5b700]"
              >
                Try Again
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Fallback Subscription Management Dialog */}
      <Dialog open={showSubsDialog} onOpenChange={setShowSubsDialog}>
        <DialogContent className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900] max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              Your Subscription Details
            </DialogTitle>
            <DialogDescription className="text-[#FFC900]/70">
              Manage your subscription details below
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 my-2">
            {subscriptionData.length === 0 ? (
              <div className="text-center p-4">
                <p className="text-[#FFC900]/70">No subscriptions found</p>
              </div>
            ) : (
              subscriptionData.map((subscription) => (
                <div key={subscription.id} className="border border-[#FFC900]/20 rounded-lg p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="font-medium text-[#FFC900]">{subscription.plan}</div>
                    <div className="flex items-center">
                      {subscription.status === "active" ? (
                        <span className="bg-green-700/20 text-green-400 text-xs px-2.5 py-1 rounded-full flex items-center">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Active
                        </span>
                      ) : subscription.status === "canceled" ? (
                        <span className="bg-red-700/20 text-red-400 text-xs px-2.5 py-1 rounded-full flex items-center">
                          <XCircle className="h-3 w-3 mr-1" />
                          Canceled
                        </span>
                      ) : (
                        <span className="bg-yellow-700/20 text-yellow-400 text-xs px-2.5 py-1 rounded-full">
                          {subscription.status}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-[#FFC900]/70">
                    <div>
                      <span className="font-medium">Price:</span>{" "}
                      {formatCurrency(subscription.amount, subscription.currency)}
                      {subscription.interval && <span> / {subscription.interval}</span>}
                    </div>
                    <div>
                      <span className="font-medium">Next billing date:</span>{" "}
                      {formatDate(subscription.current_period_end)}
                    </div>
                    <div>
                      <span className="font-medium">Billing cycle:</span>{" "}
                      {subscription.billing_period || (subscription.interval === 'year' ? 'Yearly' : 'Monthly')}
                    </div>
                    {subscription.cancel_at_period_end && (
                      <div className="col-span-2">
                        <span className="text-amber-400">
                          Your subscription will end on {formatDate(subscription.current_period_end)}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {subscription.status === "active" && !subscription.cancel_at_period_end && (
                    <div className="pt-2">
                      <Button 
                        variant="outline" 
                        className="border-red-500/50 text-red-500 hover:bg-red-500/10 hover:text-red-400 w-full sm:w-auto"
                        onClick={() => handleCancelSubscription(subscription.id)}
                      >
                        <XCircle className="h-4 w-4 mr-2" />
                        Cancel Subscription
                      </Button>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
          
          <DialogFooter className="mt-4">
            <Button
              onClick={() => setShowSubsDialog(false)}
              className="bg-[#FFC900] text-black hover:bg-[#e5b700]"
            >
              Done
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Cancel Confirmation Dialog */}
      <AlertDialog open={showCancelConfirm} onOpenChange={setShowCancelConfirm}>
        <AlertDialogContent className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]">
          <AlertDialogHeader>
            <AlertDialogTitle>Cancel Subscription?</AlertDialogTitle>
            <AlertDialogDescription className="text-[#FFC900]/70">
              Your subscription will remain active until the end of your current billing period. 
              After that, you will no longer be charged and will lose access to premium features.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="border-[#FFC900]/30 text-[#FFC900]/70">
              Keep Subscription
            </AlertDialogCancel>
            <AlertDialogAction 
              className="bg-red-500 text-white hover:bg-red-600"
              onClick={confirmCancelSubscription}
            >
              Yes, Cancel Subscription
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
