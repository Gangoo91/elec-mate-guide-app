
export interface ChatMessage {
  id: string;
  user_id: string;
  content: string;
  created_at: string;
  upvotes: number;
  downvotes: number;
}

export interface ChatComment {
  id: string;
  message_id: string;
  user_id: string;
  content: string;
  created_at: string;
}

export interface ChatReaction {
  id: string;
  message_id: string;
  user_id: string;
  reaction_type: 'upvote' | 'downvote';
}
