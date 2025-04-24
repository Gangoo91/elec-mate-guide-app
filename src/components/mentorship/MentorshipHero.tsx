
import React from "react";
import { Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface MentorshipHeroProps {
  isElectriciansSection: boolean;
  mentorsCount: number;
}

export const MentorshipHero = ({ isElectriciansSection, mentorsCount }: MentorshipHeroProps) => {
  return (
    <div className="flex items-center justify-between gap-2 mt-6 mb-4">
      <div className="flex items-center gap-2">
        <Users className="h-5 w-5 text-[#FFC900]" />
        <h2 className="text-xl font-semibold text-[#FFC900]">Available Mentors</h2>
      </div>
      <Badge variant="outline" className="border-[#FFC900]/20 text-[#FFC900]">
        {mentorsCount} Mentors
      </Badge>
    </div>
  );
};
