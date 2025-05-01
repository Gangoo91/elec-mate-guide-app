
export interface VideoLesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  category: 'core_units' | 'practical_skills' | 'theory' | 'safety' | 'installation' | 'testing';
  kudos_points: number; // Keeping for backward compatibility
  video_url: string;
  unit_number?: string;
  eal_course_id?: string;
  training_minutes?: number; // Duration in minutes for training records
}
