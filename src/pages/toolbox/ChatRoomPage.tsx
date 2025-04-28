
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar } from "@/components/ui/avatar";
import { Send, Search } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useChatRoom } from "@/hooks/useChatRoom";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/useAuth";
import { useProfiles } from "@/hooks/useProfiles";
import { format } from 'date-fns';
import { Card } from '@/components/ui/card';

const ChatRoomPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { profiles } = useProfiles();
  const [searchQuery, setSearchQuery] = useState("");
  const [newMessage, setNewMessage] = useState("");
  
  const {
    messages,
    comments,
    loading,
    sendMessage,
    toggleReaction,
    addComment,
    fetchMessages,
    searchMessages
  } = useChatRoom();

  const handleBackClick = () => {
    navigate('/electricians/toolbox-talk');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    
    await sendMessage(newMessage);
    setNewMessage("");
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    searchMessages(searchQuery);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const getUserName = (userId: string) => {
    const profile = profiles?.find(p => p.id === userId);
    return profile ? `${profile.first_name || ''} ${profile.last_name || ''}`.trim() : 'Unknown User';
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-6">
        <PageHeader 
          title="Electricians Chat Room"
          description="Connect with fellow electricians, share experiences, and discuss industry topics."
          customBackAction={handleBackClick}
        />
        
        <Card className="bg-[#22251e] border border-[#FFC900]/20 p-4 md:p-6 mb-6">
          <form onSubmit={handleSearch} className="flex gap-2 mb-4">
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search messages..."
              className="flex-1 bg-[#333] border-[#444] text-[#FFC900]"
            />
            <Button type="submit" variant="outline" className="border-[#FFC900] text-[#FFC900]">
              <Search className="h-4 w-4" />
            </Button>
          </form>

          <ScrollArea className="h-[400px] pr-4">
            {loading ? (
              <div className="flex items-center justify-center h-full">
                <p className="text-[#FFC900]/70">Loading messages...</p>
              </div>
            ) : messages.length > 0 ? (
              <div className="space-y-4">
                {messages.map((message) => {
                  const isCurrentUser = message.user_id === user?.id;
                  const messageComments = comments[message.id] || [];
                  
                  return (
                    <div key={message.id} className="bg-[#333] rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Avatar className="h-8 w-8 bg-[#444]">
                          <span className="text-xs text-[#FFC900]">
                            {getUserName(message.user_id).substring(0, 2).toUpperCase()}
                          </span>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-semibold text-[#FFC900]">
                              {getUserName(message.user_id)}
                            </span>
                            <span className="text-xs text-[#FFC900]/60">
                              {format(new Date(message.created_at), 'PPp')}
                            </span>
                          </div>
                          <p className="text-[#FFC900]/90">{message.content}</p>
                          
                          <div className="flex gap-4 mt-2">
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => toggleReaction(message.id, 'upvote')}
                              className="text-xs text-[#FFC900]/70 hover:text-[#FFC900] hover:bg-[#FFC900]/10"
                            >
                              👍 {message.upvotes || 0}
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => toggleReaction(message.id, 'downvote')}
                              className="text-xs text-[#FFC900]/70 hover:text-[#FFC900] hover:bg-[#FFC900]/10"
                            >
                              👎 {message.downvotes || 0}
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => {
                                const comment = prompt('Add a comment:');
                                if (comment) addComment(message.id, comment);
                              }}
                              className="text-xs text-[#FFC900]/70 hover:text-[#FFC900] hover:bg-[#FFC900]/10"
                            >
                              💬 {messageComments.length}
                            </Button>
                          </div>
                          
                          {messageComments.length > 0 && (
                            <div className="mt-3 pl-3 border-l-2 border-[#444] space-y-2">
                              {messageComments.map(comment => (
                                <div key={comment.id} className="text-sm">
                                  <div className="flex justify-between items-center">
                                    <span className="font-medium text-[#FFC900]/80">
                                      {getUserName(comment.user_id)}
                                    </span>
                                    <span className="text-xs text-[#FFC900]/50">
                                      {format(new Date(comment.created_at), 'PPp')}
                                    </span>
                                  </div>
                                  <p className="text-[#FFC900]/80">{comment.content}</p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-[#FFC900]/70">No messages yet. Be the first to start the conversation!</p>
              </div>
            )}
          </ScrollArea>
        </Card>
        
        <Card className="bg-[#22251e] border border-[#FFC900]/20 p-4 md:p-6">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message here..."
              className="flex-1 bg-[#333] border-[#444] text-[#FFC900] min-h-20"
            />
            <Button type="submit" className="bg-[#FFC900] text-black hover:bg-[#FFC900]/90 self-end">
              <Send className="h-5 w-5" />
            </Button>
          </form>
        </Card>
      </div>
    </MainLayout>
  );
};

export default ChatRoomPage;
