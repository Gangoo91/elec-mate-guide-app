
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
  const contentKey = studyType === 'nvq2' ? 'level2' : 
                    studyType === 'nvq3' ? 'level3' : 
                    studyType === 'hnc' ? 'hnc' : null;

  // If studyType exists but isn't valid, redirect to the main materials page
  React.useEffect(() => {
    if (studyType && !validStudyTypes.includes(studyType)) {
      navigate('/apprentices/study-materials');
    }
  }, [studyType, navigate]);

  // Render appropriate content based on URL
  const renderContent = () => {
    // Log the current path and studyType for debugging
    console.log("Current path:", window.location.pathname);
    console.log("Study type param:", studyType);
    console.log("Content key:", contentKey);

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

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <div className="mb-4">
          <BackButton />
        </div>
        <PageHeader 
          title={studyType ? `${studyType.toUpperCase()} Study Materials` : "Study Materials"}
          description="Easy-to-understand guides and resources for electrical qualifications. Everything is explained in simple terms with real-world examples."
          hideBackButton={true}
        />
        
        {renderContent()}
      </div>
    </MainLayout>
  );
};

export default StudyMaterialsPage;
