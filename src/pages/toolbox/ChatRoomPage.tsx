
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar } from "@/components/ui/avatar";
import { Send, Search, Edit, Trash2, MessageSquare } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useChatRoom } from "@/hooks/useChatRoom";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/useAuth";
import { useProfiles } from "@/hooks/useProfiles";
import { format } from 'date-fns';
import { Card } from '@/components/ui/card';
import { ChatMessageComponent } from '@/components/chat/ChatMessage';
import { useToast } from '@/hooks/use-toast';
import { ChatMessage as ChatMessageType } from '@/types/chat-room';

const ChatRoomPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { profiles } = useProfiles();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [showConfirmDelete, setShowConfirmDelete] = useState<string | null>(null);
  
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
    deleteComment,
    fetchMessages,
    searchMessages
  } = useChatRoom();

  const handleBackClick = () => {
    navigate('/electricians/toolbox-talk');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    
    try {
      await sendMessage(newMessage);
      setNewMessage("");
      toast({
        title: "Message sent",
        description: "Your message has been sent successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message",
        variant: "destructive",
      });
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    searchMessages(searchQuery);
  };

  const handleDeleteMessage = async (messageId: string) => {
    try {
      await deleteMessage(messageId);
      setShowConfirmDelete(null);
      toast({
        title: "Message deleted",
        description: "Your message has been deleted successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete message",
        variant: "destructive",
      });
    }
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

          <ScrollArea className="h-[500px] pr-4">
            {loading ? (
              <div className="flex items-center justify-center h-full">
                <p className="text-[#FFC900]/70">Loading messages...</p>
              </div>
            ) : messages.length > 0 ? (
              <div className="space-y-4">
                {messages.map((message: ChatMessageType) => (
                  <ChatMessageComponent 
                    key={message.id}
                    message={message}
                    comments={comments[message.id] || []}
                    reactions={reactions[message.id] || []}
                    onReaction={(type) => toggleReaction(message.id, type)}
                    onComment={(content) => addComment(message.id, content)}
                    onDeleteComment={(commentId) => deleteComment(commentId)}
                    onEditMessage={(content) => editMessage(message.id, content)}
                    onDeleteMessage={() => handleDeleteMessage(message.id)}
                    onEditComment={(commentId, content) => editComment(commentId, content)}
                  />
                ))}
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
            <Button 
              type="submit" 
              className="bg-[#FFC900] text-black hover:bg-[#FFC900]/90 self-end"
              disabled={!newMessage.trim()}
            >
              <Send className="h-5 w-5" />
            </Button>
          </form>
        </Card>
      </div>
    </MainLayout>
  );
};

export default ChatRoomPage;
