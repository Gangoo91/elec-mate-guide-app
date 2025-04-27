
import { useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";

interface VideoProgress {
  watched: boolean;
  watchTime: number;
  lastPosition: number;
  kudosAwarded: boolean;
}

export function useVideoProgress(videoId: string) {
  const { user } = useAuth();
  const { toast } = useToast();
  const [progress, setProgress] = useState<VideoProgress>({
    watched: false,
    watchTime: 0,
    lastPosition: 0,
    kudosAwarded: false
  });

  useEffect(() => {
    if (!user) return;
    loadProgress();
  }, [user, videoId]);

  const loadProgress = async () => {
    const { data, error } = await supabase
      .from('video_progress')
      .select('*')
      .eq('video_id', videoId)
      .eq('user_id', user?.id)
      .maybeSingle();

    if (error) {
      console.error('Error loading progress:', error);
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
  };

  const updateProgress = async (position: number, duration: number) => {
    if (!user) return;

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
        console.error('Error updating progress:', error);
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
      console.error('Error in updateProgress:', err);
    }
  };

  return {
    progress,
    updateProgress
  };
}
