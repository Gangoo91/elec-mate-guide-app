
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAuth } from "@/hooks/useAuth";
import { format } from "date-fns";
import { Message } from "@/contexts/ChatContext";

interface MessageListProps {
  messages: Message[];
}

export function MessageList({ messages }: MessageListProps) {
  const { user } = useAuth();

  return (
    <ScrollArea className="h-[300px] pr-4 mt-2">
      <div className="space-y-4">
        {messages.length === 0 ? (
          <div className="text-center py-8 text-sm opacity-70">
            No messages in this chat area yet
          </div>
        ) : (
          messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender_id === user?.id ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`rounded-lg p-3 max-w-[80%] ${
                  message.sender_id === user?.id
                    ? "bg-[#FFC900] text-black ml-8"
                    : "bg-[#444] text-[#FFC900] mr-8"
                }`}
              >
                <p className="text-sm">{message.content}</p>
                <p className="text-xs opacity-50 mt-1">
                  {format(new Date(message.created_at), "HH:mm")}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </ScrollArea>
  );
}
