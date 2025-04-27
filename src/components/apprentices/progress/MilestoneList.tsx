
import { useApprenticeProgress } from '@/hooks/useApprenticeProgress';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { formatDistance } from 'date-fns';
import AddMilestoneDialog from './AddMilestoneDialog';
import MilestoneStatusButton from './MilestoneStatusButton';
import { Button } from '@/components/ui/button';
import { Play, BookOpen, Headphones, CirclePlay, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MilestoneList = () => {
  const { milestones, isLoading, updateMilestone } = useApprenticeProgress();
  const navigate = useNavigate();

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

  const getResourceIcon = (resourceType: string | null) => {
    switch(resourceType) {
      case 'video':
        return <Play className="h-4 w-4 text-[#FFC900]" />;
      case 'exam':
        return <BookOpen className="h-4 w-4 text-[#FFC900]" />;
      case 'quiz':
        return <CirclePlay className="h-4 w-4 text-[#FFC900]" />;
      case 'audio':
        return <Headphones className="h-4 w-4 text-[#FFC900]" />;
      default:
        return null;
    }
  };

  const goToResource = (resourceType: string | null, resourceId: string | null) => {
    if (!resourceType || !resourceId) return;
    
    switch(resourceType) {
      case 'video':
        navigate('/apprentices/video-demonstrations');
        break;
      case 'exam':
        navigate('/apprentices/practice-exams');
        break;
      case 'quiz':
        navigate('/apprentices/study-materials');
        break;
      case 'audio':
        navigate('/apprentices/audio-tutorials');
        break;
      default:
        break;
    }
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
            
            {milestone.resource_id && milestone.resource_type && (
              <CardFooter className="pt-0">
                <div className="w-full bg-[#22251e]/70 p-2 rounded-md border border-[#FFC900]/20 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    {getResourceIcon(milestone.resource_type)}
                    <span className="text-sm text-[#FFC900]/80">
                      {milestone.resource_type === 'video' ? 'Video tutorial' : 
                       milestone.resource_type === 'exam' ? 'Mock exam' :
                       milestone.resource_type === 'quiz' ? 'Mini quiz' : 'Audio lesson'}
                    </span>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="flex items-center gap-1 text-xs text-[#FFC900]"
                    onClick={() => goToResource(milestone.resource_type, milestone.resource_id)}
                  >
                    <span>View</span>
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                </div>
              </CardFooter>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MilestoneList;
