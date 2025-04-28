
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Edit, Trash2, Check } from 'lucide-react';
import { MessageTime } from './MessageTime';
import { ChatComment } from '@/types/chat-room';

interface MessageCommentProps {
  comment: ChatComment;
  userName: string;
  isCurrentUserComment: boolean;
  editingCommentId: string | null;
  editingCommentContent: string;
  onStartEdit: () => void;
  onDelete: () => void;
  onSaveEdit: () => void;
  onEditContentChange: (content: string) => void;
}

export function MessageComment({
  comment,
  userName,
  isCurrentUserComment,
  editingCommentId,
  editingCommentContent,
  onStartEdit,
  onDelete,
  onSaveEdit,
  onEditContentChange,
}: MessageCommentProps) {
  const isEditing = editingCommentId === comment.id;

  return (
    <div className="mb-2 group animate-fade-in">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          {isEditing ? (
            <div className="flex gap-2">
              <Input
                value={editingCommentContent}
                onChange={(e) => onEditContentChange(e.target.value)}
                className="flex-1 bg-[#333] border-[#444] text-[#FFC900] text-sm"
                autoFocus
              />
              <Button 
                size="icon"
                className="h-6 w-6 bg-[#FFC900] text-black hover:bg-[#FFC900]/90"
                onClick={onSaveEdit}
              >
                <Check className="h-3 w-3" />
              </Button>
            </div>
          ) : (
            <>
              <div className="text-xs text-[#FFC900] mb-1">
                {userName}
                <MessageTime timestamp={comment.created_at} className="text-xs ml-2" />
                {comment.updated_at && comment.updated_at !== comment.created_at && (
                  <span className="text-xs text-[#FFC900]/50 ml-1">(edited)</span>
                )}
              </div>
              <div className="text-sm text-[#FFC900]/90">
                {comment.content}
              </div>
            </>
          )}
        </div>
        {isCurrentUserComment && !isEditing && (
          <div className="flex opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6"
              onClick={onStartEdit}
            >
              <Edit className="h-3 w-3 text-[#FFC900]/70" />
              <span className="sr-only">Edit comment</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6"
              onClick={onDelete}
            >
              <Trash2 className="h-3 w-3 text-red-500" />
              <span className="sr-only">Delete comment</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
