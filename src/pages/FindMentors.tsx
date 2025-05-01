
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import GlassCard from "@/components/shared/GlassCard";
import { useDataCaching } from "@/hooks/useDataCaching";
import { MentorshipSkeleton } from "@/components/mentorship/MentorshipSkeleton";
import { MentorshipError } from "@/components/mentorship/MentorshipError";
import { MentorList } from "@/components/mentorship/MentorList";
import { MentorFilters } from "@/components/mentorship/MentorFilters";
import { demoMentors } from "@/components/mentorship/demoData";
import { Mentor } from "@/types/mentor";

const FindMentors = () => {
  const { data: mentors, isLoading, error } = useDataCaching<Mentor>("mentors", "mentorships");
  const [filter, setFilter] = React.useState("");
  
  if (isLoading) return <MentorshipSkeleton />;
  if (error) return <MentorshipError />;

  const displayMentors = mentors || demoMentors;

  return (
    <MainLayout>
      <div className="container py-8">
        <PageHeader
          title="Find Mentors"
          description="Browse available mentors and connect with professionals in the electrical industry"
        />
        
        <GlassCard className="mb-6">
          <div className="w-full mb-6">
            <MentorFilters filter={filter} setFilter={setFilter} />
          </div>
          
          <MentorList mentors={displayMentors} filter={filter} />
        </GlassCard>
      </div>
    </MainLayout>
  );
};

export default FindMentors;
