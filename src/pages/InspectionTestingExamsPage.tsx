
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import ExamCard from "@/components/practice-exams/ExamCard";
import { useToast } from "@/components/ui/use-toast";

const InspectionTestingExamsPage = () => {
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
      title: "2391-50 Initial Verification",
      description: "Assessment covering inspection and testing of new installations.",
      numQuestions: 40,
      timeLimit: 60
    },
    {
      title: "2391-51 Periodic Inspection",
      description: "Questions on inspection and testing of existing installations.",
      numQuestions: 45,
      timeLimit: 70
    },
    {
      title: "2391-52 Combined Initial & Periodic",
      description: "Comprehensive test covering both initial and periodic inspection.",
      numQuestions: 50,
      timeLimit: 90
    },
    {
      title: "2394 Legacy Qualification",
      description: "Assessment on initial verification to the previous standards.",
      numQuestions: 40,
      timeLimit: 60
    },
    {
      title: "2395 Legacy Qualification",
      description: "Questions on periodic inspection to the previous standards.",
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
          title="Inspection & Testing Mock Exams"
          description="Practice assessments to help you prepare for your Inspection & Testing qualifications."
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

export default InspectionTestingExamsPage;
