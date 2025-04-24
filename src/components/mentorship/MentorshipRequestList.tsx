
import React, { useState } from "react";
import { Filter, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import LoadingSpinner from "@/components/LoadingSpinner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export interface MentorshipRequest {
  id: string;
  apprenticeName: string;
  apprenticeId: string;
  message: string;
  requestDate: string;
  status: "pending" | "accepted" | "rejected";
  expertise: string[];
}

interface MentorshipRequestListProps {
  requests: MentorshipRequest[];
  isLoading?: boolean;
  onAcceptRequest: (request: MentorshipRequest) => void;
  onRejectRequest: (request: MentorshipRequest) => void;
  onScheduleSession: (request: MentorshipRequest) => void;
}

export const MentorshipRequestList = ({ 
  requests, 
  isLoading = false,
  onAcceptRequest,
  onRejectRequest,
  onScheduleSession
}: MentorshipRequestListProps) => {
  const [filter, setFilter] = useState<"pending" | "accepted" | "all">("pending");

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <LoadingSpinner size="lg" className="text-[#FFC900]" />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center space-y-6">
      <h2 className="text-lg font-semibold text-[#FFC900]">Filter Mentorship Requests</h2>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="outline" 
            className="border-[#FFC900]/20 text-[#FFC900] hover:bg-[#FFC900]/10"
          >
            <Filter className="mr-2 h-4 w-4" />
            {filter === "pending" 
              ? "Pending Requests" 
              : filter === "accepted" 
                ? "Accepted Requests" 
                : "All Requests"
            }
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-[#22251e] border border-[#FFC900]/20">
          <DropdownMenuItem 
            className="text-[#FFC900] focus:bg-[#FFC900]/10 focus:text-[#FFC900]"
            onClick={() => setFilter("pending")}
          >
            Pending Requests
          </DropdownMenuItem>
          <DropdownMenuItem 
            className="text-[#FFC900] focus:bg-[#FFC900]/10 focus:text-[#FFC900]"
            onClick={() => setFilter("accepted")}
          >
            Accepted Requests
          </DropdownMenuItem>
          <DropdownMenuItem 
            className="text-[#FFC900] focus:bg-[#FFC900]/10 focus:text-[#FFC900]"
            onClick={() => setFilter("all")}
          >
            All Requests
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
