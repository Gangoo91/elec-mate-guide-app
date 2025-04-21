
import React from "react";
import { Search, X } from "lucide-react";

interface FAQSearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const FAQSearchBar = ({ searchQuery, setSearchQuery }: FAQSearchBarProps) => {
  return (
    <div className="max-w-2xl mx-auto mt-8 mb-6">
      <div className="relative">
        <label htmlFor="faq-search" className="sr-only">Search FAQs</label>
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#FFC900]" />
        <input
          id="faq-search"
          type="text"
          aria-label="Search FAQs for electrical professionals"
          placeholder="Search FAQs for electrical professionals..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-lg pl-10 pr-10 py-2 bg-[#22251e] border border-[#FFC900]/20 text-[#FFC900]/90 placeholder:text-[#FFC900]/50 focus:outline-none focus:border-[#FFC900]/50 focus:ring-1 focus:ring-[#FFC900]/30"
        />
        {searchQuery && (
          <button 
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#FFC900]/70 hover:text-[#FFC900]"
            aria-label="Clear search"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default FAQSearchBar;
