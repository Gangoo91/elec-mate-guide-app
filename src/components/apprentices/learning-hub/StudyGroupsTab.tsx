
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import ResourceCard from "@/components/shared/ResourceCard";
import { Calendar, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";

interface StudyGroupsTabProps {
  onCardClick: (path: string) => void;
}

const StudyGroupsTab = ({ onCardClick }: StudyGroupsTabProps) => {
  const isMobile = useIsMobile();
  
  return (
    <Card className="border-[#FFC900]/20 bg-[#22251e]">
      <CardContent className="pt-4 md:pt-6">
        <div className="flex items-center justify-between mb-3 md:mb-4">
          <h3 className="text-base md:text-lg font-semibold text-[#FFC900]">My Study Groups</h3>
          <Badge variant="outline" className="bg-[#FFC900]/10 text-[#FFC900] text-xs">
            2 Active Groups
          </Badge>
        </div>
        
        <div className="space-y-3 md:space-y-4">
          <ResourceCard
            title="Level 2 Exam Preparation"
            description={isMobile ? "Weekly sessions for L2 exam preparation" : "Weekly group sessions focusing on exam techniques and revision for Level 2 Units"}
            icon={<Calendar className="h-5 w-5 md:h-6 md:w-6" />}
            onClick={() => onCardClick("/apprentices/study-groups/1")}
          />
          <ResourceCard
            title="Practical Installation Skills"
            description={isMobile ? "Practice group for installation skills" : "Practice group for sharing tips on practical installations and troubleshooting"}
            icon={<Users className="h-5 w-5 md:h-6 md:w-6" />}
            onClick={() => onCardClick("/apprentices/study-groups/2")}
          />
        </div>
        
        <div className="mt-4 flex justify-end">
          <Badge 
            className="bg-[#FFC900] hover:bg-[#FFC900]/80 cursor-pointer text-black text-xs"
            onClick={() => onCardClick("/apprentices/study-groups")}
          >
            View All Study Groups
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudyGroupsTab;
