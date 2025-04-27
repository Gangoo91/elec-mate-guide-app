
import { VideoLesson } from '@/types/videos';
import { demoVideos } from '@/data/demoVideos';
import { extractVideoId, isValidYouTubeId } from '@/components/video/players/youtube/youtubeApi';

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

// Known guaranteed working YouTube videos to use as fallbacks
const FALLBACK_VIDEOS = [
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Rick Roll
  'https://www.youtube.com/watch?v=mc979OhitAg', // Electrical video
  'https://www.youtube.com/watch?v=vN9aR2wKv0U', // Circuit theory
  'https://www.youtube.com/watch?v=9iKD8kW84C0'  // Safety video
];

// Ensure all videos have valid YouTube URLs
export const ensureValidVideoUrl = (url: string): string => {
  // Check if URL is valid
  if (!url || typeof url !== 'string') {
    console.warn('Invalid video URL, using fallback', url);
    return FALLBACK_VIDEOS[0]; // Default fallback
  }
  
  // If it's already a YouTube URL, validate the video ID
  if (url.includes('youtube.com/') || url.includes('youtu.be/')) {
    const videoId = extractVideoId(url);
    
    if (isValidYouTubeId(videoId)) {
      console.log(`Valid YouTube URL: ${url}, ID: ${videoId}`);
      return url;
    } else {
      console.warn(`Invalid YouTube ID in URL: ${url}, ID: ${videoId}, using fallback`);
    }
  }
  
  // For example videos, assign consistent working YouTube videos
  if (url.includes('example.com')) {
    // Rotate through our fallbacks based on the string content
    const index = Math.abs(url.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)) % FALLBACK_VIDEOS.length;
    console.log(`Converting example.com URL to YouTube fallback: ${FALLBACK_VIDEOS[index]}`);
    return FALLBACK_VIDEOS[index];
  }
  
  // If we reach this point, the URL is not a valid YouTube URL
  console.warn(`Not a YouTube URL, using fallback: ${url}`);
  return FALLBACK_VIDEOS[0];
};

export const useCombinedVideos = (dbVideos: VideoLesson[]): VideoLesson[] => {
  if (dbVideos.length === 0) {
    console.log('No DB videos, using demo videos with valid YouTube URLs');
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
    console.log('Using DB videos with valid YouTube URLs');
    // Ensure all db videos have valid YouTube URLs
    return dbVideos.map(video => ({
      ...video,
      video_url: ensureValidVideoUrl(video.video_url)
    }));
  }
  
  console.log(`Adding demo videos for missing categories: ${missingCategories.join(', ')}`);
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
