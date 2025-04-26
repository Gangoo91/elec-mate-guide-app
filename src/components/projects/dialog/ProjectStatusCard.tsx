
import { Card, CardContent } from "@/components/ui/card";

interface ProjectStatusCardProps {
  status: string;
  deadline?: string;
  budget?: number;
  progress?: number;
}

export function ProjectStatusCard({ status, deadline, budget, progress }: ProjectStatusCardProps) {
  const getStatusColor = (status: string) => {
    const statusColors: Record<string, string> = {
      planning: "text-blue-500",
      "in-progress": "text-amber-500",
      "on-hold": "text-purple-500",
      completed: "text-green-500",
      cancelled: "text-red-500"
    };
    return statusColors[status] || "text-gray-500";
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return "Not set";
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <Card className="bg-[#333] border-[#444]">
        <CardContent className="p-4 flex flex-col items-center justify-center">
          <div className="mt-2 text-center">
            <p className="text-xs text-[#FFC900]/60 uppercase">Status</p>
            <p className={`font-medium ${getStatusColor(status)}`}>
              {status.replace("-", " ")}
            </p>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-[#333] border-[#444]">
        <CardContent className="p-4 flex flex-col items-center justify-center">
          <div className="mt-2 text-center">
            <p className="text-xs text-[#FFC900]/60 uppercase">Deadline</p>
            <p className="font-medium text-[#FFC900]">
              {formatDate(deadline)}
            </p>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-[#333] border-[#444]">
        <CardContent className="p-4 flex flex-col items-center justify-center">
          <div className="mt-2 text-center">
            <p className="text-xs text-[#FFC900]/60 uppercase">Budget</p>
            <p className="font-medium text-[#FFC900]">
              {budget ? `£${budget.toLocaleString()}` : "Not set"}
            </p>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-[#333] border-[#444]">
        <CardContent className="p-4 flex flex-col items-center justify-center">
          <div className="mt-2 text-center">
            <p className="text-xs text-[#FFC900]/60 uppercase">Progress</p>
            <p className="font-medium text-[#FFC900]">
              {progress !== undefined ? `${progress}%` : "Not started"}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
