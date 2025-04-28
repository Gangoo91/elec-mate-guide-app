
import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown, MessageSquare } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { cn } from '@/lib/utils';
import { useState, useEffect, useRef } from 'react';

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
  const [isDisabled, setIsDisabled] = useState(false);
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Clear timeout on unmount to prevent memory leaks
  useEffect(() => {
    return () => {
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
      }
    };
  }, []);

  const handleReaction = (type: 'upvote' | 'downvote') => {
    if (isDisabled) return;
    
    setIsDisabled(true);
    onReaction(type);
    
    // Clear any existing timeout
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
    }
    
    // Prevent multiple clicks for a short period
    clickTimeoutRef.current = setTimeout(() => {
      setIsDisabled(false);
    }, 1000); // Use a longer timeout to prevent rapid clicking
  };

  return (
    <div className="flex items-center gap-4">
      <Button
        variant="ghost"
        size="sm"
        disabled={isDisabled}
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
        disabled={isDisabled}
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
