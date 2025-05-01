
import React from 'react';
import { RouteObject } from 'react-router-dom';
import ApprenticeDashboardPage from "../../pages/ApprenticeHub";
import StudyMaterialsPage from "../../pages/StudyMaterialsPage";
import CityGuildsPage from "../../pages/CityGuildsPage";
import LearningHubPage from "../../pages/LearningHubPage";
import AudioTutorialsPage from "../../pages/AudioTutorialsPage";
import AIToolsPage from "../../pages/AIToolsPage";
import VideoDemonstrationsPage from "../../pages/VideoDemonstrationsPage";
import ARLearningPage from "../../pages/ARLearningPage";
import PracticeExamsPage from "../../pages/PracticeExamsPage";
import Mentorship from "../../pages/Mentorship";
import StudyGroupsPage from "../../pages/StudyGroupsPage";
import ProgressTrackingPage from "../../pages/apprentices/ProgressTrackingPage";
import Level2ExamsPage from "../../pages/Level2ExamsPage";
import FindMentors from "../../pages/FindMentors";
import MyMentors from "../../pages/MyMentors";
import MentorshipGuide from "../../pages/MentorshipGuide";
import ScheduleSessions from "../../pages/ScheduleSessions";

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
    path: "/apprentices/ar-learning",
    element: <ARLearningPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds",
    element: <CityGuildsPage />
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
  }
];

export default apprenticeMainRoutes;
