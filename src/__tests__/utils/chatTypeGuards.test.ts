
import { isValidChatReaction, isValidChatComment } from '@/utils/chatTypeGuards';

describe('chatTypeGuards', () => {
  describe('isValidChatReaction', () => {
    it('should return true for valid upvote reaction', () => {
      const reaction = {
        id: '1',
        message_id: 'msg1',
        user_id: 'user1',
        reaction_type: 'upvote',
        created_at: new Date().toISOString(),
      };
      
      expect(isValidChatReaction(reaction)).toBe(true);
    });

    it('should return false for invalid reaction type', () => {
      const reaction = {
        id: '1',
        message_id: 'msg1',
        user_id: 'user1',
        reaction_type: 'invalid',
        created_at: new Date().toISOString(),
      };
      
      expect(isValidChatReaction(reaction)).toBe(false);
    });
  });

  describe('isValidChatComment', () => {
    it('should return true for valid comment', () => {
      const comment = {
        id: '1',
        message_id: 'msg1',
        user_id: 'user1',
        content: 'Test comment',
        created_at: new Date().toISOString(),
      };
      
      expect(isValidChatComment(comment)).toBe(true);
    });

    it('should return false for invalid comment', () => {
      const comment = {
        id: '1',
        message_id: 'msg1',
        user_id: 'user1',
        created_at: new Date().toISOString(),
      };
      
      expect(isValidChatComment(comment)).toBe(false);
    });
  });
});
