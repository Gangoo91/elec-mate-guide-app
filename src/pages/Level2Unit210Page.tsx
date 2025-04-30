
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { unit210 } from '@/data/units/unit210';
import { sections210 } from '@/data/units/sections/unit210/sections';
import { BookOpen, CheckCircle, ArrowRight, ListOrdered } from "lucide-react";
import SectionCard from "@/components/units/SectionCard";
import { ContentSection } from "@/components/units/ContentSection";

const Level2Unit210Page = () => {
  const navigate = useNavigate();
  
  const handleSectionClick = (sectionId: string) => {
    navigate(`/apprentices/study-materials/city-guilds/level-2/core-units/210/${sectionId}`);
  };
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/level-2/core-units');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title={`Unit 210 - ${unit210.title}`}
          description={unit210.description || ''}
          customBackAction={handleBackClick}
        />
        
        <Tabs defaultValue="overview" className="mt-6">
          <TabsList className="bg-[#22251e] border-b border-[#FFC900]/20 w-full justify-start mb-6 rounded-none p-0">
            <TabsTrigger 
              value="overview" 
              className="data-[state=active]:bg-transparent data-[state=active]:text-[#FFC900] rounded-none border-b-2 border-transparent data-[state=active]:border-[#FFC900] px-4 py-3"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger 
              value="sections" 
              className="data-[state=active]:bg-transparent data-[state=active]:text-[#FFC900] rounded-none border-b-2 border-transparent data-[state=active]:border-[#FFC900] px-4 py-3"
            >
              Study Sections
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Card className="bg-[#22251e] border-[#FFC900]/20 h-full">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-medium text-[#FFC900] flex items-center gap-2 mb-4">
                      <BookOpen className="h-5 w-5" /> Unit Overview
                    </h3>
                    <p className="text-[#FFC900]/80 mb-4">
                      This unit focuses on developing effective communication skills for electrical workers. Good communication is essential for safe, efficient work and professional development.
                    </p>
                    <p className="text-[#FFC900]/80 mb-4">
                      You'll learn how to communicate effectively with customers, colleagues, and other trades, as well as how to produce clear written documentation.
                    </p>
                    <h4 className="text-[#FFC900] font-medium mt-6 mb-3">Key Learning Outcomes</h4>
                    <ul className="list-disc pl-5 text-[#FFC900]/80 space-y-2">
                      <li>Understand why good communication matters in the electrical trade</li>
                      <li>Learn how to communicate effectively with customers</li>
                      <li>Develop skills for working efficiently in teams</li>
                      <li>Create clear written documentation for electrical work</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <Card className="bg-[#22251e] border-[#FFC900]/20 h-full">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-medium text-[#FFC900] flex items-center gap-2 mb-4">
                      <ListOrdered className="h-5 w-5" /> Study Path
                    </h3>
                    <div className="space-y-4">
                      {Object.keys(sections210).map((sectionId, index) => {
                        const section = sections210[sectionId];
                        return (
                          <div key={sectionId} className="flex items-start gap-3">
                            <div className="mt-1">
                              <div className="w-8 h-8 rounded-full bg-[#353a2c] flex items-center justify-center text-[#FFC900]">
                                {index + 1}
                              </div>
                            </div>
                            <div>
                              <h4 className="text-[#FFC900] font-medium mb-1">{section.title}</h4>
                              <p className="text-[#FFC900]/70 text-sm">{section.description || "Learn essential communication principles for electrical work"}</p>
                            </div>
                          </div>
                        );
                      })}
                      
                      <div className="pt-4 mt-4 border-t border-[#FFC900]/20">
                        <Button
                          className="bg-[#FFC900] text-[#151812] hover:bg-[#e5b700] w-full"
                          onClick={() => navigate('/apprentices/study-materials/city-guilds/level-2/core-units/210/1.1')}
                        >
                          Start Learning <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <Card className="bg-[#22251e] border-[#FFC900]/20 mt-6">
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium text-[#FFC900] mb-4">Unit Content</h3>
                
                <div className="space-y-6">
                  {unit210.sections.map((section, index) => (
                    <ContentSection 
                      key={index}
                      title={section.title}
                      content={section.content}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="sections" className="mt-0">
            <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-6">
                <BookOpen className="text-[#FFC900] h-5 w-5" />
                <h3 className="text-[#FFC900] font-medium text-xl">Section 1: Communication Skills</h3>
              </div>
              
              <div className="space-y-4">
                {Object.entries(sections210).map(([sectionId, section]) => (
                  <Card key={sectionId} className="bg-[#2a2d24] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-200">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div className="flex items-start gap-3">
                          <div className="mt-1">
                            <div className="w-8 h-8 rounded-full bg-[#353a2c] flex items-center justify-center text-[#FFC900]">
                              {sectionId}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-[#FFC900] font-medium text-lg mb-1">{section.title}</h4>
                            <p className="text-[#FFC900]/70 text-sm">{section.description || "Learn about communication principles and practices"}</p>
                          </div>
                        </div>
                        <Button 
                          onClick={() => handleSectionClick(sectionId)}
                          className="bg-[#FFC900] text-[#151812] hover:bg-[#e5b700]"
                        >
                          Study
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 p-4 bg-[#353a2c] rounded-lg border border-[#FFC900]/20">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-[#FFC900] h-5 w-5" />
                  <span className="text-[#FFC900]">Ready to test your knowledge?</span>
                </div>
                <Button
                  className="bg-[#FFC900] text-[#151812] hover:bg-[#e5b700] w-full md:w-auto"
                  onClick={() => navigate('/apprentices/study-materials/city-guilds/level-2/core-units/210/1.4')}
                >
                  Take Unit Quiz
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Level2Unit210Page;
