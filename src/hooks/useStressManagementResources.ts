
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useErrorHandler } from "./useErrorHandler";

export interface StressManagementResource {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty_level: string;
  duration_minutes: number;
  created_at: string;
  is_featured: boolean;
}

export function useStressManagementResources() {
  const { handleError } = useErrorHandler();

  return useQuery({
    queryKey: ["stress-management-resources"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("stress_management_resources")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        handleError(error, "Failed to fetch stress management resources");
        throw error;
      }

      return data as StressManagementResource[];
    },
  });
}

export function useDailyFeaturedExercise() {
  const { handleError } = useErrorHandler();

  return useQuery({
    queryKey: ["daily-featured-exercise"],
    queryFn: async () => {
      const { data, error } = await supabase
        .rpc("get_daily_featured_exercise");

      if (error) {
        handleError(error, "Failed to fetch daily exercise");
        throw error;
      }

      return data as StressManagementResource;
    },
  });
}
