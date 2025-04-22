
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import BackButton from "@/components/navigation/BackButton";
import MainLayout from "@/components/layout/MainLayout";
import InteractiveQuiz from "@/components/study/InteractiveQuiz";
import CourseContentSection from "@/components/study/CourseContentSection";
import { supabase } from "@/integrations/supabase/client";
import LoadingSpinner from "@/components/LoadingSpinner";
import { BookOpen, ListCheck, ListOrdered } from "lucide-react";

interface UnitPageProps {
  unitNumber: string;
  title: string;
  description: string;
  content: string[];
  learningOutcomes: string[];
}

const UnitPage = ({ unitNumber, title, description, content, learningOutcomes }: UnitPageProps) => {
  const [interactiveContent, setInteractiveContent] = useState<any[]>([]);
  const [courseContent, setCourseContent] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedContent, setSelectedContent] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        // Fetch interactive content (quizzes)
        const { data: quizData, error: quizError } = await supabase
          .from('interactive_content')
          .select('*')
          .eq('unit_id', unitNumber);
          
        if (quizError) {
          console.error('Error fetching interactive content:', quizError);
        }

        // Fetch course content
        const { data: contentData, error: contentError } = await supabase
          .from('course_content')
          .select('*')
          .eq('unit_id', unitNumber)
          .order('order_index');

        if (contentError) {
          console.error('Error fetching course content:', contentError);
        }

        setInteractiveContent(quizData || []);
        setCourseContent(contentData || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setLoading(false);
    };

    fetchContent();
  }, [unitNumber]);

  const handleContentSelect = (value: string) => {
    setSelectedContent(value === selectedContent ? null : value);
  };

  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
        <div className="mb-4">
          <BackButton />
        </div>
        
        <div className="grid gap-6 animate-fade-in">
          {/* Unit Overview Card */}
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardHeader>
              <CardTitle className="text-[#FFC900] text-2xl md:text-3xl">{title}</CardTitle>
              <p className="text-[#FFC900]/70 mt-2">{description}</p>
            </CardHeader>
          </Card>

          {/* Interactive Course Content */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Course Content */}
            <Card className="bg-[#22251e] border-[#FFC900]/20">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <ListOrdered className="text-[#FFC900] h-5 w-5" />
                  <CardTitle className="text-[#FFC900] text-xl">Course Content</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <Accordion 
                  type="single" 
                  collapsible 
                  className="w-full"
                  value={selectedContent || ''}
                  onValueChange={handleContentSelect}
                >
                  {content.map((item, index) => {
                    const contentData = courseContent.find(c => c.section_title === item);
                    
                    return (
                      <AccordionItem 
                        key={index} 
                        value={`item-${index}`}
                        className="border-[#FFC900]/20"
                      >
                        <AccordionTrigger className="text-[#FFC900] hover:text-[#FFC900]/90">
                          {item}
                        </AccordionTrigger>
                        <AccordionContent className="text-[#FFC900]/70">
                          {contentData ? (
                            <CourseContentSection content={contentData.content} />
                          ) : (
                            <div className="p-4 text-center text-[#FFC900]/50">
                              Content coming soon...
                            </div>
                          )}
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </CardContent>
            </Card>

            {/* Learning Outcomes */}
            <Card className="bg-[#22251e] border-[#FFC900]/20">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <ListCheck className="text-[#FFC900] h-5 w-5" />
                  <CardTitle className="text-[#FFC900] text-xl">Learning Outcomes</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {learningOutcomes.map((outcome, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`outcome-${index}`}
                      className="border-[#FFC900]/20"
                    >
                      <AccordionTrigger className="text-[#FFC900] hover:text-[#FFC900]/90">
                        Outcome {index + 1}
                      </AccordionTrigger>
                      <AccordionContent className="text-[#FFC900]/70">
                        <div className="p-4">
                          <p>{outcome}</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Interactive Quizzes */}
          {loading ? (
            <div className="flex justify-center p-8">
              <LoadingSpinner />
            </div>
          ) : (
            <div className="space-y-6">
              {interactiveContent.map((content) => (
                <div key={content.id}>
                  {content.content_type === 'quiz' && (
                    <InteractiveQuiz
                      contentId={content.id}
                      title={content.title}
                      questions={content.content.questions}
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default UnitPage;
