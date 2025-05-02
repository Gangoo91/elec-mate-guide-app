
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { UserCog, ArrowRight } from "lucide-react";

export const NoTutorAccessState = () => {
  const navigate = useNavigate();
  
  return (
    <div className="text-center py-6">
      <UserCog className="h-12 w-12 text-[#FFC900]/50 mx-auto mb-3" />
      <h3 className="text-xl font-medium text-[#FFC900] mb-2">
        Tutor Access Only
      </h3>
      <p className="text-[#FFC900]/70 mb-4 max-w-md mx-auto">
        This area is restricted to approved tutors. If you're a tutor, please contact us to activate your tutor role.
      </p>
      <Button
        className="bg-[#FFC900] text-black hover:bg-[#f5bb13] font-medium"
        onClick={() => navigate("/dashboard")}
      >
        Return to Dashboard
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};

export default NoTutorAccessState;
