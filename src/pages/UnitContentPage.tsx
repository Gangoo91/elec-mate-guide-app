
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { ContentSection } from "@/components/units/ContentSection";
import { unitContent } from "@/data/unitContent";
import { Progress } from "@/components/ui/progress";

const UnitContentPage = () => {
  const navigate = useNavigate();
  const { unitId } = useParams<{ unitId: string }>();
  const [progress, setProgress] = useState(0);
  
  const currentUnit = unitContent[unitId || ""];
  
  // Simulate progress tracking
  useEffect(() => {
    if (currentUnit) {
      // Start with some progress to show the user they've begun
      setProgress(10);
      
      // Simulate progress increasing as user scrolls
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const calculatedProgress = Math.min(100, Math.max(10, (scrollPosition / maxScroll) * 100));
        setProgress(calculatedProgress);
      };
      
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [currentUnit]);
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/level-2/core-units');
  };

  if (!currentUnit) {
    return (
      <MainLayout>
        <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
          <PageHeader 
            title="Unit Not Found"
            description="Sorry, we couldn't find content for this unit"
            customBackAction={handleBackClick}
          />
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title={`Unit ${unitId} - ${currentUnit.title}`}
          description={currentUnit.description}
          customBackAction={handleBackClick}
        />
        
        {/* Progress tracking */}
        <div className="mt-2 mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-[#FFC900]/70">Your progress</span>
            <span className="text-sm font-medium text-[#FFC900]">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2 bg-[#2a2d24]" />
        </div>
        
        <div className="mt-8">
          {currentUnit.sections.map((section, index) => (
            <ContentSection 
              key={index} 
              title={section.title} 
              content={section.content} 
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default UnitContentPage;
