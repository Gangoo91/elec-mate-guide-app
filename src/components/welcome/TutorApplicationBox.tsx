
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const TutorApplicationBox = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleTutorApply = () => {
    console.log("Tutor apply button clicked");
    toast({
      title: "Navigating to tutor signup",
      description: "Redirecting you to the tutor application form"
    });
    
    // Ensure we're navigating to the correct route
    navigate("/signup", { 
      state: { preselectedPlan: "tutor" }
    });
  };

  return (
    <div className="w-full p-4 mb-6 border-2 border-[#FFC900] rounded-xl bg-gradient-to-br from-[#1A1C15] to-[#14130A] shadow-lg">
      <div className="flex items-center mb-2">
        <GraduationCap className="h-6 w-6 text-[#FFC900] mr-2" />
        <h3 className="text-[#FFC900] text-lg font-bold">Free Tutor Access</h3>
      </div>
      <p className="text-white text-sm mb-3">
        Apply to become a tutor and access all teaching resources for free! Perfect for educators and industry professionals.
      </p>
      <Button 
        variant="outline" 
        className="w-full border-[#FFC900] text-[#FFC900] hover:bg-[#FFC900]/10"
        onClick={handleTutorApply}
        type="button"
      >
        Apply Now
      </Button>
    </div>
  );
};

export default TutorApplicationBox;
