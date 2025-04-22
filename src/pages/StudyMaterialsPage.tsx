
import React, { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, useParams, useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import BackButton from "@/components/navigation/BackButton";
import ErrorBoundary from "@/components/ErrorBoundary";
import { studyMaterialsContent } from "@/data/studyMaterialsContent";
import LoadingSpinner from "@/components/LoadingSpinner";

// Lazy load components to improve initial page load
const StudyUnitContent = lazy(() => import("@/components/study/StudyUnitContent"));
const StudyMaterialsGrid = lazy(() => import("@/components/study/StudyMaterialsGrid"));

const StudyMaterialsPage = () => {
  const params = useParams();
  const studyType = params.studyType;
  const navigate = useNavigate();

  const validStudyTypes = ['nvq2', 'nvq3', 'hnc'];
  
  const getContentKey = () => {
    if (studyType === 'nvq2') return 'level2';
    if (studyType === 'nvq3') return 'level3';
    if (studyType === 'hnc') return 'hnc';
    return null;
  };
  
  const contentKey = getContentKey();

  useEffect(() => {
    if (studyType && !validStudyTypes.includes(studyType)) {
      navigate('/apprentices/study-materials');
    }
    
    // Preload other content if needed
    if (studyType) {
      // Prefetch related content based on current study type
      const prefetchTimeout = setTimeout(() => {
        // This will run after the main content is loaded
        import("@/components/study/UnitQuiz");
      }, 2000);
      
      return () => clearTimeout(prefetchTimeout);
    }
  }, [studyType, navigate]);

  const renderContent = () => {
    if (!studyType) {
      return (
        <Suspense fallback={<LoadingSpinner size="lg" message="Loading study materials..." />}>
          <StudyMaterialsGrid />
        </Suspense>
      );
    }

    if (contentKey && studyMaterialsContent[contentKey as keyof typeof studyMaterialsContent]) {
      return (
        <Suspense fallback={<LoadingSpinner size="lg" message="Loading study content..." />}>
          <StudyUnitContent 
            {...studyMaterialsContent[contentKey as keyof typeof studyMaterialsContent]} 
            basePath={`/apprentices/study-materials/${studyType}`}
          />
        </Suspense>
      );
    }
    
    return (
      <Suspense fallback={<LoadingSpinner size="lg" message="Loading study materials..." />}>
        <StudyMaterialsGrid />
      </Suspense>
    );
  };

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
        
        <ErrorBoundary>
          {renderContent()}
        </ErrorBoundary>
      </div>
    </MainLayout>
  );
};

export default StudyMaterialsPage;
