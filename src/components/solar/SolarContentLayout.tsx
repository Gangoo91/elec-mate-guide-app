import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
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
  const location = useLocation();

  const handleBackNavigation = () => {
    if (location.pathname.includes('/physical-installation/')) {
      navigate('/electricians/solar-pv-installation/installation-process/physical-installation');
    } else if (location.pathname.includes('/site-assessment/')) {
      navigate('/electricians/solar-pv-installation/installation-process/site-assessment');
    } else if (location.pathname.includes('/installation-process/')) {
      navigate('/electricians/solar-pv-installation/installation-process');
    } else {
      navigate('/electricians/solar-pv-installation');
    }
  };

  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
        <PageHeader 
          title={title}
          description={description}
          hideBackButton={false}
          customBackAction={handleBackNavigation}
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
