
import React from 'react';
import SolarContentLayout from '@/components/solar/SolarContentLayout';
import ResourceCard from '@/components/shared/ResourceCard';
import { ClipboardList, FileText, Book } from 'lucide-react';

const StructuralAssessmentPage = () => {
  const sections = [
    {
      title: "Assessment Overview",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ResourceCard
            title="Roof Evaluation"
            description="Learn how to assess roof condition and materials"
            icon={<ClipboardList className="h-6 w-6 text-[#FFC900]" />}
            fullCardLink="/electricians/solar-pv-installation/installation-process/site-assessment/structural/roof-evaluation"
          />
          <ResourceCard
            title="Load Analysis"
            description="Calculate and analyze structural loads"
            icon={<FileText className="h-6 w-6 text-[#FFC900]" />}
            fullCardLink="/electricians/solar-pv-installation/installation-process/site-assessment/structural/load-analysis"
          />
          <ResourceCard
            title="Support Structure"
            description="Evaluate and document structural support systems"
            icon={<Book className="h-6 w-6 text-[#FFC900]" />}
            fullCardLink="/electricians/solar-pv-installation/installation-process/site-assessment/structural/support-structure"
          />
        </div>
      )
    }
  ];

  return (
    <SolarContentLayout
      title="Structural Assessment"
      description="Detailed guide to evaluating structural integrity for solar PV installations."
      sections={sections}
    />
  );
};

export default StructuralAssessmentPage;
