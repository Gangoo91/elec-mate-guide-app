
import React from "react";
import { Button } from "@/components/ui/button";

export const MentorshipError = () => {
  return (
    <div className="container py-8">
      <div className="text-center text-[#FFC900] p-8 bg-[#22251e] rounded-lg border border-[#FFC900]/20">
        <h2 className="text-xl">Unable to load mentors</h2>
        <p className="text-[#FFC900]/80 mt-2">Please try again later</p>
        <Button 
          variant="outline" 
          onClick={() => window.location.reload()} 
          className="mt-4 border-[#FFC900]/50 text-[#FFC900] hover:bg-[#FFC900]/10"
        >
          Refresh Page
        </Button>
      </div>
    </div>
  );
};

