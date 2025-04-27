
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
  if (!window.YT) {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    
    if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
      const firstScriptTag = document.getElementsByTagName('script')[0];
      if (firstScriptTag && firstScriptTag.parentNode) {
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      }
    }
  }
};

export const extractVideoId = (url: string): string | null => {
  const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

