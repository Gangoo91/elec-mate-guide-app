
import React from "react";
import { useAuth } from "@/hooks/useAuth";
import { ReactNode } from "react";
import NoTutorAccessState from "../tutors/NoTutorAccessState";

type TutorGuardProps = {
  children: ReactNode;
};

export const TutorGuard = ({ children }: TutorGuardProps) => {
  const { user, userRole } = useAuth();
  
  // DEVELOPMENT MODE: Allow access if user has tutor role, regardless of approval status
  // In production, this would check for isTutorApproved as well
  const hasAccess = user && userRole === "tutor";
  
  // Only render children if user is authenticated and has tutor role
  if (hasAccess) {
    return <>{children}</>;
  }
  
  // If user is logged in but not a tutor, show the no access state
  if (user) {
    return <NoTutorAccessState isPendingApproval={userRole === "tutor" && !hasAccess} />;
  }
  
  // Return null if user is not authenticated
  return null;
};

export default TutorGuard;
