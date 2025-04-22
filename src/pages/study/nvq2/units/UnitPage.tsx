
import React, { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import BackButton from "@/components/navigation/BackButton";
import MainLayout from "@/components/layout/MainLayout";
import InteractiveQuiz from "@/components/study/InteractiveQuiz";
import { supabase } from "@/integrations/supabase/client";
import LoadingSpinner from "@/components/LoadingSpinner";

interface UnitPageProps {
  unitNumber: string;
  title: string;
  description: string;
  content: string[];
  learningOutcomes: string[];
}

const UnitPage = ({ unitNumber, title, description, content, learningOutcomes }: UnitPageProps) => {
  const [interactiveContent, setInteractiveContent] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInteractiveContent = async () => {
      const { data, error } = await supabase
        .from('interactive_content')
        .select('*')
        .eq('unit_id', unitNumber);
        
      if (error) {
        console.error('Error fetching interactive content:', error);
      } else {
        setInteractiveContent(data || []);
      }
      setLoading(false);
    };

    fetchInteractiveContent();
  }, [unitNumber]);

  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
        <div className="mb-4">
          <BackButton />
        </div>
        
        <div className="grid gap-6 animate-fade-in">
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-[#FFC900] mb-4">{title}</h3>
                <p className="text-[#FFC900]/70 mb-6">{description}</p>

                <Accordion type="single" collapsible className="w-full space-y-4">
                  <AccordionItem value="course-content" className="border-[#FFC900]/20">
                    <AccordionTrigger className="text-[#FFC900] hover:text-[#FFC900]/90">
                      Course Content
                    </AccordionTrigger>
                    <AccordionContent className="text-[#FFC900]/70 pt-4">
                      <ul className="space-y-4">
                        {content.map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FFC900]/70 mt-2"></span>
                            <span className="flex-1">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="learning-outcomes" className="border-[#FFC900]/20">
                    <AccordionTrigger className="text-[#FFC900] hover:text-[#FFC900]/90">
                      Learning Outcomes
                    </AccordionTrigger>
                    <AccordionContent className="text-[#FFC900]/70 pt-4">
                      <ul className="space-y-4">
                        {learningOutcomes.map((outcome, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FFC900]/70 mt-2"></span>
                            <span className="flex-1">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </CardContent>
          </Card>

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
