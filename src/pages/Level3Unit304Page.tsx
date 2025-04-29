
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Shield, Wrench, FileText, Settings, ClipboardCheck } from "lucide-react";
import SectionGroup from "@/components/units/level3/SectionGroup";
import { unit304 } from "@/data/units/unit304";

const Level3Unit304Page = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/level-3/core-units');
  };

  const handleStudySection = (sectionId: string) => {
    navigate(`/apprentices/study-materials/city-guilds/level-3/304/${sectionId}`);
  };

  const handleAssessmentClick = () => {
    navigate('/apprentices/study-materials/city-guilds/level-3/304/assessment');
  };

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
        }
      ]
    },
    {
      number: "2",
      title: "Safe Isolation and Inspection",
      icon: <Shield className="h-6 w-6 text-[#FFC900]" />,
      sections: [
        {
          id: "1.2",
          title: "Correct procedure for safe isolation",
          description: "Visual inspection procedures and recording results before testing.",
        }
      ]
    },
    {
      number: "3",
      title: "Testing Procedures",
      icon: <Wrench className="h-6 w-6 text-[#FFC900]" />,
      sections: [
        {
          id: "2.1",
          title: "Dead Testing",
          description: "Continuity, insulation resistance, and polarity tests.",
        },
        {
          id: "2.2",
          title: "Live Testing",
          description: "Earth fault loop impedance, PFC, and RCD testing.",
        }
      ]
    },
    {
      number: "4",
      title: "Sequence of Testing",
      icon: <ArrowRight className="h-6 w-6 text-[#FFC900]" />,
      sections: [
        {
          id: "3.1",
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
          id: "3.2",
          title: "Forms and certificates",
          description: "Completing EICs, Minor Works Certificates, and test schedules.",
        }
      ]
    },
    {
      number: "6",
      title: "Commissioning the Installation",
      icon: <Settings className="h-6 w-6 text-[#FFC900]" />,
      sections: [
        {
          id: "3.3",
          title: "Final checks and client handover",
          description: "Functional testing and client instructions.",
        }
      ]
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title={unit304.title} 
          description={unit304.description} 
          customBackAction={handleBackClick}
        />
        
        <Card className="bg-[#22251e] border-[#FFC900]/20 mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-[#FFC900] mb-4">
              Purpose of Unit 304
            </h2>
            <ul className="text-[#FFC900]/80 space-y-2 list-disc list-inside">
              <li>To teach you how to inspect a new or altered installation.</li>
              <li>To teach you how to test it using correct instruments.</li>
              <li>To ensure you can certify that it is safe, legal, and meets BS 7671 Wiring Regulations.</li>
            </ul>
          </CardContent>
        </Card>
        
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
        
        <Card className="bg-[#22251e] border-[#FFC900]/20 mt-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-[#FFC900] mb-4">
              Key Points You Must Remember for Unit 304
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-[#FFC900]/20">
                    <th className="py-3 px-4 text-left text-[#FFC900] font-semibold">Topic</th>
                    <th className="py-3 px-4 text-left text-[#FFC900] font-semibold">Critical Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#FFC900]/20">
                    <td className="py-3 px-4 text-[#FFC900]/80">Dead Testing Order</td>
                    <td className="py-3 px-4 text-[#FFC900]/80">CPC continuity ➔ Ring Continuity ➔ Insulation Resistance ➔ Polarity</td>
                  </tr>
                  <tr className="border-b border-[#FFC900]/20">
                    <td className="py-3 px-4 text-[#FFC900]/80">Live Testing Order</td>
                    <td className="py-3 px-4 text-[#FFC900]/80">Earth Fault Loop ➔ PFC ➔ RCD Trip Testing</td>
                  </tr>
                  <tr className="border-b border-[#FFC900]/20">
                    <td className="py-3 px-4 text-[#FFC900]/80">Isolation</td>
                    <td className="py-3 px-4 text-[#FFC900]/80">Always use approved procedures: test your tester, isolate, test the circuit is dead, re-test your tester</td>
                  </tr>
                  <tr className="border-b border-[#FFC900]/20">
                    <td className="py-3 px-4 text-[#FFC900]/80">Test Instruments</td>
                    <td className="py-3 px-4 text-[#FFC900]/80">Know how to set up, use, and interpret results from Multifunction Tester (MFT)</td>
                  </tr>
                  <tr className="border-b border-[#FFC900]/20">
                    <td className="py-3 px-4 text-[#FFC900]/80">Legal Compliance</td>
                    <td className="py-3 px-4 text-[#FFC900]/80">Must meet BS 7671 Part 6 standards and record accurately</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-[#FFC900]/80">Sequence</td>
                    <td className="py-3 px-4 text-[#FFC900]/80">Visual inspection ➔ Dead testing ➔ Live testing ➔ Functional tests</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
        
        <div className="mt-8 flex justify-center">
          <Button
            variant="outline"
            className="flex items-center gap-2 border-[#FFC900]/30 text-[#FFC900] hover:bg-[#353a2c] px-6 py-3"
            onClick={handleAssessmentClick}
          >
            Take Assessment
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Level3Unit304Page;
