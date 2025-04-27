
import { renderHook, act } from '@testing-library/react';
import { useReactions } from '@/hooks/chat/useReactions';
import { supabase } from '@/integrations/supabase/client';
import { vi } from 'vitest';

vi.mock('@/integrations/supabase/client', () => ({
  supabase: {
    from: vi.fn(() => ({
      select: vi.fn().mockReturnThis(),
      eq: vi.fn().mockReturnThis(),
      single: vi.fn().mockReturnThis(),
      delete: vi.fn().mockReturnThis(),
      update: vi.fn().mockReturnThis(),
      insert: vi.fn().mockReturnThis(),
    })),
  },
}));

describe('useReactions', () => {
  const mockSetReactions = vi.fn();
  
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should toggle reaction when none exists', async () => {
    const mockSelect = vi.fn().mockResolvedValue({ data: null });
    const mockInsert = vi.fn().mockResolvedValue({ data: [{ id: '1', reaction_type: 'upvote' }] });
    
    vi.mocked(supabase.from).mockImplementation(() => ({
      select: mockSelect,
      eq: vi.fn().mockReturnThis(),
      single: vi.fn().mockReturnThis(),
      insert: mockInsert,
    }));

    const { result } = renderHook(() => useReactions(mockSetReactions));

    await act(async () => {
      await result.current.toggleReaction('msg1', 'upvote', 'user1');
    });

    expect(mockInsert).toHaveBeenCalled();
  });
});
