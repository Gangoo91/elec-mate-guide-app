
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import sections305 from '@/data/units/sections/unit305';

const Level3Unit305Page = () => {
  const navigate = useNavigate();
  
  // Add custom back navigation function
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/level-3/core-units');
  };

  // Study function
  const handleStudy = (sectionId: string) => {
    navigate(`/apprentices/study-materials/city-guilds/level-3/305/${sectionId}`);
  };

  // Take quiz function
  const handleTakeQuiz = () => {
    navigate('/apprentices/study-materials/city-guilds/level-3/305/assessment');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title="Unit 305: Electrical Systems Design"
          description="Learn how to design, plan and specify electrical systems for various types of buildings and installations"
          customBackAction={handleBackClick}
        />
        
        {/* Unit Overview */}
        <div className="mt-8 bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-[#FFC900] mb-4">Unit Overview</h3>
          <p className="text-[#FFC900]/80 mb-4">
            This unit covers the principles and practices of electrical systems design for domestic, 
            commercial, and industrial installations. You will learn how to select appropriate equipment, 
            design efficient circuits, and ensure compliance with BS 7671 regulations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-[#2a2d24] p-4 rounded-md">
              <h4 className="text-[#FFC900] font-medium mb-2">Learning Outcomes</h4>
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/80">
                <li>Understand how to design electrical installations</li>
                <li>Learn circuit design methodologies</li>
                <li>Apply protection methods to electrical systems</li>
                <li>Master earthing and bonding requirements</li>
              </ul>
            </div>
            <div className="bg-[#2a2d24] p-4 rounded-md">
              <h4 className="text-[#FFC900] font-medium mb-2">Assessment Method</h4>
              <p className="text-[#FFC900]/80">
                This unit is assessed through a combination of:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-[#FFC900]/80 mt-2">
                <li>Online multiple-choice assessment</li>
                <li>Practical design project</li>
                <li>Written examination</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 space-y-4">
          <h3 className="text-xl font-semibold text-[#FFC900] mb-4">Learning Sections</h3>
          
          {Object.entries(sections305).map(([sectionId, section]) => (
            <Card key={sectionId} className="bg-[#2a2d24] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-200">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <div className="w-8 h-8 rounded-full bg-[#353a2c] flex items-center justify-center text-[#FFC900]">
                        {sectionId.replace('.', '')}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-[#FFC900] font-medium text-lg mb-1">{section.title}</h4>
                      <p className="text-[#FFC900]/70 text-sm">{section.description}</p>
                    </div>
                  </div>
                  <Button 
                    onClick={() => handleStudy(sectionId)}
                    className="bg-[#FFC900] text-[#151812] hover:bg-[#e5b700]"
                  >
                    Study
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
          
          {/* Unit Quiz Button */}
          <div className="mt-12">
            <Button 
              className="w-full py-6 bg-[#FFC900] hover:bg-[#e5b700] text-[#22251e] font-semibold text-lg"
              onClick={handleTakeQuiz}
            >
              <CheckCircle className="h-5 w-5 mr-2" />
              Take Unit 305 Assessment
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Level3Unit305Page;
