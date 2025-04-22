
import React from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import BackButton from "@/components/navigation/BackButton";
import StudyUnitContent from "@/components/study/StudyUnitContent";
import StudyMaterialsGrid from "@/components/study/StudyMaterialsGrid";
import { studyMaterialsContent } from "@/data/studyMaterialsContent";

const StudyMaterialsPage = () => {
  const { studyType } = useParams();

  const renderContent = () => {
    if (!studyType) {
      return (
        <>
          <StudyMaterialsGrid />
          <div className="mt-8 space-y-8">
            <StudyUnitContent {...studyMaterialsContent.level2} />
            <StudyUnitContent {...studyMaterialsContent.level3} />
          </div>
        </>
      );
    }

    // Display specific content based on URL parameter
    const content = studyMaterialsContent[studyType as keyof typeof studyMaterialsContent];
    return content ? <StudyUnitContent {...content} /> : null;
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
