
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import ResourceCard from "@/components/shared/ResourceCard";
import { BookOpen, Book, TestTube, Wrench, School } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface QualificationsTabProps {
  onCardClick: (path: string) => void;
}

const QualificationsTab = ({ onCardClick }: QualificationsTabProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="space-y-4 md:space-y-6">
      <Card className="border-[#FFC900]/20 bg-[#22251e]">
        <CardContent className="pt-4 md:pt-6">
          <h3 className="text-base md:text-lg font-semibold text-[#FFC900] mb-3 md:mb-4">City & Guilds Qualifications</h3>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
            <ResourceCard
              title="Level 2"
              description={isMobile ? "Level 2 Diploma in Electrical Installations" : "Level 2 Diploma in Electrical Installations (Buildings and Structures)"}
              icon={<BookOpen className="h-5 w-5 md:h-6 md:w-6" />}
              onClick={() => onCardClick("/apprentices/study-materials/city-guilds/level-2")}
            />
            <ResourceCard
              title="Level 3"
              description={isMobile ? "Level 3 Advanced Technical Diploma" : "Level 3 Advanced Technical Diploma in Electrical Installation"}
              icon={<Book className="h-5 w-5 md:h-6 md:w-6" />}
              onClick={() => onCardClick("/apprentices/study-materials/city-guilds/level-3")}
            />
            <ResourceCard
              title="AM2"
              description="AM2 Assessment preparation materials"
              icon={<TestTube className="h-5 w-5 md:h-6 md:w-6" />}
              onClick={() => onCardClick("/apprentices/study-materials/city-guilds/am2")}
            />
            <ResourceCard
              title="MOET"
              description={isMobile ? "Maintenance and Operations Engineering" : "Maintenance and Operations Engineering Technician qualification"}
              icon={<Wrench className="h-5 w-5 md:h-6 md:w-6" />}
              onClick={() => onCardClick("/apprentices/study-materials/city-guilds/moet")}
            />
          </div>
        </CardContent>
      </Card>
      
      <Card className="border-[#FFC900]/20 bg-[#22251e]">
        <CardContent className="pt-4 md:pt-6">
          <h3 className="text-base md:text-lg font-semibold text-[#FFC900] mb-3 md:mb-4">EAL Qualifications</h3>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
            <ResourceCard
              title="Level 2"
              description="EAL Level 2 Diploma in Electrical Installation"
              icon={<School className="h-5 w-5 md:h-6 md:w-6" />}
              onClick={() => onCardClick("/apprentices/study-materials/eal/level-2")}
            />
            <ResourceCard
              title="Level 3"
              description="EAL Level 3 Advanced Diploma in Electrical Installation"
              icon={<School className="h-5 w-5 md:h-6 md:w-6" />}
              onClick={() => onCardClick("/apprentices/study-materials/eal/level-3")}
            />
            <ResourceCard
              title="Inspection & Testing"
              description={isMobile ? "EAL inspection and testing resources" : "EAL inspection and testing qualification resources"}
              icon={<TestTube className="h-5 w-5 md:h-6 md:w-6" />}
              onClick={() => onCardClick("/apprentices/study-materials/eal/inspection-testing")}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QualificationsTab;
