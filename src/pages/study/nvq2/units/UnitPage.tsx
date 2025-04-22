
import React from 'react';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import BackButton from "@/components/navigation/BackButton";
import { Card, CardContent } from "@/components/ui/card";

interface UnitPageProps {
  unitNumber: string;
  title: string;
  description: string;
  content: string[];
  learningOutcomes: string[];
}

const UnitPage = ({ unitNumber, title, description, content, learningOutcomes }: UnitPageProps) => {
  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <div className="mb-4">
          <BackButton />
        </div>
        
        <PageHeader 
          title={`Unit ${unitNumber}: ${title}`}
          description={description}
          hideBackButton={true}
        />

        <div className="grid gap-6 animate-fade-in">
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-[#FFC900] mb-4">Course Content</h3>
                  <ul className="space-y-2">
                    {content.map((item, index) => (
                      <li key={index} className="text-[#FFC900]/70 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FFC900]/70"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#FFC900] mb-4">Learning Outcomes</h3>
                  <ul className="space-y-2">
                    {learningOutcomes.map((outcome, index) => (
                      <li key={index} className="text-[#FFC900]/70 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FFC900]/70"></span>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default UnitPage;
