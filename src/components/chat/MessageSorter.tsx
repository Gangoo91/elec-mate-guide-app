
import { Button } from "@/components/ui/button";
import { SortAsc, SortDesc } from "lucide-react";

interface MessageSorterProps {
  sortOrder: 'asc' | 'desc';
  onToggleSort: () => void;
}

export function MessageSorter({ sortOrder, onToggleSort }: MessageSorterProps) {
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={onToggleSort}
      className="flex items-center gap-1 text-[#FFC900]/70 hover:text-[#FFC900]"
      title={sortOrder === 'desc' ? 'Newest first' : 'Oldest first'}
    >
      {sortOrder === 'desc' ? (
        <>
          <SortDesc className="h-4 w-4" />
          <span className="sr-only md:not-sr-only md:inline-block">Newest first</span>
        </>
      ) : (
        <>
          <SortAsc className="h-4 w-4" />
          <span className="sr-only md:not-sr-only md:inline-block">Oldest first</span>
        </>
      )}
    </Button>
  );
}
