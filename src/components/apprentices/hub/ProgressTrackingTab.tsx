
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock } from "lucide-react";
import ApprenticeHubCard from './ApprenticeHubCard';

const ProgressTrackingTab: React.FC<{
  onCardClick: (path: string) => void
}> = ({ onCardClick }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <ApprenticeHubCard
        title="Progress Tracking"
        description="Track your apprenticeship milestones"
        content="View your progress through your apprenticeship and qualification journey."
        path="/apprentices/progress"
        onClick={onCardClick}
      />
      
      <ApprenticeHubCard
        title="Off-the-Job Training"
        description="20% off-the-job training record"
        icon={<Clock className="h-6 w-6 text-primary mb-2" />}
        content="Record and track your off-the-job training hours to meet apprenticeship requirements."
        path="/apprentices/progress/off-the-job"
        onClick={onCardClick}
      />
    </div>
  );
};

export default ProgressTrackingTab;
