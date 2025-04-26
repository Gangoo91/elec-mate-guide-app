
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { useState } from "react";
import { DirectChatDialog } from "./DirectChatDialog";

interface ChatButtonProps {
  recipientId: string;
  recipientName: string;
  chatType: 'mentor' | 'mental_health' | 'team';
}

export function ChatButton({ recipientId, recipientName, chatType }: ChatButtonProps) {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="text-[#FFC900] hover:bg-[#FFC900]/10"
        onClick={() => setDialogOpen(true)}
      >
        <MessageSquare className="h-4 w-4" />
      </Button>

      <DirectChatDialog
        recipientId={recipientId}
        recipientName={recipientName}
        chatType={chatType}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </>
  );
}
