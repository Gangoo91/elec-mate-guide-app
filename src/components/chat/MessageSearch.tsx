
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface MessageSearchProps {
  onSearch: (query: string) => void;
}

export function MessageSearch({ onSearch }: MessageSearchProps) {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} className="relative mb-4">
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search messages..."
        className="bg-[#333] border-[#444] text-[#FFC900] pl-10"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#FFC900]/50" />
    </form>
  );
}
