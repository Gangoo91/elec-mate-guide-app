
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { unit202 } from '@/data/units/unit202';
import { sections202 } from '@/data/units/sections/unit202Sections';
import { BookOpen, CheckCircle } from "lucide-react";

const Level2Unit202Page = () => {
  const navigate = useNavigate();
  
  const handleSectionClick = (sectionId: string) => {
    navigate(`/apprentices/study-materials/city-guilds/level-2/core-units/202/${sectionId}`);
  };
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/level-2/core-units');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title={`Unit 202 - ${unit202.title}`}
          description={unit202.description || ''}
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8 bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="text-[#FFC900] h-5 w-5" />
            <h3 className="text-[#FFC900] font-medium text-xl">Learning Sections</h3>
          </div>
          
          <div className="space-y-4">
            {Object.entries(sections202).sort().map(([sectionId, section]) => (
              <Card key={sectionId} className="bg-[#2a2d24] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-200">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        <div className="w-8 h-8 rounded-full bg-[#353a2c] flex items-center justify-center text-[#FFC900]">
                          {sectionId.split('.')[1]}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-[#FFC900] font-medium text-lg mb-1">{section.title}</h4>
                        <p className="text-[#FFC900]/70 text-sm">{section.description || 'Learn about electrical principles and applications'}</p>
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
              onClick={() => navigate('/apprentices/study-materials/city-guilds/level-2/core-units/202/1.4')}
            >
              Take Unit Quiz
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Level2Unit202Page;
