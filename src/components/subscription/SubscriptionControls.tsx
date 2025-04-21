
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, CreditCard, RefreshCcw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

type SubscriptionControlsProps = {
  isRefreshing: boolean;
  onRefresh: () => void;
};

export const SubscriptionControls = ({ isRefreshing, onRefresh }: SubscriptionControlsProps) => {
  const [isManaging, setIsManaging] = useState(false);
  const { toast } = useToast();

  const handleManageSubscription = async () => {
    setIsManaging(true);
    try {
      const { data, error } = await supabase.functions.invoke("customer-portal");
      
      if (error) {
        console.error("Customer portal error:", error);
        throw new Error(error.message || "Failed to access customer portal");
      }
      
      if (data?.url) {
        window.location.href = data.url;
      } else {
        console.error("No portal URL returned:", data);
        throw new Error("Failed to get customer portal URL");
      }
    } catch (error: any) {
      console.error("Subscription management error:", error);
      toast({
        title: "Could not access subscription management",
        description: error?.message || "Please try again later",
        variant: "destructive",
      });
      // Reset the button state after error
      setIsManaging(false);
    }
    // Note: We don't reset isManaging to false on success because we're redirecting away from the page
  };

  return (
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
  );
};
