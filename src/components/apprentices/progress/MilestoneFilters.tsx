
import React from 'react';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface MilestoneFiltersProps {
  filters: {
    status: string;
    type: string;
    search: string;
  };
  setFilters: React.Dispatch<React.SetStateAction<{
    status: string;
    type: string;
    search: string;
  }>>;
}

const MilestoneFilters = ({ filters, setFilters }: MilestoneFiltersProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
      <div className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search milestones..."
          value={filters.search}
          onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
          className="pl-8 w-full sm:w-[200px]"
        />
      </div>
      
      <Select 
        value={filters.status} 
        onValueChange={(value) => setFilters(prev => ({ ...prev, status: value }))}
      >
        <SelectTrigger className="w-full sm:w-[140px]">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Statuses</SelectItem>
          <SelectItem value="not_started">Not Started</SelectItem>
          <SelectItem value="in_progress">In Progress</SelectItem>
          <SelectItem value="completed">Completed</SelectItem>
        </SelectContent>
      </Select>
      
      <Select 
        value={filters.type} 
        onValueChange={(value) => setFilters(prev => ({ ...prev, type: value }))}
      >
        <SelectTrigger className="w-full sm:w-[160px]">
          <SelectValue placeholder="Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Types</SelectItem>
          <SelectItem value="qualification">Qualifications</SelectItem>
          <SelectItem value="certification">Certifications</SelectItem>
          <SelectItem value="skill">Skills</SelectItem>
          <SelectItem value="module">Modules</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default MilestoneFilters;
