
import React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

interface MatesSearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  specialty: string;
  onSpecialtyChange: (value: string) => void;
  allSpecialties: string[];
}

export const MatesSearch = ({
  searchTerm,
  onSearchChange,
  specialty,
  onSpecialtyChange,
  allSpecialties
}: MatesSearchProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <div className="relative flex-1">
        <Input
          placeholder="Search by name or description..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 bg-[#22251e] border-[#FFC900]/20"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-[#FFC900]/70" />
      </div>
      
      <Select value={specialty} onValueChange={onSpecialtyChange}>
        <SelectTrigger className="w-full md:w-[220px] bg-[#22251e] border-[#FFC900]/20">
          <SelectValue placeholder="Filter by specialty" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All specialties</SelectItem>
          {allSpecialties.map((spec) => (
            <SelectItem key={spec} value={spec}>
              {spec}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
