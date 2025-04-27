
import React from 'react';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

interface StudyGroupFiltersProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  levelFilter: string;
  onLevelFilterChange: (value: string) => void;
}

const StudyGroupFilters = ({
  searchQuery,
  onSearchChange,
  levelFilter,
  onLevelFilterChange
}: StudyGroupFiltersProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
      <div className="flex-1 w-full md:w-auto">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#FFC900]/40" />
          <Input
            placeholder="Search groups..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 bg-[#22251e] border-[#FFC900]/20 text-[#FFC900] w-full"
          />
        </div>
      </div>
      <div className="w-full md:w-[200px]">
        <Select onValueChange={onLevelFilterChange} value={levelFilter}>
          <SelectTrigger className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]">
            <SelectValue placeholder="Filter by level" />
          </SelectTrigger>
          <SelectContent className="bg-[#22251e] border-[#FFC900]/20">
            <SelectItem value="all">All Levels</SelectItem>
            <SelectItem value="beginner">Beginner</SelectItem>
            <SelectItem value="intermediate">Intermediate</SelectItem>
            <SelectItem value="advanced">Advanced</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default StudyGroupFilters;
