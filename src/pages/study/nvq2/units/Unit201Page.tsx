
import React, { useState } from 'react';
import UnitPage from './UnitPage';
import CourseContentSection from '@/components/study/CourseContentSection';
import UnitQuiz from '@/components/study/UnitQuiz';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookText, FileQuestion } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';

const Unit201Page = () => {
  const [activeTab, setActiveTab] = useState('content');
  const { toast } = useToast();
  const { user } = useAuth();

  const healthAndSafetyContent = {
    key_points: [
      "Health & Safety is a legal requirement in electrical work",
      "Risk assessment must be completed before any electrical work",
      "PPE selection depends on the specific electrical hazards present",
      "All injuries, no matter how small, must be reported and documented",
      "Fire safety protocols must be understood and followed at all times"
    ],
    main_content: [
      {
        type: "text",
        content: "Health and Safety in electrical work is paramount to preventing accidents and ensuring compliance with regulations. The Health and Safety at Work Act 1974 establishes the framework for managing workplace safety, requiring all employers and employees to take reasonable steps to ensure a safe working environment."
      },
      {
        type: "regulation",
        content: "The Electricity at Work Regulations 1989 specifically requires that all electrical systems be maintained to prevent danger, and that work activities on or near electrical systems must be carried out in a way that prevents danger."
      },
      {
        type: "text",
        content: "Risk assessment is the foundation of safe electrical work. Before beginning any task, you must identify hazards, evaluate risks, and implement appropriate control measures. Documentation of risk assessments is not just good practice—it's legally required."
      },
      {
        type: "checklist",
        items: [
          "Check for live conductors before starting work",
          "Ensure proper isolation procedures are followed",
          "Verify testing equipment functionality before use",
          "Select appropriate PPE for the specific task",
          "Establish an emergency response plan",
          "Ensure proper signage and barriers are in place"
        ]
      },
      {
        type: "text",
        content: "Personal Protective Equipment (PPE) is crucial in electrical work. This includes insulated gloves, safety goggles, arc flash protection, and appropriate footwear. PPE must be inspected before each use and maintained according to manufacturer guidelines."
      },
      {
        type: "important_note",
        content: "Never work on live electrical systems unless absolutely necessary and only when following specific safe working procedures with appropriate authorization."
      },
      {
        type: "text",
        content: "First aid procedures for electrical injuries require special consideration. In case of electric shock, the priority is to safely disconnect the victim from the electrical source without endangering yourself. CPR training is essential for all electrical workers."
      }
    ],
    practical_tips: [
      "Always test before touch - use approved voltage indicators",
      "Never rely on just one safety measure - employ multiple layers of protection",
      "Maintain clear communication with all team members during electrical operations",
      "Keep your work area clean and free of unnecessary tools and materials",
      "Update your risk assessment if conditions change during work"
    ]
  };

  const healthSafetyQuizQuestions = [
    {
      id: 1,
      text: "Which legislation establishes the framework for managing workplace safety in the UK?",
      options: [
        { id: "a", text: "The Electricity at Work Regulations 1989", isCorrect: false },
        { id: "b", text: "The Health and Safety at Work Act 1974", isCorrect: true },
        { id: "c", text: "The Building Regulations 2010", isCorrect: false },
        { id: "d", text: "The Construction Design and Management Regulations 2015", isCorrect: false }
      ],
      explanation: "The Health and Safety at Work Act 1974 is the primary piece of legislation covering occupational health and safety in Great Britain."
    },
    {
      id: 2,
      text: "What is the first step in the risk assessment process?",
      options: [
        { id: "a", text: "Implement control measures", isCorrect: false },
        { id: "b", text: "Record findings and implement them", isCorrect: false },
        { id: "c", text: "Evaluate the risks", isCorrect: false },
        { id: "d", text: "Identify hazards", isCorrect: true }
      ],
      explanation: "The first step in risk assessment is to identify what could cause harm (hazards), before evaluating the risks."
    },
    {
      id: 3,
      text: "What should be done before starting work on electrical equipment?",
      options: [
        { id: "a", text: "Test with approved voltage indicators to verify isolation", isCorrect: true },
        { id: "b", text: "Begin work immediately after switching off", isCorrect: false },
        { id: "c", text: "Ask a colleague if it's safe", isCorrect: false },
        { id: "d", text: "Visually inspect without testing", isCorrect: false }
      ],
      explanation: "Always test before touch using approved voltage indicators to verify that equipment is isolated and safe to work on."
    },
    {
      id: 4,
      text: "When is it acceptable to work on live electrical systems?",
      options: [
        { id: "a", text: "When you're experienced", isCorrect: false },
        { id: "b", text: "When you're in a hurry", isCorrect: false },
        { id: "c", text: "Only when absolutely necessary, following specific safe procedures with authorization", isCorrect: true },
        { id: "d", text: "When the voltage is below 50V", isCorrect: false }
      ],
      explanation: "Work on live electrical systems should only be undertaken when absolutely necessary, following specific safe working procedures, and with proper authorization."
    },
    {
      id: 5,
      text: "What is the priority in case of an electrical shock incident?",
      options: [
        { id: "a", text: "Administer CPR immediately", isCorrect: false },
        { id: "b", text: "Call emergency services first", isCorrect: false },
        { id: "c", text: "Safely disconnect the victim from the electrical source", isCorrect: true },
        { id: "d", text: "Apply first aid cream to burns", isCorrect: false }
      ],
      explanation: "The priority in case of electric shock is to safely disconnect the victim from the electrical source without endangering yourself, before administering first aid."
    }
  ];

  const handleQuizComplete = async (score: number, totalQuestions: number) => {
    const percentage = (score / totalQuestions) * 100;
    
    toast({
      title: percentage >= 70 ? "Quiz Passed!" : "Quiz Results",
      description: `You scored ${score} out of ${totalQuestions} questions (${percentage}%)`,
      variant: percentage >= 70 ? "default" : "destructive",
    });

    if (user) {
      try {
        // Record the quiz result to track user progress
        const { error } = await supabase
          .from('user_progress')
          .upsert({
            user_id: user.id,
            content_id: '201-quiz', // Identifier for this quiz
            progress: {
              score: percentage,
              completed: percentage >= 70,
              date_completed: new Date().toISOString()
            }
          });
          
        if (error) throw error;
      } catch (error) {
        console.error("Error saving quiz results:", error);
      }
    }
  };

  return (
    <UnitPage
      unitNumber="201"
      title="Health & Safety"
      description="Master essential electrical safety practices and protocols"
      content={[
        "Electrical safety fundamentals and best practices",
        "Risk assessment procedures and documentation",
        "Personal Protective Equipment (PPE) selection and use",
        "First aid requirements and emergency procedures",
        "Fire safety protocols and prevention measures",
        "Site safety requirements and regulations",
        "Safety signs and warning systems"
      ]}
      learningOutcomes={[
        "Understand and apply key electrical safety principles",
        "Conduct thorough risk assessments for electrical work",
        "Select and use appropriate PPE for different scenarios",
        "Respond effectively to electrical emergencies",
        "Implement proper fire safety measures"
      ]}
    >
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-[#151812]">
          <TabsTrigger 
            value="content" 
            className="flex items-center gap-2 data-[state=active]:bg-[#FFC900] data-[state=active]:text-[#151812]"
          >
            <BookText className="h-4 w-4" />
            Learning Content
          </TabsTrigger>
          <TabsTrigger 
            value="quiz" 
            className="flex items-center gap-2 data-[state=active]:bg-[#FFC900] data-[state=active]:text-[#151812]"
          >
            <FileQuestion className="h-4 w-4" />
            Unit Quiz
          </TabsTrigger>
        </TabsList>
        <TabsContent value="content" className="mt-4">
          <CourseContentSection content={healthAndSafetyContent} />
        </TabsContent>
        <TabsContent value="quiz" className="mt-4">
          <UnitQuiz 
            unitNumber="201" 
            unitTitle="Health & Safety" 
            questions={healthSafetyQuizQuestions} 
            onComplete={handleQuizComplete}
          />
        </TabsContent>
      </Tabs>
    </UnitPage>
  );
};

export default Unit201Page;
