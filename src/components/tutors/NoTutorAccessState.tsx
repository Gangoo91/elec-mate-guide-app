
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { UserCheck, ArrowRight, Clock } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

interface NoTutorAccessStateProps {
  isPendingApproval?: boolean;
}

export const NoTutorAccessState = ({ isPendingApproval = false }: NoTutorAccessStateProps) => {
  const navigate = useNavigate();
  const { userRole } = useAuth();
  
  return (
    <div className="text-center py-10 px-4 max-w-md mx-auto">
      {isPendingApproval ? (
        // Pending approval state
        <>
          <Clock className="h-16 w-16 text-[#FFC900]/70 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-[#FFC900] mb-3">
            Tutor Approval Pending
          </h3>
          <p className="text-[#FFC900]/80 mb-5 text-lg">
            Your tutor account is awaiting approval. We'll verify your tutor credentials and notify you via email once your account is approved.
          </p>
          <p className="text-white/70 mb-6 text-sm">
            Please ensure you've provided your tutor badge or credentials via email to <span className="font-medium">support@elec-mate.com</span>
          </p>
        </>
      ) : userRole === "tutor" ? (
        // Rejected tutor state
        <>
          <UserCheck className="h-16 w-16 text-[#FFC900]/70 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-[#FFC900] mb-3">
            Tutor Access Not Approved
          </h3>
          <p className="text-[#FFC900]/80 mb-5 text-lg">
            Your tutor application hasn't been approved. Please contact our support team for more information or to provide additional credentials.
          </p>
          <p className="text-white/70 mb-6 text-sm">
            Email your tutor badge or credentials to <span className="font-medium">support@elec-mate.com</span>
          </p>
        </>
      ) : (
        // Non-tutor state
        <>
          <UserCheck className="h-16 w-16 text-[#FFC900]/70 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-[#FFC900] mb-3">
            Tutor Access Only
          </h3>
          <p className="text-[#FFC900]/80 mb-5 text-lg">
            This area is restricted to approved tutors. If you're a qualified tutor, please create a tutor account to request access.
          </p>
        </>
      )}
      
      <Button
        className="bg-[#FFC900] text-black hover:bg-[#f5bb13] font-medium px-6 py-2 mt-2"
        onClick={() => navigate("/dashboard")}
      >
        Return to Dashboard
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};

export default NoTutorAccessState;
