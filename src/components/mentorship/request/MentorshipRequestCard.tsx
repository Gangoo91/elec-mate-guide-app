
import React from "react";
import { Button } from "@/components/ui/button";
import { Copy, CheckCheck } from "lucide-react";
import { MentorshipRequest } from "../MentorshipRequestList";
import { PendingActions } from "./PendingActions";
import { AcceptedActions } from "./AcceptedActions";

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
        <p className="text-[#FFC900]/80 text-sm line-clamp-3">{request.message}</p>
        <div className="text-[#FFC900]/60 text-xs mt-2">
          <span className="font-medium">Expertise:</span>{" "}
          {request.expertise.join(", ")}
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        {request.status === "pending" ? (
          <PendingActions
            request={request}
            onAcceptRequest={onAcceptRequest}
            onRejectRequest={onRejectRequest}
          />
        ) : request.status === "accepted" && (
          <AcceptedActions
            request={request}
            onScheduleSession={onScheduleSession}
            onStopMentoring={onStopMentoring}
          />
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
