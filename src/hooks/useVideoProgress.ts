
import { useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { useErrorHandler } from "@/hooks/useErrorHandler";

interface VideoProgress {
  watched: boolean;
  watchTime: number;
  lastPosition: number;
  kudosAwarded: boolean;
}

export function useVideoProgress(videoId: string) {
  const { user } = useAuth();
  const { toast } = useToast();
  const { handleError } = useErrorHandler();
  const [progress, setProgress] = useState<VideoProgress>({
    watched: false,
    watchTime: 0,
    lastPosition: 0,
    kudosAwarded: false
  });
  
  // Check if this is a demo video ID (non-UUID format)
  const isDemoVideo = !videoId.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i);

  // Prevent too frequent updates for demo videos
  const [lastUpdateTime, setLastUpdateTime] = useState(0);
  const updateThrottleMs = 1000; // Update at most once per second for demo videos

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
          kudosAwarded: data.kudos_awarded
        });
      }
    } catch (err) {
      handleError(err, 'Error loading video progress');
    }
  };

  const updateProgress = async (position: number, duration: number) => {
    // Skip updates that are too close together for demo videos
    const now = Date.now();
    if (isDemoVideo && now - lastUpdateTime < updateThrottleMs) {
      return;
    }
    setLastUpdateTime(now);
    
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
    
    try {
      const { error } = await supabase
        .from('video_progress')
        .upsert({
          user_id: user.id,
          video_id: videoId,
          watched,
          watch_time: Math.floor(position),
          last_position: position,
          kudos_awarded: watched && !progress.kudosAwarded
        });

      if (error) {
        handleError(error, 'Error updating video progress');
        return;
      }

      if (watched && !progress.kudosAwarded) {
        // Award kudos points
        const { data: video } = await supabase
          .from('video_lessons')
          .select('kudos_points, title')
          .eq('id', videoId)
          .single();

        if (video) {
          const { error: kudosError } = await supabase
            .from('exercise_kudos')
            .insert({
              user_id: user.id,
              exercise_id: videoId,
              points: video.kudos_points
            });

          if (!kudosError) {
            toast({
              title: "Kudos Awarded!",
              description: `You earned ${video.kudos_points} kudos points for completing "${video.title}"`,
            });
          }
        }
      }

      setProgress(prev => ({
        ...prev,
        watched,
        watchTime: Math.floor(position),
        lastPosition: position,
        kudosAwarded: watched ? true : prev.kudosAwarded
      }));
    } catch (err) {
      handleError(err, 'Error updating video progress');
    }
  };

  return {
    progress,
    updateProgress
  };
}
