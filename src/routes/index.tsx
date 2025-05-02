
import React from 'react';
import { RouteObject } from 'react-router-dom';
import ApprenticeRoutes from './apprentice';
import { ElectricianRoutes } from './ElectricianRoutes';
import { createRoutesFromElements, Route } from 'react-router-dom';
import Welcome from '@/pages/Welcome';
import ApprenticeHub from "@/pages/ApprenticeHub";
import LearningHubPage from "@/pages/LearningHubPage";
import LeaderboardsPage from "@/pages/LeaderboardsPage";
import Dashboard from '@/pages/Dashboard';
import TutorsPage from '@/pages/TutorsPage';
import TeachingResourcesPage from '@/pages/tutors/TeachingResourcesPage';
import LessonPlansPage from '@/pages/tutors/LessonPlansPage';
import StudentProgressPage from '@/pages/tutors/StudentProgressPage';
import CreateAssessmentsPage from '@/pages/tutors/CreateAssessmentsPage';
import NotFound from '@/pages/NotFound';
import Signup from '@/pages/Signup';
import Login from '@/pages/Login';
import ForgotPassword from '@/pages/ForgotPassword';
import TutorApplicationStatus from '@/pages/TutorApplicationStatus';
import { AuthRoutes } from './AuthRoutes';

// Combine all routes
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Welcome />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: "/apprentices",
    element: <ApprenticeHub />
  },
  {
    path: "/apprentices/learning-hub",
    element: <LearningHubPage />
  },
  {
    path: "/leaderboards",
    element: <LeaderboardsPage />
  },
  // Tutor routes with proper routing
  {
    path: "/tutors",
    element: <TutorsPage />
  },
  {
    path: "/tutors/teaching-resources",
    element: <TeachingResourcesPage />
  },
  {
    path: "/tutors/lesson-plans",
    element: <LessonPlansPage />
  },
  {
    path: "/tutors/demonstration-guides",
    element: <TutorsPage />
  },
  {
    path: "/tutors/student-progress",
    element: <StudentProgressPage />
  },
  {
    path: "/tutors/off-the-job-monitoring",
    element: <TutorsPage />
  },
  {
    path: "/tutors/class-management",
    element: <TutorsPage />
  },
  {
    path: "/tutors/create-assessments",
    element: <CreateAssessmentsPage />
  },
  {
    path: "/tutors/grade-assessments",
    element: <TutorsPage />
  },
  {
    path: "/tutors/assessment-calendar",
    element: <TutorsPage />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />
  },
  {
    path: '/tutor-application',
    element: <TutorApplicationStatus />
  },
  // Include the apprentice and electrician routes
  ...ApprenticeRoutes,
  ...createRoutesFromElements(ElectricianRoutes)
];

export default routes;
