
// Interface to extend Window with YT object
interface YouTubeWindow extends Window {
  YT?: {
    loaded: number;
    Player: any;
    PlayerState: {
      UNSTARTED: number;
      ENDED: number;
      PLAYING: number;
      PAUSED: number;
      BUFFERING: number;
      CUED: number;
    };
  };
  onYouTubeIframeAPIReady?: () => void;
}

declare let window: YouTubeWindow;

// Promise to track API loading
let youtubeApiPromise: Promise<void> | null = null;
let apiLoadAttempts = 0;

// Function to load YouTube API script
export const loadYouTubeAPI = (): Promise<void> => {
  if (youtubeApiPromise) {
    return youtubeApiPromise;
  }

  apiLoadAttempts++;
  console.log(`Attempting to load YouTube API (attempt ${apiLoadAttempts})`);

  youtubeApiPromise = new Promise((resolve, reject) => {
    // Check if already loaded
    if (window.YT && window.YT.loaded) {
      console.log('YouTube API already loaded');
      resolve();
      return;
    }

    // Create script tag
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    
    // Add onerror handler
    tag.onerror = (e) => {
      console.error('YouTube API failed to load:', e);
      youtubeApiPromise = null;
      reject(new Error('Failed to load YouTube API'));
    };

    // Setup callback
    const prevCallback = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      console.log('YouTube API loaded successfully');
      if (prevCallback) {
        prevCallback();
      }
      resolve();
    };

    // Insert script
    const firstScriptTag = document.getElementsByTagName('script')[0];
    if (firstScriptTag && firstScriptTag.parentNode) {
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else {
      document.body.appendChild(tag);
    }
    
    // Add timeout
    setTimeout(() => {
      if (!window.YT) {
        console.warn('YouTube API load timed out, trying fallback approach');
        // Try to resolve anyway after timeout to avoid blocking forever
        resolve();
      }
    }, 5000);
  });

  return youtubeApiPromise;
};

// Extract YouTube video ID from URL with improved reliability
export const extractVideoId = (url: string): string | null => {
  if (!url) {
    console.warn('Empty URL provided to extractVideoId');
    return null;
  }
  
  try {
    // Handle direct video IDs (no URL, just ID)
    if (url.length === 11 && !url.includes('/') && !url.includes('.')) {
      console.log(`Direct video ID detected: ${url}`);
      return url;
    }
    
    // Handle youtu.be format
    if (url.includes('youtu.be/')) {
      const id = url.split('youtu.be/')[1]?.split(/[?&#]/)[0];
      console.log(`Extracted YouTube ID from youtu.be URL: ${id}`);
      return id || null;
    }
    
    // Handle youtube.com format
    try {
      const urlObj = new URL(url);
      
      if (urlObj.hostname.includes('youtube.com')) {
        // Standard watch URL
        if (urlObj.pathname.includes('/watch')) {
          const id = urlObj.searchParams.get('v');
          console.log(`Extracted YouTube ID from watch URL: ${id}`);
          return id;
        }
        
        // Embed URL
        if (urlObj.pathname.includes('/embed/')) {
          const id = urlObj.pathname.split('/embed/')[1]?.split(/[?&#]/)[0];
          console.log(`Extracted YouTube ID from embed URL: ${id}`);
          return id || null;
        }
        
        // Short URL
        if (urlObj.pathname.includes('/shorts/')) {
          const id = urlObj.pathname.split('/shorts/')[1]?.split(/[?&#]/)[0];
          console.log(`Extracted YouTube ID from shorts URL: ${id}`);
          return id || null;
        }
      }
    } catch (e) {
      // If URL parsing fails, try regex approach
      console.warn('URL parsing failed, trying regex approach', e);
    }
    
    // Fallback to regex patterns
    const regexPatterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/|youtube\.com\/shorts\/)([^?&#]+)/,
      /youtube\.com\/watch.*?[?&]v=([^&#]+)/i,
      /youtube\.com\/embed\/([^?&#]+)/i,
      /youtube\.com\/v\/([^?&#]+)/i,
      /youtube\.com\/shorts\/([^?&#]+)/i,
      /youtu\.be\/([^?&#]+)/i
    ];
    
    for (const pattern of regexPatterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        console.log(`Extracted YouTube ID via regex: ${match[1]}`);
        return match[1];
      }
    }
    
    // Last resort - if the URL contains "youtube" and an 11-character string, try to extract it
    if (url.includes('youtube') || url.includes('youtu.be')) {
      const possibleIds = url.match(/([a-zA-Z0-9_-]{11})/g);
      if (possibleIds && possibleIds.length > 0) {
        console.log(`Extracted possible YouTube ID from URL: ${possibleIds[0]}`);
        return possibleIds[0];
      }
    }
    
    console.warn('Could not extract YouTube ID from URL:', url);
    return null;
  } catch (e) {
    console.error('Error extracting YouTube video ID:', e);
    return null;
  }
};

// Function to validate YouTube video ID format
export const isValidYouTubeId = (id: string | null): boolean => {
  if (!id) return false;
  // YouTube IDs are 11 characters long and contain only certain characters
  return /^[a-zA-Z0-9_-]{11}$/.test(id);
};

// Known working YouTube IDs for testing and fallbacks
export const FALLBACK_YOUTUBE_IDS = [
  'dQw4w9WgXcQ', // Rick Roll
  'mc979OhitAg', // Electrical video
  'vN9aR2wKv0U', // Circuit theory
  '9iKD8kW84C0'  // Safety video
];
