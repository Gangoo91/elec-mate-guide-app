
import React, { useState } from 'react';
import MainLayout from "@/components/layout/MainLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, BookOpen, Users, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import PageHeader from "@/components/layout/PageHeader";
import BackButton from "@/components/navigation/BackButton";
import StudyLeaderboard from "@/components/leaderboards/StudyLeaderboard";
import MentorLeaderboard from "@/components/leaderboards/MentorLeaderboard";
import CommunityLeaderboard from "@/components/leaderboards/CommunityLeaderboard";
import LeaderboardTimeFilter from "@/components/leaderboards/LeaderboardTimeFilter";
import CommunityCounter from "@/components/dashboard/CommunityCounter";

const LeaderboardsPage = () => {
  const [timeFilter, setTimeFilter] = useState<'week' | 'month' | 'allTime'>('week');
  const navigate = useNavigate();
  const { toast } = useToast();

  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
        <div className="mb-4">
          <BackButton />
        </div>
        
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
          <PageHeader 
            title="Recognition & Leaderboards"
            description="Celebrate achievements and recognize top performers in the ELEC-MATE community"
            hideBackButton={true}
          />
          
          <div className="flex items-center gap-2 text-sm">
            <span className="text-[#FFC900]/80">Community size:</span>
            <CommunityCounter />
          </div>
        </div>
        
        <LeaderboardTimeFilter 
          currentFilter={timeFilter} 
          onFilterChange={setTimeFilter}
        />
        
        <Tabs defaultValue="study" className="mt-6">
          <TabsList className="bg-[#22251e] border-b border-[#FFC900]/20 w-full justify-start rounded-none p-0">
            <TabsTrigger 
              value="study" 
              className="data-[state=active]:text-[#FFC900] data-[state=active]:border-b-2 data-[state=active]:border-[#FFC900] rounded-none pb-2 pt-2 px-4 text-[#FFC900]/70"
            >
              <BookOpen className="h-4 w-4 mr-2" />
              Study Champions
            </TabsTrigger>
            <TabsTrigger 
              value="mentors" 
              className="data-[state=active]:text-[#FFC900] data-[state=active]:border-b-2 data-[state=active]:border-[#FFC900] rounded-none pb-2 pt-2 px-4 text-[#FFC900]/70"
            >
              <Users className="h-4 w-4 mr-2" />
              Top Mentors
            </TabsTrigger>
            <TabsTrigger 
              value="community" 
              className="data-[state=active]:text-[#FFC900] data-[state=active]:border-b-2 data-[state=active]:border-[#FFC900] rounded-none pb-2 pt-2 px-4 text-[#FFC900]/70"
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              Community Contributors
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="study" className="pt-4">
            <StudyLeaderboard timeFilter={timeFilter} />
          </TabsContent>
          
          <TabsContent value="mentors" className="pt-4">
            <MentorLeaderboard timeFilter={timeFilter} />
          </TabsContent>
          
          <TabsContent value="community" className="pt-4">
            <CommunityLeaderboard timeFilter={timeFilter} />
          </TabsContent>
        </Tabs>
        
        <div className="mt-8">
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardHeader>
              <CardTitle className="text-[#FFC900] flex items-center">
                <Award className="h-5 w-5 mr-2" />
                Monthly Rewards Program
              </CardTitle>
              <CardDescription className="text-[#FFC900]/70">
                Top performers receive recognition and rewards each month
              </CardDescription>
            </CardHeader>
            <CardContent className="text-white/80 space-y-4">
              <p>
                Achieve top positions on our leaderboards to earn rewards, including:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Premium account upgrades</li>
                <li>Featured profile badges</li>
                <li>Exclusive learning resources</li>
                <li>Recognition in our community newsletter</li>
              </ul>
              <p className="text-sm text-[#FFC900]/60 mt-4">
                New rewards are distributed on the 1st of each month based on the previous month's performance.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default LeaderboardsPage;
