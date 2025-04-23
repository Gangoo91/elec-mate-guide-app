
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Hide back on entry-point ("/" or "/dashboard")
  const isEntry =
    location.pathname === "/" || location.pathname === "/dashboard";

  // Determine if we need a specific fallback path
  const handleBackNavigation = () => {
    // For mental health main page, go back to electricians hub
    if (location.pathname === "/mental-health") {
      navigate("/electricians");
    }
    // For mental health subpages, go back to mental health hub
    else if (location.pathname.startsWith("/mental-health/") && location.pathname !== "/mental-health") {
      navigate("/mental-health");
    } else {
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
