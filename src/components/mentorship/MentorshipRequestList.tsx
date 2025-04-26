
import React, { useState } from "react";
import { Filter, ChevronDown, Copy, CheckCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChatButton } from "@/components/chat/ChatButton";
import LoadingSpinner from "@/components/LoadingSpinner";
import { toast } from "sonner";
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
  const [copiedRequestId, setCopiedRequestId] = useState<string | null>(null);

  const handleCopyRequest = (request: MentorshipRequest) => {
    const requestDetails = `
Apprentice: ${request.apprenticeName}
Message: ${request.message}
Expertise: ${request.expertise.join(", ")}
Request Date: ${new Date(request.requestDate).toLocaleDateString()}
    `.trim();

    navigator.clipboard.writeText(requestDetails).then(() => {
      toast.success("Request details copied to clipboard");
      setCopiedRequestId(request.id);
      
      // Reset copied state after 2 seconds
      setTimeout(() => setCopiedRequestId(null), 2000);
    }).catch(err => {
      console.error('Failed to copy:', err);
      toast.error("Failed to copy request details");
    });
  };

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

      <div className="w-full max-w-2xl space-y-4">
        {requests
          .filter(request => 
            filter === "all" || 
            (filter === "pending" && request.status === "pending") ||
            (filter === "accepted" && request.status === "accepted")
          )
          .map(request => (
            <div 
              key={request.id} 
              className="bg-[#2C2F24] rounded-lg p-4 border border-[#FFC900]/20 flex flex-col md:flex-row md:items-center justify-between"
            >
              <div className="flex-grow pr-4 mb-3 md:mb-0">
                <h3 className="text-[#FFC900] font-semibold">{request.apprenticeName}</h3>
                <p className="text-[#FFC900]/80 text-sm">{request.message}</p>
                <div className="text-[#FFC900]/60 text-xs mt-2">
                  Expertise: {request.expertise.join(", ")}
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {request.status === "pending" ? (
                  <>
                    <Button 
                      variant="outline" 
                      onClick={() => onAcceptRequest(request)}
                      className="text-green-500 border-green-500/20 hover:bg-green-500/10"
                    >
                      Accept
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => onRejectRequest(request)}
                      className="text-red-500 border-red-500/20 hover:bg-red-500/10"
                    >
                      Decline
                    </Button>
                  </>
                ) : request.status === "accepted" && (
                  <div className="flex items-center gap-2">
                    <ChatButton 
                      recipientId={request.apprenticeId}
                      recipientName={request.apprenticeName}
                      chatType="mentor"
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-[#FFC900] border-[#FFC900]/20 hover:bg-[#FFC900]/10 whitespace-nowrap"
                      onClick={() => onScheduleSession(request)}
                    >
                      Schedule Session
                    </Button>
                  </div>
                )}
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => handleCopyRequest(request)}
                  className="text-[#FFC900] hover:bg-[#FFC900]/10"
                >
                  {copiedRequestId === request.id ? (
                    <CheckCheck className="h-5 w-5" />
                  ) : (
                    <Copy className="h-5 w-5" />
                  )}
                </Button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
