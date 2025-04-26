
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { useDirectChat } from "@/hooks/useDirectChat";
import { MessageList } from "./MessageList";
import { ChatInput } from "./ChatInput";

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

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;
    await sendMessage(content);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md bg-[#22251e] border-[#FFC900]/20">
        <DialogTitle className="sr-only">Chat with {recipientName}</DialogTitle>
        <div className="flex flex-col h-[400px]">
          <div className="border-b border-[#FFC900]/20 p-3">
            <h3 className="text-[#FFC900] font-medium">Chat with {recipientName}</h3>
          </div>

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
