
export interface AssessmentQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  id?: number;
}

export interface QuizProps {
  unitId: string;
  timeLimit?: number; // in seconds
  questionsToShow?: number; // Number of questions to display from the pool
  questions?: AssessmentQuestion[]; // Optional direct questions array
}

export interface SourceQuestion {
  id?: number;
  text?: string;
  question?: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}
