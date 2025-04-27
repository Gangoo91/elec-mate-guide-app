
import { Button } from "@/components/ui/button";
import { CircleCheck, CircleDot, Circle } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type Status = 'not_started' | 'in_progress' | 'completed';

interface MilestoneStatusButtonProps {
  status: Status;
  onStatusChange: (status: Status) => void;
}

const statusIcons = {
  completed: <CircleCheck className="h-5 w-5 text-green-500" />,
  in_progress: <CircleDot className="h-5 w-5 text-[#FFC900]" />,
  not_started: <Circle className="h-5 w-5 text-gray-400" />
};

export default function MilestoneStatusButton({ status, onStatusChange }: MilestoneStatusButtonProps) {
  return (
    <Select value={status} onValueChange={(value: Status) => onStatusChange(value)}>
      <SelectTrigger className="w-[140px] gap-2">
        {statusIcons[status]}
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="not_started" className="flex items-center gap-2">
          {statusIcons.not_started} Not Started
        </SelectItem>
        <SelectItem value="in_progress" className="flex items-center gap-2">
          {statusIcons.in_progress} In Progress
        </SelectItem>
        <SelectItem value="completed" className="flex items-center gap-2">
          {statusIcons.completed} Completed
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
