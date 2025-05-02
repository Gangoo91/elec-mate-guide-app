
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import JobPriceEstimator from "@/components/technical/JobPriceEstimator";
import BackButton from "@/components/navigation/BackButton";

const JobPriceEstimatorPage = () => {
  return (
    <MainLayout>
      <div className="container py-8">
        <BackButton />
        <div className="max-w-4xl mx-auto">
          <JobPriceEstimator />
        </div>
      </div>
    </MainLayout>
  );
};

export default JobPriceEstimatorPage;
