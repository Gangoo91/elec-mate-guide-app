
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from "@/integrations/supabase/client";

interface UseTrainingTimeProps {
  unitId: string;
  initialTimeSpent?: number;
}

interface TrainingTimeState {
  timeSpent: number;
  isUpdating: boolean;
  lastUpdate: Date | null;
}

export const useTrainingTime = ({ unitId, initialTimeSpent = 0 }: UseTrainingTimeProps) => {
  const [state, setState] = useState<TrainingTimeState>({
    timeSpent: initialTimeSpent,
    isUpdating: false,
    lastUpdate: null
  });
  
  const { toast } = useToast();
  
  const recordTrainingTime = async (minutes: number) => {
    // Skip if no time to record or already updating
    if (minutes <= 0 || state.isUpdating) return;
    
    setState(prev => ({ ...prev, isUpdating: true }));
    
    try {
      console.log(`Recording ${minutes} minutes for ${unitId}`);
      
      // In a real implementation, this would save to Supabase
      // Commented out as this is just a demonstration
      /*
      const { data: { user } } = await supabase.auth.getUser();
      
      if (user) {
        const { error } = await supabase
          .from('user_training_records')
          .upsert({
            user_id: user.id,
            unit_id: unitId,
            minutes: minutes,
            recorded_at: new Date().toISOString(),
          });
        
        if (error) throw error;
      }
      */
      
      // Update local state
      setState(prev => ({
        timeSpent: prev.timeSpent + minutes,
        isUpdating: false,
        lastUpdate: new Date()
      }));
      
      toast({
        title: "Training time recorded",
        description: `${minutes} minutes of study time recorded for ${unitId}`,
      });
      
      return minutes;
    } catch (error) {
      console.error('Error recording training time:', error);
      setState(prev => ({ ...prev, isUpdating: false }));
      
      toast({
        title: "Error recording time",
        description: "There was a problem updating your training record",
        variant: "destructive"
      });
      
      return 0;
    }
  };
  
  const getFormattedTime = () => {
    const hours = Math.floor(state.timeSpent / 60);
    const minutes = state.timeSpent % 60;
    return `${hours}h ${minutes}m`;
  };
  
  return {
    timeSpent: state.timeSpent,
    formattedTime: getFormattedTime(),
    isUpdating: state.isUpdating,
    lastUpdate: state.lastUpdate,
    recordTrainingTime
  };
};
