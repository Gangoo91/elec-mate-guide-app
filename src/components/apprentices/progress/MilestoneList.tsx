
import { useApprenticeProgress } from '@/hooks/useApprenticeProgress';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { formatDistance } from 'date-fns';
import AddMilestoneDialog from './AddMilestoneDialog';
import MilestoneStatusButton from './MilestoneStatusButton';
import MilestoneDetail from './MilestoneDetail';
import MilestoneFilters from './MilestoneFilters';
import { Button } from '@/components/ui/button';
import { Play, BookOpen, Headphones, CirclePlay, ExternalLink, GraduationCap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const MilestoneList = () => {
  const { milestones, isLoading, updateMilestone } = useApprenticeProgress();
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    status: 'all',
    type: 'all',
    search: '',
    framework: 'all',
    level: 'all'
  });

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

  // Format framework name for display
  const formatFramework = (framework?: string) => {
    if (!framework) return null;
    switch(framework) {
      case 'city_guilds': return 'City & Guilds';
      case 'eal': return 'EAL';
      case 'moet': return 'MOET';
      default: return framework.charAt(0).toUpperCase() + framework.slice(1);
    }
  };

  // Filter milestones based on selected filters
  const filteredMilestones = milestones?.filter(milestone => {
    // Status filter
    if (filters.status !== 'all' && milestone.status !== filters.status) {
      return false;
    }
    
    // Type filter
    if (filters.type !== 'all' && milestone.type !== filters.type) {
      return false;
    }
    
    // Framework filter
    if (filters.framework !== 'all' && milestone.qualification_framework !== filters.framework) {
      return false;
    }
    
    // Level filter
    if (filters.level !== 'all' && milestone.learning_level !== filters.level) {
      return false;
    }
    
    // Search filter
    if (filters.search && !milestone.title.toLowerCase().includes(filters.search.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
        <AddMilestoneDialog />
        <MilestoneFilters filters={filters} setFilters={setFilters} />
      </div>
      
      <div className="space-y-4">
        {filteredMilestones?.length ? (
          filteredMilestones.map((milestone) => (
            <Card key={milestone.id} className="bg-[#22251e] border-[#FFC900]/20">
              <CardHeader className="flex flex-row items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <MilestoneStatusButton 
                    status={milestone.status}
                    onStatusChange={(status) => handleStatusChange(milestone.id, status)}
                  />
                  <h3 className="text-[#FFC900] font-medium">{milestone.title}</h3>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-[#FFC900]">
                    {milestone.type}
                  </Badge>
                  {milestone.qualification_framework && (
                    <Badge variant="secondary" className="bg-[#FFC900]/20 text-[#FFC900]">
                      <GraduationCap className="h-3 w-3 mr-1" />
                      {formatFramework(milestone.qualification_framework)}
                    </Badge>
                  )}
                  {milestone.learning_level && (
                    <Badge variant="secondary" className="bg-[#FFC900]/10 text-[#FFC900]">
                      {milestone.learning_level}
                    </Badge>
                  )}
                  <MilestoneDetail milestone={milestone} />
                </div>
              </CardHeader>
              <CardContent className="py-2">
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
                  {milestone.training_hours && (
                    <span>{milestone.training_hours} hours logged</span>
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
          ))
        ) : (
          <div className="text-center p-8 border border-dashed border-[#FFC900]/30 rounded-lg">
            <p className="text-[#FFC900]/70">No milestones match your filters.</p>
            <Button 
              variant="link" 
              className="text-[#FFC900]"
              onClick={() => setFilters({ status: 'all', type: 'all', search: '', framework: 'all', level: 'all' })}
            >
              Clear filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MilestoneList;
