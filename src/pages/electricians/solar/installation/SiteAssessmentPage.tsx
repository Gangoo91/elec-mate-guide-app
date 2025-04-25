
import React from 'react';
import SolarContentLayout from '@/components/solar/SolarContentLayout';
import ResourceCard from '@/components/shared/ResourceCard';
import { ClipboardList, Sun, Search } from 'lucide-react';

const SiteAssessmentPage = () => {
  const sections = [
    {
      title: "Structural Assessment",
      description: "Learn how to evaluate roof conditions, load-bearing capacity, and structural integrity for solar installations.",
      icon: <ClipboardList className="h-6 w-6 text-[#FFC900]" />,
      path: "/electricians/solar-pv-installation/installation-process/site-assessment/structural"
    },
    {
      title: "Solar Resource Analysis",
      description: "Master the techniques for analyzing solar exposure, shading, and optimal panel positioning.",
      icon: <Sun className="h-6 w-6 text-[#FFC900]" />,
      path: "/electricians/solar-pv-installation/installation-process/site-assessment/solar-resource"
    },
    {
      title: "Site Survey",
      description: "Comprehensive guide to conducting thorough site surveys and documenting key installation factors.",
      icon: <Search className="h-6 w-6 text-[#FFC900]" />,
      path: "/electricians/solar-pv-installation/installation-process/site-assessment/survey"
    }
  ];

  return (
    <SolarContentLayout
      title="Site Assessment"
      description="Comprehensive guide to conducting thorough site assessments for solar PV installations."
      sections={[
        {
          title: "Assessment Components",
          content: (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sections.map((section, index) => (
                <ResourceCard
                  key={index}
                  title={section.title}
                  description={section.description}
                  icon={section.icon}
                  fullCardLink={section.path}
                />
              ))}
            </div>
          )
        }
      ]}
    />
  );
};

export default SiteAssessmentPage;
