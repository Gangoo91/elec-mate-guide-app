
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { BookOpen, CheckCircle } from "lucide-react";
import SectionGroup from "@/components/units/level3/SectionGroup";
import { SafetyQuiz } from "@/components/units/SafetyQuiz";
import { electricalMaintenanceQuestions } from "@/data/moet/electricalMaintenanceQuestions";

const ElectricalMaintenancePage = () => {
  const navigate = useNavigate();
  const [showAssessment, setShowAssessment] = useState<boolean>(false);
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-skills');
  };

  const handleStudy = (sectionId: string) => {
    navigate(`/apprentices/study-materials/city-guilds/moet/core-skills/electrical-maintenance/${sectionId}`);
  };

  const handleTakeAssessment = () => {
    setShowAssessment(true);
    window.scrollTo(0, 0);
  };

  // Section data structured like other MOET units
  const sectionGroups = [
    {
      number: "1",
      title: "Scheduled Maintenance Programs",
      sections: [
        {
          id: "1.1",
          title: "Maintenance Schedules",
          description: "Planning and executing effective electrical maintenance schedules"
        },
        {
          id: "1.2",
          title: "Planning and Implementation",
          description: "Developing comprehensive maintenance plans"
        },
        {
          id: "1.3",
          title: "Condition Monitoring",
          description: "Techniques for ongoing system condition assessment"
        }
      ]
    },
    {
      number: "2",
      title: "Equipment Testing Procedures",
      sections: [
        {
          id: "2.1",
          title: "Key Testing Methods",
          description: "Essential testing procedures for electrical equipment"
        },
        {
          id: "2.2",
          title: "Insulation Testing",
          description: "Methods for evaluating insulation integrity"
        },
        {
          id: "2.3",
          title: "Protective Device Testing",
          description: "Verifying operation of protective equipment"
        }
      ]
    },
    {
      number: "3",
      title: "Documentation Systems",
      sections: [
        {
          id: "3.1",
          title: "Record Keeping",
          description: "Essential documentation practices for maintenance activities"
        },
        {
          id: "3.2",
          title: "Computerized Maintenance Management",
          description: "Digital systems for maintenance planning and tracking"
        },
        {
          id: "3.3",
          title: "Documentation Standards",
          description: "Industry standards for maintenance documentation"
        }
      ]
    },
    {
      number: "4",
      title: "Predictive Maintenance Techniques",
      sections: [
        {
          id: "4.1",
          title: "Data-Driven Maintenance",
          description: "Using analytics to predict maintenance needs"
        },
        {
          id: "4.2",
          title: "Advanced Monitoring Techniques",
          description: "Specialized methods for system monitoring"
        },
        {
          id: "4.3",
          title: "AI and Machine Learning Applications",
          description: "Modern approaches to predictive maintenance"
        }
      ]
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title="Electrical Maintenance"
          description="Preventative maintenance techniques and best practices"
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
            <h2 className="text-2xl font-semibold text-[#FFC900] mb-6">Electrical Maintenance Assessment</h2>
            <p className="text-[#FFC900]/80 mb-6">
              Test your understanding of electrical maintenance concepts and practices with this assessment.
              Answer the questions based on the material covered in the previous sections.
            </p>
            <SafetyQuiz 
              unitId="electrical-maintenance" 
              timeLimit={600}
              questions={electricalMaintenanceQuestions}
              questionsToShow={10}
            />
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default ElectricalMaintenancePage;
