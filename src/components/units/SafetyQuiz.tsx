
import React, { useState, useEffect } from 'react';
import { FormativeAssessment } from './FormativeAssessment';
import { electricalScienceQuestions } from '@/data/units/sections/unit202/questions/electricalScienceQuestions';
import { healthAndSafetyQuestions } from '@/data/units/sections/unit201/questions/healthAndSafetyQuestions';
import { electricalInstallationsQuestions } from '@/data/units/sections/unit203/questions/electricalInstallationsQuestions';
import { wiringSystemsQuestions } from '@/data/units/sections/unit204/questions/wiringSystemsQuestions';
import { communicationQuestions } from '@/data/units/sections/unit210/questions/communicationQuestions';
import { environmentalTechnologyQuestions } from '@/data/units/sections/unit301/questions/environmentalTechnologyQuestions';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/components/ui/use-toast';

interface SafetyQuizProps {
  unitId: string;
  timeLimit?: number; // in seconds
}

interface AssessmentQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

// Define a more comprehensive source question type to handle all formats
interface SourceQuestion {
  id: number;
  text?: string; // Optional for compatibility
  question?: string; // Optional for compatibility
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export const SafetyQuiz: React.FC<SafetyQuizProps> = ({ unitId, timeLimit = 600 }) => {
  const [timeRemaining, setTimeRemaining] = useState(timeLimit);
  const [isActive, setIsActive] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const { toast } = useToast();

  const getQuestionSet = () => {
    switch(unitId) {
      case "201":
        return mapQuestionsToAssessmentFormat(healthAndSafetyQuestions as SourceQuestion[]);
      case "202":
        return mapQuestionsToAssessmentFormat(electricalScienceQuestions as SourceQuestion[]);
      case "203":
        return mapQuestionsToAssessmentFormat(electricalInstallationsQuestions as SourceQuestion[]);
      case "204":
        return mapQuestionsToAssessmentFormat(wiringSystemsQuestions as SourceQuestion[]);
      case "210":
        return mapQuestionsToAssessmentFormat(communicationQuestions as SourceQuestion[]);
      case "301":
        return mapQuestionsToAssessmentFormat(environmentalTechnologyQuestions as SourceQuestion[]);
      default:
        return mapQuestionsToAssessmentFormat(healthAndSafetyQuestions as SourceQuestion[]);
    }
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

  return (
    <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
      {!hasStarted ? (
        <div className="text-center py-8">
          <h3 className="text-xl font-medium text-[#FFC900] mb-4">
            Unit {unitId} Final Assessment
          </h3>
          <p className="text-[#FFC900]/80 mb-6">
            This assessment contains 10 questions to test your knowledge of the unit materials.
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
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg text-[#FFC900]">Unit {unitId} Assessment</h3>
            <div className="text-[#FFC900]">
              Time remaining: <span className="font-medium">{formatTime(timeRemaining)}</span>
            </div>
          </div>
          
          <Progress 
            value={(timeRemaining / timeLimit) * 100} 
            className="h-2 mb-6 bg-[#353a2c]"
          />
          
          <FormativeAssessment 
            questions={getQuestionSet()} 
            questionsToShow={10} 
            unitId={unitId}
          />
        </>
      )}
    </div>
  );
};
