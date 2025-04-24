
import React from "react";
import { Users, FilterX, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface MentorshipHeroProps {
  isElectriciansSection: boolean;
  mentorsCount: number;
  requestsCount?: number;
}

export const MentorshipHero = ({ 
  isElectriciansSection, 
  mentorsCount,
  requestsCount = 0
}: MentorshipHeroProps) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-4 mt-6 mb-6 bg-gradient-to-r from-[#22251e] to-[#22251e]/50 p-4 rounded-lg border border-[#FFC900]/20">
      <div className="flex items-center gap-3">
        <div className="bg-[#FFC900]/10 p-3 rounded-full">
          <GraduationCap className="h-6 w-6 text-[#FFC900]" />
        </div>
        <div>
          {isElectriciansSection ? (
            <>
              <h2 className="text-xl font-semibold text-[#FFC900]">
                Mentor Connect Hub
              </h2>
              <p className="text-sm text-[#FFC900]/70">
                View and respond to mentorship requests from apprentices seeking your expertise
              </p>
            </>
          ) : (
            <>
              <h2 className="text-xl font-semibold text-[#FFC900]">
                Find Your Mentor
              </h2>
              <p className="text-sm text-[#FFC900]/70">
                Connect with experienced electricians ready to guide you through your apprenticeship journey
              </p>
            </>
          )}
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        {isElectriciansSection ? (
          <Badge variant="outline" className="border-[#FFC900]/20 bg-[#FFC900]/10 text-[#FFC900] text-sm py-2 px-3">
            {requestsCount} {requestsCount === 1 ? 'Request' : 'Requests'} pending
          </Badge>
        ) : (
          <Badge variant="outline" className="border-[#FFC900]/20 bg-[#FFC900]/10 text-[#FFC900] text-sm py-2 px-3">
            {mentorsCount} {mentorsCount === 1 ? 'Mentor' : 'Mentors'} available
          </Badge>
        )}
      </div>
    </div>
  );
};
