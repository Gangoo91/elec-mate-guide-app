
import React, { useState } from 'react';
import { ChatMessage, ChatComment, ChatReaction } from '@/types/chat-room';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThumbsUp, ThumbsDown, MessageSquare } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { format } from 'date-fns';

interface ChatMessageProps {
  message: ChatMessage;
  comments: ChatComment[];
  reactions: ChatReaction[];
  onReaction: (type: 'upvote' | 'downvote') => void;
  onComment: (content: string) => void;
}

export function ChatMessageComponent({
  message,
  comments,
  reactions,
  onReaction,
  onComment
}: ChatMessageProps) {
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');
  const { user } = useAuth();

  const upvotes = reactions.filter(r => r.reaction_type === 'upvote').length;
  const downvotes = reactions.filter(r => r.reaction_type === 'downvote').length;
  
  const userReaction = user 
    ? reactions.find(r => r.user_id === user.id)?.reaction_type 
    : null;

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    
    onComment(newComment);
    setNewComment('');
  };

  return (
    <div className="p-4 bg-[#22251e] border border-[#FFC900]/20 rounded-lg mb-4">
      <div className="text-[#FFC900]/90 mb-2">{message.content}</div>
      <div className="text-xs text-[#FFC900]/50 mb-3">
        {format(new Date(message.created_at), 'MMM d, yyyy HH:mm')}
      </div>
      
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="sm"
          className={`flex items-center gap-1 ${
            userReaction === 'upvote' ? 'text-green-500' : 'text-[#FFC900]/70'
          }`}
          onClick={() => onReaction('upvote')}
        >
          <ThumbsUp className="w-4 h-4" />
          <span>{upvotes}</span>
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          className={`flex items-center gap-1 ${
            userReaction === 'downvote' ? 'text-red-500' : 'text-[#FFC900]/70'
          }`}
          onClick={() => onReaction('downvote')}
        >
          <ThumbsDown className="w-4 h-4" />
          <span>{downvotes}</span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="flex items-center gap-1 text-[#FFC900]/70"
          onClick={() => setShowComments(!showComments)}
        >
          <MessageSquare className="w-4 h-4" />
          <span>{comments.length}</span>
        </Button>
      </div>

      {showComments && (
        <div className="mt-4 pl-4 border-l-2 border-[#FFC900]/20">
          {comments.map(comment => (
            <div key={comment.id} className="mb-2">
              <div className="text-sm text-[#FFC900]/90">{comment.content}</div>
              <div className="text-xs text-[#FFC900]/50">
                {format(new Date(comment.created_at), 'MMM d, yyyy HH:mm')}
              </div>
            </div>
          ))}

          <form onSubmit={handleSubmitComment} className="mt-4 flex gap-2">
            <Input
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="flex-1 bg-[#333] border-[#444] text-[#FFC900]"
            />
            <Button 
              type="submit" 
              variant="outline"
              disabled={!newComment.trim()}
              className="border-[#FFC900]/20 text-[#FFC900]"
            >
              Post
            </Button>
          </form>
        </div>
      )}
    </div>
  );
}
