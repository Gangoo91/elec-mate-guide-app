
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ExamFiltersProps {
  qualification: string;
  level: string;
  onQualificationChange: (value: string) => void;
  onLevelChange: (value: string) => void;
}

const ExamFilters = ({ qualification, level, onQualificationChange, onLevelChange }: ExamFiltersProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="w-full md:w-48">
        <Select value={qualification} onValueChange={onQualificationChange}>
          <SelectTrigger className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]">
            <SelectValue placeholder="Select qualification" />
          </SelectTrigger>
          <SelectContent className="bg-[#22251e] border-[#FFC900]/20">
            <SelectItem value="City & Guilds" className="text-[#FFC900]">City & Guilds</SelectItem>
            <SelectItem value="EAL" className="text-[#FFC900]">EAL</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="w-full md:w-48">
        <Select value={level} onValueChange={onLevelChange}>
          <SelectTrigger className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]">
            <SelectValue placeholder="Select level" />
          </SelectTrigger>
          <SelectContent className="bg-[#22251e] border-[#FFC900]/20">
            <SelectItem value="Level 2" className="text-[#FFC900]">Level 2</SelectItem>
            <SelectItem value="Level 3" className="text-[#FFC900]">Level 3</SelectItem>
            <SelectItem value="AM2" className="text-[#FFC900]">AM2</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ExamFilters;
