
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { UserCog, ArrowRight, Clock } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

interface NoTutorAccessStateProps {
  isPendingApproval?: boolean;
}

export const NoTutorAccessState = ({ isPendingApproval = false }: NoTutorAccessStateProps) => {
  const navigate = useNavigate();
  const { userRole } = useAuth();
  
  return (
    <div className="text-center py-6">
      {isPendingApproval ? (
        // Pending approval state
        <>
          <Clock className="h-12 w-12 text-[#FFC900]/50 mx-auto mb-3" />
          <h3 className="text-xl font-medium text-[#FFC900] mb-2">
            Tutor Approval Pending
          </h3>
          <p className="text-[#FFC900]/70 mb-4 max-w-md mx-auto">
            Your tutor account is awaiting approval. We'll review your credentials and notify you via email when your account is approved.
          </p>
        </>
      ) : userRole === "tutor" ? (
        // Rejected tutor state
        <>
          <UserCog className="h-12 w-12 text-[#FFC900]/50 mx-auto mb-3" />
          <h3 className="text-xl font-medium text-[#FFC900] mb-2">
            Tutor Access Not Approved
          </h3>
          <p className="text-[#FFC900]/70 mb-4 max-w-md mx-auto">
            Your tutor application hasn't been approved. Please contact our support team for more information.
          </p>
        </>
      ) : (
        // Non-tutor state
        <>
          <UserCog className="h-12 w-12 text-[#FFC900]/50 mx-auto mb-3" />
          <h3 className="text-xl font-medium text-[#FFC900] mb-2">
            Tutor Access Only
          </h3>
          <p className="text-[#FFC900]/70 mb-4 max-w-md mx-auto">
            This area is restricted to approved tutors. If you're a qualified tutor, please create a tutor account to request access.
          </p>
        </>
      )}
      
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
