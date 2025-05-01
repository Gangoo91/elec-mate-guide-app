
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';

type FiltersProps = {
  filters: {
    status: string;
    type: string;
    search: string;
    framework?: string;
    level?: string;
  };
  setFilters: React.Dispatch<React.SetStateAction<{
    status: string;
    type: string;
    search: string;
    framework?: string;
    level?: string;
  }>>;
}

const MilestoneFilters = ({ filters, setFilters }: FiltersProps) => {
  const clearFilters = () => {
    setFilters({
      status: 'all',
      type: 'all',
      search: '',
      framework: 'all',
      level: 'all'
    });
  };
  
  const hasActiveFilters = 
    filters.status !== 'all' || 
    filters.type !== 'all' || 
    filters.search !== '' ||
    (filters.framework && filters.framework !== 'all') ||
    (filters.level && filters.level !== 'all');

  return (
    <div className="w-full bg-[#22251e]/50 p-4 rounded-lg border border-[#FFC900]/20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div>
          <label className="text-xs text-[#FFC900]/70 mb-1 block">Status</label>
          <Select
            value={filters.status}
            onValueChange={(value) => setFilters({ ...filters, status: value })}
          >
            <SelectTrigger className="border-[#FFC900]/30">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="not_started">Not Started</SelectItem>
              <SelectItem value="in_progress">In Progress</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="text-xs text-[#FFC900]/70 mb-1 block">Type</label>
          <Select
            value={filters.type}
            onValueChange={(value) => setFilters({ ...filters, type: value })}
          >
            <SelectTrigger className="border-[#FFC900]/30">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="qualification">Qualification</SelectItem>
              <SelectItem value="certification">Certification</SelectItem>
              <SelectItem value="skill">Skill</SelectItem>
              <SelectItem value="module">Module</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="text-xs text-[#FFC900]/70 mb-1 block">Framework</label>
          <Select
            value={filters.framework || 'all'}
            onValueChange={(value) => setFilters({ ...filters, framework: value })}
          >
            <SelectTrigger className="border-[#FFC900]/30">
              <SelectValue placeholder="Filter by framework" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Frameworks</SelectItem>
              <SelectItem value="city_guilds">City & Guilds</SelectItem>
              <SelectItem value="eal">EAL</SelectItem>
              <SelectItem value="moet">MOET</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="text-xs text-[#FFC900]/70 mb-1 block">Level</label>
          <Select
            value={filters.level || 'all'}
            onValueChange={(value) => setFilters({ ...filters, level: value })}
          >
            <SelectTrigger className="border-[#FFC900]/30">
              <SelectValue placeholder="Filter by level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              <SelectItem value="level2">Level 2</SelectItem>
              <SelectItem value="level3">Level 3</SelectItem>
              <SelectItem value="level4">Level 4+</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="relative flex-grow">
          <Input
            placeholder="Search milestones..."
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            className="border-[#FFC900]/30 pl-3"
          />
          {filters.search && (
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-0 top-0 h-full px-3"
              onClick={() => setFilters({ ...filters, search: '' })}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
        
        {hasActiveFilters && (
          <Button 
            variant="outline" 
            size="sm"
            onClick={clearFilters}
            className="border-[#FFC900]/30 text-[#FFC900] whitespace-nowrap"
          >
            Clear Filters
          </Button>
        )}
      </div>
      
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2 mt-3">
          {filters.status !== 'all' && (
            <Badge variant="secondary" className="bg-[#FFC900]/20 text-[#FFC900] hover:bg-[#FFC900]/30">
              Status: {filters.status.replace('_', ' ')}
              <X 
                className="h-3 w-3 ml-1 cursor-pointer" 
                onClick={() => setFilters({ ...filters, status: 'all' })}
              />
            </Badge>
          )}
          
          {filters.type !== 'all' && (
            <Badge variant="secondary" className="bg-[#FFC900]/20 text-[#FFC900] hover:bg-[#FFC900]/30">
              Type: {filters.type}
              <X 
                className="h-3 w-3 ml-1 cursor-pointer" 
                onClick={() => setFilters({ ...filters, type: 'all' })}
              />
            </Badge>
          )}
          
          {filters.framework && filters.framework !== 'all' && (
            <Badge variant="secondary" className="bg-[#FFC900]/20 text-[#FFC900] hover:bg-[#FFC900]/30">
              Framework: {filters.framework.replace('_', ' ')}
              <X 
                className="h-3 w-3 ml-1 cursor-pointer" 
                onClick={() => setFilters({ ...filters, framework: 'all' })}
              />
            </Badge>
          )}
          
          {filters.level && filters.level !== 'all' && (
            <Badge variant="secondary" className="bg-[#FFC900]/20 text-[#FFC900] hover:bg-[#FFC900]/30">
              Level: {filters.level}
              <X 
                className="h-3 w-3 ml-1 cursor-pointer" 
                onClick={() => setFilters({ ...filters, level: 'all' })}
              />
            </Badge>
          )}
          
          {filters.search && (
            <Badge variant="secondary" className="bg-[#FFC900]/20 text-[#FFC900] hover:bg-[#FFC900]/30">
              Search: {filters.search}
              <X 
                className="h-3 w-3 ml-1 cursor-pointer" 
                onClick={() => setFilters({ ...filters, search: '' })}
              />
            </Badge>
          )}
        </div>
      )}
    </div>
  );
};

export default MilestoneFilters;
