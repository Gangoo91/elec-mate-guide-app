
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { SafetyQuiz } from "@/components/units/SafetyQuiz";
import ExamCard from "@/components/practice-exams/ExamCard";
import { useToast } from "@/components/ui/use-toast";

const Level2ExamsPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleBackClick = () => {
    navigate('/apprentices/practice-exams');
  };

  const examTopics = [
    {
      title: "Unit 201 - Health & Safety",
      description: "Assessment covering health & safety regulations and practices in electrical installations.",
      numQuestions: 30,
      timeLimit: 30,
      unitId: "201"
    },
    {
      title: "Unit 202 - Electrical Science",
      description: "Questions on electrical principles, theory and calculations.",
      numQuestions: 30,
      timeLimit: 30,
      unitId: "202"
    },
    {
      title: "Unit 203 - Electrical Installations",
      description: "Test covering electrical installation technology and practices.",
      numQuestions: 30,
      timeLimit: 30,
      unitId: "203"
    },
    {
      title: "Unit 204 - Wiring Systems",
      description: "Assessment on installation methods, enclosures and wiring systems.",
      numQuestions: 30,
      timeLimit: 30,
      unitId: "204"
    },
    {
      title: "Unit 210 - Communication",
      description: "Questions on workplace communication and documentation.",
      numQuestions: 30,
      timeLimit: 30,
      unitId: "210"
    }
  ];

  const [selectedExam, setSelectedExam] = React.useState<string | null>(null);

  const handleStartExam = (unitId: string) => {
    setSelectedExam(unitId);
    window.scrollTo(0, 0);
  };

  const handleBackToExams = () => {
    setSelectedExam(null);
  };

  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
        <PageHeader 
          title="Level 2 Mock Exams"
          description="Practice assessments to help you prepare for your Level 2 qualification examinations."
          customBackAction={selectedExam ? handleBackToExams : handleBackClick}
        />
        
        {!selectedExam ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {examTopics.map((topic, index) => (
              <ExamCard
                key={index}
                title={topic.title}
                description={topic.description}
                numQuestions={topic.numQuestions}
                timeLimit={topic.timeLimit}
                onStart={() => handleStartExam(topic.unitId)}
              />
            ))}
          </div>
        ) : (
          <SafetyQuiz
            unitId={selectedExam}
            timeLimit={1800} // 30 minutes in seconds
            questionsToShow={30}
          />
        )}
      </div>
    </MainLayout>
  );
};

export default Level2ExamsPage;
