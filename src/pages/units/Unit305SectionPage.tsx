
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { unit305sections } from "@/data/units/sections/unit305Sections";
import { ContentSection } from "@/components/units/ContentSection";
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger 
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import SectionGroup from "@/components/units/level3/SectionGroup";

const Unit305SectionPage = () => {
  const { sectionId } = useParams<{ sectionId: string }>();
  const navigate = useNavigate();
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  
  // Find the section content
  const sectionContent = unit305sections.find(section => section.id === sectionId);
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/level-3/305');
  };

  const toggleSection = (index: number) => {
    setOpenSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleStudyClick = (subsectionId: string) => {
    // This function would be used if we had sub-sections to navigate to
    console.log(`Navigate to subsection: ${subsectionId}`);
  };

  if (!sectionContent) {
    return (
      <MainLayout>
        <div className="container px-4 py-8">
          <PageHeader 
            title="Section Not Found" 
            description="The requested section could not be found."
            customBackAction={handleBackClick}
          />
          <div className="bg-[#22251e] border-[#FFC900]/20 border rounded-lg p-6">
            <p className="text-[#FFC900]/80">
              Please return to the Unit 305 main page and select a valid section.
            </p>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title={`Unit 305: ${sectionContent.title}`}
          description={sectionContent.description}
          customBackAction={handleBackClick}
        />
        
        <div className="bg-[#22251e] border-[#FFC900]/20 border rounded-lg p-6 mb-6">
          <h2 className="text-xl font-medium text-[#FFC900] mb-4">Study Content</h2>
          <p className="text-[#FFC900]/80 mb-4">
            This section covers key aspects of {sectionContent.title.toLowerCase()}. 
            Expand each topic below to study the content in detail.
          </p>
        </div>
        
        {sectionContent.content.map((item, index) => (
          <Collapsible 
            key={index}
            open={openSections[index]} 
            onOpenChange={() => toggleSection(index)}
            className="mb-4 bg-[#22251e] border border-[#FFC900]/20 rounded-lg overflow-hidden"
          >
            <CollapsibleTrigger asChild>
              <Button 
                variant="ghost" 
                className="w-full flex items-center justify-between p-4 text-left hover:bg-[#32352b]"
              >
                <span className="text-[#FFC900] text-lg font-medium">{item.title}</span>
                <ChevronDown 
                  className={`h-5 w-5 text-[#FFC900] transition-transform duration-200 ${openSections[index] ? 'rotate-180' : ''}`} 
                />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="p-6 border-t border-[#FFC900]/20">
              <div className="text-[#FFC900]/80">
                {item.content}
              </div>
            </CollapsibleContent>
          </Collapsible>
        ))}
        
        <div className="mt-8 flex justify-between">
          <Button
            onClick={handleBackClick}
            className="bg-[#22251e] border-[#FFC900]/30 text-[#FFC900] hover:bg-[#353a2c] border px-4 py-2 rounded"
          >
            Back to Unit Overview
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Unit305SectionPage;
