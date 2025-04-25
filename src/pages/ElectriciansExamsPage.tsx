
import React, { useState } from 'react';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import ExamFilters from "@/components/practice-exams/ExamFilters";
import ExamCard from "@/components/practice-exams/ExamCard";
import { useExamQuestions } from "@/components/practice-exams/useExamQuestions";
import { useToast } from "@/components/ui/use-toast";
import { unitContent } from "@/data/unitContent";

const ElectriciansExamsPage = () => {
  const [qualification, setQualification] = useState('');
  const [level, setLevel] = useState('');
  const { toast } = useToast();
  const { data: questions, isLoading } = useExamQuestions(qualification, level);

  const handleStartExam = () => {
    toast({
      title: "Coming Soon",
      description: "The exam system is currently being developed. Check back soon!",
      variant: "default",
    });
  };

  // Group questions by topic for electricians
  const groupedQuestions = React.useMemo(() => {
    if (!questions) return [];
    
    const groupedByTopic = questions.reduce((acc, question) => {
      const topic = question.topic || 'General';
      if (!acc[topic]) {
        acc[topic] = {
          topic,
          unitTitle: question.unit_title || topic,
          unitDescription: question.unit_description || `Practice questions for ${topic}`,
          questions: []
        };
      }
      acc[topic].questions.push(question);
      return acc;
    }, {} as Record<string, any>);

    return Object.values(groupedByTopic);
  }, [questions]);

  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
        <PageHeader 
          title="Professional Practice Exams"
          description="Test your knowledge with mock exams and quizzes covering advanced electrical topics for qualified electricians."
        />

        <div className="space-y-6">
          <ExamFilters
            qualification={qualification}
            level={level}
            onQualificationChange={setQualification}
            onLevelChange={setLevel}
          />

          {!qualification || !level ? (
            <div className="bg-[#22251e] border-[#FFC900]/20 rounded-lg border p-6">
              <p className="text-[#FFC900]/70">
                Select a qualification and level to view available practice exams.
              </p>
            </div>
          ) : isLoading ? (
            <div className="bg-[#22251e] border-[#FFC900]/20 rounded-lg border p-6">
              <p className="text-[#FFC900]/70">Loading available exams...</p>
            </div>
          ) : groupedQuestions.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {groupedQuestions.map((group, index) => (
                <div key={index}>
                  <ExamCard
                    title={group.topic || 'General'}
                    description={group.unitDescription}
                    unitCode={group.topic}
                    unitTitle={group.unitTitle}
                    numQuestions={group.questions.length}
                    timeLimit={45}
                    onStart={handleStartExam}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-[#22251e] border-[#FFC900]/20 rounded-lg border p-6">
              <p className="text-[#FFC900]/70">
                No practice exams are currently available for this qualification and level.
                More content will be added soon.
              </p>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default ElectriciansExamsPage;
