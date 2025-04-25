
import React from 'react';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import ExamCard from "@/components/practice-exams/ExamCard";
import { useToast } from "@/components/ui/use-toast";

const ElectriciansExamsPage = () => {
  const { toast } = useToast();

  const handleStartExam = () => {
    toast({
      title: "Coming Soon",
      description: "The exam system is currently being developed. Check back soon!",
      variant: "default",
    });
  };

  const examTopics = [
    {
      title: "Solar PV Installation",
      description: "Test your knowledge of solar PV system installation, maintenance, and troubleshooting.",
      numQuestions: 40,
      timeLimit: 60
    },
    {
      title: "Energy Storage Systems",
      description: "Assessment covering battery technologies and renewable energy integration.",
      numQuestions: 35,
      timeLimit: 50
    },
    {
      title: "Building Management Systems",
      description: "Questions on BMS architecture, protocols, and maintenance procedures.",
      numQuestions: 45,
      timeLimit: 70
    },
    {
      title: "Smart Home Technologies",
      description: "Test covering home automation and IoT integration techniques.",
      numQuestions: 30,
      timeLimit: 45
    },
    {
      title: "EV Infrastructure",
      description: "Assessment of EV charging installation and load management knowledge.",
      numQuestions: 40,
      timeLimit: 60
    },
    {
      title: "Data Networks",
      description: "Exam covering structured cabling and network installation skills.",
      numQuestions: 35,
      timeLimit: 50
    },
    {
      title: "Energy Efficiency",
      description: "Questions on heat pumps and energy management systems.",
      numQuestions: 40,
      timeLimit: 60
    },
    {
      title: "Emergency Lighting",
      description: "Test on emergency lighting design and installation to BS 5266.",
      numQuestions: 30,
      timeLimit: 45
    },
    {
      title: "Fire Alarm Systems",
      description: "Assessment of fire detection system knowledge to BS 5839.",
      numQuestions: 45,
      timeLimit: 70
    },
    {
      title: "Access Control",
      description: "Exam covering security systems and access control technologies.",
      numQuestions: 35,
      timeLimit: 50
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
        <PageHeader 
          title="Professional Practice Exams"
          description="Test your knowledge with mock exams covering specialized electrical topics."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
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

export default ElectriciansExamsPage;
