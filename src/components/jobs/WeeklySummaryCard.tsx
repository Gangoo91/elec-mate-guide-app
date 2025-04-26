
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

interface WeekSummary {
  day: string;
  hours: number;
  jobs: number;
}

interface WeeklySummaryCardProps {
  weekData: WeekSummary[];
  loading?: boolean;
}

export function WeeklySummaryCard({ weekData, loading = false }: WeeklySummaryCardProps) {
  // Calculate total hours and jobs
  const totalHours = weekData.reduce((sum, day) => sum + day.hours, 0);
  const totalJobs = weekData.reduce((sum, day) => sum + day.jobs, 0);
  
  return (
    <Card className="bg-[#22251e] border-[#FFC900]/20">
      <CardContent className="pt-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[#FFC900] font-medium text-lg">Weekly Summary</h3>
          <Calendar className="h-5 w-5 text-[#FFC900]" />
        </div>
        {loading ? (
          <div className="text-center text-[#FFC900]/70">Loading summary...</div>
        ) : (
          <>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-[#FFC900]/70">Total Hours</p>
                <p className="text-2xl font-bold text-[#FFC900]">{totalHours}</p>
              </div>
              <div>
                <p className="text-sm text-[#FFC900]/70">Total Jobs</p>
                <p className="text-2xl font-bold text-[#FFC900]">{totalJobs}</p>
              </div>
              <div>
                <p className="text-sm text-[#FFC900]/70">Avg. Hours/Job</p>
                <p className="text-2xl font-bold text-[#FFC900]">
                  {totalJobs > 0 ? (totalHours / totalJobs).toFixed(1) : "0.0"}
                </p>
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
