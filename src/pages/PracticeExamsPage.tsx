
import React, { useState } from 'react';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import BackButton from "@/components/navigation/BackButton";
import ExamFilters from "@/components/practice-exams/ExamFilters";
import ExamCard from "@/components/practice-exams/ExamCard";
import { useExamQuestions } from "@/components/practice-exams/useExamQuestions";
import { useToast } from "@/components/ui/use-toast";

const PracticeExamsPage = () => {
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

  // Group questions by unit
  const groupedQuestions = React.useMemo(() => {
    if (!questions) return [];
    
    const groupedByUnit = questions.reduce((acc, question) => {
      const unitCode = question.unit_code || 'general';
      if (!acc[unitCode]) {
        acc[unitCode] = {
          unitCode: question.unit_code,
          unitTitle: question.unit_title,
          unitDescription: question.unit_description,
          questions: []
        };
      }
      acc[unitCode].questions.push(question);
      return acc;
    }, {} as Record<string, any>);

    return Object.values(groupedByUnit);
  }, [questions]);

  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
        <BackButton />
        <PageHeader 
          title="Practice Exams"
          description="Test your knowledge with mock exams and quizzes covering various electrical topics."
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
            <div className="space-y-8">
              {groupedQuestions.map((unit, index) => (
                <div key={unit.unitCode || index}>
                  <ExamCard
                    title={`${qualification} ${level} Practice Exam`}
                    description={unit.unitDescription || "Test your knowledge with questions from various topics covered in your qualification."}
                    unitCode={unit.unitCode}
                    unitTitle={unit.unitTitle}
                    numQuestions={unit.questions.length}
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

export default PracticeExamsPage;
