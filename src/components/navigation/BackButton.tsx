
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
    // Use custom action if provided
    if (customAction) {
      customAction();
      return;
    }
    
    // Handle job scheduling pages - ensure proper parent page navigation
    if (location.pathname === '/electricians/job-scheduling/upcoming') {
      navigate('/electricians/job-scheduling');
      return;
    }
    
    if (location.pathname === '/electricians/job-scheduling/time') {
      navigate('/electricians/job-scheduling');
      return;
    }
    
    if (location.pathname === '/electricians/job-scheduling/clients') {
      navigate('/electricians/job-scheduling');
      return;
    }
    
    if (location.pathname === '/electricians/job-scheduling/completion') {
      navigate('/electricians/job-scheduling');
      return;
    }
    
    // Handle existing route patterns
    if (location.pathname.startsWith('/electricians/job-scheduling/')) {
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
    }
    // For mental health subpages, go back to mental health hub
    else if (location.pathname.startsWith("/mental-health/") && location.pathname !== "/mental-health") {
      navigate("/mental-health");
    } 
    // For electricians mentorship page, go back to electricians hub
    else if (location.pathname === "/electricians/mentorship") {
      navigate("/electricians");
    }
    // For electricians sections, go back to dashboard
    else if (location.pathname === "/electricians") {
      navigate("/dashboard");
    }
    else {
      // Default behavior - go back one step in history
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
