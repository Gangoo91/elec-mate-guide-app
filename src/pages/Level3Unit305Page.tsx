
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import AssessmentButton from "@/components/units/level3/unit304/AssessmentButton";
import { unit305 } from "@/data/units/unit305";
import UnitPurposeCard from "@/components/units/level3/unit305/UnitPurposeCard";
import SectionsList from "@/components/units/level3/unit305/SectionsList";
import KeyPointsTable from "@/components/units/level3/unit305/KeyPointsTable";
import DesignOverview from "@/components/units/level3/unit305/DesignOverview";

const Level3Unit305Page = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/level-3/core-units');
  };

  const handleSectionClick = (sectionId: string) => {
    navigate(`/apprentices/study-materials/city-guilds/level-3/305/${sectionId}`);
  };

  const handleAssessmentClick = () => {
    navigate('/apprentices/study-materials/city-guilds/level-3/305/assessment');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title={unit305.title} 
          description={unit305.description} 
          customBackAction={handleBackClick}
        />
        
        <UnitPurposeCard />
        
        <SectionsList handleStudySection={handleSectionClick} />
        
        <DesignOverview />
        
        <KeyPointsTable />
        
        <AssessmentButton onClick={handleAssessmentClick} />
      </div>
    </MainLayout>
  );
};

export default Level3Unit305Page;
