
// Simple utility functions for YouTube video handling
// These are kept minimal as we're removing the YouTube player functionality

export const FALLBACK_YOUTUBE_IDS = [
  'dQw4w9WgXcQ', // Rick Roll as fallback
  'mc979OhitAg', // Electrical video
  'vN9aR2wKv0U', // Circuit theory
  '9iKD8kW84C0'  // Safety video
];

export const extractVideoId = (url: string): string | null => {
  if (!url) return null;
  
  let match;
  // Extract from standard YouTube URL
  if ((match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/))) {
    return match[1];
  }
  
  // Extract from YouTube embed URL
  if ((match = url.match(/youtube\.com\/embed\/([\w-]+)/))) {
    return match[1];
  }
  
  return null;
};

export const isValidYouTubeId = (id: string | null): boolean => {
  return id !== null && /^[\w-]{11}$/.test(id);
};
