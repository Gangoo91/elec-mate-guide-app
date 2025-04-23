
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useErrorHandler } from "@/hooks/useErrorHandler";

interface ExerciseKudos {
  id: string;
  user_id: string;
  exercise_id: string; 
  created_at: string;
  points: number;
}

export function useExerciseKudos() {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const { handleError } = useErrorHandler();

  // Fetch user's kudos
  const { data: userKudos, isLoading } = useQuery({
    queryKey: ['exercise-kudos', user?.id],
    queryFn: async () => {
      if (!user) return { kudos: [], totalPoints: 0 };
      
      try {
        const { data, error } = await supabase
          .from('exercise_kudos')
          .select('*')
          .eq('user_id', user.id);
        
        if (error) throw error;
        
        const kudos = data as ExerciseKudos[];
        const totalPoints = kudos.reduce((sum, item) => sum + (item.points || 0), 0);
        
        return { 
          kudos, 
          totalPoints,
          exercisesCompleted: kudos.length
        };
      } catch (error) {
        handleError(error, "Failed to fetch exercise kudos");
        return { kudos: [], totalPoints: 0, exercisesCompleted: 0 };
      }
    },
    enabled: !!user,
  });

  // Add kudos for an exercise
  const addKudosMutation = useMutation({
    mutationFn: async (exerciseId: string) => {
      if (!user) throw new Error("User must be authenticated");
      
      // Check if user already gave kudos to this exercise
      const { data: existingKudos } = await supabase
        .from('exercise_kudos')
        .select('id')
        .eq('user_id', user.id)
        .eq('exercise_id', exerciseId)
        .maybeSingle();
      
      if (existingKudos) {
        return existingKudos;
      }
      
      // If not, add new kudos
      const { data, error } = await supabase
        .from('exercise_kudos')
        .insert({
          user_id: user.id,
          exercise_id: exerciseId,
          points: 10, // Default points for completing an exercise
        })
        .select('*')
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['exercise-kudos', user?.id] });
    },
    onError: (error) => {
      handleError(error, "Failed to add kudos");
    }
  });

  // Helper function to check if user has given kudos to a specific exercise
  const hasGivenKudos = (exerciseId: string) => {
    if (!userKudos?.kudos) return false;
    return userKudos.kudos.some(kudos => kudos.exercise_id === exerciseId);
  };
  
  return {
    userKudos: userKudos || { kudos: [], totalPoints: 0, exercisesCompleted: 0 },
    isLoading,
    addKudos: addKudosMutation.mutateAsync,
    isAddingKudos: addKudosMutation.isPending,
    hasGivenKudos
  };
}
