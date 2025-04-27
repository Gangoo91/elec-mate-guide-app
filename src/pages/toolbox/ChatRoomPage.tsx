
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { ChatMessageComponent } from '@/components/chat/ChatMessage';
import { useChatRoom } from '@/hooks/useChatRoom';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useAuth } from '@/hooks/useAuth';
import { ChatErrorBoundary } from '@/components/chat/ChatErrorBoundary';

const ChatRoomPage = () => {
  const navigate = useNavigate();
  const [newMessage, setNewMessage] = useState('');
  const { user } = useAuth();
  const {
    messages,
    comments,
    reactions,
    loading,
    sendMessage,
    toggleReaction,
    addComment
  } = useChatRoom();
  
  const handleBackClick = () => {
    navigate('/electricians/toolbox-talk');
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    await sendMessage(newMessage);
    setNewMessage('');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Chat Room"
          description="Connect with fellow electricians, share experiences, and discuss industry topics."
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8">
          {!user ? (
            <div className="text-center p-8 bg-[#22251e] border border-[#FFC900]/20 rounded-lg">
              <p className="text-[#FFC900]/70 mb-4">Please sign in to participate in the chat room.</p>
              <Button onClick={() => navigate('/login')} className="bg-[#FFC900] text-black hover:bg-[#FFC900]/90">
                Sign In
              </Button>
            </div>
          ) : (
            <ChatErrorBoundary>
              <form onSubmit={handleSendMessage} className="mb-8">
                <Textarea
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Share your thoughts..."
                  className="mb-4 bg-[#22251e] border-[#FFC900]/20 text-[#FFC900] min-h-[100px]"
                />
                <Button 
                  type="submit"
                  disabled={!newMessage.trim()}
                  className="w-full bg-[#FFC900] text-black hover:bg-[#FFC900]/90"
                >
                  Post Message
                </Button>
              </form>

              <ScrollArea className="h-[600px] pr-4">
                {loading ? (
                  <div className="text-center py-8 text-[#FFC900]/70">Loading messages...</div>
                ) : messages.length === 0 ? (
                  <div className="text-center py-8 text-[#FFC900]/70">No messages yet. Be the first to post!</div>
                ) : (
                  messages.map(message => (
                    <ChatMessageComponent
                      key={message.id}
                      message={message}
                      comments={comments[message.id] || []}
                      reactions={reactions[message.id] || []}
                      onReaction={(type) => toggleReaction(message.id, type)}
                      onComment={(content) => addComment(message.id, content)}
                    />
                  ))
                )}
              </ScrollArea>
            </ChatErrorBoundary>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default ChatRoomPage;
