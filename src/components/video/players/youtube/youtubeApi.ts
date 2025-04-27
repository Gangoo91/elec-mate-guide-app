
// Define YouTube API types
declare global {
  interface Window {
    YT: {
      Player: new (
        elementId: string,
        options: {
          videoId?: string;
          width?: string | number;
          height?: string | number;
          playerVars?: {
            autoplay?: 0 | 1;
            controls?: 0 | 1;
            enablejsapi?: 0 | 1;
            origin?: string;
            rel?: 0 | 1;
            start?: number;
            playsinline?: 0 | 1;
            modestbranding?: 0 | 1;
            iv_load_policy?: 1 | 3;
            fs?: 0 | 1;
          };
          events: {
            onStateChange: (event: any) => void;
            onError: (event: any) => void;
            onReady: (event: any) => void;
          }
        }
      ) => {
        getCurrentTime: () => number;
        getDuration: () => number;
        playVideo: () => void;
        pauseVideo: () => void;
        getPlayerState: () => number;
        seekTo: (seconds: number) => void;
        destroy: () => void;
      };
      PlayerState: {
        ENDED: number;
        PLAYING: number;
        PAUSED: number;
        BUFFERING: number;
        CUED: number;
      };
    };
    onYouTubeIframeAPIReady: (() => void) | null;
  }
}

export const loadYouTubeAPI = (): void => {
  // Don't load multiple instances of the API
  if (document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
    return;
  }
  
  if (!window.YT) {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    
    const firstScriptTag = document.getElementsByTagName('script')[0];
    if (firstScriptTag && firstScriptTag.parentNode) {
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
  }
};

export const extractVideoId = (url: string): string | null => {
  if (!url) return null;
  
  // Handle various YouTube URL formats
  const regexPatterns = [
    // Standard watch URLs: https://www.youtube.com/watch?v=VIDEO_ID
    /(?:youtube\.com\/watch\?v=|youtube\.com\/watch\?.+&v=)([^&]+)/,
    // Shortened URLs: https://youtu.be/VIDEO_ID
    /(?:youtu\.be\/)([^?&]+)/,
    // Embed URLs: https://www.youtube.com/embed/VIDEO_ID
    /(?:youtube\.com\/embed\/)([^/?&]+)/,
    // Video IDs directly
    /^[a-zA-Z0-9_-]{11}$/
  ];
  
  for (const regex of regexPatterns) {
    const match = url.match(regex);
    if (match && match[1]) {
      return match[1];
    }
  }
  
  // If all patterns fail, try a more general pattern
  const fallbackRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const fallbackMatch = url.match(fallbackRegex);
  
  return fallbackMatch ? fallbackMatch[1] : null;
};
