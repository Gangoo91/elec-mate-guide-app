
import React from 'react';
import StudyGroupCard from '../StudyGroupCard';
import type { StudyGroup } from '@/types/studyGroups';

interface StudyGroupsListProps {
  groups: StudyGroup[];
  memberCounts: Record<string, number>;
  userMemberships: Set<string>;
  onJoinLeave: (groupId: string, isMember: boolean) => void;
}

const StudyGroupsList = ({
  groups,
  memberCounts,
  userMemberships,
  onJoinLeave
}: StudyGroupsListProps) => {
  if (groups.length === 0) {
    return (
      <div className="col-span-full text-center py-8 text-[#FFC900]/60">
        No study groups found matching your criteria
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {groups.map(group => (
        <StudyGroupCard
          key={group.id}
          {...group}
          memberCount={memberCounts[group.id] || 0}
          isMember={userMemberships.has(group.id)}
          onJoinLeave={() => onJoinLeave(group.id, userMemberships.has(group.id))}
        />
      ))}
    </div>
  );
};

export default StudyGroupsList;
