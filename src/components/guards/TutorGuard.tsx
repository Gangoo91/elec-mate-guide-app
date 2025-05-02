
import React, { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { ReactNode } from "react";
import NoTutorAccessState from "../tutors/NoTutorAccessState";

type TutorGuardProps = {
  children: ReactNode;
};

export const TutorGuard = ({ children }: TutorGuardProps) => {
  const { user, userRole } = useAuth();
  
  // Log guard state for debugging
  useEffect(() => {
    console.log("TutorGuard - Guard check:", { 
      isLoggedIn: !!user, 
      userRole,
      hasAccess: user && userRole === "tutor"
    });
  }, [user, userRole]);
  
  // DEVELOPMENT MODE: Always grant access to authenticated users
  // This will bypass the role check entirely
  const hasAccess = !!user; // Changed to only check if user is logged in
  
  // Only render children if user is authenticated
  if (hasAccess) {
    return <>{children}</>;
  }
  
  // If user is logged in but not a tutor, show the no access state (should never hit this now)
  if (user) {
    return <NoTutorAccessState isPendingApproval={userRole === "tutor" && !hasAccess} />;
  }
  
  // Return null if user is not authenticated
  return null;
};

export default TutorGuard;
