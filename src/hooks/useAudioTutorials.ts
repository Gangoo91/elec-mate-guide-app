
import { useState, useEffect, useCallback } from 'react';
import { audioTutorials } from '@/data/audioTutorials';
import { AudioTutorial, AudioCategory } from '@/types/audio';
import { useToast } from "@/hooks/use-toast";

export const useAudioTutorials = () => {
  const [tutorials, setTutorials] = useState<AudioTutorial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  
  const categories: AudioCategory[] = [
    'electrical_theory',
    'practical_skills',
    'safety',
    'regulations'
  ];

  // Use useCallback to avoid recreating this function on every render
  const fetchAudioTutorials = useCallback(async () => {
    setIsLoading(true);
    try {
      // Simulate network delay to demonstrate loading state
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Set tutorials from static data
      setTutorials(audioTutorials);
      
      toast({
        title: "Audio Tutorials Loaded",
        description: `${audioTutorials.length} tutorials available for streaming`,
        variant: "default",
      });
    } catch (error) {
      console.error("Error loading audio tutorials:", error);
      setTutorials([]); // Fallback to empty array on error
      
      toast({
        title: "Error",
        description: "Failed to load audio tutorials",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }, [toast]);

  useEffect(() => {
    fetchAudioTutorials();
  }, [fetchAudioTutorials]);

  return { tutorials, categories, isLoading };
};
