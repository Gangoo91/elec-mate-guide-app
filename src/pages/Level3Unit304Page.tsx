
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import UnitPurposeCard from "@/components/units/level3/unit304/UnitPurposeCard";
import SectionsList from "@/components/units/level3/unit304/SectionsList";
import KeyPointsTable from "@/components/units/level3/unit304/KeyPointsTable";
import AssessmentButton from "@/components/units/level3/unit304/AssessmentButton";
import { unit304 } from "@/data/units/unit304";

const Level3Unit304Page = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/level-3/core-units');
  };

  const handleStudySection = (sectionId: string) => {
    navigate(`/apprentices/study-materials/city-guilds/level-3/304/${sectionId}`);
  };

  const handleAssessmentClick = () => {
    navigate('/apprentices/study-materials/city-guilds/level-3/304/assessment');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title={unit304.title} 
          description={unit304.description} 
          customBackAction={handleBackClick}
        />
        
        <UnitPurposeCard />
        
        <SectionsList handleStudySection={handleStudySection} />
        
        <KeyPointsTable />
        
        <AssessmentButton onClick={handleAssessmentClick} />
      </div>
    </MainLayout>
  );
};

export default Level3Unit304Page;
