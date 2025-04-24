
import React from "react";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

interface MentorFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedSpecialty: string;
  setSelectedSpecialty: (specialty: string) => void;
  availableSpecialties: string[];
  selectedAvailability: string;
  setSelectedAvailability: (availability: string) => void;
}

export const MentorFilters = ({
  searchQuery,
  setSearchQuery,
  selectedSpecialty,
  setSelectedSpecialty,
  availableSpecialties,
  selectedAvailability,
  setSelectedAvailability
}: MentorFiltersProps) => {
  return (
    <div className="space-y-4 mb-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-[#FFC900]/60" />
          <Input
            type="text"
            placeholder="Search mentors by name or title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 border-[#FFC900]/20 bg-[#22251e] focus-visible:ring-[#FFC900]"
          />
        </div>
        
        <div className="flex gap-2 sm:w-auto">
          <div className="w-full sm:w-48">
            <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
              <SelectTrigger className="border-[#FFC900]/20 bg-[#22251e] focus:ring-[#FFC900]">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-[#FFC900]/60" />
                  <SelectValue placeholder="Specialty" />
                </div>
              </SelectTrigger>
              <SelectContent className="bg-[#18191B] border-[#FFC900]/20">
                <SelectItem value="all">All Specialties</SelectItem>
                {availableSpecialties.map((specialty) => (
                  <SelectItem key={specialty} value={specialty}>
                    {specialty}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="w-full sm:w-48">
            <Select value={selectedAvailability} onValueChange={setSelectedAvailability}>
              <SelectTrigger className="border-[#FFC900]/20 bg-[#22251e] focus:ring-[#FFC900]">
                <SelectValue placeholder="Availability" />
              </SelectTrigger>
              <SelectContent className="bg-[#18191B] border-[#FFC900]/20">
                <SelectItem value="all">All Availability</SelectItem>
                <SelectItem value="High">High Availability</SelectItem>
                <SelectItem value="Medium">Medium Availability</SelectItem>
                <SelectItem value="Low">Low Availability</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {searchQuery && (
          <Badge 
            variant="outline" 
            className="bg-[#FFC900]/10 border-[#FFC900]/30 text-[#FFC900] px-3 py-1"
            onClick={() => setSearchQuery("")}
          >
            Search: {searchQuery}
            <span className="ml-1 cursor-pointer">×</span>
          </Badge>
        )}
        
        {selectedSpecialty !== "all" && (
          <Badge 
            variant="outline" 
            className="bg-[#FFC900]/10 border-[#FFC900]/30 text-[#FFC900] px-3 py-1"
            onClick={() => setSelectedSpecialty("all")}
          >
            Specialty: {selectedSpecialty}
            <span className="ml-1 cursor-pointer">×</span>
          </Badge>
        )}
        
        {selectedAvailability !== "all" && (
          <Badge 
            variant="outline" 
            className="bg-[#FFC900]/10 border-[#FFC900]/30 text-[#FFC900] px-3 py-1"
            onClick={() => setSelectedAvailability("all")}
          >
            Availability: {selectedAvailability}
            <span className="ml-1 cursor-pointer">×</span>
          </Badge>
        )}
      </div>
    </div>
  );
};
