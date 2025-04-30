import { AssessmentQuestion, SourceQuestion } from '../types';
import { electricalScienceQuestions } from '@/data/units/sections/unit202/questions/electricalScienceQuestions';
import { healthAndSafetyQuestions } from '@/data/units/sections/unit201/questions/healthAndSafetyQuestions';
import { electricalInstallationsQuestions } from '@/data/units/sections/unit203/questions/electricalInstallationsQuestions';
import { wiringSystemsQuestions } from '@/data/units/sections/unit204/questions/wiringSystemsQuestions';
import { communicationQuestions } from '@/data/units/sections/unit210/questions/communicationQuestions';
import { environmentalTechnologyQuestions } from '@/data/units/sections/unit301/questions/environmentalTechnologyQuestions';
import { faultDiagnosisQuestions } from '@/data/units/sections/unit303/questions/faultDiagnosisQuestions';
import { inspectionTestingQuestions } from '@/data/units/sections/unit304/questions/inspectionTestingQuestions';
import { electricalDesignQuestions } from '@/data/units/sections/unit305/questions/electricalDesignQuestions';
import { careerAwarenessQuestions } from '@/data/units/sections/unit308/questions/careerAwarenessQuestions';

export const mapQuestionsToAssessmentFormat = (questions: SourceQuestion[]): AssessmentQuestion[] => {
  return questions.map(q => ({
    question: q.question || q.text || '', // Handle both formats
    options: q.options,
    correctAnswer: q.correctAnswer,
    explanation: q.explanation,
    id: q.id
  }));
};

export const getQuestionSet = (unitId: string, questionsToShow: number, providedQuestions?: AssessmentQuestion[]): AssessmentQuestion[] => {
  // If direct questions were provided, use them
  if (providedQuestions && providedQuestions.length > 0) {
    // Shuffle the provided questions and take the requested number
    const shuffledQuestions = [...providedQuestions].sort(() => 0.5 - Math.random());
    return shuffledQuestions.slice(0, questionsToShow);
  }
  
  // Otherwise, get the appropriate question pool based on unitId
  let questionPool: SourceQuestion[] = [];
  
  switch(unitId) {
    case "201":
      questionPool = healthAndSafetyQuestions as unknown as SourceQuestion[];
      break;
    case "202":
      questionPool = electricalScienceQuestions as unknown as SourceQuestion[];
      break;
    case "203":
      questionPool = electricalInstallationsQuestions as unknown as SourceQuestion[];
      break;
    case "204":
      questionPool = wiringSystemsQuestions as unknown as SourceQuestion[];
      break;
    case "210":
      questionPool = communicationQuestions as unknown as SourceQuestion[];
      break;
    case "301":
      questionPool = environmentalTechnologyQuestions as unknown as SourceQuestion[];
      break;
    case "303":
      questionPool = faultDiagnosisQuestions as unknown as SourceQuestion[];
      break;
    case "304":
      questionPool = inspectionTestingQuestions as unknown as SourceQuestion[];
      break;
    case "305":
      questionPool = electricalDesignQuestions as unknown as SourceQuestion[];
      break;
    case "308":
      questionPool = careerAwarenessQuestions as unknown as SourceQuestion[];
      break;
    default:
      questionPool = healthAndSafetyQuestions as unknown as SourceQuestion[];
  }
  
  // Shuffle the entire question pool
  const shuffledPool = [...questionPool].sort(() => 0.5 - Math.random());
  
  // Take the first questionsToShow from the shuffled pool
  const selectedQuestions = shuffledPool.slice(0, questionsToShow);
  
  // Map to assessment format
  return mapQuestionsToAssessmentFormat(selectedQuestions);
};
