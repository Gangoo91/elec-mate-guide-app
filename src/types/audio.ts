
export interface AudioTutorial {
  id: string;
  title: string;
  description: string;
  duration: string;
  category: string;
  audioUrl: string;
  kudosPoints: number;
  unitNumber?: string;
}

export type AudioCategory = 'electrical_theory' | 'practical_skills' | 'safety' | 'regulations';
