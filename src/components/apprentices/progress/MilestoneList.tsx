
import React from 'react';
import { useApprenticeProgress } from '@/hooks/useApprenticeProgress';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CircleCheck, CircleDot, Circle } from 'lucide-react';
import { formatDistance } from 'date-fns';

const statusIcons = {
  completed: <CircleCheck className="h-5 w-5 text-green-500" />,
  in_progress: <CircleDot className="h-5 w-5 text-[#FFC900]" />,
  not_started: <Circle className="h-5 w-5 text-gray-400" />
};

const MilestoneList = () => {
  const { milestones, isLoading } = useApprenticeProgress();

  if (isLoading) {
    return <div>Loading milestones...</div>;
  }

  return (
    <div className="space-y-4">
      {milestones?.map((milestone) => (
        <Card key={milestone.id} className="bg-[#22251e] border-[#FFC900]/20">
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-3">
              {statusIcons[milestone.status]}
              <h3 className="text-[#FFC900] font-medium">{milestone.title}</h3>
            </div>
            <Badge variant="outline" className="text-[#FFC900]">
              {milestone.type}
            </Badge>
          </CardHeader>
          <CardContent>
            {milestone.description && (
              <p className="text-[#FFC900]/70 mb-2">{milestone.description}</p>
            )}
            <div className="flex items-center gap-4 text-sm text-[#FFC900]/60">
              {milestone.target_completion_date && (
                <span>Target: {new Date(milestone.target_completion_date).toLocaleDateString()}</span>
              )}
              {milestone.completed_at && (
                <span>Completed {formatDistance(new Date(milestone.completed_at), new Date(), { addSuffix: true })}</span>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MilestoneList;
