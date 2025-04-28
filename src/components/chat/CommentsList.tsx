
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from 'lucide-react';
import { ChatComment } from '@/types/chat-room';
import { MessageComment } from './MessageComment';

interface CommentsListProps {
  comments: ChatComment[];
  profiles?: any[];
  userId?: string;
  editingCommentId: string | null;
  editingCommentContent: string;
  newComment: string;
  onStartEditingComment: (comment: ChatComment) => void;
  onEditComment: (commentId: string) => void;
  onDeleteComment?: (commentId: string) => void;
  onEditingCommentContentChange: (content: string) => void;
  onNewCommentChange: (content: string) => void;
  onSubmitComment: (e: React.FormEvent) => void;
}

export function CommentsList({
  comments,
  profiles,
  userId,
  editingCommentId,
  editingCommentContent,
  newComment,
  onStartEditingComment,
  onEditComment,
  onDeleteComment,
  onEditingCommentContentChange,
  onNewCommentChange,
  onSubmitComment
}: CommentsListProps) {
  return (
    <div className="mt-4 pl-4 border-l-2 border-[#FFC900]/20">
      {comments.map(comment => {
        const commentUserProfile = profiles?.find(p => p.id === comment.user_id);
        const commentUserName = commentUserProfile ? 
          `${commentUserProfile.first_name || 'Unknown'} ${commentUserProfile.last_name || ''}`.trim() : 'Unknown';
        
        return (
          <MessageComment
            key={comment.id}
            comment={comment}
            userName={commentUserName}
            isCurrentUserComment={userId === comment.user_id}
            editingCommentId={editingCommentId}
            editingCommentContent={editingCommentContent}
            onStartEdit={() => onStartEditingComment(comment)}
            onDelete={() => onDeleteComment?.(comment.id)}
            onSaveEdit={() => onEditComment(comment.id)}
            onEditContentChange={onEditingCommentContentChange}
          />
        );
      })}

      <form onSubmit={onSubmitComment} className="mt-4 flex gap-2">
        <Input
          value={newComment}
          onChange={(e) => onNewCommentChange(e.target.value)}
          placeholder="Add a comment..."
          className="flex-1 bg-[#333] border-[#444] text-[#FFC900]"
        />
        <Button 
          type="submit" 
          size="icon"
          disabled={!newComment.trim()}
          className="bg-[#FFC900] text-black hover:bg-[#FFC900]/90"
        >
          <Send className="h-4 w-4" />
          <span className="sr-only">Send comment</span>
        </Button>
      </form>
    </div>
  );
}
