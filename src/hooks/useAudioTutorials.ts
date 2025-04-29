
import { useState } from 'react';
import { audioTutorials } from '@/data/audioTutorials';
import { AudioTutorial, AudioCategory } from '@/types/audio';

export const useAudioTutorials = () => {
  // Using the imported data instead of a database call
  const [tutorials] = useState<AudioTutorial[]>(audioTutorials);
  const [isLoading] = useState(false);

  const categories: AudioCategory[] = [
    'electrical_theory',
    'practical_skills',
    'safety',
    'regulations'
  ];

  return { tutorials, categories, isLoading };
};
