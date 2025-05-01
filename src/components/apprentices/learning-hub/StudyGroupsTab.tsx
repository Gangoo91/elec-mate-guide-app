
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import ResourceCard from "@/components/shared/ResourceCard";
import { Calendar, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface StudyGroupsTabProps {
  onCardClick: (path: string) => void;
}

const StudyGroupsTab = ({ onCardClick }: StudyGroupsTabProps) => {
  return (
    <Card className="border-[#FFC900]/20 bg-[#22251e]">
      <CardContent className="pt-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-[#FFC900]">My Study Groups</h3>
          <Badge variant="outline" className="bg-[#FFC900]/10 text-[#FFC900]">
            2 Active Groups
          </Badge>
        </div>
        
        <div className="space-y-4">
          <ResourceCard
            title="Level 2 Exam Preparation"
            description="Weekly group sessions focusing on exam techniques and revision for Level 2 Units"
            icon={<Calendar className="h-6 w-6" />}
            onClick={() => onCardClick("/apprentices/study-groups/1")}
          />
          <ResourceCard
            title="Practical Installation Skills"
            description="Practice group for sharing tips on practical installations and troubleshooting"
            icon={<Users className="h-6 w-6" />}
            onClick={() => onCardClick("/apprentices/study-groups/2")}
          />
        </div>
        
        <div className="mt-4 flex justify-end">
          <Badge 
            className="bg-[#FFC900] hover:bg-[#FFC900]/80 cursor-pointer text-black"
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
