
import React from "react";
import { Star, Calendar, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Mentor } from "@/types/mentor";
import { Badge } from "@/components/ui/badge";

interface MentorCardProps {
  mentor: Mentor;
  onRequestMentorship: (mentor: Mentor) => void;
}

export const MentorCard = ({ mentor, onRequestMentorship }: MentorCardProps) => {
  const getAvailabilityColor = (availability: string) => {
    switch (availability.toLowerCase()) {
      case "high":
        return "bg-green-500/20 text-green-500 border-green-500/30";
      case "medium":
        return "bg-orange-500/20 text-orange-500 border-orange-500/30";
      case "low":
        return "bg-red-500/20 text-red-500 border-red-500/30";
      default:
        return "bg-[#FFC900]/10 text-[#FFC900] border-[#FFC900]/30";
    }
  };

  return (
    <div className="rounded-lg border border-[#FFC900]/20 bg-[#22251e] p-6 transition-all hover:border-[#FFC900]/40 hover:shadow-md hover:shadow-[#FFC900]/5 animate-scale-in">
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-[#FFC900] mb-1">{mentor.name}</h3>
          <p className="text-sm text-[#FFC900]/70 font-medium">{mentor.title}</p>
        </div>
        
        <div className="flex items-center mb-4 gap-2">
          <Calendar className="h-4 w-4 text-[#FFC900]" />
          <span className="text-sm text-[#FFC900]/80">{mentor.experience}</span>
          
          <Badge 
            variant="outline" 
            className={`ml-auto ${getAvailabilityColor(mentor.availability)}`}
          >
            {mentor.availability} Availability
          </Badge>
        </div>
        
        <div className="mb-6 grow">
          <div className="flex flex-wrap gap-2 mb-4">
            {mentor.specialties.map((specialty, i) => (
              <Badge 
                key={i} 
                variant="outline" 
                className="bg-[#FFC900]/10 border-[#FFC900]/30 text-[#FFC900]"
              >
                {specialty}
              </Badge>
            ))}
          </div>
          
          <div className="flex items-center text-sm text-[#FFC900]/60">
            <CheckCircle className="h-4 w-4 mr-2 text-[#FFC900]/60" />
            <span>Verified professional</span>
          </div>
        </div>
        
        <Button 
          onClick={() => onRequestMentorship(mentor)} 
          className="w-full bg-[#FFC900]/90 hover:bg-[#FFC900] text-[#151812]"
        >
          Request Mentorship
        </Button>
      </div>
    </div>
  );
};
