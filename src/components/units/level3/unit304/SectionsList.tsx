
import React from 'react';
import { ShieldCheck, Shield, Wrench, ListOrdered, ClipboardCheck, Settings } from "lucide-react";
import SectionGroup from "@/components/units/level3/SectionGroup";

interface SectionsListProps {
  handleStudySection: (sectionId: string) => void;
}

const SectionsList: React.FC<SectionsListProps> = ({ handleStudySection }) => {
  const sections = [
    {
      number: "1",
      title: "Initial Verification",
      icon: <ShieldCheck className="h-6 w-6 text-[#FFC900]" />,
      sections: [
        {
          id: "1.1",
          title: "What to check before you power up",
          description: "Ensuring compliance with BS 7671, Part 6 through proper verification.",
        },
        {
          id: "1.2",
          title: "Documentation requirements",
          description: "Understanding the necessary paperwork for installation verification.",
        }
      ]
    },
    {
      number: "2",
      title: "Safe Isolation and Inspection",
      icon: <Shield className="h-6 w-6 text-[#FFC900]" />,
      sections: [
        {
          id: "2.1",
          title: "Correct procedure for safe isolation",
          description: "Step-by-step process for safely isolating electrical installations.",
        },
        {
          id: "2.2",
          title: "Visual inspection procedures",
          description: "Conducting and recording visual inspections before testing.",
        }
      ]
    },
    {
      number: "3",
      title: "Testing Procedures",
      icon: <Wrench className="h-6 w-6 text-[#FFC900]" />,
      sections: [
        {
          id: "3.1",
          title: "Dead Testing",
          description: "Continuity, insulation resistance, and polarity tests.",
        },
        {
          id: "3.2",
          title: "Live Testing",
          description: "Earth fault loop impedance, PFC, and RCD testing.",
        }
      ]
    },
    {
      number: "4",
      title: "Sequence of Testing",
      icon: <ListOrdered className="h-6 w-6 text-[#FFC900]" />,
      sections: [
        {
          id: "4.1",
          title: "Correct testing sequence",
          description: "From visual inspection through to functional testing.",
        }
      ]
    },
    {
      number: "5",
      title: "Certification and Documentation",
      icon: <ClipboardCheck className="h-6 w-6 text-[#FFC900]" />,
      sections: [
        {
          id: "5.1",
          title: "Forms and certificates",
          description: "Completing EICs, Minor Works Certificates, and test schedules.",
        },
        {
          id: "5.2",
          title: "Recording inspection and test results",
          description: "Properly documenting all test findings and observations.",
        }
      ]
    },
    {
      number: "6",
      title: "Commissioning the Installation",
      icon: <Settings className="h-6 w-6 text-[#FFC900]" />,
      sections: [
        {
          id: "6.1",
          title: "Final checks and client handover",
          description: "Functional testing and client instructions.",
        },
        {
          id: "6.2",
          title: "Maintenance requirements",
          description: "Explaining ongoing maintenance needs to clients.",
        }
      ]
    }
  ];

  return (
    <div className="space-y-8 mt-8">
      {sections.map((section) => (
        <div key={section.number} className="bg-[#22251e] rounded-lg p-6 border border-[#FFC900]/20">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-[#353a2c] p-3 rounded-full">
              {section.icon}
            </div>
            <h2 className="text-2xl font-semibold text-[#FFC900]">
              {section.number}. {section.title}
            </h2>
          </div>
          
          <SectionGroup 
            number={section.number}
            title={section.title}
            sections={section.sections}
            onStudy={handleStudySection}
          />
        </div>
      ))}
    </div>
  );
};

export default SectionsList;
