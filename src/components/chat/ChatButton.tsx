
import { MessageSquare, Users, Heart, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useChat } from "@/contexts/ChatContext";
import { ChatDialog } from "./ChatDialog";
import { useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function ChatButton() {
  const { unreadCount, getUnreadCountByType } = useChat();
  const [open, setOpen] = useState(false);
  
  // Get unread counts for different chat types
  const privateUnread = getUnreadCountByType("private");
  const teamUnread = getUnreadCountByType("team");
  const mateUnread = getUnreadCountByType("mental_health");
  const mentorUnread = getUnreadCountByType("mentor");

  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative"
              onClick={() => setOpen(true)}
            >
              <MessageSquare className="h-5 w-5 text-[#FFC900]" />
              
              {/* Main notification badge */}
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {unreadCount > 9 ? "9+" : unreadCount}
                </span>
              )}
              
              {/* Small indicators showing which chat types have unread messages */}
              <div className="absolute -bottom-1 -right-3 flex space-x-1">
                {privateUnread > 0 && (
                  <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                )}
                {teamUnread > 0 && (
                  <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                )}
                {mateUnread > 0 && (
                  <div className="h-2 w-2 bg-pink-500 rounded-full"></div>
                )}
                {mentorUnread > 0 && (
                  <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
                )}
              </div>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Chat Messages</p>
            {unreadCount > 0 && (
              <div className="flex flex-col text-xs mt-1">
                {privateUnread > 0 && <span>Private: {privateUnread}</span>}
                {teamUnread > 0 && <span>Team: {teamUnread}</span>}
                {mateUnread > 0 && <span>Mate: {mateUnread}</span>}
                {mentorUnread > 0 && <span>Mentor: {mentorUnread}</span>}
              </div>
            )}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <ChatDialog open={open} onOpenChange={setOpen} />
    </>
  );
}
