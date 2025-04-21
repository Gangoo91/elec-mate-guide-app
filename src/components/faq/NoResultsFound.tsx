
import React from "react";
import { HelpCircle } from "lucide-react";

interface NoResultsFoundProps {
  onClearSearch: () => void;
}

const NoResultsFound = ({ onClearSearch }: NoResultsFoundProps) => {
  return (
    <div className="text-center py-8">
      <HelpCircle className="mx-auto h-12 w-12 text-[#FFC900]/40 mb-3" />
      <p className="text-[#FFC900]/60 text-lg">No FAQs found matching your search.</p>
      <button 
        onClick={onClearSearch}
        className="mt-3 text-[#FFC900] hover:text-[#FFC900]/80 underline"
      >
        Clear search
      </button>
    </div>
  );
};

export default NoResultsFound;
