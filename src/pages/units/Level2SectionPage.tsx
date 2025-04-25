
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import LessonContent from "@/components/units/LessonContent";
import { sections202 } from "@/data/units/sections/unit202Sections";
import { sections203 } from "@/data/units/sections/unit203Sections";
import { sections204 } from "@/data/units/sections/unit204Sections";
import { sections210 } from "@/data/units/sections/unit210Sections";
import { useToast } from "@/components/ui/use-toast";

interface SectionData {
  title: string;
  description: string;
  content: React.ReactNode;
  detailedContent?: React.ReactNode;
}

const Level2SectionPage = () => {
  const { unitId, sectionId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  console.log("Level2SectionPage - unitId:", unitId);
  console.log("Level2SectionPage - sectionId:", sectionId);
  
  const getSectionContent = () => {
    if (!unitId || !sectionId) return null;
    
    console.log("Looking for section content in unit:", unitId);
    
    switch (unitId) {
      case "202":
        console.log("Available sections in 202:", Object.keys(sections202));
        return sections202[sectionId];
      case "203":
        return sections203[sectionId];
      case "204":
        return sections204[sectionId];
      case "210":
        return sections210[sectionId];
      default:
        console.log("Unit not found:", unitId);
        return null;
    }
  };
  
  const sectionContent = getSectionContent();
  console.log("Section content found:", !!sectionContent);
  
  React.useEffect(() => {
    if (sectionContent) {
      toast({
        title: "Content Loaded",
        description: `Now viewing: ${sectionContent.title}`,
      });
    }
  }, [sectionContent, toast]);
  
  const handleBackClick = () => {
    if (unitId) {
      navigate(`/apprentices/study-materials/city-guilds/level-2/core-units/${unitId}`);
    } else {
      navigate('/apprentices/study-materials/city-guilds/level-2/core-units');
    }
  };

  if (!sectionContent) {
    return (
      <MainLayout>
        <div className="container px-4 py-8">
          <PageHeader 
            title="Section Not Found"
            description="Sorry, we couldn't find the content for this section"
            customBackAction={handleBackClick}
          />
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title={sectionContent.title}
          description={sectionContent.description}
          customBackAction={handleBackClick}
        />
        <div className="mt-8">
          <LessonContent title="Overview">
            {sectionContent.content}
          </LessonContent>
          
          {sectionContent.detailedContent && (
            <LessonContent title="Detailed Learning Material">
              {sectionContent.detailedContent}
            </LessonContent>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Level2SectionPage;
