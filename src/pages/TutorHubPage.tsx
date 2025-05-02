
import React from 'react';
import MainLayout from "@/components/layout/MainLayout";
import BackButton from "@/components/navigation/BackButton";
import PageHeader from "@/components/layout/PageHeader";

const TutorHubPage = () => {
  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
        <div className="mb-4">
          <BackButton />
        </div>
        
        <PageHeader 
          title="Tutor Hub"
          description="Resources for educators, training providers, and assessors"
          hideBackButton={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="bg-[#22251e] border border-[#FFC900]/20 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-[#FFC900] mb-3">Teaching Resources</h3>
            <p className="text-[#FFC900]/70">Access and create lesson plans, presentations, and practical assignments</p>
          </div>
          
          <div className="bg-[#22251e] border border-[#FFC900]/20 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-[#FFC900] mb-3">Student Management</h3>
            <p className="text-[#FFC900]/70">Track student progress, attendance, and assessment results</p>
          </div>
          
          <div className="bg-[#22251e] border border-[#FFC900]/20 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-[#FFC900] mb-3">Assessment Tools</h3>
            <p className="text-[#FFC900]/70">Create, administer, and grade assessments</p>
          </div>
          
          <div className="bg-[#22251e] border border-[#FFC900]/20 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-[#FFC900] mb-3">Calendar</h3>
            <p className="text-[#FFC900]/70">Schedule classes, assessments, and meetings</p>
          </div>
          
          <div className="bg-[#22251e] border border-[#FFC900]/20 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-[#FFC900] mb-3">Professional Development</h3>
            <p className="text-[#FFC900]/70">Access resources for your own professional growth</p>
          </div>
          
          <div className="bg-[#22251e] border border-[#FFC900]/20 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-[#FFC900] mb-3">Industry Updates</h3>
            <p className="text-[#FFC900]/70">Stay informed about changes in regulations and standards</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default TutorHubPage;
