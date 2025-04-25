
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
  const isEntry =
    location.pathname === "/" || location.pathname === "/dashboard";

  const handleBackNavigation = () => {
    // Use custom action if provided
    if (customAction) {
      customAction();
      return;
    }
    
    // For apprentices hub, go back to dashboard
    if (location.pathname === "/apprentices") {
      navigate("/dashboard");
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
