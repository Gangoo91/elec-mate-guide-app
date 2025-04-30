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
import { useToast } from '@/hooks/use-toast';
import { QuizTimer } from './quiz/QuizTimer';
import { QuizQuestion } from './quiz/QuizQuestion';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Check, AlertTriangle } from 'lucide-react';

interface SafetyQuizProps {
  unitId: string;
  timeLimit?: number; // in seconds
  questionsToShow?: number; // Number of questions to display from the pool
  questions?: AssessmentQuestion[]; // Optional direct questions array
}

interface AssessmentQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  id?: number; // Optional ID field
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
  questionsToShow = 10,
  questions
}) => {
  const [timeRemaining, setTimeRemaining] = useState(timeLimit);
  const [isActive, setIsActive] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizKey, setQuizKey] = useState(Date.now()); // Key to force re-render
  const [currentQuestions, setCurrentQuestions] = useState<AssessmentQuestion[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [results, setResults] = useState<{ score: number; total: number } | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const { toast } = useToast();

  const getQuestionSet = () => {
    // If direct questions were provided, use them
    if (questions && questions.length > 0) {
      // Shuffle the provided questions and take the requested number
      const shuffledQuestions = [...questions].sort(() => 0.5 - Math.random());
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
  
  const mapQuestionsToAssessmentFormat = (questions: SourceQuestion[]): AssessmentQuestion[] => {
    return questions.map(q => ({
      question: q.question || q.text || '', // Handle both formats
      options: q.options,
      correctAnswer: q.correctAnswer,
      explanation: q.explanation,
      id: q.id
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
      handleSubmitQuiz();
      toast({
        title: "Time's up!",
        description: "Your quiz has been automatically submitted.",
        variant: "destructive"
      });
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeRemaining, toast]);

  useEffect(() => {
    if (hasStarted && currentQuestions.length === 0) {
      setCurrentQuestions(getQuestionSet());
    }
  }, [hasStarted]);

  const handleStart = () => {
    setIsActive(true);
    setHasStarted(true);
  };

  const handleAnswerSelect = (questionIndex: number, answer: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionIndex]: answer
    }));
  };

  const handleNextQuestion = () => {
    setShowExplanation(false);
    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    setShowExplanation(false);
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmitQuiz = () => {
    let score = 0;
    
    // Calculate score
    currentQuestions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        score++;
      }
    });
    
    setResults({
      score,
      total: currentQuestions.length
    });
    
    setQuizSubmitted(true);
    setIsActive(false);

    // Send toast notification with results
    toast({
      title: "Quiz Completed",
      description: `You scored ${score} out of ${currentQuestions.length}`,
      variant: score / currentQuestions.length >= 0.7 ? "default" : "destructive"
    });
  };

  const handleRetake = () => {
    // Reset all quiz states
    setTimeRemaining(timeLimit);
    setQuizSubmitted(false);
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setResults(null);
    setIsActive(true);
    setCurrentQuestions(getQuestionSet());
    setShowExplanation(false);
    // Update key to force re-render of the component
    setQuizKey(Date.now());
  };

  const handleCheckAnswer = () => {
    setShowExplanation(true);
  };

  const currentQuestion = currentQuestions[currentQuestionIndex];

  return (
    <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6" key={quizKey}>
      {!hasStarted ? (
        <div className="text-center py-8">
          <h3 className="text-xl font-medium text-[#FFC900] mb-4">
            {unitId === "installation-planning" ? "Installation Planning Assessment" : `Unit ${unitId} Assessment`}
          </h3>
          <p className="text-[#FFC900]/80 mb-6">
            This assessment contains {questionsToShow} questions randomly selected from a pool of questions to test your knowledge.
            You'll have {Math.floor(timeLimit / 60)} minutes to complete the assessment.
          </p>
          <Button
            onClick={handleStart}
            className="bg-[#FFC900] text-[#151812] hover:bg-[#e5b700] px-6 py-3 rounded font-medium"
          >
            Begin Assessment
          </Button>
        </div>
      ) : (
        <>
          {isActive && !quizSubmitted && (
            <QuizTimer 
              timeRemaining={timeRemaining}
              quizSubmitted={quizSubmitted}
              timeLimit={timeLimit}
            />
          )}
          
          {!quizSubmitted && currentQuestion && (
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg text-[#FFC900]">
                  Question {currentQuestionIndex + 1} of {currentQuestions.length}
                </h4>
                
                <div className="flex items-center gap-2">
                  <span className="text-sm text-[#FFC900]/70">
                    {Object.keys(selectedAnswers).length} of {currentQuestions.length} answered
                  </span>
                  <Progress 
                    value={(Object.keys(selectedAnswers).length / currentQuestions.length) * 100}
                    className="w-24 h-2 bg-gray-700"
                    indicatorClassName="bg-green-500"
                  />
                </div>
              </div>
              
              <QuizQuestion
                id={`${currentQuestionIndex}`}
                question={currentQuestion.question}
                options={currentQuestion.options}
                selectedAnswer={selectedAnswers[currentQuestionIndex]}
                onAnswerChange={(answer) => handleAnswerSelect(currentQuestionIndex, answer)}
                disabled={showExplanation}
              />
              
              {showExplanation && (
                <div className="mt-4 p-4 bg-[#353a2c] rounded-lg border border-[#FFC900]/30">
                  <div className="flex items-start gap-2 mb-2">
                    <div className="mt-1">
                      {selectedAnswers[currentQuestionIndex] === currentQuestion.correctAnswer ? (
                        <Check className="h-5 w-5 text-green-500" />
                      ) : (
                        <AlertTriangle className="h-5 w-5 text-red-500" />
                      )}
                    </div>
                    <div>
                      <h5 className="font-medium text-[#FFC900]">
                        {selectedAnswers[currentQuestionIndex] === currentQuestion.correctAnswer 
                          ? "Correct!" 
                          : "Incorrect"}
                      </h5>
                      <p className="text-[#FFC900]/80 mt-1">
                        {currentQuestion.explanation}
                      </p>
                      {selectedAnswers[currentQuestionIndex] !== currentQuestion.correctAnswer && (
                        <p className="text-[#FFC900] mt-2">
                          Correct answer: {currentQuestion.correctAnswer}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
              
              <div className="flex justify-between mt-6">
                <Button
                  onClick={handlePreviousQuestion}
                  disabled={currentQuestionIndex === 0}
                  variant="outline"
                  className="border-[#FFC900]/30 text-[#FFC900] hover:bg-[#353a2c]"
                >
                  Previous
                </Button>
                
                <div className="flex gap-3">
                  {!showExplanation && selectedAnswers[currentQuestionIndex] && (
                    <Button
                      onClick={handleCheckAnswer}
                      className="bg-[#353a2c] text-[#FFC900] hover:bg-[#454e36]"
                    >
                      Check Answer
                    </Button>
                  )}
                  
                  {currentQuestionIndex < currentQuestions.length - 1 ? (
                    <Button
                      onClick={handleNextQuestion}
                      className="bg-[#FFC900] text-[#151812] hover:bg-[#e5b700]"
                    >
                      Next
                    </Button>
                  ) : (
                    <Button
                      onClick={handleSubmitQuiz}
                      className="bg-[#FFC900] text-[#151812] hover:bg-[#e5b700]"
                    >
                      Submit Quiz
                    </Button>
                  )}
                </div>
              </div>
            </div>
          )}
          
          {quizSubmitted && results && (
            <div className="text-center py-8">
              <h3 className="text-2xl font-medium text-[#FFC900] mb-4">
                Quiz Results
              </h3>
              
              <div className="flex justify-center mb-6">
                <div className="bg-[#353a2c] rounded-full w-32 h-32 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-[#FFC900]">
                      {results.score}/{results.total}
                    </p>
                    <p className="text-[#FFC900]/70">
                      {Math.round((results.score / results.total) * 100)}%
                    </p>
                  </div>
                </div>
              </div>
              
              <p className="text-[#FFC900]/80 mb-6">
                {results.score >= results.total * 0.7 
                  ? "Well done! You've successfully completed this assessment." 
                  : "You might want to review the unit content again and try once more."}
              </p>
              
              <Button
                onClick={handleRetake}
                className="bg-[#FFC900] text-[#151812] hover:bg-[#e5b700] px-6 py-3 rounded font-medium"
              >
                Take Quiz Again
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};
