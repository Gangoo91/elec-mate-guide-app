
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import PageHeader from '@/components/layout/PageHeader';
import BackButton from '@/components/navigation/BackButton';
import { Card, CardContent } from '@/components/ui/card';
import { ListChecks, BookText } from 'lucide-react';
import { useErrorHandler } from '@/hooks/useErrorHandler';

interface UnitPageProps {
  unitNumber: string;
  title: string;
  description: string;
  content: string[];
  learningOutcomes: string[];
  children?: React.ReactNode;
}

const UnitPage = ({ 
  unitNumber, 
  title, 
  description, 
  content, 
  learningOutcomes,
  children 
}: UnitPageProps) => {
  const { handleError } = useErrorHandler();

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

        <div className="space-y-8 max-w-4xl mx-auto">
          {/* Unit Summary */}
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-[#FFC900] flex items-center mb-3">
                    <BookText className="mr-2 h-5 w-5" />
                    Content Overview
                  </h3>
                  <ul className="space-y-2">
                    {content.map((item, index) => (
                      <li key={index} className="text-[#FFC900]/70 flex items-start gap-2">
                        <span className="min-w-1.5 h-1.5 rounded-full bg-[#FFC900]/70 mt-2"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium text-[#FFC900] flex items-center mb-3">
                    <ListChecks className="mr-2 h-5 w-5" />
                    Learning Outcomes
                  </h3>
                  <ul className="space-y-2">
                    {learningOutcomes.map((outcome, index) => (
                      <li key={index} className="text-[#FFC900]/70 flex items-start gap-2">
                        <span className="min-w-1.5 h-1.5 rounded-full bg-[#FFC900]/70 mt-2"></span>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Unit Content */}
          {children && (
            <Card className="bg-[#22251e] border-[#FFC900]/20">
              <CardContent className="p-6">
                {children}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default UnitPage;
