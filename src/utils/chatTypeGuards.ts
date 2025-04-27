
import { ChatComment, ChatReaction } from '@/types/chat-room';

export const isValidChatReaction = (reaction: any): reaction is ChatReaction => {
  return reaction && 
    typeof reaction === 'object' && 
    (reaction.reaction_type === "upvote" || reaction.reaction_type === "downvote");
};

export const isValidChatComment = (comment: any): comment is ChatComment => {
  return comment && 
    typeof comment === 'object' && 
    typeof comment.content === 'string' &&
    typeof comment.message_id === 'string';
};
