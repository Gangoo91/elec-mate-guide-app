
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, CreditCard, RefreshCcw, AlertCircle } from "lucide-react";
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
      
      // Set error details for the dialog
      setErrorDetails(error?.message || "Unknown error occurred");
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
              Subscription Management Error
            </DialogTitle>
          </DialogHeader>
          <DialogDescription className="text-[#FFC900]/70">
            <div className="space-y-4">
              <p>There was an error accessing the subscription management portal:</p>
              <div className="p-3 bg-[#151812] rounded-md text-sm font-mono text-[#FFC900]/80">
                {errorDetails}
              </div>
              <p>
                This may be due to a temporary issue with Stripe or because the customer portal hasn't been properly configured.
              </p>
            </div>
          </DialogDescription>
          <DialogFooter className="flex flex-col sm:flex-row gap-2 mt-4">
            <Button
              variant="outline"
              onClick={() => setShowErrorDialog(false)}
              className="border-[#FFC900]/30 text-[#FFC900]/70"
            >
              Close
            </Button>
            <Button
              onClick={handleManualRetry}
              className="bg-[#FFC900] text-black hover:bg-[#e5b700]"
            >
              Try Again
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
