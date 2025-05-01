
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import ExamCard from "@/components/practice-exams/ExamCard";
import { useToast } from "@/components/ui/use-toast";

const MOETExamsPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleStartExam = () => {
    toast({
      title: "Coming Soon",
      description: "This exam is currently being developed. Check back soon!",
      variant: "default",
    });
  };

  const examTopics = [
    {
      title: "Basic Electronics",
      description: "Assessment covering electronic components and circuit theory fundamentals.",
      numQuestions: 40,
      timeLimit: 60
    },
    {
      title: "Electrical Maintenance",
      description: "Questions on maintenance procedures and best practices for electrical systems.",
      numQuestions: 45,
      timeLimit: 70
    },
    {
      title: "Equipment Installation",
      description: "Test covering proper installation techniques for electrical equipment.",
      numQuestions: 35,
      timeLimit: 50
    },
    {
      title: "Fault Finding",
      description: "Assessment on diagnostic techniques and fault identification methods.",
      numQuestions: 40,
      timeLimit: 60
    },
    {
      title: "Power Systems",
      description: "Questions on power generation, transmission and distribution systems.",
      numQuestions: 45,
      timeLimit: 70
    },
    {
      title: "Safety Awareness",
      description: "Assessment covering essential safety protocols and procedures.",
      numQuestions: 35,
      timeLimit: 50
    }
  ];

  const handleBackClick = () => {
    navigate('/apprentices/practice-exams');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
        <PageHeader 
          title="MOET Mock Exams"
          description="Practice assessments to help you prepare for your Maintenance Operations Engineering Technician examinations."
          customBackAction={handleBackClick}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {examTopics.map((topic, index) => (
            <ExamCard
              key={index}
              title={topic.title}
              description={topic.description}
              numQuestions={topic.numQuestions}
              timeLimit={topic.timeLimit}
              onStart={handleStartExam}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default MOETExamsPage;
