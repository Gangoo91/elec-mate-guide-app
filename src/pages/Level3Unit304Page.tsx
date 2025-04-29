
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { unit304 } from "@/data/units/unit304";
import SectionCard from "@/components/units/SectionCard";
import { SafetyQuiz } from "@/components/units/SafetyQuiz";

const Level3Unit304Page = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/level-3/core-units');
  };

  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title={unit304.title} 
          description={unit304.description} 
          customBackAction={handleBackClick}
        />
        
        <div className="space-y-8 mt-8">
          {unit304.sections.map((section, index) => (
            <Card key={index} className="bg-[#22251e] border-[#FFC900]/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium text-[#FFC900] mb-4">
                  {section.title}
                </h3>
                <div>
                  {section.content}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-[#FFC900] mb-4">Unit Assessment</h2>
              <p className="text-[#FFC900]/80 mb-6">
                Test your knowledge of Unit 304 with this comprehensive assessment.
              </p>
              <SafetyQuiz unitId="304" />
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Level3Unit304Page;
