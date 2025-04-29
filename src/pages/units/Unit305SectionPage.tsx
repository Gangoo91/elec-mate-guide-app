
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { unit305sections } from "@/data/units/sections/unit305Sections";
import { ContentSection } from "@/components/units/ContentSection";

const Unit305SectionPage = () => {
  const { sectionId } = useParams<{ sectionId: string }>();
  const navigate = useNavigate();
  
  // Find the section content
  const sectionContent = unit305sections.find(section => section.id === sectionId);
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/level-3/305');
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
        
        {sectionContent.content.map((item, index) => (
          <ContentSection 
            key={index}
            title={item.title}
            content={item.content}
          />
        ))}
        
        <div className="mt-8 flex justify-between">
          <button
            onClick={handleBackClick}
            className="bg-[#22251e] border-[#FFC900]/30 text-[#FFC900] hover:bg-[#353a2c] border px-4 py-2 rounded"
          >
            Back to Unit Overview
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Unit305SectionPage;
