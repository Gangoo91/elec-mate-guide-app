
import { DialogTitle } from "@/components/ui/dialog";
import MilestoneStatusButton from '../MilestoneStatusButton';
import { Milestone } from '../types';

interface MilestoneHeaderProps {
  milestone: Milestone;
  onStatusChange: (status: 'not_started' | 'in_progress' | 'completed') => void;
}

export const MilestoneHeader = ({ milestone, onStatusChange }: MilestoneHeaderProps) => {
  return (
    <DialogTitle className="text-xl text-[#FFC900] flex items-center gap-3">
      <MilestoneStatusButton 
        status={milestone.status}
        onStatusChange={onStatusChange}
      />
      {milestone.title}
    </DialogTitle>
  );
};
