import { useQuery } from '@tanstack/react-query';
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
    video_url: "https://www.youtube.com/watch?v=mc979OhitAg", 
    unit_number: "201"
  },
  {
    id: "core-unit-2",
    title: "Understanding Circuit Theory",
    description: "Learn about series and parallel circuits, Ohm's Law applications, and basic circuit analysis.",
    duration: "22:15",
    category: "core_units",
    kudos_points: 15,
    video_url: "https://www.youtube.com/watch?v=vN9aR2wKv0U",
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
    video_url: "https://www.youtube.com/watch?v=TAGjuRwx_zw"
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
      try {
        const { data, error } = await supabase
          .from('video_lessons')
          .select('*')
          .order('created_at', { ascending: true });
        
        if (error) {
          console.error("Error fetching videos:", error);
          throw error;
        }
        
        // Map database videos and ensure they have properly formatted URLs
        return data.map(video => {
          // Ensure YouTube URLs are properly formatted for embedding
          let videoUrl = video.video_url;
          
          // Replace example.com URLs with a working demo URL
          if (videoUrl.includes('example.com')) {
            // Default to an electrical principles video if it's example.com
            videoUrl = 'https://www.youtube.com/watch?v=mc979OhitAg';
          }
          
          return {
            ...video,
            category: mapVideoCategory(video.category),
            video_url: videoUrl
          };
        }) as VideoLesson[];
      } catch (err) {
        console.error("Failed to fetch videos:", err);
        return [];
      }
    }
  });

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

  function useCombinedVideos(dbVideos: VideoLesson[]): VideoLesson[] {
    if (dbVideos.length === 0) {
      return demoVideos;
    }
    
    const dbCategories = [...new Set(dbVideos.map(v => v.category))];
    
    const missingCategories = ['core_units', 'installation', 'testing'].filter(
      cat => !dbCategories.includes(cat as VideoLesson['category'])
    );
    
    if (missingCategories.length === 0) {
      return dbVideos;
    }
    
    const neededDemoVideos = demoVideos.filter(
      v => missingCategories.includes(v.category)
    );
    
    return [...dbVideos, ...neededDemoVideos];
  }

  const videos = useCombinedVideos(dbVideos);

  return {
    videos,
    categories,
    isLoading: isVideosLoading || isCategoriesLoading,
    error
  };
}
