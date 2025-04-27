
import { useApprenticeProgress } from '@/hooks/useApprenticeProgress';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { formatDistance } from 'date-fns';
import AddMilestoneDialog from './AddMilestoneDialog';
import MilestoneStatusButton from './MilestoneStatusButton';

const MilestoneList = () => {
  const { milestones, isLoading, updateMilestone } = useApprenticeProgress();

  if (isLoading) {
    return <div>Loading milestones...</div>;
  }

  const handleStatusChange = (id: string, status: 'not_started' | 'in_progress' | 'completed') => {
    const updates = {
      id,
      status,
      completed_at: status === 'completed' ? new Date().toISOString() : null
    };
    updateMilestone(updates);
  };

  return (
    <div>
      <AddMilestoneDialog />
      <div className="space-y-4">
        {milestones?.map((milestone) => (
          <Card key={milestone.id} className="bg-[#22251e] border-[#FFC900]/20">
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center gap-3">
                <MilestoneStatusButton 
                  status={milestone.status}
                  onStatusChange={(status) => handleStatusChange(milestone.id, status)}
                />
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
    </div>
  );
};

export default MilestoneList;
