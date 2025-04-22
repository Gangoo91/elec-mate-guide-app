
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import BackButton from "@/components/navigation/BackButton";
import MainLayout from "@/components/layout/MainLayout";
import InteractiveQuiz from "@/components/study/InteractiveQuiz";
import CourseContentSection from "@/components/study/CourseContentSection";
import { supabase } from "@/integrations/supabase/client";
import LoadingSpinner from "@/components/LoadingSpinner";
import { BookOpen, ListCheck, ListOrdered, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
  const [error, setError] = useState<string | null>(null);
  const [selectedContent, setSelectedContent] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch interactive content (quizzes)
        const { data: quizData, error: quizError } = await supabase
          .from('interactive_content')
          .select('*')
          .eq('unit_id', unitNumber);
          
        if (quizError) {
          console.error('Error fetching interactive content:', quizError);
          throw new Error(quizError.message);
        }

        // Fetch course content
        const { data: contentData, error: contentError } = await supabase
          .from('course_content')
          .select('*')
          .eq('unit_id', unitNumber)
          .order('order_index');

        if (contentError) {
          console.error('Error fetching course content:', contentError);
          throw new Error(contentError.message);
        }

        setInteractiveContent(quizData || []);
        setCourseContent(contentData || []);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error instanceof Error ? error.message : 'An unknown error occurred');
        toast({
          title: "Failed to load content",
          description: "There was a problem loading the content. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [unitNumber, toast]);

  const handleContentSelect = (value: string) => {
    setSelectedContent(value === selectedContent ? null : value);
  };

  if (error) {
    return (
      <MainLayout>
        <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
          <div className="mb-4">
            <BackButton />
          </div>
          
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="flex flex-col items-center justify-center p-6 text-center">
              <AlertCircle className="h-12 w-12 text-red-400 mb-4" />
              <h2 className="text-xl font-bold text-[#FFC900] mb-2">Content Unavailable</h2>
              <p className="text-[#FFC900]/70">
                {error}. Please try again later or contact support.
              </p>
            </CardContent>
          </Card>
        </div>
      </MainLayout>
    );
  }

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
                {loading ? (
                  <div className="flex justify-center py-8">
                    <LoadingSpinner />
                  </div>
                ) : content.length > 0 ? (
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
                ) : (
                  <div className="p-4 text-center text-[#FFC900]/50">
                    No content available for this unit.
                  </div>
                )}
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
                {loading ? (
                  <div className="flex justify-center py-8">
                    <LoadingSpinner />
                  </div>
                ) : learningOutcomes.length > 0 ? (
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
                ) : (
                  <div className="p-4 text-center text-[#FFC900]/50">
                    No learning outcomes available for this unit.
                  </div>
                )}
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
              {interactiveContent.length > 0 ? (
                interactiveContent.map((content) => (
                  <div key={content.id}>
                    {content.content_type === 'quiz' && (
                      <InteractiveQuiz
                        contentId={content.id}
                        title={content.title}
                        questions={content.content.questions}
                      />
                    )}
                  </div>
                ))
              ) : (
                <Card className="bg-[#22251e] border-[#FFC900]/20">
                  <CardContent className="p-6 text-center">
                    <p className="text-[#FFC900]/70">No interactive content available for this unit yet.</p>
                  </CardContent>
                </Card>
              )}
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default UnitPage;
