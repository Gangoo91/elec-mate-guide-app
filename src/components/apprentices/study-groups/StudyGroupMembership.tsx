
import React from 'react';
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface StudyGroupMembershipProps {
  isMember: boolean;
  isOwner: boolean;
  meetingLink?: string;
  onJoinLeave: () => void;
}

const StudyGroupMembership = ({
  isMember,
  isOwner,
  meetingLink,
  onJoinLeave
}: StudyGroupMembershipProps) => {
  return (
    <Card className="bg-[#22251e] border-[#FFC900]/20 sticky top-6">
      <CardHeader>
        <CardTitle className="text-[#FFC900]">Membership</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {meetingLink && isMember && (
          <div className="mb-4">
            <Button 
              className="w-full bg-green-600 hover:bg-green-700 text-white"
              onClick={() => window.open(meetingLink, '_blank')}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Join Next Meeting
            </Button>
          </div>
        )}
        
        <Button 
          onClick={onJoinLeave}
          className={`w-full ${isMember ? 'bg-red-500 hover:bg-red-600' : 'bg-[#FFC900] hover:bg-[#FFC900]/90 text-black'}`}
        >
          {isMember ? 'Leave Group' : 'Join Group'}
        </Button>
        
        {isMember && (
          <div className="text-center mt-4">
            <p className="text-[#FFC900]/70 text-sm">
              You're currently a member of this group
            </p>
          </div>
        )}

        {isOwner && (
          <div className="mt-6 text-center p-4 border border-[#FFC900]/20 rounded-md">
            <p className="text-[#FFC900]/90 mb-2">You are the owner of this group</p>
            <p className="text-[#FFC900]/70 text-sm">
              Go to the main Study Groups page and click on the calendar icon on your group's card to schedule meetings.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default StudyGroupMembership;
