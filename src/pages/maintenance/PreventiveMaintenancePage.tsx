
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import SectionItem from "@/components/units/level3/SectionItem";

const PreventiveMaintenancePage = () => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate('/apprentices/study-materials/city-guilds/moet/core-knowledge/maintenance-practices');
  };

  const handleStudySection = (sectionId: string) => {
    navigate(`/apprentices/study-materials/city-guilds/moet/core-knowledge/maintenance-practices/preventive/${sectionId}`);
  };

  // Define all the sections and subsections
  const sections = [
    {
      id: "1",
      title: "Preventive Maintenance Overview",
      description: "Introduction to preventive maintenance concepts and principles",
      subsections: [
        {
          id: "1.1",
          title: "Key Components of Preventive Maintenance",
          description: "Understanding the fundamental components of an effective maintenance program"
        },
        {
          id: "1.2",
          title: "Benefits of Preventive Maintenance",
          description: "How preventive maintenance improves reliability, safety and reduces costs"
        }
      ]
    },
    {
      id: "2",
      title: "Creating Maintenance Schedules",
      description: "Developing effective maintenance planning systems",
      subsections: [
        {
          id: "2.1",
          title: "Steps to Create a Maintenance Schedule",
          description: "Methodical approach to planning maintenance activities"
        },
        {
          id: "2.2",
          title: "Common Maintenance Frequencies",
          description: "Understanding daily, weekly, monthly and annual maintenance tasks"
        }
      ]
    },
    {
      id: "3",
      title: "Maintenance Documentation",
      description: "Record-keeping and documentation processes",
      subsections: [
        {
          id: "3.1",
          title: "Essential Documentation Elements",
          description: "Key components of maintenance records and their importance"
        },
        {
          id: "3.2",
          title: "Computerized Maintenance Management Systems",
          description: "Using CMMS software to manage maintenance activities"
        }
      ]
    },
    {
      id: "4",
      title: "Advanced Maintenance Strategies",
      description: "Beyond basic preventive maintenance",
      subsections: [
        {
          id: "4.1",
          title: "Predictive Maintenance",
          description: "Using condition monitoring to optimize maintenance timing"
        },
        {
          id: "4.2",
          title: "Reliability-Centered Maintenance",
          description: "Structured approach to maintenance based on failure modes"
        }
      ]
    },
    {
      id: "5",
      title: "Assessment",
      description: "Test your knowledge of preventive maintenance",
      subsections: [
        {
          id: "assessment",
          title: "Preventive Maintenance Quiz",
          description: "Comprehensive assessment of preventive maintenance concepts"
        }
      ]
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <PageHeader 
          title="Preventive Maintenance"
          description="Scheduled maintenance procedures and best practices"
          customBackAction={handleBackClick}
        />
        
        <div className="mt-8">
          {sections.map((section) => (
            <div key={section.id} className="mb-8">
              <div className="flex items-center mb-6">
                <h2 className="text-2xl font-semibold text-[#FFC900]">
                  {section.id}. {section.title}
                </h2>
              </div>
              <p className="text-[#FFC900]/80 mb-4">
                {section.description}
              </p>
              <div className="grid grid-cols-1 gap-4">
                {section.subsections.map((subsection) => (
                  <SectionItem
                    key={subsection.id}
                    id={subsection.id}
                    title={subsection.title}
                    description={subsection.description}
                    onStudy={handleStudySection}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default PreventiveMaintenancePage;
