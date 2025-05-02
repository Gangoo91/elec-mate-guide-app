
import { Calendar, Clock, Timer } from "lucide-react";
import { formatDistance } from "date-fns";
import { Milestone } from "../types";

interface MilestoneStatusBadgesProps {
  milestone: Milestone;
}

export const MilestoneStatusBadges = ({ milestone }: MilestoneStatusBadgesProps) => {
  return (
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
  );
};
