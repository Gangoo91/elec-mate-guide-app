
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
  // Known working YouTube videos to use as fallbacks
  const fallbackVideos = [
    'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Rick Roll
    'https://www.youtube.com/watch?v=mc979OhitAg', // Electrical video
    'https://www.youtube.com/watch?v=vN9aR2wKv0U', // Circuit theory
    'https://www.youtube.com/watch?v=9iKD8kW84C0'  // Safety video
  ];
  
  // Check if URL is a valid YouTube URL
  if (!url || typeof url !== 'string') {
    return fallbackVideos[0]; // Default fallback
  }
  
  // If it's a YouTube URL already, return it
  if (url.includes('youtube.com/watch?v=') || 
      url.includes('youtu.be/') ||
      url.includes('youtube.com/embed/') ||
      url.includes('youtube.com/shorts/')) {
    return url;
  }
  
  // For example videos, assign consistent working YouTube videos
  if (url.includes('example.com')) {
    // Rotate through our fallbacks based on the string content
    const index = Math.abs(url.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)) % fallbackVideos.length;
    return fallbackVideos[index];
  }
  
  // Default to a known working YouTube video if URL is invalid
  return fallbackVideos[0];
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
