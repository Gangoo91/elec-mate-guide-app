
import React, { Suspense, useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";
import TutorHub from "./TutorHub";
import LoadingSpinner from "@/components/LoadingSpinner";
import TutorGuard from "@/components/guards/TutorGuard";
import { useAuth } from "@/hooks/useAuth";

const TutorsPage = () => {
  const { user, userRole, loading } = useAuth();
  
  // Log the auth state on component mount for debugging
  useEffect(() => {
    console.log("TutorsPage mounted - Auth state:", { 
      isLoggedIn: !!user, 
      userRole, 
      userId: user?.id 
    });
  }, [user, userRole]);
  
  // Show loading spinner while auth is being checked
  if (loading) {
    return (
      <MainLayout>
        <div className="w-full h-full min-h-screen flex items-center justify-center">
          <LoadingSpinner />
          <span className="ml-2">Loading your session...</span>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <Suspense fallback={<div className="w-full h-full min-h-screen flex items-center justify-center"><LoadingSpinner /></div>}>
        {/* For tutors - use TutorGuard which checks for approval status */}
        <TutorGuard>
          <TutorHub />
        </TutorGuard>
      </Suspense>
    </MainLayout>
  );
};

export default TutorsPage;
