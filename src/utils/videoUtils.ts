
import { VideoLesson } from '@/types/videos';

export const mapVideoCategory = (category: string): VideoLesson['category'] => {
  const categoryMap: Record<string, VideoLesson['category']> = {
    'practical': 'practical_skills',
    'theory': 'theory',
    'safety': 'safety',
    'installation': 'installation',
    'testing': 'testing',
    'core': 'core_units'
  };
  
  return categoryMap[category] || 'theory';
};

export const useCombinedVideos = (dbVideos: VideoLesson[]): VideoLesson[] => {
  if (dbVideos.length === 0) {
    return demoVideos;
  }
  
  const dbCategories = [...new Set(dbVideos.map(v => v.category))];
  
  const missingCategories = ['core_units', 'installation', 'testing'].filter(
    cat => !dbCategories.includes(cat as VideoLesson['category'])
  );
  
  if (missingCategories.length === 0) {
    return dbVideos;
  }
  
  const neededDemoVideos = demoVideos.filter(
    v => missingCategories.includes(v.category)
  );
  
  return [...dbVideos, ...neededDemoVideos];
};
