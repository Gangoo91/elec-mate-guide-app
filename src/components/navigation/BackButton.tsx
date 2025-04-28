import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BackButtonProps {
  customAction?: () => void;
}

const BackButton = ({ customAction }: BackButtonProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Hide back on entry-point ("/" or "/dashboard")
  const isEntry = location.pathname === "/" || location.pathname === "/dashboard";

  const handleBackNavigation = () => {
    console.log("BackButton: handleBackNavigation called from:", location.pathname);
    
    // Use custom action if provided - this takes priority
    if (customAction) {
      console.log("BackButton: Using custom action");
      customAction();
      return;
    }
    
    // Project overview related navigation
    if (location.pathname === "/electricians/project-management") {
      navigate('/electricians/project-overview');
      return;
    }
    
    if (location.pathname === "/electricians/templates") {
      navigate('/electricians/project-overview');
      return;
    }
    
    // Marine specialisation case studies handling
    if (location.pathname.match(/\/electricians\/specialisations\/marine\/case-studies\/[a-z-]+$/)) {
      console.log("BackButton: Marine case study - navigating back to marine specialisation");
      navigate('/electricians/specialisations/marine');
      return;
    }
    
    // EV specialisation case studies handling
    if (location.pathname.match(/\/electricians\/specialisations\/ev\/case-studies\/[a-z-]+$/)) {
      console.log("BackButton: EV case study - navigating back to EV specialisation");
      navigate('/electricians/specialisations/ev');
      return;
    }
    
    // Specialisation pages handling
    if (location.pathname.match(/\/electricians\/specialisations\/[a-z-]+$/)) {
      console.log("BackButton: Navigating to specialisations");
      navigate('/electricians/development/specialisations');
      return;
    }
    
    // Case studies handling - match any case study pattern
    if (location.pathname.match(/\/electricians\/specialisations\/[a-z-]+\/case-studies\/[a-z-]+/)) {
      // Extract the specialisation path from the current URL
      const specialisationPath = location.pathname.split('/case-studies/')[0];
      console.log(`BackButton: Navigating back to specialization: ${specialisationPath}`);
      navigate(specialisationPath);
      return;
    }
    
    // Job scheduling pages - direct navigation to parent
    if (location.pathname.match(/\/electricians\/job-scheduling\/[a-z-]+/)) {
      console.log("BackButton: Navigating to job scheduling");
      navigate('/electricians/job-scheduling');
      return;
    }
    
    // Special handling for Level 2 unit pages
    if (location.pathname.match(/\/apprentices\/study-materials\/city-guilds\/level-2\/core-units\/\d{3}/)) {
      navigate('/apprentices/study-materials/city-guilds/level-2/core-units');
      return;
    }

    // Special handling for Level 3 unit pages
    if (location.pathname.match(/\/electricians\/development\/career-pathways\/[a-z-]+/)) {
      navigate('/electricians/development/career-pathways');
      return;
    }
    
    if (location.pathname.match(/\/apprentices\/study-materials\/city-guilds\/level-3\/\d{3}/)) {
      navigate('/apprentices/study-materials/city-guilds/level-3');
      return;
    }
    
    // Special handling for solar installation process pages
    if (location.pathname.includes('/site-assessment/')) {
      navigate('/electricians/solar-pv-installation/installation-process/site-assessment');
      return;
    }
    
    // For apprentices hub, go back to dashboard
    if (location.pathname === "/apprentices") {
      navigate("/dashboard");
      return;
    }

    // Special handling for Level 3 section pages
    if (location.pathname.match(/\/apprentices\/study-materials\/city-guilds\/level-3\/\d{3}\/\d+\.\d+/)) {
      const unitId = location.pathname.split('/')[6]; // Get the unit ID from URL
      navigate(`/apprentices/study-materials/city-guilds/level-3/${unitId}`);
      return;
    }

    // For mental health main page, go back to electricians hub
    if (location.pathname === "/mental-health") {
      navigate("/electricians");
      return;
    }
    // For mental health subpages, go back to mental health hub
    else if (location.pathname.startsWith("/mental-health/") && location.pathname !== "/mental-health") {
      navigate("/mental-health");
      return;
    } 
    // For electricians mentorship page, go back to electricians hub
    else if (location.pathname === "/electricians/mentorship") {
      navigate("/electricians");
      return;
    }
    // For electricians learning hub page, go back to electricians hub
    else if (location.pathname === "/electricians/learning-hub") {
      navigate("/electricians");
      return;
    }
    // For electricians technical tools page, go back to electricians hub
    else if (location.pathname === "/electricians/technical-tools") {
      navigate("/electricians");
      return;
    }
    // For electricians toolbox talk page, go back to electricians hub
    else if (location.pathname === "/electricians/toolbox-talk") {
      navigate("/electricians");
      return;
    }
    // For electricians development page, go back to electricians hub
    else if (location.pathname === "/electricians/development") {
      navigate("/electricians");
      return;
    }
    // For electricians sections, depending on the source
    else if (location.pathname === "/electricians") {
      navigate("/dashboard");
      return;
    }
    // Handle navigation from EV infrastructure page
    else if (location.pathname === "/electricians/ev-infrastructure") {
      if (location.state?.from === "specialisations") {
        navigate('/electricians/development/specialisations');
      } else {
        navigate("/electricians");
      }
      return;
    }
    // For all other cases, go back in history
    else {
      console.log("BackButton: Default - navigating back in history");
      navigate(-1);
    }
  };

  if (isEntry) return null;

  return (
    <div className="mb-5">
      <Button
        variant="ghost"
        size="sm"
        onClick={handleBackNavigation}
        className="flex items-center gap-2 text-[#FFC900] hover:bg-[#FFC900]/10 transition"
        aria-label="Go back"
      >
        <ArrowLeft className="h-5 w-5 mr-1" />
        Back
      </Button>
    </div>
  );
};

export default BackButton;
