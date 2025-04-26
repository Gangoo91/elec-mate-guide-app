
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useDirectChat } from "@/hooks/useDirectChat";

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
  const [newMessage, setNewMessage] = useState("");
  const { messages, loading, sendMessage } = useDirectChat(recipientId, chatType);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    await sendMessage(newMessage);
    setNewMessage("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md bg-[#22251e] border-[#FFC900]/20">
        <DialogTitle className="sr-only">Chat with {recipientName}</DialogTitle>
        <div className="flex flex-col h-[400px]">
          <div className="border-b border-[#FFC900]/20 p-3">
            <h3 className="text-[#FFC900] font-medium">Chat with {recipientName}</h3>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {loading ? (
              <div className="text-center text-[#FFC900]/70">Loading messages...</div>
            ) : messages.length === 0 ? (
              <div className="text-center text-[#FFC900]/70">No messages yet</div>
            ) : (
              messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`max-w-[80%] p-2 rounded-lg text-sm ${
                    msg.sender_id === recipientId
                      ? "bg-[#444] text-[#FFC900] mr-auto"
                      : "bg-[#FFC900] text-black ml-auto"
                  }`}
                >
                  {msg.content}
                </div>
              ))
            )}
          </div>

          <form onSubmit={handleSendMessage} className="border-t border-[#FFC900]/20 p-3">
            <div className="flex gap-2">
              <Input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-[#444] border-[#555] text-[#FFC900]"
              />
              <Button 
                type="submit" 
                className="bg-[#FFC900] text-black hover:bg-[#FFC900]/90"
              >
                Send
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
