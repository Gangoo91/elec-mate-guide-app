
import React from 'react';
import { RouteObject } from 'react-router-dom';
import AM2HomePage from "../../pages/AM2Page";
import InstallationPage from "../../pages/am2/InstallationPage";
import InspectionTestingPage from "../../pages/am2/InspectionTestingPage";
import FaultDiagnosisPage from "../../pages/am2/FaultDiagnosisPage";
import SafeIsolationPage from "../../pages/am2/SafeIsolationPage";
import AssessmentGuidelinesPage from "../../pages/am2/AssessmentGuidelinesPage";

// Import placeholder for detailed installation study pages
const InstallationDetailsPlaceholder = () => (
  <div className="container px-4 py-2 pt-16 md:pt-16">
    <h1 className="text-2xl font-bold mb-6 text-[#FFC900]">Study Content</h1>
    <p className="text-[#FFC900]/70">This is a detailed study page for the selected installation topic.</p>
    <p className="text-[#FFC900]/70 mt-4">More comprehensive content will be added soon.</p>
  </div>
);

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
    element: <InstallationDetailsPlaceholder />
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
    path: "/apprentices/study-materials/city-guilds/am2/assessment-guidelines",
    element: <AssessmentGuidelinesPage />
  }
];

export default am2Routes;
