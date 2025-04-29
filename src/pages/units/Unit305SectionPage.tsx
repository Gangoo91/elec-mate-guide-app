
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import sections305 from "@/data/units/sections/unit305";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

const Unit305SectionPage = () => {
  const { sectionId = "" } = useParams<{ sectionId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const sectionKeys = Object.keys(sections305).sort();
  const currentSectionIndex = sectionKeys.indexOf(sectionId);
  const prevSection = currentSectionIndex > 0 ? sectionKeys[currentSectionIndex - 1] : null;
  const nextSection = currentSectionIndex < sectionKeys.length - 1 ? sectionKeys[currentSectionIndex + 1] : null;
  
  const sectionContent = sections305[sectionId];
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/level-3/305');
  };
  
  const navigateToSection = (sectionId: string) => {
    navigate(`/apprentices/study-materials/city-guilds/level-3/305/${sectionId}`);
  };

  const navigateToAssessment = () => {
    navigate('/apprentices/study-materials/city-guilds/level-3/305/assessment');
  };
  
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
          
          <div className="mt-8 pt-8 border-t border-[#FFC900]/20">
            <div className="flex justify-between items-center mb-6">
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

              <Button
                className="bg-[#FFC900] text-[#151812] hover:bg-[#e5b700] flex items-center gap-2"
                onClick={navigateToAssessment}
              >
                <CheckCircle className="h-4 w-4" />
                Take Assessment
              </Button>
              
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

export default Unit305SectionPage;
