
import React, { useState } from "react";
import { Filter, Calendar, CheckCircle, XCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
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
  
  const filteredRequests = requests.filter(request => {
    if (filter === "all") return true;
    if (filter === "pending") return request.status === "pending";
    if (filter === "accepted") return request.status === "accepted";
    return true;
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <LoadingSpinner size="lg" className="text-[#FFC900]" />
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6 flex justify-end">
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
      
      {filteredRequests.length === 0 ? (
        <div className="text-center py-10 bg-[#22251e]/50 rounded-lg border border-[#FFC900]/10">
          <h3 className="text-lg font-medium text-[#FFC900]">No mentorship requests</h3>
          <p className="text-[#FFC900]/70 mt-2">
            {filter === "pending" 
              ? "You don't have any pending requests at the moment" 
              : filter === "accepted"
                ? "You haven't accepted any mentorship requests yet"
                : "No mentorship requests available"
            }
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {filteredRequests.map((request) => (
            <Card 
              key={request.id} 
              className="p-6 border border-[#FFC900]/20 bg-[#22251e] hover:border-[#FFC900]/40 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-medium text-[#FFC900]">{request.apprenticeName}</h3>
                    <Badge 
                      variant="outline" 
                      className={request.status === "pending" 
                        ? "bg-orange-500/10 text-orange-500 border-orange-500/30" 
                        : request.status === "accepted" 
                          ? "bg-green-500/10 text-green-500 border-green-500/30"
                          : "bg-red-500/10 text-red-500 border-red-500/30"
                      }
                    >
                      {request.status === "pending" ? "Pending" : request.status === "accepted" ? "Accepted" : "Rejected"}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-[#FFC900]/70 mb-2">
                    <span className="font-medium">Request date:</span> {new Date(request.requestDate).toLocaleDateString()}
                  </p>
                  
                  <div className="mb-3">
                    <p className="text-sm text-[#FFC900]/90 mb-1">Seeking help with:</p>
                    <div className="flex flex-wrap gap-2">
                      {request.expertise.map((item, i) => (
                        <Badge key={i} variant="outline" className="bg-[#FFC900]/10 text-[#FFC900]/80 border-[#FFC900]/30">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-[#151812] p-3 rounded-md border border-[#FFC900]/10 mb-3">
                    <p className="text-sm text-[#FFC900]/80 italic">"{request.message}"</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-2 md:items-center">
                  {request.status === "pending" ? (
                    <>
                      <Button 
                        onClick={() => onAcceptRequest(request)}
                        className="bg-green-500/80 hover:bg-green-500 text-white"
                        size="sm"
                      >
                        <CheckCircle className="h-4 w-4 mr-2" /> Accept
                      </Button>
                      <Button 
                        onClick={() => onRejectRequest(request)}
                        variant="outline" 
                        className="border-red-500/50 text-red-500 hover:bg-red-500/10"
                        size="sm"
                      >
                        <XCircle className="h-4 w-4 mr-2" /> Decline
                      </Button>
                    </>
                  ) : request.status === "accepted" && (
                    <Button 
                      onClick={() => onScheduleSession(request)}
                      className="bg-[#FFC900]/80 hover:bg-[#FFC900] text-[#151812]"
                      size="sm"
                    >
                      <Calendar className="h-4 w-4 mr-2" /> Schedule Session
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
