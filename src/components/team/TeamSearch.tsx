import { Search } from "lucide-react";
import { TeamSearchProps } from "@/types/team";

export function TeamSearch({ searchTerm, onSearchChange }: TeamSearchProps) {
  return (
    <div className="relative flex-1 max-w-lg">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-[#FFC900]/50" />
      </div>
      <input
        type="text"
        placeholder="Search team members by name, role, or skills..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full pl-10 pr-4 py-2 border border-[#FFC900]/30 rounded-md bg-[#22251e] text-[#FFC900] focus:outline-none focus:border-[#FFC900]/70"
      />
    </div>
  );
}
