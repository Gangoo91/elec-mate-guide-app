
import { TeamMemberCard } from "./TeamMemberCard";
import { TeamMemberPresence } from "@/hooks/useTeamPresence";
import { TeamMember } from "@/hooks/useTeamMembers";

interface TeamMemberListProps {
  teamMembers: TeamMember[];
  presenceData: TeamMemberPresence[];
  onMemberClick: (member: TeamMember) => void;
}

export function TeamMemberList({ teamMembers, presenceData, onMemberClick }: TeamMemberListProps) {
  const getPresenceForMember = (memberId: string) => {
    return presenceData.find(p => p.user_id === memberId);
  };

  return (
    <div className="space-y-3">
      {teamMembers.map((member) => (
        <TeamMemberCard
          key={member.id}
          member={member}
          presence={getPresenceForMember(member.id)}
          onClick={() => onMemberClick(member)}
        />
      ))}
    </div>
  );
}
