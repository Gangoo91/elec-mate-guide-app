
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { formatDistanceToNow } from 'date-fns';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, User, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Message {
  id: string;
  sender_id: string;
  receiver_id: string;
  content: string;
  created_at: string;
  read: boolean;
}

interface Profile {
  id: string;
  first_name: string | null;
  last_name: string | null;
  avatar_url: string | null;
}

const MentorshipInbox = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<"received" | "sent">("received");
  
  // Fetch messages
  const { data: messages, isLoading: isLoadingMessages } = useQuery({
    queryKey: ["mentorshipMessages", user?.id],
    queryFn: async () => {
      if (!user) return { received: [], sent: [] };
      
      // Fetch received messages
      const { data: receivedData, error: receivedError } = await supabase
        .from("messages")
        .select("*")
        .eq("receiver_id", user.id)
        .order("created_at", { ascending: false });
        
      if (receivedError) throw receivedError;
      
      // Fetch sent messages
      const { data: sentData, error: sentError } = await supabase
        .from("messages")
        .select("*")
        .eq("sender_id", user.id)
        .order("created_at", { ascending: false });
        
      if (sentError) throw sentError;
      
      return {
        received: receivedData || [],
        sent: sentData || []
      };
    },
    enabled: !!user
  });

  // Fetch profiles for message senders/receivers
  const { data: profiles, isLoading: isLoadingProfiles } = useQuery({
    queryKey: ["mentorshipProfiles", user?.id],
    queryFn: async () => {
      if (!messages) return {};
      
      // Get unique user IDs from messages
      const userIds = new Set<string>();
      messages.received.forEach(msg => userIds.add(msg.sender_id));
      messages.sent.forEach(msg => userIds.add(msg.receiver_id));
      
      if (userIds.size === 0) return {};
      
      const { data, error } = await supabase
        .from("profiles")
        .select("id, first_name, last_name, avatar_url")
        .in("id", Array.from(userIds));
        
      if (error) throw error;
      
      // Convert to object for easy lookup
      const profileMap: {[key: string]: Profile} = {};
      data?.forEach(profile => {
        profileMap[profile.id] = profile;
      });
      
      return profileMap;
    },
    enabled: !!messages
  });

  // Mark message as read
  const markAsRead = async (messageId: string) => {
    if (!user) return;
    
    await supabase
      .from("messages")
      .update({ read: true })
      .eq("id", messageId);
  };

  const getProfileName = (profileId: string) => {
    if (!profiles || !profiles[profileId]) return "Unknown User";
    
    const profile = profiles[profileId];
    if (profile.first_name && profile.last_name) {
      return `${profile.first_name} ${profile.last_name}`;
    } else if (profile.first_name) {
      return profile.first_name;
    } else {
      return "Unknown User";
    }
  };

  const getUnreadCount = () => {
    if (!messages) return 0;
    return messages.received.filter(msg => !msg.read).length;
  };

  const isLoading = isLoadingMessages || isLoadingProfiles;

  return (
    <Card className="border-[#FFC900]/20">
      <CardHeader>
        <CardTitle className="text-[#FFC900] flex items-center gap-2">
          <MessageSquare className="h-5 w-5" />
          Mentorship Messages
          {getUnreadCount() > 0 && (
            <Badge className="ml-2 bg-[#FFC900] text-[#151812]">
              {getUnreadCount()} new
            </Badge>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs 
          value={activeTab} 
          onValueChange={(v) => setActiveTab(v as "received" | "sent")}
          className="space-y-4"
        >
          <TabsList className="bg-[#151812] border border-[#FFC900]/20 w-full">
            <TabsTrigger 
              value="received"
              className="flex-1 data-[state=active]:bg-[#FFC900]/10 data-[state=active]:text-[#FFC900]"
            >
              <Users className="h-4 w-4 mr-2" />
              Received
              {getUnreadCount() > 0 && (
                <Badge className="ml-2 bg-[#FFC900] text-[#151812]" variant="secondary">
                  {getUnreadCount()}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger 
              value="sent"
              className="flex-1 data-[state=active]:bg-[#FFC900]/10 data-[state=active]:text-[#FFC900]"
            >
              <User className="h-4 w-4 mr-2" />
              Sent
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="received" className="space-y-4">
            {isLoading ? (
              <div className="space-y-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="animate-pulse p-4 border border-[#FFC900]/10 rounded-md">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="h-8 w-8 bg-[#FFC900]/20 rounded-full"></div>
                      <div className="h-4 w-32 bg-[#FFC900]/20 rounded"></div>
                      <div className="ml-auto h-4 w-20 bg-[#FFC900]/10 rounded"></div>
                    </div>
                    <div className="h-4 w-full bg-[#FFC900]/10 rounded mb-2"></div>
                    <div className="h-4 w-2/3 bg-[#FFC900]/10 rounded"></div>
                  </div>
                ))}
              </div>
            ) : messages && messages.received.length > 0 ? (
              <div className="space-y-4">
                {messages.received.map(message => (
                  <div 
                    key={message.id}
                    className={`p-4 border rounded-md transition-all ${
                      message.read 
                        ? 'border-[#FFC900]/10 bg-[#151812]/90' 
                        : 'border-[#FFC900]/30 bg-[#FFC900]/5'
                    }`}
                    onClick={() => !message.read && markAsRead(message.id)}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="h-8 w-8 bg-[#FFC900]/20 text-[#FFC900] rounded-full flex items-center justify-center">
                        {getProfileName(message.sender_id).charAt(0)}
                      </div>
                      <span className="font-medium text-[#FFC900]">
                        {getProfileName(message.sender_id)}
                      </span>
                      <span className="text-xs text-[#FFC900]/60 ml-auto">
                        {formatDistanceToNow(new Date(message.created_at), { addSuffix: true })}
                      </span>
                    </div>
                    <p className="text-[#FFC900]/80">{message.content}</p>
                    {!message.read && (
                      <div className="flex justify-end mt-2">
                        <Badge className="bg-[#FFC900]/20 text-[#FFC900]">Unread</Badge>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-[#FFC900]/60">
                <MessageSquare className="h-12 w-12 mx-auto opacity-30 mb-2" />
                <p>No messages received yet</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="sent" className="space-y-4">
            {isLoading ? (
              <div className="space-y-4">
                {[1, 2].map(i => (
                  <div key={i} className="animate-pulse p-4 border border-[#FFC900]/10 rounded-md">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="h-8 w-8 bg-[#FFC900]/20 rounded-full"></div>
                      <div className="h-4 w-32 bg-[#FFC900]/20 rounded"></div>
                      <div className="ml-auto h-4 w-20 bg-[#FFC900]/10 rounded"></div>
                    </div>
                    <div className="h-4 w-full bg-[#FFC900]/10 rounded mb-2"></div>
                    <div className="h-4 w-2/3 bg-[#FFC900]/10 rounded"></div>
                  </div>
                ))}
              </div>
            ) : messages && messages.sent.length > 0 ? (
              <div className="space-y-4">
                {messages.sent.map(message => (
                  <div 
                    key={message.id}
                    className="p-4 border border-[#FFC900]/10 rounded-md bg-[#151812]/90"
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="h-8 w-8 bg-[#FFC900]/10 text-[#FFC900]/80 rounded-full flex items-center justify-center">
                        To
                      </div>
                      <span className="font-medium text-[#FFC900]/80">
                        {getProfileName(message.receiver_id)}
                      </span>
                      <span className="text-xs text-[#FFC900]/60 ml-auto">
                        {formatDistanceToNow(new Date(message.created_at), { addSuffix: true })}
                      </span>
                    </div>
                    <p className="text-[#FFC900]/70">{message.content}</p>
                    <div className="flex justify-end mt-2">
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${
                          message.read 
                            ? 'border-green-500/30 text-green-500' 
                            : 'border-[#FFC900]/30 text-[#FFC900]/70'
                        }`}
                      >
                        {message.read ? 'Read' : 'Delivered'}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-[#FFC900]/60">
                <MessageSquare className="h-12 w-12 mx-auto opacity-30 mb-2" />
                <p>You haven't sent any messages yet</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
        
        <Button 
          className="w-full mt-6 bg-[#FFC900] text-[#151812] hover:bg-[#e5b700]"
          onClick={() => {
            // Navigate to mentorship page or open message dialog
          }}
        >
          <MessageSquare className="h-4 w-4 mr-2" />
          Connect with a Mentor
        </Button>
      </CardContent>
    </Card>
  );
};

export default MentorshipInbox;
