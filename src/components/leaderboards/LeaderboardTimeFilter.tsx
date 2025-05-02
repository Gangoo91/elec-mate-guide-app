
import { Button } from "@/components/ui/button";

interface LeaderboardTimeFilterProps {
  currentFilter: 'week' | 'month' | 'allTime';
  onFilterChange: (filter: 'week' | 'month' | 'allTime') => void;
}

const LeaderboardTimeFilter = ({ currentFilter, onFilterChange }: LeaderboardTimeFilterProps) => {
  return (
    <div className="bg-[#22251e]/80 p-2 rounded-lg inline-flex gap-2 border border-[#FFC900]/20">
      <Button
        size="sm"
        variant={currentFilter === 'week' ? "default" : "ghost"}
        className={currentFilter === 'week' ? "bg-[#FFC900] text-black" : "text-[#FFC900]/70"}
        onClick={() => onFilterChange('week')}
      >
        This Week
      </Button>
      
      <Button
        size="sm"
        variant={currentFilter === 'month' ? "default" : "ghost"}
        className={currentFilter === 'month' ? "bg-[#FFC900] text-black" : "text-[#FFC900]/70"}
        onClick={() => onFilterChange('month')}
      >
        This Month
      </Button>
      
      <Button
        size="sm"
        variant={currentFilter === 'allTime' ? "default" : "ghost"}
        className={currentFilter === 'allTime' ? "bg-[#FFC900] text-black" : "text-[#FFC900]/70"}
        onClick={() => onFilterChange('allTime')}
      >
        All Time
      </Button>
    </div>
  );
};

export default LeaderboardTimeFilter;
