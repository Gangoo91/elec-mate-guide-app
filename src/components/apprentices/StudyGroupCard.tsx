
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { formatDistanceToNow } from "date-fns";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface StudyGroupProps {
  id: string;
  name: string;
  description: string;
  topic: string;
  level: string;
  maxParticipants: number;
  createdBy: string;
  nextMeetingAt: string | null;
  meetingLink: string | null;
  memberCount: number;
  isMember: boolean;
  onJoinLeave: () => void;
}

const StudyGroupCard = ({
  id,
  name,
  description,
  topic,
  level,
  maxParticipants,
  nextMeetingAt,
  meetingLink,
  memberCount,
  isMember,
  onJoinLeave
}: StudyGroupProps) => {
  const { user } = useAuth();
  const { toast } = useToast();

  const handleJoinLeave = async () => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please log in to join study groups",
        variant: "destructive",
      });
      return;
    }

    onJoinLeave();
  };

  return (
    <Card className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-[#FFC900]">{name}</h3>
            <p className="text-sm text-[#FFC900]/70">{topic}</p>
          </div>
          <span className="px-2 py-1 text-xs rounded-full bg-[#FFC900]/10 text-[#FFC900]">
            Level: {level}
          </span>
        </div>
      </CardHeader>
      <CardContent className="pb-3">
        <p className="text-[#FFC900]/80 text-sm mb-3">{description}</p>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-[#FFC900]/60">Members</span>
            <span className="text-[#FFC900]">{memberCount} / {maxParticipants}</span>
          </div>
          {nextMeetingAt && (
            <div className="flex justify-between text-sm">
              <span className="text-[#FFC900]/60">Next Meeting</span>
              <span className="text-[#FFC900]">
                {formatDistanceToNow(new Date(nextMeetingAt), { addSuffix: true })}
              </span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleJoinLeave}
          className={`w-full ${isMember ? 'bg-red-500 hover:bg-red-600' : 'bg-[#FFC900] hover:bg-[#FFC900]/90'}`}
        >
          {isMember ? 'Leave Group' : 'Join Group'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default StudyGroupCard;
