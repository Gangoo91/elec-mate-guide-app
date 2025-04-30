
import React from 'react';
import { AssessmentQuestion } from './types';
import { CheckCircle, XCircle } from 'lucide-react';

interface QuizDetailedResultsProps {
  questions: AssessmentQuestion[];
  userAnswers: Record<number, string>;
  score: number;
  total: number;
}

export const QuizDetailedResults: React.FC<QuizDetailedResultsProps> = ({ 
  questions, 
  userAnswers, 
  score,
  total
}) => {
  const percentage = Math.round((score / total) * 100);
  
  return (
    <div className="mt-6">
      <div className="mb-6 flex items-center justify-center">
        <div className="bg-[#353a2c] rounded-full w-32 h-32 flex items-center justify-center">
          <div className="text-center">
            <p className="text-3xl font-bold text-[#FFC900]">
              {score}/{total}
            </p>
            <p className="text-[#FFC900]/70">
              {percentage}%
            </p>
          </div>
        </div>
      </div>
      
      <div className="space-y-6 mt-8">
        <h3 className="text-xl font-semibold text-[#FFC900]">Detailed Results</h3>
        
        {questions.map((question, index) => {
          const userAnswer = userAnswers[index];
          const isCorrect = userAnswer === question.correctAnswer;
          
          return (
            <div key={index} className={`p-4 rounded-lg border ${isCorrect ? 'border-green-500/30 bg-green-900/10' : 'border-red-500/30 bg-red-900/10'}`}>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  {isCorrect ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-500" />
                  )}
                </div>
                <div>
                  <p className="font-medium text-[#FFC900]/90 mb-2">{question.question}</p>
                  
                  <div className="mb-3">
                    <p className="text-sm text-[#FFC900]/70 mb-1">Your answer:</p>
                    <p className={`text-sm ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>{userAnswer}</p>
                  </div>
                  
                  {!isCorrect && (
                    <div className="mb-3">
                      <p className="text-sm text-[#FFC900]/70 mb-1">Correct answer:</p>
                      <p className="text-sm text-green-400">{question.correctAnswer}</p>
                    </div>
                  )}
                  
                  <div className="mt-4 bg-[#22251e] p-3 rounded-md">
                    <p className="text-sm text-[#FFC900]/80">{question.explanation}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
