
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { FormativeAssessment } from "@/components/units/FormativeAssessment";
import { unit302Questions } from "@/data/units/sections/unit302/questions/electricalScienceQuestions";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";

const Level3Unit302AssessmentPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [progress, setProgress] = useState(0);
  
  // Add custom back navigation function
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/level-3/302');
  };

  // To simulate loading progress
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(100);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    // Show toast when page loads
    toast({
      title: "Assessment Loaded",
      description: "10 random questions have been selected from the question bank.",
    });
  }, [toast]);

  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title="Unit 302: Principles of Electrical Science - Assessment"
          description="Test your knowledge of electrical principles with this formative assessment"
          customBackAction={handleBackClick}
        />
        
        {progress < 100 ? (
          <div className="py-12">
            <p className="text-[#FFC900]/80 mb-4 text-center">Loading assessment questions...</p>
            <Progress value={progress} className="w-full mx-auto max-w-md" />
          </div>
        ) : (
          <>
            <div className="mb-6">
              <div className="flex items-center gap-2 text-[#FFC900]/80">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex items-center gap-2 border-[#FFC900]/30 text-[#FFC900] hover:bg-[#353a2c]"
                  onClick={handleBackClick}
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Unit 302
                </Button>
                <span className="ml-2">|</span>
                <span>10 questions selected from a pool of 50</span>
              </div>
            </div>
            
            <div className="bg-[#22251e] border border-[#FFC900]/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-[#FFC900] mb-4">Unit 302 Assessment</h2>
              
              <p className="text-[#FFC900]/80 mb-6">
                This assessment tests your understanding of electrical science principles including Ohm's Law,
                electromagnetic effects, AC/DC theory, capacitance, inductance, and power calculations.
                Select the best answer for each question.
              </p>
              
              <FormativeAssessment 
                questions={unit302Questions}
                questionsToShow={10} 
                unitId="302"
              />
            </div>
          </>
        )}
      </div>
    </MainLayout>
  );
};

export default Level3Unit302AssessmentPage;
