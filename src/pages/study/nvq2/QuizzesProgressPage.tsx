
import React from 'react';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import BackButton from "@/components/navigation/BackButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { MessageSquare } from "lucide-react";

const quizzes = [
  {
    id: "health-and-safety",
    title: "Health & Safety Quiz",
    description: "Test your knowledge of electrical safety procedures.",
    questions: 15,
    bestScore: 12,
    completed: true
  },
  {
    id: "ohms-law",
    title: "Ohm's Law Quiz",
    description: "Practice applying Ohm's Law to various circuit problems.",
    questions: 10,
    bestScore: 8,
    completed: true
  },
  {
    id: "wiring-regulations",
    title: "Wiring Regulations",
    description: "Test your understanding of key wiring regulations.",
    questions: 20,
    bestScore: 0,
    completed: false
  }
];

const QuizzesProgressPage = () => {
  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
        <div className="mb-4">
          <BackButton />
        </div>

        <PageHeader 
          title="Practice Quizzes - NVQ Level 2"
          description="Test your knowledge with interactive quizzes on each topic"
          hideBackButton={true}
        />

        <div className="grid gap-6 mt-6">
          {quizzes.map((quiz) => (
            <Card
              key={quiz.id}
              className="bg-[#22251e] border-[#FFC900]/20 cursor-pointer hover:scale-105 hover:border-[#FFC900]/50 transition-all"
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <MessageSquare className="text-[#FFC900] h-6 w-6" />
                  <CardTitle className="text-[#FFC900]">{quiz.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-[#FFC900]/70 mb-4">{quiz.description}</p>
                
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-[#FFC900]/70 text-sm">{quiz.questions} questions</span>
                  {quiz.completed ? (
                    <span className="text-[#FFC900] bg-[#FFC900]/10 py-1 px-2 rounded-full text-xs">
                      Best score: {quiz.bestScore}/{quiz.questions}
                    </span>
                  ) : (
                    <span className="text-gray-400 bg-gray-500/10 py-1 px-2 rounded-full text-xs">
                      Not attempted
                    </span>
                  )}
                </div>
                
                <Progress 
                  value={quiz.completed ? (quiz.bestScore / quiz.questions) * 100 : 0} 
                  className="h-2" 
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default QuizzesProgressPage;
