
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

// Mock data as fallback when database table is not available
const mockResources: StressManagementResource[] = [
  {
    id: "1",
    title: "Box Breathing Technique",
    description: "Inhale for 4 counts, hold for 4, exhale for 4, hold for 4. Repeat for 5 minutes.",
    category: "breathing",
    difficulty_level: "beginner",
    duration_minutes: 5,
    created_at: new Date().toISOString(),
    is_featured: false
  },
  {
    id: "2",
    title: "Progressive Muscle Relaxation",
    description: "Systematically tense and relax muscle groups to reduce physical tension.",
    category: "physical",
    difficulty_level: "beginner",
    duration_minutes: 10,
    created_at: new Date().toISOString(),
    is_featured: false
  },
  {
    id: "3",
    title: "Mindful Break Timer",
    description: "Take regular 2-minute breaks to scan your surroundings and reset your focus.",
    category: "mindfulness",
    difficulty_level: "beginner",
    duration_minutes: 2,
    created_at: new Date().toISOString(),
    is_featured: false
  },
  {
    id: "4",
    title: "Workplace Stretch Routine",
    description: "Simple stretches you can do at your desk to release tension.",
    category: "physical",
    difficulty_level: "beginner",
    duration_minutes: 5,
    created_at: new Date().toISOString(),
    is_featured: false
  },
  {
    id: "5",
    title: "5-4-3-2-1 Grounding Exercise",
    description: "Name 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, and 1 you can taste.",
    category: "mindfulness",
    difficulty_level: "beginner",
    duration_minutes: 3,
    created_at: new Date().toISOString(),
    is_featured: false
  }
];

export function useStressManagementResources() {
  const { handleError } = useErrorHandler();

  return useQuery({
    queryKey: ["stress-management-resources"],
    queryFn: async () => {
      try {
        // First try to fetch data from the database
        const { data, error } = await supabase
          .from("mental_health_resources")
          .select("*")
          .eq("resource_type", "stress_management")
          .order("created_at", { ascending: false });

        if (error) {
          console.log("Falling back to mock data for stress management resources");
          return mockResources;
        }

        // If we have real data, transform it to match our interface
        if (data && data.length > 0) {
          return data.map(item => ({
            id: item.id,
            title: item.title,
            description: item.description,
            category: item.resource_type || "general",
            difficulty_level: "beginner",
            duration_minutes: 5,
            created_at: item.created_at,
            is_featured: false
          })) as StressManagementResource[];
        }
        
        // Fall back to mock data if no database results
        return mockResources;
      } catch (err) {
        console.error("Error fetching stress management resources:", err);
        return mockResources;
      }
    },
  });
}

export function useDailyFeaturedExercise() {
  const { data: resources } = useStressManagementResources();
  
  return useQuery({
    queryKey: ["daily-featured-exercise"],
    queryFn: async () => {
      // Simply select a "random" exercise from the resources (based on day)
      if (!resources || resources.length === 0) return null;
      
      // Use the day of the month to pick a consistent daily exercise
      const dayOfMonth = new Date().getDate();
      const index = dayOfMonth % resources.length;
      
      // Return the selected exercise and mark it as featured
      const dailyExercise = {
        ...resources[index],
        is_featured: true
      };
      
      return dailyExercise;
    },
    enabled: !!resources,
  });
}
