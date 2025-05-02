
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";
import LeaderboardUserCard, { LeaderboardUser } from './LeaderboardUserCard';
import { Skeleton } from "@/components/ui/skeleton";

interface CommunityLeaderboardProps {
  timeFilter: 'week' | 'month' | 'allTime';
}

const CommunityLeaderboard = ({ timeFilter }: CommunityLeaderboardProps) => {
  const { data: communityLeaders, isLoading } = useQuery({
    queryKey: ['community-leaderboard', timeFilter],
    queryFn: async () => {
      // Set time range based on filter
      let fromDate: string | null = null;
      const now = new Date();
      
      if (timeFilter === 'week') {
        const pastWeek = new Date(now);
        pastWeek.setDate(now.getDate() - 7);
        fromDate = pastWeek.toISOString();
      } else if (timeFilter === 'month') {
        const pastMonth = new Date(now);
        pastMonth.setMonth(now.getMonth() - 1);
        fromDate = pastMonth.toISOString();
      }
      
      // Fetch chat messages and comments
      let messagesQuery = supabase
        .from('chat_messages')
        .select(`
          id,
          created_at,
          user_id,
          profiles:user_id (
            id,
            first_name,
            last_name,
            avatar_url,
            qualification_level
          )
        `);
        
      // Add time filter if needed
      if (fromDate) {
        messagesQuery = messagesQuery.gte('created_at', fromDate);
      }

      let commentsQuery = supabase
        .from('chat_comments')
        .select(`
          id,
          created_at,
          user_id,
          profiles:user_id (
            id,
            first_name,
            last_name,
            avatar_url,
            qualification_level
          )
        `);
        
      // Add time filter if needed
      if (fromDate) {
        commentsQuery = commentsQuery.gte('created_at', fromDate);
      }

      const [messagesRes, commentsRes] = await Promise.all([
        messagesQuery,
        commentsQuery
      ]);
      
      if (messagesRes.error) throw messagesRes.error;
      if (commentsRes.error) throw commentsRes.error;
      
      // Count contributions per user
      const userContributions: Record<string, {
        id: string;
        name: string;
        avatarUrl?: string;
        score: number;
        level?: string;
      }> = {};

      // Process messages
      messagesRes.data.forEach(message => {
        const profile = message.profiles;
        if (!profile) return;
        
        const userId = profile.id;
        const fullName = `${profile.first_name || ''} ${profile.last_name || ''}`.trim() || 'Anonymous User';
        
        if (!userContributions[userId]) {
          userContributions[userId] = {
            id: userId,
            name: fullName,
            avatarUrl: profile.avatar_url || undefined,
            level: profile.qualification_level,
            score: 0
          };
        }
        
        // A message counts as 2 points
        userContributions[userId].score += 2;
      });

      // Process comments
      commentsRes.data.forEach(comment => {
        const profile = comment.profiles;
        if (!profile) return;
        
        const userId = profile.id;
        const fullName = `${profile.first_name || ''} ${profile.last_name || ''}`.trim() || 'Anonymous User';
        
        if (!userContributions[userId]) {
          userContributions[userId] = {
            id: userId,
            name: fullName,
            avatarUrl: profile.avatar_url || undefined,
            level: profile.qualification_level,
            score: 0
          };
        }
        
        // A comment counts as 1 point
        userContributions[userId].score += 1;
      });

      // Convert to array, sort by score, and add rank
      return Object.values(userContributions)
        .sort((a, b) => b.score - a.score)
        .map((user, index) => ({
          ...user,
          rank: index + 1
        })) as LeaderboardUser[];
    }
  });

  const topContributors = communityLeaders?.slice(0, 10) || [];

  return (
    <Card className="bg-[#22251e] border-[#FFC900]/20">
      <CardHeader className="pb-2">
        <CardTitle className="text-[#FFC900] flex items-center text-xl">
          <MessageSquare className="h-5 w-5 mr-2" />
          Community Contributors
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          Array(5).fill(0).map((_, i) => (
            <div key={i} className="flex items-center gap-3 p-3 border-b border-[#FFC900]/10">
              <Skeleton className="h-6 w-6 rounded-full bg-[#FFC900]/10" />
              <Skeleton className="h-10 w-10 rounded-full bg-[#FFC900]/10" />
              <div className="flex flex-col gap-2">
                <Skeleton className="h-5 w-32 bg-[#FFC900]/10" />
                <Skeleton className="h-3 w-20 bg-[#FFC900]/10" />
              </div>
              <div className="ml-auto">
                <Skeleton className="h-6 w-16 bg-[#FFC900]/10" />
              </div>
            </div>
          ))
        ) : topContributors.length > 0 ? (
          topContributors.map(contributor => (
            <LeaderboardUserCard 
              key={contributor.id} 
              user={contributor} 
              scoreLabel="Contribution Points" 
            />
          ))
        ) : (
          <div className="text-center py-8 text-[#FFC900]/70">
            No community contribution data available for this time period
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CommunityLeaderboard;
