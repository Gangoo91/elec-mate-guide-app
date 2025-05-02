
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Award } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const WelcomeActions = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleGetStarted = () => {
    console.log("Get started button clicked");
    toast({
      title: "Getting Started",
      description: "Redirecting you to sign up"
    });
    navigate("/signup");
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="space-y-4 w-full max-w-xs mx-auto">
        <Button
          onClick={handleGetStarted}
          className="w-full rounded-2xl bg-[#FFC900] hover:bg-[#f5bb13] text-black font-bold text-lg py-6 h-auto shadow transition-all duration-300"
        >
          GET STARTED
        </Button>
        
        <Button
          onClick={() => navigate("/login")}
          variant="outline"
          className="w-full rounded-2xl bg-transparent border border-[#FFC900] text-[#FFC900] hover:bg-[#FFC900]/10 font-bold text-lg py-6 h-auto"
        >
          I ALREADY HAVE AN ACCOUNT
        </Button>
      </div>
      
      <Button
        onClick={() => navigate("/leaderboards")}
        variant="ghost"
        className="mt-4 mx-auto text-[#FFC900]/80 hover:text-[#FFC900] hover:bg-[#FFC900]/10 flex items-center gap-2"
      >
        <Award className="h-4 w-4" />
        View Recognition & Leaderboards
      </Button>
    </div>
  );
};

export default WelcomeActions;
