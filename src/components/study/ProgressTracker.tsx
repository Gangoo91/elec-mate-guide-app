
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Clock, CheckCircle2 } from "lucide-react";
import { Progress as ProgressType } from "@/types/study";

interface ProgressTrackerProps {
  courseId: string;
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({ courseId }) => {
  const { user } = useAuth();
  
  const { data: progressData, isLoading } = useQuery({
    queryKey: ["courseProgress", courseId, user?.id],
    queryFn: async () => {
      if (!user) return [];

      const { data, error } = await supabase
        .from("user_progress")
        .select("*")
        // We'd ideally filter by content related to this course
        // This is a simplified example
        .eq("user_id", user.id);

      if (error) throw error;
      return data;
    },
    enabled: !!user,
  });

  // Calculate overall progress
  const calculateProgress = () => {
    if (!progressData || progressData.length === 0) {
      return {
        completedCount: 0,
        totalCount: 1, // Avoid division by zero
        percentComplete: 0,
        averageScore: 0,
      };
    }

    const totalCount = progressData.length;
    const completedCount = progressData.filter(
      (item) => item.progress && (item.progress as ProgressType).completed
    ).length;
    
    let totalScore = 0;
    let scoredItems = 0;
    
    progressData.forEach((item) => {
      if (item.progress && typeof (item.progress as ProgressType).score === 'number') {
        totalScore += (item.progress as ProgressType).score;
        scoredItems++;
      }
    });
    
    const percentComplete = Math.round((completedCount / totalCount) * 100);
    const averageScore = scoredItems > 0 ? Math.round(totalScore / scoredItems) : 0;
    
    return {
      completedCount,
      totalCount,
      percentComplete,
      averageScore,
    };
  };

  const { completedCount, totalCount, percentComplete, averageScore } = calculateProgress();

  return (
    <Card className="bg-[#22251e] border-[#FFC900]/20">
      <CardHeader>
        <CardTitle className="text-[#FFC900] flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5" />
          Course Progress
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {isLoading ? (
          <div className="space-y-2 animate-pulse">
            <div className="h-4 bg-[#FFC900]/20 rounded"></div>
            <div className="h-2 bg-[#FFC900]/10 rounded"></div>
            <div className="h-4 bg-[#FFC900]/20 rounded"></div>
          </div>
        ) : (
          <>
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#FFC900]/80">Overall Completion</span>
                <span className="text-sm font-medium text-[#FFC900]">{percentComplete}%</span>
              </div>
              <Progress 
                value={percentComplete} 
                className="h-2 bg-[#FFC900]/20" 
              />
              <div className="text-xs text-[#FFC900]/60">
                {completedCount} of {totalCount} units completed
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4 text-[#FFC900]/70" />
                <span className="text-sm text-[#FFC900]/80">Average Score</span>
              </div>
              <span className="text-sm font-medium text-[#FFC900]">{averageScore}%</span>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default ProgressTracker;
