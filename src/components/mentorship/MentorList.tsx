
import React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Clock } from "lucide-react";
import { Mentor } from "@/types/mentor";

interface MentorListProps {
  mentors: Mentor[];
  onRequestMentorship: (mentor: Mentor) => void;
}

export const MentorList = ({ mentors, onRequestMentorship }: MentorListProps) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {mentors.map((mentor) => (
        <Card key={mentor.id} className="border-[#FFC900]/20 transition-all hover:border-[#FFC900]/40">
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle className="text-[#FFC900]">{mentor.name}</CardTitle>
              <Badge 
                variant="outline" 
                className={`
                  ${mentor.availability === 'High' ? 'border-green-500 text-green-500' : ''} 
                  ${mentor.availability === 'Medium' ? 'border-yellow-500 text-yellow-500' : ''} 
                  ${mentor.availability === 'Low' ? 'border-red-500 text-red-500' : ''}
                `}
              >
                {mentor.availability} Availability
              </Badge>
            </div>
            <p className="font-medium text-gray-400">{mentor.title}</p>
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <Clock className="h-3.5 w-3.5" />
              <span>{mentor.experience} experience</span>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-2">Specialties:</p>
            <div className="flex flex-wrap gap-2">
              {mentor.specialties?.map((specialty) => (
                <Badge key={specialty} variant="secondary" className="bg-[#FFC900]/10 text-[#FFC900]">
                  {specialty}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button 
              variant="outline" 
              className="w-full border-[#FFC900]/50 text-[#FFC900] hover:bg-[#FFC900]/10"
              onClick={() => onRequestMentorship(mentor)}
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Request Mentorship
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
