
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { sections303 } from "@/data/units/sections/unit303Sections";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Unit303SectionPage = () => {
  const { sectionId = "" } = useParams<{ sectionId: string }>();
  const navigate = useNavigate();
  
  const sectionKeys = Object.keys(sections303).sort();
  const currentSectionIndex = sectionKeys.indexOf(sectionId);
  const prevSection = currentSectionIndex > 0 ? sectionKeys[currentSectionIndex - 1] : null;
  const nextSection = currentSectionIndex < sectionKeys.length - 1 ? sectionKeys[currentSectionIndex + 1] : null;
  
  const sectionContent = sections303[sectionId];
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/level-3/303');
  };
  
  const navigateToSection = (sectionId: string) => {
    navigate(`/apprentices/study-materials/city-guilds/level-3/303/${sectionId}`);
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
          description={sectionContent.description || ""}
          customBackAction={handleBackClick}
        />
        <div className="mt-8">
          <div className="mb-12 prose prose-invert max-w-none">
            {sectionContent.content}
          </div>
          
          <div className="mb-8 mt-16">
            <div className="flex justify-between items-center">
              <div>
                {prevSection && (
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2 border-[#FFC900]/30 text-[#FFC900] hover:bg-[#353a2c]"
                    onClick={() => navigateToSection(prevSection)}
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Previous Section
                  </Button>
                )}
              </div>
              <div>
                {nextSection && (
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2 border-[#FFC900]/30 text-[#FFC900] hover:bg-[#353a2c]"
                    onClick={() => navigateToSection(nextSection)}
                  >
                    Next Section
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Unit303SectionPage;
