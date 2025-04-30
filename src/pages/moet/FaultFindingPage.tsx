
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import SectionGroup from "@/components/units/level3/SectionGroup";
import { SafetyQuiz } from "@/components/units/SafetyQuiz";
import { faultFindingQuestions } from "@/data/moet/faultFindingSections";

const FaultFindingPage = () => {
  const navigate = useNavigate();
  const [showAssessment, setShowAssessment] = useState<boolean>(false);
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-skills');
  };

  const handleStudy = (sectionId: string) => {
    navigate(`/apprentices/study-materials/city-guilds/moet/core-skills/fault-finding/${sectionId}`);
  };

  const handleTakeAssessment = () => {
    setShowAssessment(true);
    window.scrollTo(0, 0);
  };

  // Section data structured like other MOET units
  const sectionGroups = [
    {
      number: "1",
      title: "Systematic Troubleshooting Methods",
      sections: [
        {
          id: "1.1",
          title: "Systematic Fault Diagnosis",
          description: "Logical steps for identifying and resolving electrical faults"
        },
        {
          id: "1.2",
          title: "Five-Step Diagnosis Method",
          description: "Industry standard approach to fault finding"
        },
        {
          id: "1.3",
          title: "Split-Half Method",
          description: "Efficient troubleshooting technique for complex systems"
        }
      ]
    },
    {
      number: "2",
      title: "Test Equipment Usage",
      sections: [
        {
          id: "2.1",
          title: "Digital Multimeter Applications",
          description: "Essential testing procedures using multimeters"
        },
        {
          id: "2.2",
          title: "Oscilloscopes and Signal Analysis",
          description: "Waveform visualization and interpretation"
        },
        {
          id: "2.3",
          title: "Specialized Test Equipment",
          description: "Advanced diagnostic tools for specific applications"
        }
      ]
    },
    {
      number: "3",
      title: "Common Fault Patterns",
      sections: [
        {
          id: "3.1",
          title: "Open Circuit Faults",
          description: "Diagnosing breaks in electrical paths"
        },
        {
          id: "3.2",
          title: "Short Circuit Faults",
          description: "Identifying unintended current paths"
        },
        {
          id: "3.3",
          title: "Earth Faults",
          description: "Detecting unintended connections to earth"
        },
        {
          id: "3.4",
          title: "High Resistance Connections",
          description: "Locating and resolving connection issues"
        }
      ]
    },
    {
      number: "4",
      title: "Safety and Documentation",
      sections: [
        {
          id: "4.1",
          title: "Electrical Safety Measures",
          description: "Safety procedures for fault finding activities"
        },
        {
          id: "4.2",
          title: "Documentation and Reporting",
          description: "Recording fault information and solutions"
        }
      ]
    },
    {
      number: "5",
      title: "Case Studies",
      sections: [
        {
          id: "5.1",
          title: "Circuit Breaker Nuisance Tripping",
          description: "Analysis of intermittent circuit breaker issues"
        },
        {
          id: "5.2",
          title: "Motor Failure Analysis",
          description: "Systematic troubleshooting of three-phase motor problems"
        }
      ]
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title="Fault Finding"
          description="Systematic approaches to electrical fault diagnosis and resolution"
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
            <h2 className="text-2xl font-semibold text-[#FFC900] mb-6">Fault Finding Assessment</h2>
            <p className="text-[#FFC900]/80 mb-6">
              Test your understanding of electrical fault diagnosis concepts and techniques with this assessment.
              Answer the questions based on the material covered in the previous sections.
            </p>
            <SafetyQuiz 
              unitId="fault-finding" 
              timeLimit={600}
              questions={faultFindingQuestions}
              questionsToShow={10}
            />
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default FaultFindingPage;
