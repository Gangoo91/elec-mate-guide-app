
import React from 'react';
import MainLayout from "@/components/layout/MainLayout";
import BackButton from "@/components/navigation/BackButton";
import { Book, GraduationCap, School, TestTube } from "lucide-react";
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
          description="Study resources for electrical qualifications and professional development."
          hideBackButton={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <ResourceCard
            title="City & Guilds Qualifications"
            description="Essential resources covering all City & Guilds electrical qualifications including Level 2, Level 3, and AM2 preparation materials."
            icon={<Book className="h-7 w-7 text-[#FFC900]" />}
            action={{
              label: "View C&G Resources",
              href: "/apprentices/study-materials/city-guilds"
            }}
          />
          
          <ResourceCard
            title="EAL Qualifications"
            description="Comprehensive study materials for EAL electrical qualifications, covering both Level 2 and Level 3 courses."
            icon={<School className="h-7 w-7 text-[#FFC900]" />}
            action={{
              label: "Access EAL Materials",
              href: "/apprentices/study-materials/eal"
            }}
          />
          
          <ResourceCard
            title="Higher Learning"
            description="Advanced electrical engineering resources including HNC, HND, and degree-level materials for career progression."
            icon={<GraduationCap className="h-7 w-7 text-[#FFC900]" />}
            action={{
              label: "Explore Higher Education",
              href: "/apprentices/study-materials/higher-learning"
            }}
          />
          
          <ResourceCard
            title="Test & Inspection"
            description="Specialized materials for electrical testing and inspection qualifications, including 2391 and 2394/95 courses."
            icon={<TestTube className="h-7 w-7 text-[#FFC900]" />}
            action={{
              label: "View T&I Resources",
              href: "/apprentices/study-materials/test-inspection"
            }}
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default StudyMaterialsPage;
