
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";
import LeaderboardUserCard, { LeaderboardUser } from './LeaderboardUserCard';
import { Skeleton } from "@/components/ui/skeleton";

interface MentorLeaderboardProps {
  timeFilter: 'week' | 'month' | 'allTime';
}

const MentorLeaderboard = ({ timeFilter }: MentorLeaderboardProps) => {
  const { data: mentorLeaders, isLoading } = useQuery({
    queryKey: ['mentor-leaderboard', timeFilter],
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
      
      // Fetch mentorships
      let query = supabase
        .from('mentorships')
        .select(`
          id,
          created_at,
          mentor_id,
          profiles:mentor_id (
            id,
            first_name,
            last_name,
            avatar_url,
            qualification_level
          )
        `)
        .eq('status', 'active');
        
      // Add time filter if needed
      if (fromDate) {
        query = query.gte('created_at', fromDate);
      }

      const { data, error } = await query;
      
      if (error) {
        throw error;
      }
      
      // Count active mentorships per mentor
      const mentorCounts: Record<string, {
        id: string;
        name: string;
        avatarUrl?: string;
        score: number;
        level?: string;
      }> = {};

      data.forEach(mentorship => {
        const profile = mentorship.profiles;
        if (!profile) return;
        
        const mentorId = profile.id;
        const fullName = `${profile.first_name || ''} ${profile.last_name || ''}`.trim() || 'Anonymous Mentor';
        
        if (!mentorCounts[mentorId]) {
          mentorCounts[mentorId] = {
            id: mentorId,
            name: fullName,
            avatarUrl: profile.avatar_url || undefined,
            level: profile.qualification_level,
            score: 0
          };
        }
        
        mentorCounts[mentorId].score += 1;
      });

      // Convert to array, sort by score, and add rank
      return Object.values(mentorCounts)
        .sort((a, b) => b.score - a.score)
        .map((mentor, index) => ({
          ...mentor,
          rank: index + 1
        })) as LeaderboardUser[];
    }
  });

  const topMentors = mentorLeaders?.slice(0, 10) || [];

  return (
    <Card className="bg-[#22251e] border-[#FFC900]/20">
      <CardHeader className="pb-2">
        <CardTitle className="text-[#FFC900] flex items-center text-xl">
          <Users className="h-5 w-5 mr-2" />
          Top Mentors
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
        ) : topMentors.length > 0 ? (
          topMentors.map(mentor => (
            <LeaderboardUserCard 
              key={mentor.id} 
              user={mentor} 
              scoreLabel="Active Mentees" 
            />
          ))
        ) : (
          <div className="text-center py-8 text-[#FFC900]/70">
            No mentor data available for this time period
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MentorLeaderboard;
