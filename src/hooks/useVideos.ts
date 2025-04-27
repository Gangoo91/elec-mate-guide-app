
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from "@/integrations/supabase/client";

export interface VideoLesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  category: 'core_units' | 'practical_skills' | 'theory' | 'safety' | 'installation' | 'testing';
  kudos_points: number;
  video_url: string;
  unit_number?: string;
}

// Demo videos for development - these will be shown if no database videos are found
const demoVideos: VideoLesson[] = [
  {
    id: "core-unit-1",
    title: "Introduction to Electrical Principles",
    description: "A comprehensive overview of fundamental electrical concepts including voltage, current, and resistance.",
    duration: "15:30",
    category: "core_units",
    kudos_points: 10,
    video_url: "https://www.youtube.com/watch?v=Cw_rGCPQ-oo",
    unit_number: "201"
  },
  {
    id: "core-unit-2",
    title: "Understanding Circuit Theory",
    description: "Learn about series and parallel circuits, Ohm's Law applications, and basic circuit analysis.",
    duration: "22:15",
    category: "core_units",
    kudos_points: 15,
    video_url: "https://www.youtube.com/watch?v=ZRLXDiiUv8Q",
    unit_number: "202"
  },
  {
    id: "core-unit-3",
    title: "Electrical Safety Fundamentals",
    description: "Essential safety procedures and regulations every electrician must know.",
    duration: "18:45",
    category: "core_units",
    kudos_points: 12,
    video_url: "https://www.youtube.com/watch?v=9iKD8kW84C0",
    unit_number: "203"
  },
  {
    id: "installation-1",
    title: "Cable Installation Techniques",
    description: "Professional methods for installing various cable types in different environments.",
    duration: "24:10",
    category: "installation",
    kudos_points: 20,
    video_url: "https://www.youtube.com/watch?v=GmYVfyqbdEo"
  },
  {
    id: "installation-2",
    title: "Consumer Unit Installation",
    description: "Step-by-step guide to safely installing and configuring consumer units.",
    duration: "32:25",
    category: "installation",
    kudos_points: 25,
    video_url: "https://www.youtube.com/watch?v=qXenduGcEiU"
  },
  {
    id: "installation-3",
    title: "Socket and Lighting Circuit Installation",
    description: "Detailed walkthrough of domestic socket and lighting circuit installation.",
    duration: "28:50",
    category: "installation",
    kudos_points: 20,
    video_url: "https://www.youtube.com/watch?v=mcDBa0jXhTQ"
  },
  {
    id: "testing-1",
    title: "Insulation Resistance Testing",
    description: "Correct procedures for testing insulation resistance in electrical installations.",
    duration: "19:40",
    category: "testing",
    kudos_points: 15,
    video_url: "https://www.youtube.com/watch?v=GCDSw8zB5ew"
  },
  {
    id: "testing-2",
    title: "Earth Fault Loop Impedance Testing",
    description: "Methods and interpretations for earth fault loop impedance testing.",
    duration: "23:15",
    category: "testing",
    kudos_points: 20,
    video_url: "https://www.youtube.com/watch?v=DW7HGYTCC3A"
  },
  {
    id: "testing-3",
    title: "RCD Testing Procedures",
    description: "Complete guide to testing residual current devices and understanding results.",
    duration: "20:30",
    category: "testing",
    kudos_points: 18,
    video_url: "https://www.youtube.com/watch?v=zBHDsFUcCEQ"
  }
];

export function useVideos() {
  const queryClient = useQueryClient();
  
  const { data: categories = [], isLoading: isCategoriesLoading } = useQuery({
    queryKey: ['video-categories'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('video_lessons')
        .select('category')
        .returns<{ category: string }[]>();
      
      if (error) {
        console.error('Error fetching video categories:', error);
        return [];
      }

      return [...new Set(data?.map(cat => cat.category))];
    }
  });

  const { 
    data: dbVideos = [], 
    isLoading: isVideosLoading, 
    error 
  } = useQuery({
    queryKey: ['video-lessons'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('video_lessons')
        .select('*')
        .order('created_at', { ascending: true });
      
      if (error) {
        console.error("Error fetching videos:", error);
        throw error;
      }
      
      return data.map(video => ({
        ...video,
        category: mapVideoCategory(video.category)
      })) as VideoLesson[];
    }
  });

  // Combine database videos with demo videos for empty categories
  const videos = useCombinedVideos(dbVideos);

  const mapVideoCategory = (category: string): VideoLesson['category'] => {
    const categoryMap: Record<string, VideoLesson['category']> = {
      'practical': 'practical_skills',
      'theory': 'theory',
      'safety': 'safety',
      'installation': 'installation',
      'testing': 'testing',
      'core': 'core_units'
    };
    
    return categoryMap[category] || 'theory';
  };

  // This function merges database videos with demo videos for categories that are empty
  function useCombinedVideos(dbVideos: VideoLesson[]): VideoLesson[] {
    if (dbVideos.length === 0) {
      return demoVideos;
    }
    
    const dbCategories = [...new Set(dbVideos.map(v => v.category))];
    
    // Check if any categories are missing
    const missingCategories = ['core_units', 'installation', 'testing'].filter(
      cat => !dbCategories.includes(cat as VideoLesson['category'])
    );
    
    // If all categories are present, return database videos
    if (missingCategories.length === 0) {
      return dbVideos;
    }
    
    // Get demo videos for missing categories
    const neededDemoVideos = demoVideos.filter(
      v => missingCategories.includes(v.category)
    );
    
    // Combine database videos with needed demo videos
    return [...dbVideos, ...neededDemoVideos];
  }

  return {
    videos,
    categories,
    isLoading: isVideosLoading || isCategoriesLoading,
    error
  };
}
