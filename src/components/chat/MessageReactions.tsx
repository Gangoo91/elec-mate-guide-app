
import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown, MessageSquare } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { cn } from '@/lib/utils';

interface MessageReactionsProps {
  upvotes: number;
  downvotes: number;
  commentsCount: number;
  userReaction: 'upvote' | 'downvote' | null;
  isAnimating: boolean;
  onReaction: (type: 'upvote' | 'downvote') => void;
  onToggleComments: () => void;
}

export function MessageReactions({
  upvotes,
  downvotes,
  commentsCount,
  userReaction,
  isAnimating,
  onReaction,
  onToggleComments
}: MessageReactionsProps) {
  return (
    <div className="flex items-center gap-4">
      <Button
        variant="ghost"
        size="sm"
        className={cn(
          "flex items-center gap-1 transition-all",
          userReaction === 'upvote' ? 'text-green-500' : 'text-[#FFC900]/70',
          isAnimating && userReaction === 'upvote' ? 'scale-125' : ''
        )}
        onClick={() => onReaction('upvote')}
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
        onClick={() => onReaction('downvote')}
      >
        <ThumbsDown className="w-4 h-4" />
        <span>{downvotes}</span>
      </Button>

      <Button
        variant="ghost"
        size="sm"
        className="flex items-center gap-1 text-[#FFC900]/70"
        onClick={onToggleComments}
      >
        <MessageSquare className="w-4 h-4" />
        <span>{commentsCount}</span>
      </Button>
      
      {commentsCount > 0 && (
        <Badge 
          variant="outline" 
          className="bg-transparent border-[#FFC900]/20 text-[#FFC900]/70"
        >
          {commentsCount} {commentsCount === 1 ? 'comment' : 'comments'}
        </Badge>
      )}
    </div>
  );
}
