
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { AudioTutorial, AudioCategory } from '@/types/audio';

export const useAudioTutorials = () => {
  const { data: tutorials = [], isLoading } = useQuery({
    queryKey: ['audio-tutorials'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('audio_tutorials')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) {
        console.error('Error fetching audio tutorials:', error);
        return [];
      }

      return data as unknown as AudioTutorial[];
    }
  });

  const categories: AudioCategory[] = [
    'electrical_theory',
    'practical_skills',
    'safety',
    'regulations'
  ];

  return { tutorials, categories, isLoading };
};
