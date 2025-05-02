
import React, { Suspense } from "react";
import MainLayout from "@/components/layout/MainLayout";
import TutorHub from "./TutorHub";
import LoadingSpinner from "@/components/LoadingSpinner";
import TutorGuard from "@/components/guards/TutorGuard";
import { useAuth } from "@/hooks/useAuth";

const TutorsPage = () => {
  const { userRole } = useAuth();
  
  // Check if user is a tutor (regardless of approval status)
  const isTutor = userRole === "tutor";

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
