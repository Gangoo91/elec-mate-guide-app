
import React, { memo } from "react";
import { HelpCircle, Search, MessagesSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface NoResultsFoundProps {
  onClearSearch: () => void;
}

const NoResultsFound = memo(({ onClearSearch }: NoResultsFoundProps) => {
  const navigate = useNavigate();
  
  return (
    <div className="text-center py-10 px-4">
      <HelpCircle className="mx-auto h-12 w-12 text-[#FFC900]/40 mb-4" />
      <h3 className="text-xl font-medium text-[#FFC900]/90 mb-2">No FAQs found matching your search</h3>
      <p className="text-[#FFC900]/60 text-base max-w-md mx-auto mb-6">
        We couldn't find any FAQ entries that match your search criteria. Try different keywords or browse by category.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          onClick={onClearSearch}
          variant="outline"
          className="border-[#FFC900]/40 text-[#FFC900] hover:bg-[#FFC900]/10"
        >
          <Search className="mr-2 h-4 w-4" />
          Clear search
        </Button>
        
        <Button 
          onClick={() => navigate("/mental-health")}
          className="bg-[#FFC900] text-[#151812] hover:bg-[#FFC900]/90"
        >
          <MessagesSquare className="mr-2 h-4 w-4" />
          Get personalized help
        </Button>
      </div>
    </div>
  );
});

NoResultsFound.displayName = 'NoResultsFound';

export default NoResultsFound;
