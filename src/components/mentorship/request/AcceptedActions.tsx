
import React from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { ChatButton } from "@/components/chat/ChatButton";
import { MentorshipRequest } from "../MentorshipRequestList";

interface AcceptedActionsProps {
  request: MentorshipRequest;
  onScheduleSession: (request: MentorshipRequest) => void;
  onStopMentoring: (request: MentorshipRequest) => void;
}

export const AcceptedActions = ({
  request,
  onScheduleSession,
  onStopMentoring,
}: AcceptedActionsProps) => {
  return (
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
  );
};
