
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
import { toast } from "sonner";

const FindMentors = () => {
  const { data: mentors, isLoading, error } = useDataCaching<Mentor>("mentors", "mentorships");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedSpecialty, setSelectedSpecialty] = React.useState("all");
  const [selectedAvailability, setSelectedAvailability] = React.useState("all");
  
  if (isLoading) return <MentorshipSkeleton />;
  if (error) return <MentorshipError />;

  const displayMentors = mentors || demoMentors;
  
  const handleRequestMentorship = (mentor: Mentor) => {
    toast.success(`Mentorship request sent to ${mentor.name}`);
  };

  return (
    <MainLayout>
      <div className="container py-8">
        <PageHeader
          title="Find Mentors"
          description="Browse available mentors and connect with professionals in the electrical industry"
        />
        
        <GlassCard className="mb-6">
          <MentorFilters
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedSpecialty={selectedSpecialty}
            setSelectedSpecialty={setSelectedSpecialty}
            availableSpecialties={[]}
            selectedAvailability={selectedAvailability}
            setSelectedAvailability={setSelectedAvailability}
          />
          
          <MentorList 
            mentors={displayMentors} 
            isLoading={false}
            onRequestMentorship={handleRequestMentorship} 
          />
        </GlassCard>
      </div>
    </MainLayout>
  );
};

export default FindMentors;
