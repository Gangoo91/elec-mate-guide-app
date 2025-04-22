
import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import LearningHub from "@/components/apprentices/LearningHub";
import { Progress } from "@/components/ui/progress";
import { useAuth } from "@/hooks/useAuth";
import { Award } from "lucide-react";

const ApprenticeHub = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  
  // This would typically come from a database, but for now we'll use mock data
  const userProgress = {
    completed: 2,
    total: 10,
    percentComplete: 20
  };

  return (
    <MainLayout>
      <div className="container px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#FFC900] mb-2">Apprentice Hub</h1>
            <p className="text-[#FFC900]/80">Your personal learning and development center</p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-3">
            <Button 
              className="bg-[#FFC900] text-[#151812] hover:bg-[#e5b700]"
              onClick={() => navigate("/apprentices/study-materials")}
            >
              Study Materials
            </Button>
            <Button 
              className="border-[#FFC900]/50 text-[#FFC900] hover:bg-[#FFC900]/10" 
              variant="outline"
            >
              Track Progress
            </Button>
          </div>
        </div>
        
        {/* Progress Overview */}
        <div className="mb-8 bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-[#FFC900] flex items-center gap-2">
              <Award className="h-5 w-5" />
              Learning Progress
            </h2>
            <span className="text-[#FFC900] font-medium">
              {userProgress.completed}/{userProgress.total} Units
            </span>
          </div>
          <Progress value={userProgress.percentComplete} className="h-2 bg-[#151812]" />
          <p className="text-[#FFC900]/70 text-sm mt-2">
            You've completed {userProgress.percentComplete}% of your learning material.
            {userProgress.percentComplete < 50 ? 
              " Keep going!" : 
              " Great progress!"}
          </p>
        </div>

        {/* Main content area */}
        <LearningHub />
      </div>
    </MainLayout>
  );
};

export default ApprenticeHub;
