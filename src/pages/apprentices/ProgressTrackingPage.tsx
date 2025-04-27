
import React, { useState } from 'react';
import MainLayout from "@/components/layout/MainLayout";
import MilestoneList from "@/components/apprentices/progress/MilestoneList";
import PageHeader from "@/components/layout/PageHeader";
import { useNavigate } from 'react-router-dom';
import { useApprenticeProgress } from '@/hooks/useApprenticeProgress';
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Award,
  Calendar,
  Clock,
  BookOpen,
  TrendingUp,
  Trophy
} from 'lucide-react';

const ProgressTrackingPage = () => {
  const navigate = useNavigate();
  const { milestones } = useApprenticeProgress();
  const [timeframe, setTimeframe] = useState('all');

  const handleBackNavigation = () => {
    navigate('/apprentices');
  };

  // Filter milestones based on timeframe
  const filteredMilestones = milestones?.filter(milestone => {
    if (timeframe === 'all') return true;
    
    const now = new Date();
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(now.getMonth() - 1);
    
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(now.getDate() - 7);

    const createdAt = new Date(milestone.created_at || new Date());
    
    if (timeframe === 'month' && createdAt >= oneMonthAgo) return true;
    if (timeframe === 'week' && createdAt >= oneWeekAgo) return true;
    
    return false;
  });

  // Calculate progress statistics
  const totalMilestones = filteredMilestones?.length || 0;
  const completedMilestones = filteredMilestones?.filter(m => m.status === 'completed').length || 0;
  const inProgressMilestones = filteredMilestones?.filter(m => m.status === 'in_progress').length || 0;
  const notStartedMilestones = filteredMilestones?.filter(m => m.status === 'not_started').length || 0;
  const completionPercentage = totalMilestones ? (completedMilestones / totalMilestones) * 100 : 0;

  // Calculate milestone types
  const qualifications = filteredMilestones?.filter(m => m.type === 'qualification').length || 0;
  const certifications = filteredMilestones?.filter(m => m.type === 'certification').length || 0;
  const skills = filteredMilestones?.filter(m => m.type === 'skill').length || 0;
  const modules = filteredMilestones?.filter(m => m.type === 'module').length || 0;

  // Calculate resource types
  const withResources = filteredMilestones?.filter(m => m.resource_id).length || 0;
  const resourcePercentage = totalMilestones ? (withResources / totalMilestones) * 100 : 0;

  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8">
        <PageHeader 
          title="Progress Tracking"
          description="Track your apprenticeship journey, milestones, and achievements"
          customBackAction={handleBackNavigation}
        />
        
        <div className="max-w-4xl mx-auto mt-6">
          <Card className="mb-6 bg-[#22251e] border-[#FFC900]/20">
            <CardHeader className="pb-2">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <CardTitle className="text-[#FFC900] text-xl flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Progress Overview
                </CardTitle>
                <div className="mt-2 sm:mt-0">
                  <Tabs 
                    defaultValue="all" 
                    value={timeframe} 
                    onValueChange={setTimeframe}
                    className="w-full"
                  >
                    <TabsList className="grid grid-cols-3 w-[240px]">
                      <TabsTrigger value="week">Week</TabsTrigger>
                      <TabsTrigger value="month">Month</TabsTrigger>
                      <TabsTrigger value="all">All Time</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <div className="text-sm text-[#FFC900]/80">
                    {completedMilestones} of {totalMilestones} milestones completed
                  </div>
                  <div className="text-sm font-medium text-[#FFC900]">
                    {completionPercentage.toFixed(0)}%
                  </div>
                </div>
                <Progress value={completionPercentage} className="h-2 mb-6" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card className="bg-[#22251e]/50 border-[#FFC900]/20">
                    <CardContent className="flex items-center p-4">
                      <div className="bg-[#FFC900]/10 p-2 rounded-full mr-3">
                        <Trophy className="h-6 w-6 text-[#FFC900]" />
                      </div>
                      <div>
                        <p className="text-sm text-[#FFC900]/80">Completed</p>
                        <p className="text-2xl font-bold text-[#FFC900]">{completedMilestones}</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-[#22251e]/50 border-[#FFC900]/20">
                    <CardContent className="flex items-center p-4">
                      <div className="bg-[#FFC900]/10 p-2 rounded-full mr-3">
                        <Clock className="h-6 w-6 text-[#FFC900]" />
                      </div>
                      <div>
                        <p className="text-sm text-[#FFC900]/80">In Progress</p>
                        <p className="text-2xl font-bold text-[#FFC900]">{inProgressMilestones}</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-[#22251e]/50 border-[#FFC900]/20">
                    <CardContent className="flex items-center p-4">
                      <div className="bg-[#FFC900]/10 p-2 rounded-full mr-3">
                        <BookOpen className="h-6 w-6 text-[#FFC900]" />
                      </div>
                      <div>
                        <p className="text-sm text-[#FFC900]/80">Not Started</p>
                        <p className="text-2xl font-bold text-[#FFC900]">{notStartedMilestones}</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-[#22251e]/50 border-[#FFC900]/20">
                    <CardContent className="flex items-center p-4">
                      <div className="bg-[#FFC900]/10 p-2 rounded-full mr-3">
                        <Award className="h-6 w-6 text-[#FFC900]" />
                      </div>
                      <div>
                        <p className="text-sm text-[#FFC900]/80">Completion</p>
                        <p className="text-2xl font-bold text-[#FFC900]">{completionPercentage.toFixed(0)}%</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  <div className="bg-[#22251e]/30 p-3 rounded-lg text-center">
                    <p className="text-xl font-semibold text-[#FFC900]">{qualifications}</p>
                    <p className="text-xs text-[#FFC900]/70">Qualifications</p>
                  </div>
                  <div className="bg-[#22251e]/30 p-3 rounded-lg text-center">
                    <p className="text-xl font-semibold text-[#FFC900]">{certifications}</p>
                    <p className="text-xs text-[#FFC900]/70">Certifications</p>
                  </div>
                  <div className="bg-[#22251e]/30 p-3 rounded-lg text-center">
                    <p className="text-xl font-semibold text-[#FFC900]">{skills}</p>
                    <p className="text-xs text-[#FFC900]/70">Skills</p>
                  </div>
                  <div className="bg-[#22251e]/30 p-3 rounded-lg text-center">
                    <p className="text-xl font-semibold text-[#FFC900]">{modules}</p>
                    <p className="text-xs text-[#FFC900]/70">Modules</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-sm text-[#FFC900]/80">
                      Milestones with learning resources
                    </div>
                    <div className="text-sm font-medium text-[#FFC900]">
                      {resourcePercentage.toFixed(0)}%
                    </div>
                  </div>
                  <Progress value={resourcePercentage} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>

          <MilestoneList />
        </div>
      </div>
    </MainLayout>
  );
};

export default ProgressTrackingPage;
