
import { RouteObject } from "react-router-dom";
import MentalHealth from "@/pages/MentalHealth";
import StressManagement from "@/pages/StressManagement";
import SupportGroups from "@/pages/SupportGroups";
import ProfessionalResources from "@/pages/ProfessionalResources";
import MentalHealthBuddy from "@/pages/MentalHealthBuddy";

const mentalHealthRoutes: RouteObject[] = [
  {
    path: "/mental-health",
    element: <MentalHealth />
  },
  {
    path: "/mental-health/stress-management",
    element: <StressManagement />
  },
  {
    path: "/mental-health/support-groups",
    element: <SupportGroups />
  },
  {
    path: "/mental-health/professional-resources",
    element: <ProfessionalResources />
  },
  {
    path: "/mental-health/buddy",
    element: <MentalHealthBuddy />
  }
];

export default mentalHealthRoutes;
