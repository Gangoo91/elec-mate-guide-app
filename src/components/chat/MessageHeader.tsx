
import { Button } from "@/components/ui/button";
import { MessageTime } from './MessageTime';
import { Edit, Trash2 } from 'lucide-react';

interface MessageHeaderProps {
  senderName: string;
  createdAt: string;
  updatedAt?: string;
  isCurrentUserMessage: boolean;
  onEdit: () => void;
  onDelete: () => void;
}

export function MessageHeader({
  senderName,
  createdAt,
  updatedAt,
  isCurrentUserMessage,
  onEdit,
  onDelete
}: MessageHeaderProps) {
  return (
    <div className="flex justify-between items-start mb-2">
      <span className="text-[#FFC900] font-medium">{senderName}</span>
      <div className="flex items-center gap-2">
        <MessageTime timestamp={createdAt} />
        {updatedAt && updatedAt !== createdAt && (
          <span className="text-xs text-[#FFC900]/50">(edited)</span>
        )}
        {isCurrentUserMessage && (
          <div className="flex gap-1 ml-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 text-[#FFC900]/70 hover:text-[#FFC900]"
              onClick={onEdit}
            >
              <Edit className="h-3 w-3" />
              <span className="sr-only">Edit message</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 text-red-500/70 hover:text-red-500"
              onClick={onDelete}
            >
              <Trash2 className="h-3 w-3" />
              <span className="sr-only">Delete message</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
