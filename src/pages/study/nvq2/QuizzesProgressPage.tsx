
import React from 'react';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import BackButton from "@/components/navigation/BackButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Award, Clock } from "lucide-react";

const QuizzesProgressPage = () => {
  const quizzes = [
    {
      title: "Health & Safety Assessment",
      totalQuestions: 20,
      timeLimit: "30 minutes",
      bestScore: 85,
      attempts: 2,
    },
    {
      title: "Electrical Theory Fundamentals",
      totalQuestions: 25,
      timeLimit: "45 minutes",
      bestScore: 92,
      attempts: 1,
    },
    {
      title: "Installation Methods Quiz",
      totalQuestions: 15,
      timeLimit: "25 minutes",
      bestScore: null,
      attempts: 0,
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <div className="mb-4">
          <BackButton />
        </div>
        
        <PageHeader 
          title="Quizzes & Progress - NVQ Level 2"
          description="Test your knowledge and track your learning journey"
          hideBackButton={true}
        />

        <div className="grid gap-6">
          {quizzes.map((quiz, index) => (
            <Card key={index} className="bg-[#22251e] border-[#FFC900]/20 cursor-pointer hover:border-[#FFC900]/50 transition-all">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Award className="text-[#FFC900] h-6 w-6" />
                    <CardTitle className="text-[#FFC900]">{quiz.title}</CardTitle>
                  </div>
                  <div className="flex items-center gap-2 text-[#FFC900]/70">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{quiz.timeLimit}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex justify-between text-[#FFC900]/70">
                    <span>Questions: {quiz.totalQuestions}</span>
                    <span>Attempts: {quiz.attempts}</span>
                  </div>
                  {quiz.bestScore && (
                    <div className="flex items-center gap-4">
                      <Progress value={quiz.bestScore} className="h-2" />
                      <span className="text-[#FFC900]/70 text-sm">Best Score: {quiz.bestScore}%</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default QuizzesProgressPage;
