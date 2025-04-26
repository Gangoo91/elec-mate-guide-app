
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import type { Project } from "@/hooks/useProjects";

interface RecentUpdatesCardProps {
  recentCompletedJobs?: Project[];
}

export const RecentUpdatesCard = ({ recentCompletedJobs }: RecentUpdatesCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className="bg-[#22251e] border-[#FFC900]/20">
      <CardHeader>
        <CardTitle className="text-[#FFC900]">Recent Updates</CardTitle>
        <CardDescription className="text-[#FFC900]/70">
          Latest activity on your projects
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentCompletedJobs?.map((job) => (
            <div key={job.id} className="border-l-2 border-[#FFC900] pl-4 py-1">
              <p className="text-sm text-[#FFC900]">{job.name} - {job.status}</p>
              <p className="text-xs text-[#FFC900]/60">
                {new Date(job.updated_at).toLocaleString()}
              </p>
            </div>
          ))}
          {(!recentCompletedJobs || recentCompletedJobs.length === 0) && (
            <div className="text-center py-4">
              <p className="text-sm text-[#FFC900]/70">No recent updates</p>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          variant="ghost" 
          className="text-xs text-[#FFC900]/80 hover:text-[#FFC900]"
          onClick={() => navigate("/electricians/job-scheduling")}
        >
          View all updates
        </Button>
      </CardFooter>
    </Card>
  );
};
