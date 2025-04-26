
import { User, Phone, Mail, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { TeamMemberListProps, TeamMember } from "@/types/team";

export function TeamMemberList({ teamMembers, isLoading, onMemberClick }: TeamMemberListProps) {
  if (isLoading) {
    return (
      <>
        {Array(3).fill(0).map((_, index) => (
          <Card key={index} className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="p-6">
              <div className="w-full h-24 bg-[#333]/20 rounded-md animate-pulse"></div>
            </CardContent>
          </Card>
        ))}
      </>
    );
  }

  if (teamMembers.length === 0) {
    return (
      <div className="text-center py-8">
        <User className="h-12 w-12 text-[#FFC900]/50 mx-auto mb-4" />
        <h3 className="text-xl text-[#FFC900]">No Team Members Found</h3>
        <p className="text-[#FFC900]/70 mt-2">Try adjusting your search term or add new team members</p>
      </div>
    );
  }

  return (
    <>
      {teamMembers.map(member => (
        <Card 
          key={member.id} 
          className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300 cursor-pointer"
          onClick={() => onMemberClick(member)}
        >
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-[#FFC900] font-medium text-lg flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  {member.name}
                </h3>
                <p className="text-[#FFC900]/70 text-sm flex items-center mt-1">
                  <Briefcase className="h-4 w-4 mr-2" />
                  {member.role}
                </p>
              </div>
              
              <div className="flex flex-col space-y-1">
                <p className="text-[#FFC900]/70 text-sm flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  {member.phone || "No phone number"}
                </p>
                <p className="text-[#FFC900]/70 text-sm flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  {member.email || "No email"}
                </p>
              </div>
            </div>
            
            <div className="mt-4">
              <p className="text-[#FFC900]/80 text-sm">
                <span className="font-medium">Availability:</span> {member.availability}
              </p>
              
              <div className="mt-2">
                <p className="text-[#FFC900]/80 text-sm font-medium mb-1">Skills:</p>
                <div className="flex flex-wrap gap-2">
                  {member.skills?.map((skill, index) => (
                    <span 
                      key={index}
                      className="bg-[#FFC900]/10 text-[#FFC900] text-xs px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
