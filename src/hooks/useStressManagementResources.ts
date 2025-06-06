
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useErrorHandler } from "./useErrorHandler";

export interface Step {
  step: number;
  instruction: string;
}

export interface StressManagementResource {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty_level: string;
  duration_minutes: number;
  created_at: string;
  is_featured: boolean;
  steps?: Step[];
  benefits?: string;
  tips?: string;
  reference_url?: string;
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
  },
  {
    id: "6",
    title: "Body Scan Meditation",
    description: "A focused attention practice that helps develop awareness of physical sensations.",
    category: "mindfulness",
    difficulty_level: "intermediate",
    duration_minutes: 8,
    created_at: new Date().toISOString(),
    is_featured: false
  },
  {
    id: "7",
    title: "4-7-8 Breathing",
    description: "Inhale for 4 counts, hold for 7, exhale for 8. Great for anxiety relief.",
    category: "breathing",
    difficulty_level: "beginner",
    duration_minutes: 4,
    created_at: new Date().toISOString(),
    is_featured: false
  },
  {
    id: "8",
    title: "Alternate Nostril Breathing",
    description: "Balance energy and calm the nervous system with this yogic breathing technique.",
    category: "breathing",
    difficulty_level: "intermediate",
    duration_minutes: 6,
    created_at: new Date().toISOString(),
    is_featured: false
  },
  {
    id: "9",
    title: "3-Minute Reset",
    description: "A quick mental reset technique for when you're feeling overwhelmed.",
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
          return data.map(item => {
            // Process steps data to ensure correct typing
            let processedSteps: Step[] = [];
            if (item.steps) {
              const stepsData = typeof item.steps === 'string' ? JSON.parse(item.steps) : item.steps;
              if (Array.isArray(stepsData)) {
                processedSteps = stepsData.map((step: any) => ({
                  step: Number(step.step || 0),
                  instruction: String(step.instruction || '')
                }));
              }
            }
            
            // Calculate duration_minutes safely
            let duration = 5; // Default value
            if ('duration_minutes' in item && typeof item.duration_minutes === 'number') {
              duration = item.duration_minutes;
            }
            
            return {
              id: item.id,
              title: item.title,
              description: item.description,
              category: item.resource_type || "general",
              difficulty_level: "beginner",
              duration_minutes: duration,
              created_at: item.created_at,
              is_featured: false,
              steps: processedSteps,
              benefits: item.benefits || "",
              tips: item.tips || "",
              reference_url: item.reference_url
            };
          }) as StressManagementResource[];
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
      // Select a "random" exercise from the resources (based on day)
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
