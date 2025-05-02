
import React, { Suspense } from "react";
import MainLayout from "@/components/layout/MainLayout";
import TutorHub from "./TutorHub";
import LoadingSpinner from "@/components/LoadingSpinner";

const TutorsPage = () => {
  return (
    <MainLayout>
      <Suspense fallback={<div className="w-full h-full min-h-screen flex items-center justify-center"><LoadingSpinner /></div>}>
        <TutorHub />
      </Suspense>
    </MainLayout>
  );
};

export default TutorsPage;
