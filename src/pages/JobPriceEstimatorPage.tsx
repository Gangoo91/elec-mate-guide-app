
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import JobPriceEstimator from "@/components/technical/JobPriceEstimator";
import PageHeader from "@/components/layout/PageHeader";
import { useNavigate } from "react-router-dom";

const JobPriceEstimatorPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/electricians/toolbox-talk');
  };
  
  return (
    <MainLayout>
      <div className="container py-8">
        <PageHeader 
          title="Job Price Estimator"
          description="Generate accurate price estimates for electrical jobs based on detailed job specifications."
          customBackAction={handleBackClick}
        />
        <div className="max-w-4xl mx-auto">
          <JobPriceEstimator />
        </div>
      </div>
    </MainLayout>
  );
};

export default JobPriceEstimatorPage;
