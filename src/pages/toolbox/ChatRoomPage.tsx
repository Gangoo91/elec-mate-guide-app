
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";  
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
import { SearchIcon, RefreshCw } from 'lucide-react';
import { MessageSearch } from '@/components/chat/MessageSearch';
import { MessageSorter } from '@/components/chat/MessageSorter';
import { ChatRefreshControl } from '@/components/chat/ChatRefreshControl';

const ChatRoomPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const {
    messages,
    comments,
    reactions,
    loading,
    sendMessage,
    editMessage,
    deleteMessage,
    toggleReaction,
    addComment,
    editComment,
    fetchMessages,
    deleteComment,
    searchMessages
  } = useChatRoom();
  
  const { typingUsers, typingUsersArray, setTyping, isAnyoneTyping } = useTypingIndicator('chat-room');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleBackClick = () => {
    navigate('/electricians/toolbox-talk');
  };

  const handleSendMessage = async (message: string) => {
    await sendMessage(message);
    setTyping(false);
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await fetchMessages();
    setIsRefreshing(false);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    searchMessages(query);
  };

  const toggleSort = () => {
    setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc');
  };

  // Apply sorting to messages
  const sortedMessages = [...messages].sort((a, b) => {
    const dateA = new Date(a.created_at).getTime();
    const dateB = new Date(b.created_at).getTime();
    return sortOrder === 'desc' ? dateB - dateA : dateA - dateB;
  });

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Chat Room"
          description="Connect with fellow electricians, share experiences, and discuss industry topics."
          customBackAction={handleBackClick}
        />
        
        <div className="mt-4">
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
                <div className="flex items-center justify-between mb-4">
                  <MessageSearch onSearch={handleSearch} />
                  <div className="flex gap-2">
                    <MessageSorter sortOrder={sortOrder} onToggleSort={toggleSort} />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handleRefresh}
                      className="text-[#FFC900]/70 hover:text-[#FFC900]"
                      disabled={isRefreshing}
                    >
                      <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                      <span className="sr-only">Refresh</span>
                    </Button>
                  </div>
                </div>
                
                <ScrollArea className="flex-1 pr-4">
                  <ChatRefreshControl onRefresh={handleRefresh} />
                  
                  {loading ? (
                    <div className="text-center py-8 text-[#FFC900]/70">Loading messages...</div>
                  ) : sortedMessages.length === 0 ? (
                    <div className="text-center py-8 text-[#FFC900]/70">
                      {searchQuery ? 'No messages match your search.' : 'No messages yet. Be the first to post!'}
                    </div>
                  ) : (
                    <>
                      {isAnyoneTyping && (
                        <div className="mb-4">
                          <TypingIndicator isTyping={true} typingUsers={typingUsersArray} />
                        </div>
                      )}
                      {sortedMessages.map(message => (
                        <ChatMessageComponent
                          key={message.id}
                          message={message}
                          comments={comments[message.id] || []}
                          reactions={reactions[message.id] || []}
                          onReaction={(type) => toggleReaction(message.id, type)}
                          onComment={(content) => addComment(message.id, content)}
                          onEditMessage={(content) => editMessage(message.id, content)}
                          onDeleteMessage={() => deleteMessage(message.id)}
                          onEditComment={(commentId, content) => editComment(commentId, content)}
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
