
import React, { useState } from 'react';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import CreateStudyGroupDialog from "@/components/apprentices/study-groups/CreateStudyGroupDialog";
import StudyGroupFilters from "@/components/apprentices/study-groups/StudyGroupFilters";
import StudyGroupsList from "@/components/apprentices/study-groups/StudyGroupsList";
import { useStudyGroups } from "@/hooks/useStudyGroups";

const StudyGroupsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [levelFilter, setLevelFilter] = useState<string>("all");
  const { groups, memberCounts, userMemberships, isLoading, fetchGroups, handleJoinLeave } = useStudyGroups();

  const filteredGroups = groups.filter(group => {
    const matchesSearch = group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         group.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (group.description && group.description.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesLevel = levelFilter === "all" || group.level === levelFilter;
    return matchesSearch && matchesLevel;
  });

  return (
    <MainLayout>
      <div className="container px-4 py-6">
        <PageHeader
          title="Study Groups"
          description="Join or create study groups to learn together with fellow apprentices"
        />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <StudyGroupFilters
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            levelFilter={levelFilter}
            onLevelFilterChange={setLevelFilter}
          />
          <div className="w-full md:w-auto">
            <CreateStudyGroupDialog onGroupCreated={() => fetchGroups()} />
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-8">
            <div className="h-8 w-8 rounded-full border-2 border-[#FFC900]/80 border-t-transparent animate-spin"></div>
          </div>
        ) : (
          <StudyGroupsList
            groups={filteredGroups}
            memberCounts={memberCounts}
            userMemberships={userMemberships}
            onJoinLeave={handleJoinLeave}
          />
        )}
      </div>
    </MainLayout>
  );
};

export default StudyGroupsPage;
