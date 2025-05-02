
import { GraduationCap, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Milestone } from "../types";
import { useNavigate } from "react-router-dom";

interface LearningPathwayProps {
  milestone: Milestone;
  onClose: () => void;
}

export const LearningPathway = ({ milestone, onClose }: LearningPathwayProps) => {
  const navigate = useNavigate();

  // Format framework name for display
  const formatFramework = (framework?: string) => {
    if (!framework) return 'Not specified';
    switch(framework) {
      case 'city_guilds': return 'City & Guilds';
      case 'eal': return 'EAL';
      case 'moet': return 'MOET';
      default: return framework.charAt(0).toUpperCase() + framework.slice(1);
    }
  };

  return (
    <div className="p-4 bg-[#22251e]/80 rounded-md border border-[#FFC900]/20">
      <h4 className="text-sm font-medium mb-3 text-[#FFC900] flex items-center gap-2">
        <GraduationCap className="h-4 w-4" />
        Learning Pathway
      </h4>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-xs text-[#FFC900]/60 mb-1">Framework</p>
          <p className="text-sm text-[#FFC900]">{formatFramework(milestone.qualification_framework)}</p>
        </div>
        <div>
          <p className="text-xs text-[#FFC900]/60 mb-1">Level</p>
          <p className="text-sm text-[#FFC900]">
            {milestone.learning_level ? milestone.learning_level.replace('level', 'Level ') : 'Not specified'}
          </p>
        </div>
      </div>
      
      {milestone.qualification_framework && (
        <div className="bg-[#FFC900]/10 p-3 rounded text-sm text-[#FFC900]/80">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="h-4 w-4 text-[#FFC900]" />
            <span className="font-medium text-[#FFC900]">Related Study Materials</span>
          </div>
          <Button
            variant="link"
            className="p-0 h-auto text-[#FFC900] text-sm"
            onClick={() => {
              onClose();
              if (milestone.qualification_framework === 'city_guilds') {
                navigate('/apprentices/study-materials/city-guilds');
              } else if (milestone.qualification_framework === 'eal') {
                navigate('/apprentices/study-materials/eal');
              } else if (milestone.qualification_framework === 'moet') {
                navigate('/apprentices/study-materials/city-guilds/moet');
              }
            }}
          >
            View {formatFramework(milestone.qualification_framework)} study materials
          </Button>
        </div>
      )}
    </div>
  );
};
