
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

// Function to load YouTube API script
export const loadYouTubeAPI = (): Promise<void> => {
  if (youtubeApiPromise) {
    return youtubeApiPromise;
  }

  youtubeApiPromise = new Promise((resolve, reject) => {
    // Check if already loaded
    if (window.YT && window.YT.loaded) {
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
  });

  return youtubeApiPromise;
};

// Extract YouTube video ID from URL
export const extractVideoId = (url: string): string | null => {
  if (!url) return null;
  
  try {
    // Handle direct video IDs (no URL, just ID)
    if (url.length === 11 && !url.includes('/') && !url.includes('.')) {
      return url;
    }
    
    // Handle youtu.be format
    if (url.includes('youtu.be/')) {
      const id = url.split('youtu.be/')[1]?.split(/[?&#]/)[0];
      return id || null;
    }
    
    // Handle youtube.com format
    try {
      const urlObj = new URL(url);
      
      if (urlObj.hostname.includes('youtube.com')) {
        // Standard watch URL
        if (urlObj.pathname.includes('/watch')) {
          return urlObj.searchParams.get('v');
        }
        
        // Embed URL
        if (urlObj.pathname.includes('/embed/')) {
          return urlObj.pathname.split('/embed/')[1]?.split(/[?&#]/)[0] || null;
        }
        
        // Short URL
        if (urlObj.pathname.includes('/shorts/')) {
          return urlObj.pathname.split('/shorts/')[1]?.split(/[?&#]/)[0] || null;
        }
      }
    } catch (e) {
      // If URL parsing fails, try regex approach
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
          return match[1];
        }
      }
    }
    
    console.warn('Could not extract YouTube ID from URL:', url);
    return null;
  } catch (e) {
    console.error('Error extracting YouTube video ID:', e);
    return null;
  }
};
