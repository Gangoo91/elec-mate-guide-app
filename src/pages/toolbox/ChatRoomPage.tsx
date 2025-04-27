
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";  // Add this import
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { ChatMessageComponent } from '@/components/chat/ChatMessage';
import { useChatRoom } from '@/hooks/useChatRoom';
import { ChatInput } from '@/components/chat/ChatInput';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useAuth } from '@/hooks/useAuth';
import { ChatErrorBoundary } from '@/components/chat/ChatErrorBoundary';
import { useTypingIndicator } from '@/hooks/useTypingIndicator';
import { TypingIndicator } from '@/components/chat/TypingIndicator';

const ChatRoomPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const {
    messages,
    comments,
    reactions,
    loading,
    sendMessage,
    toggleReaction,
    addComment,
    fetchMessages,
    deleteComment
  } = useChatRoom();
  
  const { typingUsers, setTyping, isAnyoneTyping } = useTypingIndicator('chat-room');

  const handleBackClick = () => {
    navigate('/electricians/toolbox-talk');
  };

  const handleSendMessage = async (message: string) => {
    await sendMessage(message);
    setTyping(false);
  };

  const handleRefresh = async () => {
    await fetchMessages();
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
              <div className="flex flex-col h-[calc(100vh-300px)]">
                <ScrollArea className="flex-1 pr-4">
                  {loading ? (
                    <div className="text-center py-8 text-[#FFC900]/70">Loading messages...</div>
                  ) : messages.length === 0 ? (
                    <div className="text-center py-8 text-[#FFC900]/70">No messages yet. Be the first to post!</div>
                  ) : (
                    <>
                      {isAnyoneTyping && (
                        <div className="mb-4">
                          <TypingIndicator isTyping={true} />
                        </div>
                      )}
                      {messages.map(message => (
                        <ChatMessageComponent
                          key={message.id}
                          message={message}
                          comments={comments[message.id] || []}
                          reactions={reactions[message.id] || []}
                          onReaction={(type) => toggleReaction(message.id, type)}
                          onComment={(content) => addComment(message.id, content)}
                          onDeleteComment={deleteComment}
                        />
                      ))}
                    </>
                  )}
                </ScrollArea>
                
                <ChatInput
                  onSendMessage={handleSendMessage}
                  chatTitle="Chat Room"
                  placeholder="Share your thoughts..."
                  chatId="chat-room"
                />
              </div>
            </ChatErrorBoundary>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default ChatRoomPage;
