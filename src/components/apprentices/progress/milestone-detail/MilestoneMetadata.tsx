
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { formatDistance } from "date-fns";
import { Milestone } from "../types";

interface MilestoneMetadataProps {
  milestone: Milestone;
}

export const MilestoneMetadata = ({ milestone }: MilestoneMetadataProps) => {
  return (
    <div className="flex items-center justify-between">
      <Badge variant="outline" className="text-[#FFC900]">
        {milestone.type}
      </Badge>
      <div className="flex items-center gap-2 text-sm text-[#FFC900]/70">
        <Calendar className="h-4 w-4" />
        <span>Created {formatDistance(new Date(milestone.created_at), new Date(), { addSuffix: true })}</span>
      </div>
    </div>
  );
};
