
import React, { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Send, Check } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Textarea } from '@/components/ui/textarea';

interface Mentor {
  id: string;
  user_id: string;
  name: string;
  title: string;
  experience: string;
  specialties: string[];
  availability: "High" | "Medium" | "Low";
}

interface MentorRequestDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedMentor: Mentor | null;
  onRequestSent: (mentorshipData: any) => void;
}

const MentorRequestDialog: React.FC<MentorRequestDialogProps> = ({
  open,
  onOpenChange,
  selectedMentor,
  onRequestSent
}) => {
  const [requestMessage, setRequestMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();

  const handleMentorshipRequest = async () => {
    if (!selectedMentor || !user) return;
    
    setIsSubmitting(true);

    try {
      // Create mentorship request
      const { data: mentorshipData, error: mentorshipError } = await supabase
        .from("mentorships")
        .insert({
          mentee_id: user.id,
          mentor_id: selectedMentor.user_id,
          status: "pending"
        })
        .select()
        .single();
        
      if (mentorshipError) throw mentorshipError;
      
      // Send initial message
      const { error: messageError } = await supabase
        .from("messages")
        .insert({
          sender_id: user.id,
          receiver_id: selectedMentor.user_id,
          content: requestMessage,
          read: false
        });
        
      if (messageError) throw messageError;
      
      toast({
        title: "Request Sent",
        description: `Your mentorship request has been submitted to ${selectedMentor.name}. You'll be notified when they respond.`,
      });

      setIsSuccess(true);
      
      // Reset state and notify parent component
      setTimeout(() => {
        onRequestSent(mentorshipData);
        setRequestMessage('');
        setIsSuccess(false);
        onOpenChange(false);
      }, 1500);
      
    } catch (error) {
      console.error("Error sending mentorship request:", error);
      toast({
        title: "Error",
        description: "Failed to send mentorship request. Please try again.",
        variant: "destructive"
      });
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setRequestMessage('');
      setIsSuccess(false);
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900] sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Request Mentorship</DialogTitle>
          <DialogDescription className="text-[#FFC900]/80">
            Send a message to {selectedMentor?.name} explaining why you'd like to connect and what you hope to learn.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-2">
          <div className="space-y-2">
            <p className="text-sm font-medium text-[#FFC900]">Your message</p>
            <ScrollArea className="h-[180px] w-full border border-[#FFC900]/20 rounded-md">
              <Textarea
                placeholder="Hello! I'm interested in learning more about your expertise in..."
                className="bg-[#151812] border-none text-[#FFC900] placeholder:text-[#FFC900]/50 resize-none min-h-[180px] p-3"
                value={requestMessage}
                onChange={(e) => setRequestMessage(e.target.value)}
                disabled={isSubmitting || isSuccess}
              />
            </ScrollArea>
            <div className="text-xs text-[#FFC900]/60">
              {requestMessage.length > 0 ? `${requestMessage.length} characters` : 'Write a personal message to increase your chances'}
            </div>
          </div>
        </div>
        
        <DialogFooter>
          <Button 
            variant="outline" 
            onClick={handleClose} 
            className="border-[#FFC900]/20 text-[#FFC900]"
            disabled={isSubmitting || isSuccess}
          >
            Cancel
          </Button>
          <Button 
            variant="default" 
            onClick={handleMentorshipRequest} 
            disabled={!requestMessage.trim() || isSubmitting || isSuccess}
            className={`transition-all ${
              isSuccess 
                ? 'bg-green-600 hover:bg-green-700' 
                : 'bg-[#FFC900] text-black hover:bg-[#FFC900]/80'
            }`}
          >
            {isSuccess ? (
              <>
                <Check className="h-4 w-4 mr-2" />
                Sent!
              </>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                {isSubmitting ? 'Sending...' : 'Send Request'}
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MentorRequestDialog;
