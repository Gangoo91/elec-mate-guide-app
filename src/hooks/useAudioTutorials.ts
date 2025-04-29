
import { useState, useEffect } from 'react';
import { audioTutorials } from '@/data/audioTutorials';
import { AudioTutorial, AudioCategory } from '@/types/audio';
import { useErrorHandler } from '@/hooks/useErrorHandler';
import { useToast } from "@/hooks/use-toast";

export const useAudioTutorials = () => {
  const [tutorials, setTutorials] = useState<AudioTutorial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { handleError } = useErrorHandler();
  const { toast } = useToast();

  const categories: AudioCategory[] = [
    'electrical_theory',
    'practical_skills',
    'safety',
    'regulations'
  ];

  useEffect(() => {
    const fetchAudioTutorials = async () => {
      setIsLoading(true);
      try {
        // For now, we're using the static data
        // In a real implementation, this would be replaced with an API call like:
        // const response = await fetch('/api/audio-tutorials');
        // const data = await response.json();
        
        // Simulate network delay to demonstrate loading state
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setTutorials(audioTutorials);
        
        toast({
          title: "Audio Tutorials Loaded",
          description: `${audioTutorials.length} tutorials available for streaming`,
          variant: "default",
        });
      } catch (error) {
        handleError(error, "Failed to load audio tutorials");
        setTutorials([]); // Fallback to empty array on error
      } finally {
        setIsLoading(false);
      }
    };

    fetchAudioTutorials();
  }, [handleError, toast]);

  return { tutorials, categories, isLoading };
};
