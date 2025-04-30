
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Clipboard } from "lucide-react";

const AssessmentGuidelinesPage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/am2');
  };

  const assessmentAreas = [
    {
      title: "Installation Skills",
      criteria: [
        "Correct interpretation of drawings",
        "Proper installation of enclosures and equipment",
        "Appropriate cable selection and installation",
        "Accurate termination techniques",
        "Correct labeling and identification"
      ]
    },
    {
      title: "Inspection & Testing",
      criteria: [
        "Comprehensive visual inspection",
        "Accurate test instrument usage",
        "Correct testing sequence",
        "Proper recording of results",
        "Accurate result interpretation"
      ]
    },
    {
      title: "Fault Diagnosis",
      criteria: [
        "Systematic approach to fault finding",
        "Proper use of test equipment",
        "Accurate fault identification",
        "Safe and effective repairs",
        "Proper testing after repair"
      ]
    },
    {
      title: "Safe Working",
      criteria: [
        "Correct PPE usage",
        "Proper safe isolation procedures",
        "Clean and tidy work area",
        "Tool and equipment safety",
        "Risk assessment application"
      ]
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="AM2 Assessment Guidelines"
          description="Understand the standards and criteria used to evaluate your performance"
          customBackAction={handleBackClick}
        />
        
        <div className="mb-8">
          <div className="flex items-start gap-4 mb-6">
            <Clipboard className="h-10 w-10 text-[#FFC900]" />
            <div>
              <h2 className="text-2xl font-bold text-[#FFC900]">Assessment Criteria Overview</h2>
              <p className="text-[#FFC900]/70">
                The AM2 assessment evaluates your practical skills and knowledge across multiple competencies.
                Understanding how you'll be assessed helps you prepare effectively and focus on critical areas.
              </p>
            </div>
          </div>
          
          <div className="bg-[#22251e] border-[#FFC900]/20 rounded-lg border p-6 mb-8">
            <h3 className="text-[#FFC900] font-medium text-lg mb-4">General Assessment Information</h3>
            <div className="space-y-4 text-[#FFC900]/70">
              <p>
                <strong className="text-[#FFC900]">Duration:</strong> The AM2 assessment typically takes place over 2-3 days
              </p>
              <p>
                <strong className="text-[#FFC900]">Format:</strong> Practical tasks across multiple assessment areas, including installation, inspection and testing, fault diagnosis, and safe isolation
              </p>
              <p>
                <strong className="text-[#FFC900]">Marking:</strong> Pass/Refer grading based on meeting industry standards and requirements
              </p>
              <p>
                <strong className="text-[#FFC900]">Requirements:</strong> Completion of all tasks within allocated time, meeting quality standards and safety requirements
              </p>
            </div>
          </div>
          
          {assessmentAreas.map((area, index) => (
            <Card key={index} className="bg-[#22251e] border-[#FFC900]/20 mb-6">
              <CardContent className="pt-6">
                <h3 className="text-[#FFC900] font-medium text-xl mb-3">
                  {area.title}
                </h3>
                <div className="bg-[#1a1c16] p-4 rounded-md">
                  <h4 className="text-[#FFC900] font-medium mb-2">Assessment Criteria:</h4>
                  <ul className="list-disc list-inside text-[#FFC900]/70 text-sm space-y-1">
                    {area.criteria.map((criterion, idx) => (
                      <li key={idx}>{criterion}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-[#22251e] border-[#FFC900]/20 rounded-lg border p-6 mt-8">
          <h3 className="text-[#FFC900] font-medium text-lg mb-4">Preparation Tips</h3>
          <ul className="list-disc list-inside text-[#FFC900]/70 space-y-3">
            <li>Review and practice all core skills regularly before the assessment</li>
            <li>Focus on time management during practice sessions</li>
            <li>Ensure you understand the latest BS 7671 regulations</li>
            <li>Practice completing documentation accurately and thoroughly</li>
            <li>Review safe isolation procedures until they become second nature</li>
            <li>Practice fault finding on various circuit types and scenarios</li>
            <li>Ensure your test equipment knowledge is comprehensive</li>
          </ul>
        </div>
      </div>
    </MainLayout>
  );
};

export default AssessmentGuidelinesPage;
