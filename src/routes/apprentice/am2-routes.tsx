
import React from 'react';
import { RouteObject } from 'react-router-dom';
import AM2HomePage from "../../pages/AM2Page";
import InstallationPage from "../../pages/am2/InstallationPage";
import InstallationDetailsPage from "../../pages/am2/InstallationDetailsPage";
import InspectionTestingPage from "../../pages/am2/InspectionTestingPage";
import FaultDiagnosisPage from "../../pages/am2/FaultDiagnosisPage";
import SafeIsolationPage from "../../pages/am2/SafeIsolationPage";
import SafeIsolationPractice from "../../pages/am2/SafeIsolationPractice";
import AssessmentGuidelinesPage from "../../pages/am2/AssessmentGuidelinesPage";
import AM2MockExamsPage from "../../pages/AM2MockExamsPage";

const am2Routes: RouteObject[] = [
  {
    path: "/apprentices/study-materials/city-guilds/am2",
    element: <AM2HomePage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/am2/installation",
    element: <InstallationPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/am2/installation/:topicId",
    element: <InstallationDetailsPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/am2/inspection-testing",
    element: <InspectionTestingPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/am2/fault-diagnosis",
    element: <FaultDiagnosisPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/am2/safe-isolation",
    element: <SafeIsolationPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/am2/safe-isolation/practice",
    element: <SafeIsolationPractice />
  },
  {
    path: "/apprentices/study-materials/city-guilds/am2/assessment-guidelines",
    element: <AssessmentGuidelinesPage />
  },
  {
    path: "/apprentices/study-materials/city-guilds/am2/mock-exams",
    element: <AM2MockExamsPage />
  }
];

export default am2Routes;
