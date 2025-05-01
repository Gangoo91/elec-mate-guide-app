
import React, { useState } from 'react';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatDistance } from 'date-fns';
import { Calendar, MessageSquare, Clock, Timer } from 'lucide-react';
import MilestoneStatusButton from './MilestoneStatusButton';
import { Separator } from "@/components/ui/separator";
import { useApprenticeProgress } from '@/hooks/useApprenticeProgress';
import { ScrollArea } from "@/components/ui/scroll-area";
import { MilestoneResource } from './MilestoneResource';
import { MilestoneUpdates } from './MilestoneUpdates';
import { Milestone } from './types';
import { Input } from '@/components/ui/input';

interface MilestoneDetailProps {
  milestone: Milestone;
}

const MilestoneDetail = ({ milestone }: MilestoneDetailProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [trainingHours, setTrainingHours] = useState<string>(milestone.training_hours?.toString() || '');
  const { updateMilestone, addMilestoneUpdate, milestoneUpdates } = useApprenticeProgress();
  
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
  
  const handleHoursUpdate = () => {
    if (!trainingHours) return;
    
    const hours = parseFloat(trainingHours);
    if (isNaN(hours)) return;
    
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
          <DialogTitle className="text-xl text-[#FFC900] flex items-center gap-3">
            <MilestoneStatusButton 
              status={milestone.status}
              onStatusChange={handleStatusChange}
            />
            {milestone.title}
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[500px] pr-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="text-[#FFC900]">
                {milestone.type}
              </Badge>
              <div className="flex items-center gap-2 text-sm text-[#FFC900]/70">
                <Calendar className="h-4 w-4" />
                <span>Created {formatDistance(new Date(milestone.created_at), new Date(), { addSuffix: true })}</span>
              </div>
            </div>
            
            {milestone.description && (
              <div>
                <h4 className="text-sm font-medium mb-1 text-[#FFC900]">Description</h4>
                <p className="text-[#FFC900]/70">{milestone.description}</p>
              </div>
            )}

            <div className="p-4 bg-[#22251e]/80 rounded-md border border-[#FFC900]/20">
              <h4 className="text-sm font-medium mb-2 text-[#FFC900] flex items-center gap-2">
                <Timer className="h-4 w-4" />
                Off-the-Job Training Hours
              </h4>
              <div className="flex items-end gap-2">
                <div className="flex-1">
                  <Input
                    type="number" 
                    min="0"
                    step="0.5"
                    value={trainingHours}
                    onChange={(e) => setTrainingHours(e.target.value)}
                    placeholder="Record training hours"
                    className="bg-[#22251e] border-[#FFC900]/30 text-[#FFC900]"
                  />
                </div>
                <Button 
                  variant="outline"
                  size="sm"
                  className="border-[#FFC900]/30 text-[#FFC900] hover:text-[#FFC900] hover:bg-[#FFC900]/10"
                  onClick={handleHoursUpdate}
                >
                  Save Hours
                </Button>
              </div>
              <p className="text-xs text-[#FFC900]/60 mt-2">
                Record the time spent on this off-the-job training activity
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 text-sm">
              {milestone.target_completion_date && (
                <div className="flex items-center gap-2 bg-[#22251e]/80 p-2 rounded">
                  <Calendar className="h-4 w-4 text-[#FFC900]" />
                  <span className="text-[#FFC900]/80">Target: {new Date(milestone.target_completion_date).toLocaleDateString()}</span>
                </div>
              )}
              
              {milestone.completed_at && (
                <div className="flex items-center gap-2 bg-green-950/30 p-2 rounded">
                  <Clock className="h-4 w-4 text-green-500" />
                  <span className="text-green-500">
                    Completed {formatDistance(new Date(milestone.completed_at), new Date(), { addSuffix: true })}
                  </span>
                </div>
              )}
              
              {milestone.training_hours && (
                <div className="flex items-center gap-2 bg-blue-950/30 p-2 rounded">
                  <Timer className="h-4 w-4 text-blue-400" />
                  <span className="text-blue-400">
                    {milestone.training_hours} training hours logged
                  </span>
                </div>
              )}
            </div>
            
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
