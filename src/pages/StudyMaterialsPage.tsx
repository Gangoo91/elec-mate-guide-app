
import React from 'react';
import MainLayout from "@/components/layout/MainLayout";
import BackButton from "@/components/navigation/BackButton";
import { Book, GraduationCap, BookOpen, School } from "lucide-react";
import ResourceCard from "@/components/shared/ResourceCard";
import PageHeader from "@/components/layout/PageHeader";

const StudyMaterialsPage = () => {
  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <div className="mb-4">
          <BackButton />
        </div>
        <PageHeader 
          title="UK Electrical Qualification Materials"
          description="Study resources for City & Guilds and EAL electrical apprenticeship qualifications."
          hideBackButton={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <ResourceCard
            title="City & Guilds Level 2 Electrical Installation"
            description="Essential resources covering fundamental electrical theory, installation techniques, and health & safety for the City & Guilds Level 2 qualification."
            icon={<Book className="h-7 w-7 text-[#FFC900]" />}
            action={{
              label: "View Level 2 Resources",
              href: "/apprentices/study-materials/nvq2"
            }}
          />
          
          <ResourceCard
            title="City & Guilds Level 3 & AM2"
            description="Advanced electrical training materials for City & Guilds Level 3, including AM2 preparation resources and complex installation techniques."
            icon={<GraduationCap className="h-7 w-7 text-[#FFC900]" />}
            action={{
              label: "Access Level 3 & AM2",
              href: "/apprentices/study-materials/nvq3"
            }}
          />
          
          <ResourceCard
            title="EAL Level 2 Installation"
            description="Comprehensive materials for EAL Level 2 electrical qualification, covering core units and practical assessments."
            icon={<School className="h-7 w-7 text-[#FFC900]" />}
            action={{
              label: "View EAL Level 2",
              href: "/apprentices/study-materials/eal-level2"
            }}
          />
          
          <ResourceCard
            title="EAL Level 3 & HNC"
            description="Higher-level study materials covering EAL Level 3 and HNC in Electrical Engineering, including advanced theory and design principles."
            icon={<BookOpen className="h-7 w-7 text-[#FFC900]" />}
            action={{
              label: "Explore EAL Advanced Materials",
              href: "/apprentices/study-materials/hnc"
            }}
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default StudyMaterialsPage;
