
import React from "react";
import { Button } from "@/components/ui/button";
import { Copy, CheckCheck, X } from "lucide-react";
import { ChatButton } from "@/components/chat/ChatButton";
import { MentorshipRequest } from "../MentorshipRequestList";

interface MentorshipRequestCardProps {
  request: MentorshipRequest;
  onAcceptRequest: (request: MentorshipRequest) => void;
  onRejectRequest: (request: MentorshipRequest) => void;
  onScheduleSession: (request: MentorshipRequest) => void;
  onStopMentoring: (request: MentorshipRequest) => void;
  copiedRequestId: string | null;
  onCopyRequest: (request: MentorshipRequest) => void;
}

export const MentorshipRequestCard = ({
  request,
  onAcceptRequest,
  onRejectRequest,
  onScheduleSession,
  onStopMentoring,
  copiedRequestId,
  onCopyRequest,
}: MentorshipRequestCardProps) => {
  return (
    <div className="bg-[#2C2F24] rounded-lg p-4 border border-[#FFC900]/20 flex flex-col md:flex-row md:items-center justify-between">
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
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onStopMentoring(request)}
              className="text-red-500 hover:bg-red-500/10"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Stop mentoring</span>
            </Button>
          </div>
        )}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => onCopyRequest(request)}
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
  );
};
