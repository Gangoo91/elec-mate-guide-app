
import React, { useState, useEffect } from 'react';
import { FormativeAssessment } from './FormativeAssessment';
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
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/components/ui/use-toast';
import { QuizTimer } from './quiz/QuizTimer';

interface SafetyQuizProps {
  unitId: string;
  timeLimit?: number; // in seconds
  questionsToShow?: number; // Number of questions to display from the pool
}

interface AssessmentQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

// Define a more comprehensive source question type to handle all formats
interface SourceQuestion {
  id?: number;
  text?: string; // Optional for compatibility
  question?: string; // Optional for compatibility
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export const SafetyQuiz: React.FC<SafetyQuizProps> = ({ 
  unitId, 
  timeLimit = 600,
  questionsToShow = 10 
}) => {
  const [timeRemaining, setTimeRemaining] = useState(timeLimit);
  const [isActive, setIsActive] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizKey, setQuizKey] = useState(Date.now()); // Key to force re-render
  const { toast } = useToast();

  const getQuestionSet = () => {
    // Get the appropriate question pool based on unitId
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
  
  const mapQuestionsToAssessmentFormat = (questions: SourceQuestion[]): AssessmentQuestion[] => {
    return questions.map(q => ({
      question: q.question || q.text || '', // Handle both formats
      options: q.options,
      correctAnswer: q.correctAnswer,
      explanation: q.explanation
    }));
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (isActive && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining(prevTime => prevTime - 1);
      }, 1000);
    } else if (timeRemaining === 0 && isActive) {
      setIsActive(false);
      setQuizSubmitted(true);
      toast({
        title: "Time's up!",
        description: "Your quiz time has expired.",
        variant: "destructive"
      });
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeRemaining, toast]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleStart = () => {
    setIsActive(true);
    setHasStarted(true);
  };

  const handleQuizComplete = () => {
    setQuizSubmitted(true);
    setIsActive(false);
  };

  const handleRetake = () => {
    // Reset all quiz states
    setTimeRemaining(timeLimit);
    setQuizSubmitted(false);
    setIsActive(true);
    // Update key to force re-render of the FormativeAssessment component
    setQuizKey(Date.now());
  };

  return (
    <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
      {!hasStarted ? (
        <div className="text-center py-8">
          <h3 className="text-xl font-medium text-[#FFC900] mb-4">
            Unit {unitId} Final Assessment
          </h3>
          <p className="text-[#FFC900]/80 mb-6">
            This assessment contains {questionsToShow} questions randomly selected from a pool of {unitId === "301" || unitId === "303" || unitId === "304" || unitId === "305" || unitId === "308" ? 50 : "multiple"} questions to test your knowledge.
            You'll have {Math.floor(timeLimit / 60)} minutes to complete the assessment.
          </p>
          <button
            onClick={handleStart}
            className="bg-[#FFC900] text-[#151812] hover:bg-[#e5b700] px-6 py-3 rounded font-medium"
          >
            Begin Assessment
          </button>
        </div>
      ) : (
        <>
          {isActive && (
            <QuizTimer 
              timeRemaining={timeRemaining}
              quizSubmitted={quizSubmitted}
            />
          )}
          
          <FormativeAssessment 
            key={quizKey}
            questions={getQuestionSet()} 
            questionsToShow={questionsToShow} 
            unitId={unitId}
            onQuizComplete={handleQuizComplete}
            onRetake={handleRetake}
          />
        </>
      )}
    </div>
  );
};
