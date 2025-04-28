
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FormativeAssessment } from "@/components/units/FormativeAssessment";

// Import all section data
import { sections301 } from "@/data/units/sections/unit301Sections";
import { sections302 } from "@/data/units/sections/unit302Sections";
import { sections303 } from "@/data/units/sections/unit303Sections";
import { sections304 } from "@/data/units/sections/unit304Sections";
import { sections305 } from "@/data/units/sections/unit305Sections";
import { sections308 } from "@/data/units/sections/unit308Sections";

const SectionPage = () => {
  const { unitId = "", sectionId = "" } = useParams<{ unitId: string; sectionId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Select the correct sections data based on the unit ID
  const getSectionsData = () => {
    switch(unitId) {
      case "301": return sections301;
      case "302": return sections302;
      case "303": return sections303;
      case "304": return sections304;
      case "305": return sections305;
      case "308": return sections308;
      default: return {};
    }
  };
  
  const sectionsData = getSectionsData();
  const sectionKeys = Object.keys(sectionsData).sort();
  const currentSectionIndex = sectionKeys.indexOf(sectionId);
  const prevSection = currentSectionIndex > 0 ? sectionKeys[currentSectionIndex - 1] : null;
  const nextSection = currentSectionIndex < sectionKeys.length - 1 ? sectionKeys[currentSectionIndex + 1] : null;
  const sectionContent = sectionsData[sectionId];
  
  // Check if this is the last section in the unit
  const isLastSection = currentSectionIndex === sectionKeys.length - 1;
  
  // Handle back button navigation
  const handleBackClick = () => {
    navigate(`/apprentices/study-materials/city-guilds/level-3/${unitId}`);
  };
  
  // Navigate to another section
  const navigateToSection = (sectionId: string) => {
    navigate(`/apprentices/study-materials/city-guilds/level-3/${unitId}/${sectionId}`);
  };
  
  // Sample assessment questions for each unit
  const getUnitQuestions = () => {
    return [
      {
        question: `This is a sample question for Unit ${unitId}?`,
        options: ["Option A", "Option B", "Option C", "Option D"],
        correctAnswer: "Option B",
        explanation: "This is the explanation for the correct answer."
      },
      {
        question: "Which of the following is a best practice for electrical installations?",
        options: [
          "Ignoring manufacturer guidelines",
          "Following the relevant regulations and standards",
          "Using the cheapest materials available",
          "Skipping testing procedures to save time"
        ],
        correctAnswer: "Following the relevant regulations and standards",
        explanation: "Always following relevant regulations and standards ensures safety and compliance."
      },
      {
        question: "What is an important consideration when working with renewable energy systems?",
        options: [
          "Only the initial cost matters",
          "Efficiency is not important if it looks good",
          "System integration and compatibility",
          "Avoid maintenance whenever possible"
        ],
        correctAnswer: "System integration and compatibility",
        explanation: "System integration and compatibility are crucial for ensuring renewable energy systems work effectively with existing infrastructure."
      }
    ];
  };
  
  // Show toast notification when section changes
  useEffect(() => {
    if (sectionContent) {
      toast({
        title: "Section Loaded",
        description: `Now viewing: ${sectionContent.title}`,
      });
    }
  }, [sectionContent, toast]);

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
          <div className="mb-12">
            {sectionContent.content}
          </div>
          
          {sectionContent.detailedContent && (
            <div className="mt-12 pt-8 border-t border-[#FFC900]/20">
              <h3 className="text-2xl font-semibold text-[#FFC900] mb-6">
                Detailed Learning Materials
              </h3>
              {sectionContent.detailedContent}
            </div>
          )}
          
          <div className="mb-8">
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
          
          {isLastSection && (
            <div className="mt-8 pt-8 border-t border-[#FFC900]/20">
              <h3 className="text-2xl font-semibold text-[#FFC900] mb-6">
                Test Your Knowledge
              </h3>
              <p className="text-[#FFC900]/80 mb-6">
                Now that you've completed all sections of Unit {unitId}, take this quiz to test your understanding of key concepts.
              </p>
              <FormativeAssessment 
                questions={getUnitQuestions()}
                unitId={unitId}
              />
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default SectionPage;
