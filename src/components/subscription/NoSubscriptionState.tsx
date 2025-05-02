
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShieldCheck, ArrowRight } from "lucide-react";

export const NoSubscriptionState = () => {
  const navigate = useNavigate();
  
  return (
    <div className="text-center py-6">
      <ShieldCheck className="h-12 w-12 text-[#FFC900]/50 mx-auto mb-3" />
      <h3 className="text-xl font-medium text-[#FFC900] mb-2">No Active Subscription</h3>
      <p className="text-[#FFC900]/70 mb-4">
        Subscribe to access premium features and resources
      </p>
      <Button
        className="bg-[#FFC900] text-black hover:bg-[#f5bb13] font-medium"
        onClick={() => navigate("/subscription")}
      >
        Start 7-Day Free Trial
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};
