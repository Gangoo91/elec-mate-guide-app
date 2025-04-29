
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import SectionGroup from "@/components/units/level3/SectionGroup";

const Level3Unit303Page = () => {
  const navigate = useNavigate();
  
  // Add custom back navigation function
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/level-3');
  };

  // Study function
  const handleStudy = (sectionId: string) => {
    navigate(`/apprentices/study-materials/city-guilds/level-3/303/${sectionId}`);
  };

  // Take quiz function
  const handleTakeQuiz = () => {
    navigate('/apprentices/study-materials/city-guilds/level-3/303/assessment');
  };

  // Section data
  const sectionGroups = [
    {
      number: "1",
      title: "Types of Electrical Faults",
      sections: [
        {
          id: "1.1",
          title: "Short Circuits",
          description: "Understanding the causes, effects, and diagnosis of live-to-neutral and live-to-earth short circuits"
        },
        {
          id: "1.2",
          title: "Open Circuits",
          description: "Identifying and diagnosing breaks in electrical paths that prevent current flow"
        },
        {
          id: "1.3",
          title: "Earth Faults",
          description: "Recognizing unintentional connections between live conductors and earth"
        },
        {
          id: "1.4",
          title: "Overloads and Equipment Failures",
          description: "Understanding excessive current flow and internal component failures"
        },
        {
          id: "1.5",
          title: "High Resistance Connections",
          description: "Identifying and resolving connections with excessive resistance causing localized heating"
        }
      ]
    },
    {
      number: "2",
      title: "Fault Diagnosis Techniques",
      sections: [
        {
          id: "2.1",
          title: "Systematic Troubleshooting Methods",
          description: "Applying logical step-by-step fault finding processes for electrical systems"
        },
        {
          id: "2.2",
          title: "Using Test Equipment Effectively",
          description: "Proper selection and application of testing instruments for fault diagnosis"
        },
        {
          id: "2.3",
          title: "Interpreting Test Results",
          description: "Understanding and analyzing readings from various electrical testing equipment"
        }
      ]
    },
    {
      number: "3",
      title: "Safe Working Procedures",
      sections: [
        {
          id: "3.1",
          title: "Safe Isolation Process",
          description: "Following mandatory procedures for working safely on electrical systems"
        },
        {
          id: "3.2",
          title: "Risk Assessment",
          description: "Evaluating potential hazards before beginning electrical fault-finding work"
        },
        {
          id: "3.3",
          title: "Circuit Identification and Isolation",
          description: "Ensuring correct circuit identification and safe isolation methods"
        },
        {
          id: "3.4",
          title: "Lock-off Devices and Warning Signs",
          description: "Preventing accidental re-energization of circuits during work"
        }
      ]
    },
    {
      number: "4",
      title: "Recording and Reporting",
      sections: [
        {
          id: "4.1",
          title: "Recording Fault Diagnosis Findings",
          description: "Maintaining accurate records of diagnostic processes and results"
        },
        {
          id: "4.2",
          title: "Completing Required Paperwork",
          description: "Understanding necessary documentation for compliance and record-keeping"
        },
        {
          id: "4.3",
          title: "Communication with Clients and Managers",
          description: "Effectively conveying technical information to non-technical individuals"
        }
      ]
    },
    {
      number: "5",
      title: "Rectification (Fixing Faults)",
      sections: [
        {
          id: "5.1",
          title: "Repair Methods for Different Faults",
          description: "Appropriate techniques for repairing various electrical fault types"
        },
        {
          id: "5.2",
          title: "Post-Rectification Testing",
          description: "Ensuring repairs meet regulatory requirements through proper testing"
        }
      ]
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title="Unit 303: Electrical Installations: Fault Diagnosis and Rectification"
          description="Develop skills in finding and fixing electrical faults using advanced testing equipment and procedures."
          customBackAction={handleBackClick}
        />
        
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
              onClick={handleTakeQuiz}
            >
              <CheckCircle className="h-5 w-5 mr-2" />
              Take Unit 303 Assessment
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Level3Unit303Page;
