
import { useState, useEffect, useRef } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { useErrorHandler } from "@/hooks/useErrorHandler";

interface VideoProgress {
  watched: boolean;
  watchTime: number;
  lastPosition: number;
  trainingRecorded: boolean;
}

export function useVideoProgress(videoId: string) {
  const { user } = useAuth();
  const { toast } = useToast();
  const { handleError } = useErrorHandler();
  const [progress, setProgress] = useState<VideoProgress>({
    watched: false,
    watchTime: 0,
    lastPosition: 0,
    trainingRecorded: false
  });
  
  // Check if this is a demo video ID (non-UUID format)
  const isDemoVideo = !videoId.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i);

  // Use refs to hold the latest values for debouncing
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastPositionRef = useRef(0);
  const lastUpdateTimeRef = useRef(0);
  
  // Configure debounce timers
  const updateThrottleMs = 1000; // Update at most once per second for demo videos
  const databaseUpdateDebounceMs = 2000; // Debounce database updates to every 2 seconds

  useEffect(() => {
    if (!user || isDemoVideo) return;
    loadProgress();
  }, [user, videoId]);

  const loadProgress = async () => {
    try {
      const { data, error } = await supabase
        .from('video_progress')
        .select('*')
        .eq('video_id', videoId)
        .eq('user_id', user?.id)
        .maybeSingle();

      if (error) {
        handleError(error, 'Error loading video progress');
        return;
      }

      if (data) {
        setProgress({
          watched: data.watched,
          watchTime: data.watch_time,
          lastPosition: data.last_position,
          trainingRecorded: data.training_recorded || false
        });
        
        lastPositionRef.current = data.last_position;
      }
    } catch (err) {
      handleError(err, 'Error loading video progress');
    }
  };

  const updateProgress = async (position: number, duration: number) => {
    // Skip if position hasn't changed significantly
    if (Math.abs(position - lastPositionRef.current) < 0.5) {
      return;
    }
    
    // Update the ref for next comparison
    lastPositionRef.current = position;
    
    // Skip updates that are too close together 
    const now = Date.now();
    if (now - lastUpdateTimeRef.current < updateThrottleMs) {
      return;
    }
    lastUpdateTimeRef.current = now;
    
    if (!user || isDemoVideo) {
      // For demo videos, just update the local state without database operations
      const watched = position >= duration * 0.9;
      setProgress(prev => ({
        ...prev,
        watched,
        watchTime: Math.floor(position),
        lastPosition: position,
      }));
      return;
    }
    
    // Consider video watched at 90% completion or if specifically marked as complete
    const watched = position >= duration * 0.9;
    
    // Update local state immediately
    setProgress(prev => ({
      ...prev,
      watched,
      watchTime: Math.floor(position),
      lastPosition: position,
      trainingRecorded: watched ? true : prev.trainingRecorded
    }));
    
    // Debounce database updates
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(async () => {
      try {
        // Update the video progress
        const { error } = await supabase
          .from('video_progress')
          .upsert({
            user_id: user.id,
            video_id: videoId,
            watched,
            watch_time: Math.floor(position),
            last_position: position,
            training_recorded: watched ? true : progress.trainingRecorded
          });

        if (error) {
          handleError(error, 'Error updating video progress');
          return;
        }

        // We'll handle training time recording in useTrainingRecord hook instead
      } catch (err) {
        handleError(err, 'Error updating video progress');
      }
    }, databaseUpdateDebounceMs);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return {
    progress,
    updateProgress
  };
}
