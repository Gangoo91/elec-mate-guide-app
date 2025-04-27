
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
    data: videos = [], 
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

  return {
    videos,
    categories,
    isLoading: isVideosLoading || isCategoriesLoading,
    error
  };
}
