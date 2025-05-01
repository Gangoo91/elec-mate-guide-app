
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import GlassCard from "@/components/shared/GlassCard";
import { useLocation } from "react-router-dom";
import { MentorshipGuide } from "@/components/mentorship/MentorshipGuide";

const MentorshipGuidePage = () => {
  const location = useLocation();
  const isElectriciansSection = location.pathname.startsWith('/electricians');

  return (
    <MainLayout>
      <div className="container py-8">
        <PageHeader
          title="Mentorship Guide"
          description={isElectriciansSection 
            ? "Best practices and resources for effective mentoring" 
            : "Learn how to make the most of your mentorship experience"}
        />
        
        <GlassCard className="mb-6">
          <MentorshipGuide isElectriciansSection={isElectriciansSection} />
        </GlassCard>
      </div>
    </MainLayout>
  );
};

export default MentorshipGuidePage;
