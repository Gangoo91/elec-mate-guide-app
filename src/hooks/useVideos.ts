
import { useCombinedVideos } from '@/utils/videoUtils';
import { useVideoCategories } from './useVideoCategories';
import { useVideoLessons } from './useVideoLessons';
import type { VideoLesson } from '@/types/videos';

export function useVideos() {
  const { categories, isLoading: isCategoriesLoading } = useVideoCategories();
  const { dbVideos, isLoading: isVideosLoading, error } = useVideoLessons();
  
  const videos = useCombinedVideos(dbVideos);

  return {
    videos,
    categories,
    isLoading: isVideosLoading || isCategoriesLoading,
    error
  };
}

export type { VideoLesson };
