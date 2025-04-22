
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import BackButton from "@/components/navigation/BackButton";
import StudyUnitContent from "@/components/study/StudyUnitContent";
import StudyMaterialsGrid from "@/components/study/StudyMaterialsGrid";
import { studyMaterialsContent } from "@/data/studyMaterialsContent";

const StudyMaterialsPage = () => {
  const { studyType } = useParams<{ studyType: string }>();
  const navigate = useNavigate();

  // Define valid study types and map URL parameters to content keys
  const validStudyTypes = ['nvq2', 'nvq3', 'hnc'];
  
  // Get content key based on studyType
  const getContentKey = () => {
    if (studyType === 'nvq2') return 'level2';
    if (studyType === 'nvq3') return 'level3';
    if (studyType === 'hnc') return 'hnc';
    return null;
  };
  
  const contentKey = getContentKey();

  // If studyType exists but isn't valid, redirect to the main materials page
  React.useEffect(() => {
    console.log("Current path:", window.location.pathname);
    console.log("Study type param:", studyType);
    console.log("Content key:", contentKey);
    
    if (studyType && !validStudyTypes.includes(studyType)) {
      navigate('/apprentices/study-materials');
    }
  }, [studyType, navigate]);

  // Render appropriate content based on URL
  const renderContent = () => {
    // If no studyType is specified, show the grid of study material options
    if (!studyType) {
      return <StudyMaterialsGrid />;
    }

    // If we have a valid content key, show the specific content
    if (contentKey && studyMaterialsContent[contentKey as keyof typeof studyMaterialsContent]) {
      return <StudyUnitContent {...studyMaterialsContent[contentKey as keyof typeof studyMaterialsContent]} />;
    }
    
    // Fallback to showing the grid
    return <StudyMaterialsGrid />;
  };

  // Generate title based on study type
  const getPageTitle = () => {
    if (!studyType) return "Study Materials";
    
    if (studyType === 'nvq2') return "NVQ Level 2 Study Materials";
    if (studyType === 'nvq3') return "NVQ Level 3 & AM2 Study Materials";
    if (studyType === 'hnc') return "HNC Electrical Engineering Materials";
    
    return "Study Materials";
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <div className="mb-4">
          <BackButton />
        </div>
        <PageHeader 
          title={getPageTitle()}
          description="Easy-to-understand guides and resources for electrical qualifications. Everything is explained in simple terms with real-world examples."
          hideBackButton={true}
        />
        
        {renderContent()}
      </div>
    </MainLayout>
  );
};

export default StudyMaterialsPage;
