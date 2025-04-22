
import React from 'react';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import ResourceCard from "@/components/shared/ResourceCard";
import { Book, GraduationCap, BookOpen } from "lucide-react";
import BackButton from "@/components/navigation/BackButton";

const StudyMaterialsPage = () => {
  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4 pt-16 md:pt-16">
        <div className="mb-4">
          <BackButton />
        </div>
        <PageHeader 
          title="Study Materials"
          description="Comprehensive study resources for UK electrical qualifications, including NVQ Level 2, Level 3, and HNC materials."
          hideBackButton={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          <ResourceCard
            title="NVQ Level 2 Electrical Installation"
            description="Essential resources covering core units, practical assessments, and fundamental electrical concepts for Level 2 qualification."
            icon={<Book className="h-7 w-7 text-[#FFC900]" />}
            action={{
              label: "View Level 2 Resources",
              href: "/apprentices/study-materials/nvq2"
            }}
          />
          
          <ResourceCard
            title="NVQ Level 3 & AM2"
            description="Advanced electrical training materials, including AM2 preparation resources and complex installation techniques."
            icon={<GraduationCap className="h-7 w-7 text-[#FFC900]" />}
            action={{
              label: "Access Level 3 & AM2",
              href: "/apprentices/study-materials/nvq3"
            }}
          />
          
          <ResourceCard
            title="HNC Electrical Engineering"
            description="Higher-level study materials covering electrical principles, power systems, and engineering mathematics."
            icon={<BookOpen className="h-7 w-7 text-[#FFC900]" />}
            action={{
              label: "Explore HNC Materials",
              href: "/apprentices/study-materials/hnc"
            }}
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default StudyMaterialsPage;

