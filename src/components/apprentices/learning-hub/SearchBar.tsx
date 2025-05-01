
import React from 'react';
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="relative mb-8">
      <Input
        type="search"
        placeholder="Search learning resources, qualifications, tools..."
        value={value}
        onChange={onChange}
        className="w-full bg-[#22251e] border-[#FFC900]/20 text-[#FFC900] placeholder-[#FFC900]/50"
      />
    </div>
  );
};

export default SearchBar;
