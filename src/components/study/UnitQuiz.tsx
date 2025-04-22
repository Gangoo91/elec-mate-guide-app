
import React, { useState } from 'react';
import { Check, X, ArrowRight, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';

interface Question {
  id: number;
  text: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
  }[];
  explanation: string;
}

interface UnitQuizProps {
  unitNumber: string;
  unitTitle: string;
  questions: Question[];
  onComplete?: (score: number, totalQuestions: number) => void;
}

const UnitQuiz = ({ unitNumber, unitTitle, questions, onComplete }: UnitQuizProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const { toast } = useToast();

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleOptionSelect = (optionId: string) => {
    if (isAnswered) return;
    setSelectedOption(optionId);
  };

  const checkAnswer = () => {
    if (!selectedOption) return;

    const selectedOptionObj = currentQuestion.options.find(
      (option) => option.id === selectedOption
    );

    if (selectedOptionObj?.isCorrect) {
      setScore((prev) => prev + 1);
      setIsCorrect(true);
      toast({
        title: "Correct!",
        description: currentQuestion.explanation,
        variant: "default",
      });
    } else {
      setIsCorrect(false);
      toast({
        title: "Incorrect",
        description: currentQuestion.explanation,
        variant: "destructive",
      });
    }

    setIsAnswered(true);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setQuizCompleted(true);
      if (onComplete) {
        onComplete(score, questions.length);
      }
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setQuizCompleted(false);
  };

  if (quizCompleted) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <Card className="bg-[#22251e] border-[#FFC900]/20">
        <CardHeader>
          <CardTitle className="text-[#FFC900]">Quiz Results</CardTitle>
          <CardDescription className="text-[#FFC900]/70">
            Unit {unitNumber}: {unitTitle}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <p className="text-4xl font-bold text-[#FFC900] mb-2">{percentage}%</p>
            <p className="text-[#FFC900]/70">
              You scored {score} out of {questions.length} questions
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-[#FFC900]">Performance:</p>
            <Progress value={percentage} className="h-2" />
          </div>

          <div className="mt-4 p-4 bg-[#FFC900]/10 rounded-lg">
            {percentage >= 70 ? (
              <div className="flex items-center space-x-2">
                <Check className="text-green-500 h-5 w-5" />
                <p className="text-[#FFC900]">
                  Well done! You've passed this unit quiz.
                </p>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <X className="text-red-500 h-5 w-5" />
                <p className="text-[#FFC900]">
                  You need to score at least 70% to pass. Try reviewing the material and taking the quiz again.
                </p>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button
            onClick={restartQuiz}
            className="w-full bg-[#FFC900] text-[#151812] hover:bg-[#e5b700]"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Retake Quiz
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="bg-[#22251e] border-[#FFC900]/20">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-[#FFC900]">Unit Quiz</CardTitle>
            <CardDescription className="text-[#FFC900]/70">
              Unit {unitNumber}: {unitTitle}
            </CardDescription>
          </div>
          <div className="text-[#FFC900]">
            Question {currentQuestionIndex + 1}/{questions.length}
          </div>
        </div>
        <Progress value={progress} className="h-1" />
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-[#FFC900] text-lg font-medium">
          {currentQuestion.text}
        </div>

        <RadioGroup
          value={selectedOption || ""}
          className="space-y-3"
          onValueChange={handleOptionSelect}
        >
          {currentQuestion.options.map((option) => (
            <div
              key={option.id}
              className={`flex items-center space-x-2 p-3 rounded-lg border border-[#FFC900]/20 
                ${
                  isAnswered && option.id === selectedOption
                    ? option.isCorrect
                      ? "bg-green-500/10 border-green-500/50"
                      : "bg-red-500/10 border-red-500/50"
                    : isAnswered && option.isCorrect
                    ? "bg-green-500/10 border-green-500/50"
                    : "hover:bg-[#FFC900]/5"
                }
              `}
            >
              <RadioGroupItem
                value={option.id}
                id={option.id}
                disabled={isAnswered}
                className="text-[#FFC900]"
              />
              <Label
                htmlFor={option.id}
                className={`flex-grow cursor-pointer ${
                  isAnswered && option.isCorrect ? "text-green-500" : "text-[#FFC900]/70"
                }`}
              >
                {option.text}
              </Label>
              {isAnswered && option.isCorrect && <Check className="h-5 w-5 text-green-500" />}
              {isAnswered && !option.isCorrect && option.id === selectedOption && (
                <X className="h-5 w-5 text-red-500" />
              )}
            </div>
          ))}
        </RadioGroup>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="text-[#FFC900]/70">
          Score: {score}/{questions.length}
        </div>
        {!isAnswered ? (
          <Button
            onClick={checkAnswer}
            disabled={!selectedOption}
            className="bg-[#FFC900] text-[#151812] hover:bg-[#e5b700]"
          >
            Submit Answer
          </Button>
        ) : (
          <Button
            onClick={nextQuestion}
            className="bg-[#FFC900] text-[#151812] hover:bg-[#e5b700]"
          >
            {currentQuestionIndex < questions.length - 1 ? (
              <>
                Next Question <ArrowRight className="ml-2 h-4 w-4" />
              </>
            ) : (
              "Finish Quiz"
            )}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default UnitQuiz;
