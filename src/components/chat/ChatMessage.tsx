
import React, { useState } from 'react';
import { ChatMessage, ChatComment, ChatReaction } from '@/types/chat-room';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThumbsUp, ThumbsDown, MessageSquare, Send, Trash2, Edit, Check } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { MessageTime } from './MessageTime';
import { useProfiles } from '@/hooks/useProfiles';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface ChatMessageProps {
  message: ChatMessage;
  comments: ChatComment[];
  reactions: ChatReaction[];
  onReaction: (type: 'upvote' | 'downvote') => void;
  onComment: (content: string) => void;
  onDeleteComment?: (commentId: string) => void;
  onEditMessage?: (content: string) => void;
  onDeleteMessage?: () => void;
  onEditComment?: (commentId: string, content: string) => void;
}

export function ChatMessageComponent({
  message,
  comments,
  reactions,
  onReaction,
  onComment,
  onDeleteComment,
  onEditMessage,
  onDeleteMessage,
  onEditComment
}: ChatMessageProps) {
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(message.content);
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);
  const [editingCommentContent, setEditingCommentContent] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const { user } = useAuth();
  const { profiles } = useProfiles();

  const userProfile = profiles?.find(p => p.id === message.user_id);
  const senderName = userProfile ? `${userProfile.first_name || 'Unknown'} ${userProfile.last_name || ''}`.trim() : 'Unknown';
  
  const upvotes = reactions.filter(r => r.reaction_type === 'upvote').length;
  const downvotes = reactions.filter(r => r.reaction_type === 'downvote').length;
  const userReaction = user ? reactions.find(r => r.user_id === user.id)?.reaction_type : null;

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    onComment(newComment);
    setNewComment('');
  };

  const handleEditMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editContent.trim()) return;
    onEditMessage?.(editContent);
    setIsEditing(false);
  };

  const handleEditComment = (commentId: string) => {
    if (!editingCommentContent.trim()) return;
    onEditComment?.(commentId, editingCommentContent);
    setEditingCommentId(null);
    setEditingCommentContent('');
  };

  const startEditingComment = (comment: ChatComment) => {
    setEditingCommentId(comment.id);
    setEditingCommentContent(comment.content);
  };

  const handleReaction = (type: 'upvote' | 'downvote') => {
    setIsAnimating(true);
    onReaction(type);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const isCurrentUserMessage = user?.id === message.user_id;

  return (
    <div className="p-4 bg-[#22251e] border border-[#FFC900]/20 rounded-lg mb-4 animate-fade-in">
      <div className="flex justify-between items-start mb-2">
        <span className="text-[#FFC900] font-medium">{senderName}</span>
        <div className="flex items-center gap-2">
          <MessageTime timestamp={message.created_at} />
          {message.updated_at && message.updated_at !== message.created_at && (
            <span className="text-xs text-[#FFC900]/50">(edited)</span>
          )}
          {isCurrentUserMessage && (
            <div className="flex gap-1 ml-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 text-[#FFC900]/70 hover:text-[#FFC900]"
                onClick={() => setIsEditing(true)}
              >
                <Edit className="h-3 w-3" />
                <span className="sr-only">Edit message</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 text-red-500/70 hover:text-red-500"
                onClick={onDeleteMessage}
              >
                <Trash2 className="h-3 w-3" />
                <span className="sr-only">Delete message</span>
              </Button>
            </div>
          )}
        </div>
      </div>
      
      {isEditing ? (
        <form onSubmit={handleEditMessage} className="mb-4 flex gap-2">
          <Input
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            className="flex-1 bg-[#333] border-[#444] text-[#FFC900]"
            autoFocus
          />
          <Button 
            type="submit" 
            size="icon"
            className="bg-[#FFC900] text-black hover:bg-[#FFC900]/90"
          >
            <Check className="h-4 w-4" />
            <span className="sr-only">Save edit</span>
          </Button>
        </form>
      ) : (
        <div className="text-[#FFC900]/90 mb-4">{message.content}</div>
      )}
      
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "flex items-center gap-1 transition-all",
            userReaction === 'upvote' ? 'text-green-500' : 'text-[#FFC900]/70',
            isAnimating && userReaction === 'upvote' ? 'scale-125' : ''
          )}
          onClick={() => handleReaction('upvote')}
        >
          <ThumbsUp className="w-4 h-4" />
          <span>{upvotes}</span>
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "flex items-center gap-1 transition-all",
            userReaction === 'downvote' ? 'text-red-500' : 'text-[#FFC900]/70',
            isAnimating && userReaction === 'downvote' ? 'scale-125' : ''
          )}
          onClick={() => handleReaction('downvote')}
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
        
        {comments.length > 0 && (
          <Badge 
            variant="outline" 
            className="bg-transparent border-[#FFC900]/20 text-[#FFC900]/70"
          >
            {comments.length} {comments.length === 1 ? 'comment' : 'comments'}
          </Badge>
        )}
      </div>

      {showComments && (
        <div className="mt-4 pl-4 border-l-2 border-[#FFC900]/20">
          {comments.map(comment => {
            const commentUserProfile = profiles?.find(p => p.id === comment.user_id);
            const commentUserName = commentUserProfile ? 
              `${commentUserProfile.first_name || 'Unknown'} ${commentUserProfile.last_name || ''}`.trim() : 'Unknown';
            
            return (
              <div key={comment.id} className="mb-2 group animate-fade-in">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    {editingCommentId === comment.id ? (
                      <div className="flex gap-2">
                        <Input
                          value={editingCommentContent}
                          onChange={(e) => setEditingCommentContent(e.target.value)}
                          className="flex-1 bg-[#333] border-[#444] text-[#FFC900] text-sm"
                          autoFocus
                        />
                        <Button 
                          size="icon"
                          className="h-6 w-6 bg-[#FFC900] text-black hover:bg-[#FFC900]/90"
                          onClick={() => handleEditComment(comment.id)}
                        >
                          <Check className="h-3 w-3" />
                        </Button>
                      </div>
                    ) : (
                      <>
                        <div className="text-xs text-[#FFC900] mb-1">
                          {commentUserName}
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
                  {user && comment.user_id === user.id && editingCommentId !== comment.id && (
                    <div className="flex opacity-0 group-hover:opacity-100 transition-opacity">
                      {onEditComment && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => startEditingComment(comment)}
                        >
                          <Edit className="h-3 w-3 text-[#FFC900]/70" />
                          <span className="sr-only">Edit comment</span>
                        </Button>
                      )}
                      {onDeleteComment && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => onDeleteComment(comment.id)}
                        >
                          <Trash2 className="h-3 w-3 text-red-500" />
                          <span className="sr-only">Delete comment</span>
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          <form onSubmit={handleSubmitComment} className="mt-4 flex gap-2">
            <Input
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
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
      )}
    </div>
  );
}
