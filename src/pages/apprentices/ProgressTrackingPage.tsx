
import React from 'react';
import MainLayout from "@/components/layout/MainLayout";
import MilestoneList from "@/components/apprentices/progress/MilestoneList";
import PageHeader from "@/components/layout/PageHeader";
import { useNavigate } from 'react-router-dom';
import { useApprenticeProgress } from '@/hooks/useApprenticeProgress';
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";

const ProgressTrackingPage = () => {
  const navigate = useNavigate();
  const { milestones } = useApprenticeProgress();

  const handleBackNavigation = () => {
    navigate('/apprentices');
  };

  // Calculate progress statistics
  const totalMilestones = milestones?.length || 0;
  const completedMilestones = milestones?.filter(m => m.status === 'completed').length || 0;
  const inProgressMilestones = milestones?.filter(m => m.status === 'in_progress').length || 0;
  const completionPercentage = totalMilestones ? (completedMilestones / totalMilestones) * 100 : 0;

  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8">
        <PageHeader 
          title="Progress Tracking"
          description="Track your apprenticeship journey, milestones, and achievements"
          customBackAction={handleBackNavigation}
        />
        
        <div className="max-w-4xl mx-auto mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card className="p-4">
              <h3 className="text-sm font-medium mb-2">Total Progress</h3>
              <Progress value={completionPercentage} className="mb-2" />
              <p className="text-sm text-muted-foreground">{completionPercentage.toFixed(0)}% Complete</p>
            </Card>
            <Card className="p-4">
              <h3 className="text-sm font-medium mb-2">Completed</h3>
              <p className="text-2xl font-bold">{completedMilestones}</p>
              <p className="text-sm text-muted-foreground">milestones</p>
            </Card>
            <Card className="p-4">
              <h3 className="text-sm font-medium mb-2">In Progress</h3>
              <p className="text-2xl font-bold">{inProgressMilestones}</p>
              <p className="text-sm text-muted-foreground">milestones</p>
            </Card>
          </div>
          <MilestoneList />
        </div>
      </div>
    </MainLayout>
  );
};

export default ProgressTrackingPage;
