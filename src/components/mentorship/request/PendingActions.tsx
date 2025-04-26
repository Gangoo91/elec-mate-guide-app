
import React from "react";
import { Button } from "@/components/ui/button";
import { MentorshipRequest } from "../MentorshipRequestList";

interface PendingActionsProps {
  request: MentorshipRequest;
  onAcceptRequest: (request: MentorshipRequest) => void;
  onRejectRequest: (request: MentorshipRequest) => void;
}

export const PendingActions = ({
  request,
  onAcceptRequest,
  onRejectRequest,
}: PendingActionsProps) => {
  return (
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
  );
};
