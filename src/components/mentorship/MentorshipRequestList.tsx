
import React, { useState } from "react";
import { toast } from "sonner";
import LoadingSpinner from "@/components/LoadingSpinner";
import { MentorshipRequestCard } from "./request/MentorshipRequestCard";
import { RequestFilter } from "./request/RequestFilter";
import { StopMentoringDialog } from "./request/StopMentoringDialog";

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
  const [requestToStop, setRequestToStop] = useState<MentorshipRequest | null>(null);

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
      setTimeout(() => setCopiedRequestId(null), 2000);
    }).catch(err => {
      console.error('Failed to copy:', err);
      toast.error("Failed to copy request details");
    });
  };

  const handleStopMentoring = () => {
    if (requestToStop) {
      toast.success(`Stopped mentoring ${requestToStop.apprenticeName}`);
      onRejectRequest(requestToStop);
      setRequestToStop(null);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center py-12">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  const filteredRequests = requests.filter(request => 
    filter === "all" || 
    (filter === "pending" && request.status === "pending") ||
    (filter === "accepted" && request.status === "accepted")
  );

  return (
    <>
      <RequestFilter filter={filter} setFilter={setFilter} />

      <div className="w-full max-w-2xl space-y-4">
        {filteredRequests.length === 0 ? (
          <div className="text-center py-10 bg-[#22251e]/50 rounded-lg border border-[#FFC900]/10">
            <h3 className="text-lg font-medium text-[#FFC900]">No requests found</h3>
            <p className="text-[#FFC900]/70 mt-2">Try adjusting your filters</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredRequests.map((request) => (
              <MentorshipRequestCard
                key={request.id}
                request={request}
                onAcceptRequest={onAcceptRequest}
                onRejectRequest={onRejectRequest}
                onScheduleSession={onScheduleSession}
                onStopMentoring={setRequestToStop}
                copiedRequestId={copiedRequestId}
                onCopyRequest={handleCopyRequest}
              />
            ))}
          </div>
        )}
      </div>

      <StopMentoringDialog
        request={requestToStop}
        onOpenChange={(open) => !open && setRequestToStop(null)}
        onConfirm={handleStopMentoring}
      />
    </>
  );
};
