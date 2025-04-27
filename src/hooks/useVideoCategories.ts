
import { useQuery } from '@tanstack/react-query';
import { supabase } from "@/integrations/supabase/client";

export function useVideoCategories() {
  const { data: categories = [], isLoading } = useQuery({
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

  return { categories, isLoading };
}
