
import React, { useState, useCallback } from 'react';
import { ChatMessage, ChatComment, ChatReaction } from '@/types/chat-room';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useProfiles } from '@/hooks/useProfiles';
import { MessageHeader } from './MessageHeader';
import { MessageReactions } from './MessageReactions';
import { CommentsList } from './CommentsList';

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

  const handleReaction = useCallback((type: 'upvote' | 'downvote') => {
    setIsAnimating(true);
    onReaction(type);
    setTimeout(() => setIsAnimating(false), 500);
  }, [onReaction]);

  const isCurrentUserMessage = user?.id === message.user_id;

  return (
    <div className="p-4 bg-[#22251e] border border-[#FFC900]/20 rounded-lg mb-4 animate-fade-in">
      <MessageHeader
        senderName={senderName}
        createdAt={message.created_at}
        updatedAt={message.updated_at}
        isCurrentUserMessage={isCurrentUserMessage}
        onEdit={() => setIsEditing(true)}
        onDelete={onDeleteMessage || (() => {})}
      />
      
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
      
      <MessageReactions
        upvotes={upvotes}
        downvotes={downvotes}
        commentsCount={comments.length}
        userReaction={userReaction}
        isAnimating={isAnimating}
        onReaction={handleReaction}
        onToggleComments={() => setShowComments(!showComments)}
      />

      {showComments && (
        <CommentsList
          comments={comments}
          profiles={profiles}
          userId={user?.id}
          editingCommentId={editingCommentId}
          editingCommentContent={editingCommentContent}
          newComment={newComment}
          onStartEditingComment={startEditingComment}
          onEditComment={handleEditComment}
          onDeleteComment={onDeleteComment}
          onEditingCommentContentChange={setEditingCommentContent}
          onNewCommentChange={setNewComment}
          onSubmitComment={handleSubmitComment}
        />
      )}
    </div>
  );
}
