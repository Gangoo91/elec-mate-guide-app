
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { useLocation } from "react-router-dom";

export const NoSubscriptionState = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isTutorPage = location.pathname.includes("/tutors");
  
  return (
    <div className="text-center py-6">
      <ShieldCheck className="h-12 w-12 text-[#FFC900]/50 mx-auto mb-3" />
      <h3 className="text-xl font-medium text-[#FFC900] mb-2">
        {isTutorPage ? "Tutor Access Required" : "No Active Subscription"}
      </h3>
      <p className="text-[#FFC900]/70 mb-4">
        {isTutorPage 
          ? "The Tutor Hub requires an Electrician tier subscription" 
          : "Subscribe to access premium features and resources"}
      </p>
      <Button
        className="bg-[#FFC900] text-black hover:bg-[#f5bb13] font-medium"
        onClick={() => navigate("/subscription")}
      >
        {isTutorPage ? "Upgrade to Electrician Tier" : "Start 7-Day Free Trial"}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};
