
import React from "react";
import { useAuth } from "@/hooks/useAuth";
import { ReactNode } from "react";
import NoTutorAccessState from "../tutors/NoTutorAccessState";

type TutorGuardProps = {
  children: ReactNode;
};

export const TutorGuard = ({ children }: TutorGuardProps) => {
  const { user, userRole, isTutorApproved } = useAuth();
  
  // Check if the user is a tutor and is approved
  const hasAccess = user && userRole === "tutor" && isTutorApproved;
  
  // Only render children if user is authenticated and has tutor role
  if (hasAccess) {
    return <>{children}</>;
  }
  
  // If user is logged in but not an approved tutor, show the no access state
  if (user) {
    return <NoTutorAccessState isPendingApproval={userRole === "tutor" && !isTutorApproved} />;
  }
  
  // Return null if user is not authenticated
  return null;
};

export default TutorGuard;
