
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Settings, Clipboard, Activity, ShieldAlert } from "lucide-react";
import SectionContent from "@/components/units/SectionContent";

const AM2CoreUnitsPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/am2');
  };

  const coreUnits = [
    {
      title: "Installation Unit",
      description: "Comprehensive guide to the installation component of the AM2 assessment",
      sections: [
        { title: "Consumer Unit Installation", description: "Step-by-step guide to installing and wiring consumer units to industry standards" },
        { title: "Cable Containment Systems", description: "Methods and techniques for proper cable containment installation" },
        { title: "Circuit Installation", description: "Correct procedures for circuit installation and wiring" },
        { title: "Termination Techniques", description: "Best practices for terminating cables and connections" },
      ],
      icon: <Settings className="h-10 w-10 text-[#FFC900] mb-4" />
    },
    {
      title: "Inspection & Testing Unit",
      description: "Complete guidance for the testing and inspection component",
      sections: [
        { title: "Initial Verification", description: "Procedures for carrying out initial verification of electrical installations" },
        { title: "Continuity Testing", description: "Methods for testing continuity of protective conductors and ring final circuits" },
        { title: "Insulation Resistance", description: "Techniques for measuring insulation resistance correctly" },
        { title: "Documentation", description: "Completing electrical installation certificates and documentation" },
      ],
      icon: <Clipboard className="h-10 w-10 text-[#FFC900] mb-4" />
    },
    {
      title: "Fault Diagnosis Unit",
      description: "Techniques and procedures for identifying and rectifying faults",
      sections: [
        { title: "Systematic Fault Finding", description: "Methodical approaches to identifying electrical faults" },
        { title: "Common Faults", description: "Recognition and diagnosis of common electrical installation faults" },
        { title: "Fault Rectification", description: "Procedures for safely correcting identified faults" },
        { title: "Testing After Repair", description: "Verification procedures following fault rectification" },
      ],
      icon: <Activity className="h-10 w-10 text-[#FFC900] mb-4" />
    },
    {
      title: "Safe Isolation Unit",
      description: "Essential procedures for safely isolating electrical circuits",
      sections: [
        { title: "Safe Isolation Procedure", description: "Step-by-step safe isolation methodology" },
        { title: "Proving Tools", description: "Using and verifying voltage indicators and proving units" },
        { title: "Locking Off", description: "Methods and equipment for securing isolated circuits" },
        { title: "Safety Documentation", description: "Required permits and documentation for safe isolation" },
      ],
      icon: <ShieldAlert className="h-10 w-10 text-[#FFC900] mb-4" />
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="AM2 Core Units"
          description="Comprehensive learning materials for the AM2 assessment core units"
          customBackAction={handleBackClick}
        />
        
        {coreUnits.map((unit, index) => (
          <div key={index} className="mb-10">
            <div className="flex items-start gap-4 mb-6">
              {unit.icon}
              <div>
                <h2 className="text-2xl font-bold text-[#FFC900]">{unit.title}</h2>
                <p className="text-[#FFC900]/70">{unit.description}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {unit.sections.map((section, idx) => (
                <SectionContent
                  key={idx}
                  title={section.title}
                  description={section.description}
                  path={`#`} // Future implementation could link to detailed content
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default AM2CoreUnitsPage;
