
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { useDirectChat } from "@/hooks/useDirectChat";
import { MessageList } from "./MessageList";
import { ChatInput } from "./ChatInput";
import { Button } from "@/components/ui/button";
import { Ban, Flag } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface DirectChatDialogProps {
  recipientId: string;
  recipientName: string;
  chatType: 'mentor' | 'mental_health' | 'team';
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DirectChatDialog({
  recipientId,
  recipientName,
  chatType,
  open,
  onOpenChange
}: DirectChatDialogProps) {
  const { messages, loading, sendMessage } = useDirectChat(recipientId, chatType);
  const { toast } = useToast();

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;
    await sendMessage(content);
  };

  const handleBlock = () => {
    toast({
      title: "User Blocked",
      description: `You have blocked ${recipientName}. They can no longer send you messages.`,
    });
    onOpenChange(false);
  };

  const handleReport = () => {
    toast({
      title: "User Reported",
      description: "Thank you for your report. Our team will review it shortly.",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md bg-[#22251e] border-[#FFC900]/20">
        <div className="flex items-center justify-between border-b border-[#FFC900]/20 p-3">
          <DialogTitle className="text-[#FFC900] font-medium">
            Chat with {recipientName}
          </DialogTitle>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleReport}
              className="text-[#FFC900] hover:bg-[#FFC900]/10"
            >
              <Flag className="h-4 w-4" />
              <span className="sr-only">Report user</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleBlock}
              className="text-[#FFC900] hover:bg-[#FFC900]/10"
            >
              <Ban className="h-4 w-4" />
              <span className="sr-only">Block user</span>
            </Button>
          </div>
        </div>

        <div className="flex flex-col h-[400px]">
          <div className="flex-1 overflow-y-auto p-4">
            <MessageList messages={messages} loading={loading} />
          </div>

          <div className="p-3">
            <ChatInput 
              onSendMessage={handleSendMessage} 
              chatTitle={`Chat with ${recipientName}`}
              placeholder="Type your message..."
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
