
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import SectionGroup from "@/components/units/level3/SectionGroup";
import { SafetyQuiz } from "@/components/units/SafetyQuiz";
import { safetyAwarenessQuestions } from "@/data/moet/safetyAwarenessSections";
import { Button } from "@/components/ui/button";
import { CheckCircle } from 'lucide-react';

const SafetyAwarenessPage = () => {
  const navigate = useNavigate();
  const [showAssessment, setShowAssessment] = useState<boolean>(false);
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/behaviours');
  };

  const handleStudy = (sectionId: string) => {
    navigate(`/apprentices/study-materials/city-guilds/moet/behaviours/safety-awareness/${sectionId}`);
  };

  const handleTakeAssessment = () => {
    setShowAssessment(true);
    window.scrollTo(0, 0);
  };

  // Section data structured like other MOET units
  const sectionGroups = [
    {
      number: "1",
      title: "Safety Fundamentals",
      sections: [
        {
          id: "1.1",
          title: "Risk Assessment",
          description: "Identifying and evaluating potential hazards"
        },
        {
          id: "1.2",
          title: "PPE Requirements",
          description: "Personal Protective Equipment for electrical work"
        },
        {
          id: "1.3",
          title: "Emergency Procedures",
          description: "Responding to electrical emergencies safely"
        }
      ]
    },
    {
      number: "2",
      title: "Safety Management",
      sections: [
        {
          id: "2.1",
          title: "Safety Leadership",
          description: "Leading by example in safety practices"
        },
        {
          id: "2.2",
          title: "Incident Reporting",
          description: "Proper documentation and analysis of safety incidents"
        },
        {
          id: "2.3",
          title: "Safety Documentation",
          description: "Maintaining proper safety records and documentation"
        }
      ]
    },
    {
      number: "3",
      title: "Safety Implementation",
      sections: [
        {
          id: "3.1",
          title: "Hazard Recognition",
          description: "Identifying electrical hazards in the workplace"
        },
        {
          id: "3.2",
          title: "Lockout/Tagout",
          description: "Safe isolation procedures for electrical work"
        },
        {
          id: "3.3",
          title: "Safety Culture Development",
          description: "Building and sustaining a positive safety culture"
        }
      ]
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title="Safety Awareness"
          description="Building and maintaining a proactive safety culture in electrical work"
          customBackAction={handleBackClick}
        />
        
        {!showAssessment ? (
          <>
            <div className="mt-8 space-y-8">
              {/* Map through section groups */}
              {sectionGroups.map((group) => (
                <SectionGroup
                  key={group.number}
                  number={group.number}
                  title={group.title}
                  sections={group.sections}
                  onStudy={handleStudy}
                />
              ))}
              
              {/* Unit Quiz Button */}
              <div className="mt-12">
                <Button 
                  className="w-full py-6 bg-[#FFC900] hover:bg-[#e5b700] text-[#22251e] font-semibold text-lg"
                  onClick={handleTakeAssessment}
                >
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Test Your Knowledge
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-[#FFC900] mb-6">Safety Awareness Assessment</h2>
            <p className="text-[#FFC900]/80 mb-6">
              Test your understanding of electrical safety awareness with this assessment.
              Answer the questions based on the material covered in the previous sections.
            </p>
            <SafetyQuiz 
              unitId="safety-awareness" 
              timeLimit={600}
              questions={safetyAwarenessQuestions}
              questionsToShow={10}
            />
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default SafetyAwarenessPage;
