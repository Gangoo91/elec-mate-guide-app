
import { renderHook, act } from '@testing-library/react';
import { useMessageFetching } from '@/hooks/chat/useMessageFetching';
import { supabase } from '@/integrations/supabase/client';
import { vi } from 'vitest';

// Mock Supabase client
vi.mock('@/integrations/supabase/client', () => ({
  supabase: {
    from: vi.fn(() => ({
      select: vi.fn().mockReturnThis(),
      in: vi.fn().mockReturnThis(),
      order: vi.fn().mockReturnThis(),
    })),
  },
}));

describe('useMessageFetching', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should initialize with empty state', () => {
    const { result } = renderHook(() => useMessageFetching());
    
    expect(result.current.messages).toEqual([]);
    expect(result.current.comments).toEqual({});
    expect(result.current.reactions).toEqual({});
    expect(result.current.loading).toBe(true);
  });

  it('should handle successful message fetching', async () => {
    const mockMessages = [
      { id: '1', content: 'Test message' },
      { id: '2', content: 'Another message' },
    ];

    const mockSelect = vi.fn().mockResolvedValue({ data: mockMessages });
    vi.mocked(supabase.from).mockImplementation(() => ({
      select: mockSelect,
      order: vi.fn().mockReturnThis(),
    }));

    const { result } = renderHook(() => useMessageFetching());
    
    await act(async () => {
      await result.current.fetchMessages();
    });

    expect(result.current.messages).toEqual(mockMessages);
    expect(result.current.loading).toBe(false);
  });
});
