
import React, { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, useParams, useNavigate, Outlet } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import BackButton from "@/components/navigation/BackButton";
import StudyUnitContent from "@/components/study/StudyUnitContent";
import StudyMaterialsGrid from "@/components/study/StudyMaterialsGrid";
import CoreUnitsPage from "@/pages/CoreUnitsPage";
import ErrorBoundary from "@/components/ErrorBoundary";
import { studyMaterialsContent } from "@/data/studyMaterialsContent";
import LoadingSpinner from "@/components/LoadingSpinner";

// Lazy load the NVQ2 specific pages
const InteractiveLessonsPage = lazy(() => import('./study/nvq2/InteractiveLessonsPage'));
const QuizzesProgressPage = lazy(() => import('./study/nvq2/QuizzesProgressPage'));
const VideoContentPage = lazy(() => import('./study/nvq2/VideoContentPage'));

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
  }, [studyType, navigate]);

  // Check if we're on a specific content page (core-units, interactive-lessons, etc.)
  const isOnContentPage = window.location.pathname.split('/').length > 4;

  const renderContent = () => {
    if (!studyType) {
      return <StudyMaterialsGrid />;
    }

    if (contentKey && studyMaterialsContent[contentKey as keyof typeof studyMaterialsContent]) {
      // Only show the grid if we're not on a specific content page
      if (!isOnContentPage) {
        return (
          <StudyUnitContent 
            {...studyMaterialsContent[contentKey as keyof typeof studyMaterialsContent]} 
            basePath={`/apprentices/study-materials/${studyType}`}
          />
        );
      }
      
      return (
        <Routes>
          <Route path="/core-units" element={
            <ErrorBoundary>
              <CoreUnitsPage />
            </ErrorBoundary>
          } />
          <Route path="/interactive-lessons" element={
            studyType === 'nvq2' ? (
              <ErrorBoundary>
                <Suspense fallback={<LoadingSpinner message="Loading Interactive Lessons..." />}>
                  <InteractiveLessonsPage />
                </Suspense>
              </ErrorBoundary>
            ) : <CoreUnitsPage />
          } />
          <Route path="/quizzes" element={
            studyType === 'nvq2' ? (
              <ErrorBoundary>
                <Suspense fallback={<LoadingSpinner message="Loading Quizzes & Progress..." />}>
                  <QuizzesProgressPage />
                </Suspense>
              </ErrorBoundary>
            ) : <CoreUnitsPage />
          } />
          <Route path="/videos" element={
            studyType === 'nvq2' ? (
              <ErrorBoundary>
                <Suspense fallback={<LoadingSpinner message="Loading Video Content..." />}>
                  <VideoContentPage />
                </Suspense>
              </ErrorBoundary>
            ) : <CoreUnitsPage />
          } />
        </Routes>
      );
    }
    
    return <StudyMaterialsGrid />;
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
        
        {renderContent()}
      </div>
    </MainLayout>
  );
};

export default StudyMaterialsPage;
