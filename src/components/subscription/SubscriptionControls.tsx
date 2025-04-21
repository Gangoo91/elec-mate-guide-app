
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, CreditCard, RefreshCcw, AlertCircle, ExternalLink } from "lucide-react";
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

type SubscriptionControlsProps = {
  isRefreshing: boolean;
  onRefresh: () => void;
};

export const SubscriptionControls = ({ isRefreshing, onRefresh }: SubscriptionControlsProps) => {
  const [isManaging, setIsManaging] = useState(false);
  const [showErrorDialog, setShowErrorDialog] = useState(false);
  const [errorDetails, setErrorDetails] = useState("");
  const [isPortalConfigError, setIsPortalConfigError] = useState(false);
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
        console.log("Received portal URL:", data.url);
        window.location.href = data.url;
      } else {
        console.error("No portal URL returned:", data);
        throw new Error("Failed to get customer portal URL");
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
    // Note: We don't reset isManaging to false on success because we're redirecting away from the page
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
    </>
  );
};
