
import { Route } from "react-router-dom";
import MentalHealth from "@/pages/MentalHealth";
import StressManagement from "@/pages/StressManagement";
import SupportGroups from "@/pages/SupportGroups";
import ProfessionalResources from "@/pages/ProfessionalResources";
import MentalHealthBuddy from "@/pages/MentalHealthBuddy";

export const MentalHealthRoutes = [
  <Route key="mental-health" path="/mental-health" element={<MentalHealth />} />,
  <Route key="mental-health-stress" path="/mental-health/stress-management" element={<StressManagement />} />,
  <Route key="mental-health-support" path="/mental-health/support-groups" element={<SupportGroups />} />,
  <Route key="mental-health-resources" path="/mental-health/professional-resources" element={<ProfessionalResources />} />,
  <Route key="mental-health-buddy" path="/mental-health/buddy" element={<MentalHealthBuddy />} />,
];
