
import React from 'react';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import BackButton from "@/components/navigation/BackButton";

const CertificationsPage = () => {
  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
        <BackButton />
        <PageHeader 
          title="Certification Prep"
          description="Prepare for your electrical certification with structured learning paths and practice tests."
        />
        <div className="bg-[#22251e] border-[#FFC900]/20 rounded-lg border p-6">
          <h2 className="text-xl font-semibold text-[#FFC900] mb-4">Coming Soon</h2>
          <p className="text-[#FFC900]/70">
            We're building a comprehensive certification preparation program to help you succeed 
            in your electrical licensing exams. Check back soon for structured learning paths, 
            test-taking strategies, and certification-specific resources.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default CertificationsPage;
