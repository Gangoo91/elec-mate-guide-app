
import { useQuery } from '@tanstack/react-query';
import { supabase } from "@/integrations/supabase/client";
import { VideoLesson } from '@/types/videos';
import { mapVideoCategory } from '@/utils/videoUtils';

export function useVideoLessons() {
  const { data: dbVideos = [], isLoading, error } = useQuery({
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
        
        return data.map(video => ({
          ...video,
          category: mapVideoCategory(video.category),
          video_url: video.video_url.includes('example.com') 
            ? 'https://www.youtube.com/watch?v=mc979OhitAg'
            : video.video_url
        })) as VideoLesson[];
      } catch (err) {
        console.error("Failed to fetch videos:", err);
        return [];
      }
    }
  });

  return { dbVideos, isLoading, error };
}
