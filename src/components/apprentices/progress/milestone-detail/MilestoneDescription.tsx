
import { Milestone } from "../types";

interface MilestoneDescriptionProps {
  milestone: Milestone;
}

export const MilestoneDescription = ({ milestone }: MilestoneDescriptionProps) => {
  if (!milestone.description) return null;
  
  return (
    <div>
      <h4 className="text-sm font-medium mb-1 text-[#FFC900]">Description</h4>
      <p className="text-[#FFC900]/70">{milestone.description}</p>
    </div>
  );
};
