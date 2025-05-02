
import React, { Suspense } from "react";
import MainLayout from "@/components/layout/MainLayout";
import TutorHub from "./TutorHub";
import LoadingSpinner from "@/components/LoadingSpinner";
import SubscriptionGuard from "@/components/guards/SubscriptionGuard";
import { NoSubscriptionState } from "@/components/subscription/NoSubscriptionState";

const TutorsPage = () => {
  return (
    <MainLayout>
      <Suspense fallback={<div className="w-full h-full min-h-screen flex items-center justify-center"><LoadingSpinner /></div>}>
        <SubscriptionGuard requiredTier="Electrician">
          <TutorHub />
        </SubscriptionGuard>
        <NoSubscriptionState />
      </Suspense>
    </MainLayout>
  );
};

export default TutorsPage;
