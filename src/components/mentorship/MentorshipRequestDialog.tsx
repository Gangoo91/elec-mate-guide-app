
import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Mentor } from "@/types/mentor";

interface MentorshipRequestDialogProps {
  mentor: Mentor | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  requestMessage: string;
  onMessageChange: (message: string) => void;
  onSubmit: () => void;
}

export const MentorshipRequestDialog = ({
  mentor,
  open,
  onOpenChange,
  requestMessage,
  onMessageChange,
  onSubmit,
}: MentorshipRequestDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900] sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Request Mentorship</DialogTitle>
          <DialogDescription className="text-[#FFC900]/80">
            Send a message to {mentor?.name} explaining why you'd like to connect and what you hope to learn.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-2">
          <div className="space-y-2">
            <p className="text-sm font-medium text-[#FFC900]">Your message</p>
            <Textarea
              placeholder="Hello! I'm interested in learning more about your expertise in..."
              className="bg-[#151812] border-[#FFC900]/20 text-[#FFC900] placeholder:text-[#FFC900]/50 resize-none"
              rows={5}
              value={requestMessage}
              onChange={(e) => onMessageChange(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button 
            variant="outline" 
            onClick={() => onOpenChange(false)} 
            className="border-[#FFC900]/20 text-[#FFC900]"
          >
            Cancel
          </Button>
          <Button 
            variant="default" 
            onClick={onSubmit} 
            disabled={!requestMessage.trim()}
            className="bg-[#FFC900] text-black hover:bg-[#FFC900]/80"
          >
            Send Request
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
