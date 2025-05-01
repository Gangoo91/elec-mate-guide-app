
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MentorshipHero } from "@/components/mentorship/MentorshipHero";
import BecomeMentorToggle from "@/components/mentorship/BecomeMentorToggle";

interface MentorshipHeroCardProps {
  isElectriciansSection: boolean;
  mentorsCount: number;
  pendingRequestsCount?: number;
}

const MentorshipHeroCard = ({ 
  isElectriciansSection, 
  mentorsCount, 
  pendingRequestsCount 
}: MentorshipHeroCardProps) => {
  return (
    <Card className="mb-6 bg-gradient-to-r from-[#22251e] to-[#22251e]/80 border-[#FFC900]/20">
      <CardContent className="p-6">
        <MentorshipHero 
          isElectriciansSection={isElectriciansSection} 
          mentorsCount={mentorsCount}
          requestsCount={isElectriciansSection ? pendingRequestsCount : undefined}
        />
        
        {isElectriciansSection && (
          <div className="mt-6">
            <BecomeMentorToggle />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MentorshipHeroCard;
