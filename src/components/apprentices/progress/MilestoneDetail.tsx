
import React, { useState } from 'react';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageSquare } from 'lucide-react';
import { useApprenticeProgress } from '@/hooks/useApprenticeProgress';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { MilestoneResource } from './MilestoneResource';
import { MilestoneUpdates } from './MilestoneUpdates';
import { Milestone } from './types';
import { useNavigate } from 'react-router-dom';
import { MilestoneHeader } from './milestone-detail/MilestoneHeader';
import { MilestoneMetadata } from './milestone-detail/MilestoneMetadata';
import { MilestoneDescription } from './milestone-detail/MilestoneDescription';
import { LearningPathway } from './milestone-detail/LearningPathway';
import { TrainingHours } from './milestone-detail/TrainingHours';
import { MilestoneStatusBadges } from './milestone-detail/MilestoneStatusBadges';

interface MilestoneDetailProps {
  milestone: Milestone;
}

const MilestoneDetail = ({ milestone }: MilestoneDetailProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { updateMilestone, addMilestoneUpdate, milestoneUpdates } = useApprenticeProgress();
  const navigate = useNavigate();
  
  const milestoneSpecificUpdates = milestoneUpdates.filter(
    update => update.milestone_id === milestone.id
  );

  const handleStatusChange = (status: 'not_started' | 'in_progress' | 'completed') => {
    const updates = {
      id: milestone.id,
      status,
      completed_at: status === 'completed' ? new Date().toISOString() : null
    };
    updateMilestone(updates);
  };
  
  const handleAddUpdate = (note: string) => {
    addMilestoneUpdate({
      milestone_id: milestone.id, 
      note
    });
  };
  
  const handleHoursUpdate = (hours: number) => {
    updateMilestone({
      id: milestone.id,
      training_hours: hours
    });
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm"
          className="h-auto p-1 text-[#FFC900]/80 hover:text-[#FFC900] hover:bg-[#FFC900]/10"
        >
          <MessageSquare className="h-4 w-4 mr-1" />
          <span>Details</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <MilestoneHeader 
            milestone={milestone} 
            onStatusChange={handleStatusChange} 
          />
        </DialogHeader>
        <ScrollArea className="h-[500px] pr-4">
          <div className="space-y-4">
            <MilestoneMetadata milestone={milestone} />
            
            <MilestoneDescription milestone={milestone} />

            <LearningPathway 
              milestone={milestone} 
              onClose={() => setIsOpen(false)} 
            />

            <TrainingHours 
              milestone={milestone} 
              onSaveHours={handleHoursUpdate} 
            />
            
            <MilestoneStatusBadges milestone={milestone} />
            
            <MilestoneResource milestone={milestone} onClose={() => setIsOpen(false)} />
            
            <Separator className="my-4 bg-[#FFC900]/20" />
            
            <MilestoneUpdates 
              updates={milestoneSpecificUpdates}
              onAddUpdate={handleAddUpdate}
            />
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default MilestoneDetail;
