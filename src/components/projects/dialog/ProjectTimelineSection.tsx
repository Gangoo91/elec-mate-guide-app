
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

interface ProjectTimelineSectionProps {
  deadline?: string;
}

export function ProjectTimelineSection({ deadline }: ProjectTimelineSectionProps) {
  const formatDate = (dateString?: string) => {
    if (!dateString) return "Not set";
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <Card className="bg-[#333] border-[#444]">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-[#FFC900]">
          <Calendar className="inline-block w-4 h-4 mr-2" /> Timeline
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="text-xs text-[#FFC900]/70">
          <p>Start Date: {formatDate("2025-04-01")}</p>
          <p>Phase 1 Completion: {formatDate("2025-04-15")}</p>
          <p>Expected Completion: {formatDate(deadline)}</p>
        </div>
      </CardContent>
    </Card>
  );
}
