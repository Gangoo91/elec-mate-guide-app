
export interface AudioTutorial {
  id: string;
  title: string;
  description: string;
  duration: string;
  category: AudioCategory;
  audioUrl: string;
  kudosPoints: number;
  unitNumber?: string;
  created_at: string;
}

export type AudioCategory = 'electrical_theory' | 'practical_skills' | 'safety' | 'regulations';
