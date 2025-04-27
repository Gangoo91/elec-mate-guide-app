
import React, { Suspense } from "react";
import MainLayout from "@/components/layout/MainLayout";
import ApprenticeHub from "./ApprenticeHub";
import LoadingSpinner from "@/components/LoadingSpinner";

const ApprenticesPage = () => {
  return (
    <MainLayout>
      <Suspense fallback={<div className="w-full h-full min-h-screen flex items-center justify-center"><LoadingSpinner /></div>}>
        <ApprenticeHub />
      </Suspense>
    </MainLayout>
  );
};

export default ApprenticesPage;
