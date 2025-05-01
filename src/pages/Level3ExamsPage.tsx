
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import ExamCard from "@/components/practice-exams/ExamCard";
import { useToast } from "@/components/ui/use-toast";

const Level3ExamsPage = () => {
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
      title: "Unit 301 - Environmental Technology Systems",
      description: "Assessment covering renewable energy and environmental technology systems.",
      numQuestions: 40,
      timeLimit: 60
    },
    {
      title: "Unit 302 - Principles of Electrical Science",
      description: "Questions on advanced electrical principles, measurements and calculations.",
      numQuestions: 45,
      timeLimit: 70
    },
    {
      title: "Unit 303 - Fault Diagnosis & Rectification",
      description: "Test covering fault finding, diagnosis and repair techniques.",
      numQuestions: 35,
      timeLimit: 50
    },
    {
      title: "Unit 304 - Inspection & Testing",
      description: "Assessment on carrying out inspection and testing on electrical installations.",
      numQuestions: 40,
      timeLimit: 60
    },
    {
      title: "Unit 305 - Electrical Design",
      description: "Questions on electrical installation design principles and applications.",
      numQuestions: 45,
      timeLimit: 70
    },
    {
      title: "Unit 308 - Career Awareness",
      description: "Assessment covering industry knowledge and professional development.",
      numQuestions: 30,
      timeLimit: 45
    }
  ];

  const handleBackClick = () => {
    navigate('/apprentices/practice-exams');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
        <PageHeader 
          title="Level 3 Mock Exams"
          description="Practice assessments to help you prepare for your Level 3 qualification examinations."
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

export default Level3ExamsPage;
