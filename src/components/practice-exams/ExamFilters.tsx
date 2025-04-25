
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ExamFiltersProps {
  qualification: string;
  level: string;
  onQualificationChange: (value: string) => void;
  onLevelChange: (value: string) => void;
}

const ExamFilters = ({ qualification, level, onQualificationChange, onLevelChange }: ExamFiltersProps) => {
  const getLevelOptions = () => {
    if (qualification === 'City & Guilds') {
      return [
        { value: 'Level 2', label: 'Level 2' },
        { value: 'Level 3', label: 'Level 3' },
        { value: 'MOET', label: 'MOET' },
        { value: 'HNC', label: 'HNC' },
        { value: 'HND', label: 'HND' },
        { value: '2391', label: '2391 Inspection and Testing' }
      ];
    }
    if (qualification === 'EAL') {
      return [
        { value: 'Level 2', label: 'Level 2' },
        { value: 'Level 3', label: 'Level 3' },
        { value: 'Inspection', label: 'Inspection and Testing' }
      ];
    }
    return [];
  };

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
            {getLevelOptions().map((option) => (
              <SelectItem 
                key={option.value} 
                value={option.value} 
                className="text-[#FFC900]"
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ExamFilters;
