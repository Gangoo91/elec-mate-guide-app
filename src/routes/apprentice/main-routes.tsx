import React from 'react';
import { RouteObject } from 'react-router-dom';
import ApprenticeDashboardPage from "../../pages/ApprenticeHub";
import StudyMaterialsPage from "../../pages/StudyMaterialsPage";
import CityGuildsPage from "../../pages/CityGuildsPage";
import LearningHubPage from "../../pages/LearningHubPage";
import AudioTutorialsPage from "../../pages/AudioTutorialsPage";
import AIToolsPage from "../../pages/AIToolsPage";
import VideoDemonstrationsPage from "../../pages/VideoDemonstrationsPage";
import VideosGalleryPage from "../../pages/VideosGalleryPage";
import ARLearningPage from "../../pages/ARLearningPage";
import PracticeExamsPage from "../../pages/PracticeExamsPage";
import Mentorship from "../../pages/Mentorship";
import StudyGroupsPage from "../../pages/StudyGroupsPage";
import ProgressTrackingPage from "../../pages/apprentices/ProgressTrackingPage";
import Level2ExamsPage from "../../pages/Level2ExamsPage";
import Level3ExamsPage from "../../pages/Level3ExamsPage";
import MOETExamsPage from "../../pages/MOETExamsPage";
import InspectionTestingExamsPage from "../../pages/InspectionTestingExamsPage";
import HNCExamsPage from "../../pages/HNCExamsPage";
import HNDExamsPage from "../../pages/HNDExamsPage";
import FindMentors from "../../pages/FindMentors";
import MyMentors from "../../pages/MyMentors";
import MentorshipGuide from "../../pages/MentorshipGuide";
import ScheduleSessions from "../../pages/ScheduleSessions";
import JobPriceEstimatorPage from "../../pages/JobPriceEstimatorPage";

const apprenticeMainRoutes: RouteObject[] = [
  {
    path: "/apprentices",
    element: <ApprenticeDashboardPage />
  },
  {
    path: "/apprentices/dashboard",
    element: <ApprenticeDashboardPage />
  },
  {
    path: "/apprentices/learning-hub",
    element: <LearningHubPage />
  },
  {
    path: "/apprentices/study-materials",
    element: <StudyMaterialsPage />
  },
  {
    path: "/apprentices/practice-exams",
    element: <PracticeExamsPage />
  },
  {
    path: "/apprentices/audio-tutorials",
    element: <AudioTutorialsPage />
  },
  {
    path: "/apprentices/ai-tools",
    element: <AIToolsPage />
  },
  {
    path: "/apprentices/video-demonstrations",
    element: <VideoDemonstrationsPage />
  },
  {
    path: "/apprentices/videos-gallery",
    element: <VideosGalleryPage />
  },
  {
    path: "/apprentices/ar-learning",
    element: <ARLearningPage />
  },
  {
    path: "/apprentices/job-price-estimator",
    element: <JobPriceEstimatorPage />
  },
  {
    path: "/apprentices/mentorship",
    element: <Mentorship />
  },
  {
    path: "/apprentices/mentorship/find-mentors",
    element: <FindMentors />
  },
  {
    path: "/apprentices/mentorship/my-mentors",
    element: <MyMentors />
  },
  {
    path: "/apprentices/mentorship/guide",
    element: <MentorshipGuide />
  },
  {
    path: "/apprentices/mentorship/schedule",
    element: <ScheduleSessions />
  },
  {
    path: "/apprentices/study-groups",
    element: <StudyGroupsPage />
  },
  {
    path: "/apprentices/progress",
    element: <ProgressTrackingPage />
  },
  {
    path: "/apprentices/mock-exams/level2",
    element: <Level2ExamsPage />
  },
  {
    path: "/apprentices/mock-exams/level3",
    element: <Level3ExamsPage />
  },
  {
    path: "/apprentices/mock-exams/moet",
    element: <MOETExamsPage />
  },
  {
    path: "/apprentices/mock-exams/inspection-testing",
    element: <InspectionTestingExamsPage />
  },
  {
    path: "/apprentices/mock-exams/hnc",
    element: <HNCExamsPage />
  },
  {
    path: "/apprentices/mock-exams/hnd",
    element: <HNDExamsPage />
  }
];

export default apprenticeMainRoutes;
