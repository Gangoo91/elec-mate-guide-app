
import { renderHook } from '@testing-library/react';
import { useMessageSubscription } from '@/hooks/chat/useMessageSubscription';
import { supabase } from '@/integrations/supabase/client';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import { RealtimeChannel } from '@supabase/supabase-js';

vi.mock('@/integrations/supabase/client', () => ({
  supabase: {
    channel: vi.fn(),
    removeChannel: vi.fn(),
  },
}));

describe('useMessageSubscription', () => {
  const setMessages = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('subscribes to chat messages on mount', () => {
    const mockChannel = {
      on: vi.fn().mockReturnThis(),
      subscribe: vi.fn().mockReturnThis(),
      topic: 'test',
      params: {},
      socket: {},
      bindings: {},
      state: 'SUBSCRIBED',
      unsubscribe: vi.fn(),
      send: vi.fn(),
      track: vi.fn(),
      untrack: vi.fn(),
      on_error: vi.fn(),
      joinRef: '1',
      ref: '1',
      timeout: 1000,
      push: vi.fn(),
      cancelRefEvent: vi.fn(),
      onError: vi.fn(),
      onMessage: vi.fn(),
      onClose: vi.fn(),
      trigger: vi.fn(),
    } as unknown as RealtimeChannel;

    (supabase.channel as jest.Mock).mockReturnValue(mockChannel);

    renderHook(() => useMessageSubscription(setMessages));

    expect(supabase.channel).toHaveBeenCalled();
    expect(mockChannel.on).toHaveBeenCalled();
    expect(mockChannel.subscribe).toHaveBeenCalled();
  });

  it('should set up subscription on mount', () => {
    const channelMock = {
      on: vi.fn().mockReturnThis(),
      subscribe: vi.fn(),
      topic: 'public:chat_messages',
      params: {},
      socket: {},
      bindings: {},
      state: 'SUBSCRIBED',
      unsubscribe: vi.fn(),
      send: vi.fn(),
      track: vi.fn(),
      untrack: vi.fn(),
      on_error: vi.fn(),
      joinRef: '1',
      ref: '1',
      timeout: 1000,
      push: vi.fn(),
      cancelRefEvent: vi.fn(),
      onError: vi.fn(),
      onMessage: vi.fn(),
      onClose: vi.fn(),
      trigger: vi.fn(),
    } as unknown as RealtimeChannel;

    vi.mocked(supabase.channel).mockReturnValue(channelMock);

    renderHook(() => useMessageSubscription(setMessages));

    expect(supabase.channel).toHaveBeenCalledWith('public:chat_messages');
    expect(channelMock.on).toHaveBeenCalled();
    expect(channelMock.subscribe).toHaveBeenCalled();
  });
});
