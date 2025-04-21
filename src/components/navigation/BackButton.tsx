
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

  if (isEntry) return null;

  return (
    <div className="mb-5">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => navigate(-1)}
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
