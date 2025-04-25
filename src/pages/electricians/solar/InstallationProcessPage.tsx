
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SolarContentLayout from '@/components/solar/SolarContentLayout';
import ResourceCard from '@/components/shared/ResourceCard';
import { ClipboardList, Lightbulb, Wrench, CheckSquare } from 'lucide-react';

const InstallationProcessPage = () => {
  const navigate = useNavigate();
  
  const sections = [
    {
      title: "Site Assessment",
      description: "Learn how to conduct thorough site assessments including structural evaluation, shading analysis, and site surveys.",
      icon: <ClipboardList className="h-6 w-6" />,
      path: "/electricians/solar-pv-installation/installation-process/site-assessment"
    },
    {
      title: "System Design",
      description: "Master the process of designing solar PV systems, from array layout to electrical specifications.",
      icon: <Lightbulb className="h-6 w-6" />,
      path: "/electricians/solar-pv-installation/installation-process/system-design"
    },
    {
      title: "Physical Installation",
      description: "Step-by-step guide to safely installing solar PV systems on various roof types.",
      icon: <Wrench className="h-6 w-6" />,
      path: "/electricians/solar-pv-installation/installation-process/physical-installation"
    },
    {
      title: "Commissioning",
      description: "Learn the proper procedures for testing, commissioning, and activating solar PV systems.",
      icon: <CheckSquare className="h-6 w-6" />,
      path: "/electricians/solar-pv-installation/installation-process/commissioning"
    }
  ];

  return (
    <SolarContentLayout
      title="Solar PV Installation Process"
      description="Comprehensive guide to the step-by-step process of installing solar photovoltaic systems."
      sections={[
        {
          title: "Installation Process Overview",
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

export default InstallationProcessPage;
