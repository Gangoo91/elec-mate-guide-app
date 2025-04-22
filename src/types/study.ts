
// Define types for study content
export interface ContentBlock {
  type: string;
  content: string;
  items?: string[];
}

export interface CourseContent {
  key_points: string[];
  main_content: ContentBlock[];
  practical_tips: string[];
}

// Progress tracking types
export interface Progress {
  completed: boolean;
  score: number;
  [key: string]: any;
}
