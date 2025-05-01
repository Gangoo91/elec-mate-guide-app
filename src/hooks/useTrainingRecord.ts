
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from "@/integrations/supabase/client";

interface UseTrainingRecordProps {
  videoId: string;
  trainingMinutes: number;
  ealCourseId?: string;
  videoTitle: string;
}

export const useTrainingRecord = ({ videoId, trainingMinutes, ealCourseId, videoTitle }: UseTrainingRecordProps) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const { toast } = useToast();
  const { user } = useAuth();
  
  const recordTrainingTime = async () => {
    if (isRecording || isComplete || !user) return;
    
    try {
      setIsRecording(true);
      
      // For demo purposes, we'll simulate a database operation
      console.log(`Recording ${trainingMinutes} minutes of training for ${ealCourseId || 'unknown course'}`);
      
      // In a real implementation, this would update the database
      /* 
      const { error } = await supabase
        .from('training_records')
        .insert({
          user_id: user.id,
          video_id: videoId,
          minutes: trainingMinutes,
          eal_course_id: ealCourseId,
          recorded_at: new Date().toISOString()
        });
      
      if (error) throw error;
      */
      
      // Show success toast
      toast({
        title: "Training Time Recorded",
        description: `${trainingMinutes} minutes added to your off-the-job training record`,
      });
      
      setIsComplete(true);
    } catch (err) {
      console.error("Error recording training time:", err);
      toast({
        title: "Error Recording Time",
        description: "There was a problem recording your training time",
        variant: "destructive"
      });
    } finally {
      setIsRecording(false);
    }
  };
  
  return { recordTrainingTime, isRecording, isComplete };
};
