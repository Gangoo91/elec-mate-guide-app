
import { useQuery } from '@tanstack/react-query';
import { supabase } from "@/integrations/supabase/client";
import { VideoLesson } from '@/types/videos';
import { mapVideoCategory, ensureValidVideoUrl } from '@/utils/videoUtils';

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
        
        // Always ensure videos have working YouTube URLs
        return data.map(video => ({
          ...video,
          category: mapVideoCategory(video.category),
          video_url: video.video_url.includes('example.com') 
            // Use our known working YouTube videos for example URLs
            ? 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            : ensureValidVideoUrl(video.video_url)
        })) as VideoLesson[];
      } catch (err) {
        console.error("Failed to fetch videos:", err);
        return [];
      }
    }
  });

  return { dbVideos, isLoading, error };
}
