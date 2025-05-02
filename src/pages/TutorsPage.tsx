
import React, { Suspense } from "react";
import MainLayout from "@/components/layout/MainLayout";
import TutorHub from "./TutorHub";
import LoadingSpinner from "@/components/LoadingSpinner";
import SubscriptionGuard from "@/components/guards/SubscriptionGuard";
import TutorGuard from "@/components/guards/TutorGuard";
import { NoSubscriptionState } from "@/components/subscription/NoSubscriptionState";
import NoTutorAccessState from "@/components/tutors/NoTutorAccessState";
import { useAuth } from "@/hooks/useAuth";

const TutorsPage = () => {
  const { user } = useAuth();
  
  // Simple helper to check if a user might be a tutor (placeholder)
  // In real implementation, this would check your roles database
  const mightBeTutor = user?.email?.includes("tutor") || false;

  return (
    <MainLayout>
      <Suspense fallback={<div className="w-full h-full min-h-screen flex items-center justify-center"><LoadingSpinner /></div>}>
        <TutorGuard>
          {/* Tutors get access without needing a subscription */}
          <TutorHub />
        </TutorGuard>
        
        {/* If not a tutor, then check for Electrician subscription */}
        {!mightBeTutor && (
          <>
            <SubscriptionGuard requiredTier="Electrician">
              <TutorHub />
            </SubscriptionGuard>
            <NoSubscriptionState />
          </>
        )}
        
        {/* Show tutor-specific message if they're not authorized */}
        {mightBeTutor && <NoTutorAccessState />}
      </Suspense>
    </MainLayout>
  );
};

export default TutorsPage;
