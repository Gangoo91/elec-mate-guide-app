
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import SectionGroup from "@/components/units/level3/SectionGroup";
import { SafetyQuiz } from "@/components/units/SafetyQuiz";
import { equipmentInstallationQuestions } from "@/data/moet/equipmentInstallationSections";

const EquipmentInstallationPage = () => {
  const navigate = useNavigate();
  const [showAssessment, setShowAssessment] = useState<boolean>(false);
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-skills');
  };

  const handleStudy = (sectionId: string) => {
    navigate(`/apprentices/study-materials/city-guilds/moet/core-skills/equipment-installation/${sectionId}`);
  };

  const handleTakeAssessment = () => {
    setShowAssessment(true);
    window.scrollTo(0, 0);
  };

  // Section data structured like other MOET units
  const sectionGroups = [
    {
      number: "1",
      title: "Planning and Preparation",
      sections: [
        {
          id: "1.1",
          title: "Reading Technical Documentation",
          description: "Interpreting schematics, specifications, and installation manuals"
        },
        {
          id: "1.2",
          title: "Site Surveys and Preparation",
          description: "Evaluating installation environment and preparing work areas"
        }
      ]
    },
    {
      number: "2",
      title: "Installation Techniques",
      sections: [
        {
          id: "2.1",
          title: "Equipment Positioning and Mounting",
          description: "Best practices for securing equipment in various environments"
        },
        {
          id: "2.2",
          title: "Cable Management Systems",
          description: "Organizing and protecting cables in professional installations"
        }
      ]
    },
    {
      number: "3",
      title: "Wiring and Protection",
      sections: [
        {
          id: "3.1",
          title: "Wiring and Connection Techniques",
          description: "Methods for reliable electrical connections"
        },
        {
          id: "3.2",
          title: "Earthing and Bonding",
          description: "Essential safety elements of electrical installations"
        }
      ]
    },
    {
      number: "4",
      title: "Testing and Commissioning",
      sections: [
        {
          id: "4.1",
          title: "Testing Before Energization",
          description: "Verifying safety and compliance before powering up"
        },
        {
          id: "4.2",
          title: "Commissioning Procedures",
          description: "Systematic verification of equipment functionality"
        }
      ]
    },
    {
      number: "5",
      title: "Handover and Maintenance",
      sections: [
        {
          id: "5.1",
          title: "Handover and Documentation",
          description: "Completing and transferring installation records to clients"
        },
        {
          id: "5.2",
          title: "Maintenance Requirements",
          description: "Establishing ongoing care procedures for installed equipment"
        }
      ]
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title="Equipment Installation"
          description="Best practices for electrical equipment installation and commissioning"
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
            <h2 className="text-2xl font-semibold text-[#FFC900] mb-6">Equipment Installation Assessment</h2>
            <p className="text-[#FFC900]/80 mb-6">
              Test your understanding of equipment installation concepts and techniques with this assessment.
              Answer the questions based on the material covered in the previous sections.
            </p>
            <SafetyQuiz 
              unitId="equipment-installation" 
              timeLimit={600}
              questions={equipmentInstallationQuestions}
              questionsToShow={10}
            />
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default EquipmentInstallationPage;
