
import React from 'react';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import BackButton from "@/components/navigation/BackButton";

const PracticeExamsPage = () => {
  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
        <BackButton />
        <PageHeader 
          title="Practice Exams"
          description="Test your knowledge with mock exams and quizzes covering various electrical topics."
        />
        <div className="bg-[#22251e] border-[#FFC900]/20 rounded-lg border p-6">
          <h2 className="text-xl font-semibold text-[#FFC900] mb-4">Coming Soon</h2>
          <p className="text-[#FFC900]/70">
            Our team is developing comprehensive practice exams and quizzes to help you prepare 
            for your certification tests. Check back soon for interactive assessments covering 
            all aspects of electrical theory and practice.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default PracticeExamsPage;
