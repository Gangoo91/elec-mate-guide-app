
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";
import { useTeamPresence } from "@/hooks/useTeamPresence";
import { OnlineIndicator } from "./OnlineIndicator";
import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";

export function ProjectTeamSection() {
  const { presenceData } = useTeamPresence();
  const { user } = useAuth();

  const teamMembers = [
    { id: "1", name: "John Smith", role: "Project Manager" },
    { id: "2", name: "Sarah Wilson", role: "Lead Electrician" },
    { id: "3", name: "Mike Johnson", role: "Apprentice" },
  ];

  const getPresenceForMember = (memberId: string) => {
    return presenceData.find(p => p.user_id === memberId);
  };

  return (
    <Card className="bg-[#333] border-[#444]">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-[#FFC900]">
          <Users className="inline-block w-4 h-4 mr-2" /> Team Members
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="space-y-3">
          {teamMembers.map((member) => {
            const presence = getPresenceForMember(member.id);
            return (
              <div key={member.id} className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#FFC900]">{member.name}</p>
                  <p className="text-xs text-[#FFC900]/70">{member.role}</p>
                </div>
                <OnlineIndicator online={presence?.online} />
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
