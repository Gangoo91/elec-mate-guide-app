
import { VideoLesson } from '@/types/videos';
import { demoVideos } from '@/data/demoVideos';

export const mapVideoCategory = (category: string): VideoLesson['category'] => {
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

// Ensure all videos have valid YouTube URLs
export const ensureValidVideoUrl = (url: string): string => {
  // Check if URL is a valid YouTube URL
  if (url.includes('youtube.com/watch?v=') || url.includes('youtu.be/')) {
    return url;
  }
  
  // Default to a known working YouTube video if URL is invalid
  return 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
};

export const useCombinedVideos = (dbVideos: VideoLesson[]): VideoLesson[] => {
  if (dbVideos.length === 0) {
    // Ensure all demo videos have valid YouTube URLs
    return demoVideos.map(video => ({
      ...video,
      video_url: ensureValidVideoUrl(video.video_url)
    }));
  }
  
  const dbCategories = [...new Set(dbVideos.map(v => v.category))];
  
  const missingCategories = ['core_units', 'installation', 'testing'].filter(
    cat => !dbCategories.includes(cat as VideoLesson['category'])
  );
  
  if (missingCategories.length === 0) {
    // Ensure all db videos have valid YouTube URLs
    return dbVideos.map(video => ({
      ...video,
      video_url: ensureValidVideoUrl(video.video_url)
    }));
  }
  
  const neededDemoVideos = demoVideos
    .filter(v => missingCategories.includes(v.category))
    .map(video => ({
      ...video,
      video_url: ensureValidVideoUrl(video.video_url)
    }));
  
  // Ensure all combined videos have valid YouTube URLs
  return [
    ...dbVideos.map(video => ({
      ...video,
      video_url: ensureValidVideoUrl(video.video_url)
    })), 
    ...neededDemoVideos
  ];
};
