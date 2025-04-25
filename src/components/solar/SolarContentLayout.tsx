
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { ContentSection } from "@/components/units/ContentSection";

interface SolarContentLayoutProps {
  title: string;
  description: string;
  sections: {
    title: string;
    content: React.ReactNode;
  }[];
}

const SolarContentLayout = ({ title, description, sections }: SolarContentLayoutProps) => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
        <PageHeader 
          title={title}
          description={description}
          hideBackButton={false}
          customBackAction={() => navigate('/electricians/solar-pv-installation')}
        />
        
        <div className="space-y-6 mt-6">
          {sections.map((section, index) => (
            <ContentSection 
              key={index}
              title={section.title}
              content={section.content}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default SolarContentLayout;
