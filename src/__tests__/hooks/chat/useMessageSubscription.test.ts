
import { renderHook } from '@testing-library/react';
import { useMessageSubscription } from '@/hooks/chat/useMessageSubscription';
import { supabase } from '@/integrations/supabase/client';
import { vi } from 'vitest';

vi.mock('@/integrations/supabase/client', () => ({
  supabase: {
    channel: vi.fn(() => ({
      on: vi.fn().mockReturnThis(),
      subscribe: vi.fn().mockReturnThis(),
    })),
    removeChannel: vi.fn(),
  },
}));

describe('useMessageSubscription', () => {
  const mockSetMessages = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should set up subscription on mount', () => {
    const channelMock = {
      on: vi.fn().mockReturnThis(),
      subscribe: vi.fn(),
    };

    vi.mocked(supabase.channel).mockReturnValue(channelMock);

    renderHook(() => useMessageSubscription(mockSetMessages));

    expect(supabase.channel).toHaveBeenCalledWith('public:chat_messages');
    expect(channelMock.on).toHaveBeenCalled();
    expect(channelMock.subscribe).toHaveBeenCalled();
  });
});
