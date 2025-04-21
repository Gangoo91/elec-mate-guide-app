
import React from 'react';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import BackButton from "@/components/navigation/BackButton";

const StudyMaterialsPage = () => {
  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
        <BackButton />
        <PageHeader 
          title="Study Materials"
          description="Access comprehensive study guides, video tutorials, and reference materials for your electrical apprenticeship."
        />
        <div className="bg-[#22251e] border-[#FFC900]/20 rounded-lg border p-6">
          <h2 className="text-xl font-semibold text-[#FFC900] mb-4">Coming Soon</h2>
          <p className="text-[#FFC900]/70">
            We're currently developing our library of study materials. Check back soon for comprehensive guides, 
            video tutorials, and more resources to support your electrical apprenticeship journey.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default StudyMaterialsPage;
