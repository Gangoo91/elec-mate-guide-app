
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import ExamCard from "@/components/practice-exams/ExamCard";
import { useToast } from "@/components/ui/use-toast";

const HNDExamsPage = () => {
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
      title: "Advanced Power Systems",
      description: "In-depth assessment on complex power distribution networks.",
      numQuestions: 45,
      timeLimit: 70
    },
    {
      title: "Industrial Control Systems",
      description: "Questions on PLC programming and industrial automation.",
      numQuestions: 40,
      timeLimit: 60
    },
    {
      title: "Research Project",
      description: "Assessment on research methodology and project execution.",
      numQuestions: 35,
      timeLimit: 90
    },
    {
      title: "Renewable Energy Systems",
      description: "Test covering advanced renewable technologies and integration.",
      numQuestions: 45,
      timeLimit: 70
    },
    {
      title: "Building Management Systems",
      description: "Questions on smart building technology and control systems.",
      numQuestions: 40,
      timeLimit: 60
    }
  ];

  const handleBackClick = () => {
    navigate('/apprentices/practice-exams');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
        <PageHeader 
          title="HND Mock Exams"
          description="Practice assessments to help you prepare for your Higher National Diploma examinations."
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

export default HNDExamsPage;
