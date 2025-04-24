
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import InspectionTestingGuide from "@/components/technical/InspectionTestingGuide";
import BackButton from "@/components/navigation/BackButton";

const InspectionTestingGuidePage = () => {
  return (
    <MainLayout>
      <div className="container py-8">
        <BackButton />
        <div className="max-w-4xl mx-auto">
          <InspectionTestingGuide />
        </div>
      </div>
    </MainLayout>
  );
};

export default InspectionTestingGuidePage;
