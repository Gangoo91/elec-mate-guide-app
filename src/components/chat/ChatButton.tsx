
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useChat } from "@/contexts/ChatContext";
import { ChatDialog } from "./ChatDialog";
import { useState } from "react";

export function ChatButton() {
  const { unreadCount } = useChat();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button 
        variant="ghost" 
        size="icon" 
        className="relative"
        onClick={() => setOpen(true)}
      >
        <MessageSquare className="h-5 w-5 text-[#FFC900]" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {unreadCount > 9 ? "9+" : unreadCount}
          </span>
        )}
      </Button>

      <ChatDialog open={open} onOpenChange={setOpen} />
    </>
  );
}
