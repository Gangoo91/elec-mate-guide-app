
import React, { useState, useMemo } from "react";
import { Mentor } from "@/types/mentor";
import { MentorCard } from "./MentorCard";
import { MentorFilters } from "./MentorFilters";
import LoadingSpinner from "@/components/LoadingSpinner";

interface MentorListProps {
  mentors: Mentor[];
  isLoading?: boolean;
  onRequestMentorship: (mentor: Mentor) => void;
}

export const MentorList = ({ mentors, isLoading = false, onRequestMentorship }: MentorListProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");
  const [selectedAvailability, setSelectedAvailability] = useState("all");

  // Extract unique specialties from mentors
  const availableSpecialties = useMemo(() => {
    const specialties = new Set<string>();
    mentors.forEach(mentor => {
      mentor.specialties.forEach(specialty => specialties.add(specialty));
    });
    return Array.from(specialties);
  }, [mentors]);

  // Filter mentors based on search, specialty and availability
  const filteredMentors = useMemo(() => {
    return mentors.filter(mentor => {
      const matchesSearch = 
        searchQuery === "" || 
        mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        mentor.title.toLowerCase().includes(searchQuery.toLowerCase());
        
      const matchesSpecialty = 
        selectedSpecialty === "all" || 
        mentor.specialties.includes(selectedSpecialty);
        
      const matchesAvailability = 
        selectedAvailability === "all" || 
        mentor.availability === selectedAvailability;
        
      return matchesSearch && matchesSpecialty && matchesAvailability;
    });
  }, [mentors, searchQuery, selectedSpecialty, selectedAvailability]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <LoadingSpinner size="lg" className="text-[#FFC900]" />
      </div>
    );
  }

  return (
    <div>
      <MentorFilters 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedSpecialty={selectedSpecialty}
        setSelectedSpecialty={setSelectedSpecialty}
        availableSpecialties={availableSpecialties}
        selectedAvailability={selectedAvailability}
        setSelectedAvailability={setSelectedAvailability}
      />
      
      {filteredMentors.length === 0 ? (
        <div className="text-center py-10 bg-[#22251e]/50 rounded-lg border border-[#FFC900]/10">
          <h3 className="text-lg font-medium text-[#FFC900]">No mentors found</h3>
          <p className="text-[#FFC900]/70 mt-2">Try adjusting your filters</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMentors.map((mentor) => (
            <MentorCard 
              key={mentor.id} 
              mentor={mentor} 
              onRequestMentorship={onRequestMentorship} 
            />
          ))}
        </div>
      )}
    </div>
  );
};
