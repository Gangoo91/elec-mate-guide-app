
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
            description="Core units include: Health & Safety, Scientific Principles, Installation Methods, Inspection & Testing, Environmental Protection, and Electrical Systems & Components."
            icon={<Book className="h-7 w-7 text-[#FFC900]" />}
            fullCardLink="/apprentices/study-materials/nvq2"
            action={{
              label: "View Level 2 Resources",
              href: "/apprentices/study-materials/nvq2"
            }}
          />
          
          <ResourceCard
            title="NVQ Level 3 & AM2"
            description="Advanced topics: Complex Installations, Fault Diagnosis, Electrical Principles, BS7671 Wiring Regulations, Inspection & Testing, and AM2 Assessment Preparation."
            icon={<GraduationCap className="h-7 w-7 text-[#FFC900]" />}
            fullCardLink="/apprentices/study-materials/nvq3"
            action={{
              label: "Access Level 3 & AM2",
              href: "/apprentices/study-materials/nvq3"
            }}
          />
          
          <ResourceCard
            title="HNC Electrical Engineering"
            description="Higher-level topics including: Electrical Power Systems, Engineering Mathematics, Project Management, Circuit Theory, Power Electronics, and Control Systems."
            icon={<BookOpen className="h-7 w-7 text-[#FFC900]" />}
            fullCardLink="/apprentices/study-materials/hnc"
            action={{
              label: "Explore HNC Materials",
              href: "/apprentices/study-materials/hnc"
            }}
          />
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ResourceCard
            title="Core Units Breakdown - Level 2"
            description="• Unit 201: Health & Safety
• Unit 202: Principles of Electrical Science
• Unit 203: Electrical Installations Technology
• Unit 204: Installation Methods & Planning
• Unit 205: Electrical Systems & Components"
            icon={<Book className="h-7 w-7 text-[#FFC900]" />}
            fullCardLink="/apprentices/study-materials/nvq2/core-units"
            action={{
              label: "View Core Units",
              href: "/apprentices/study-materials/nvq2/core-units"
            }}
          />

          <ResourceCard
            title="AM2 Assessment Guide"
            description="• Installation Project (Full Duration: 16.5 hours)
• Composite Installation (8.5 hours)
• Practical Problem Solving (3 hours)
• Online Assessment (2 hours)
• Safety Critical Tasks
• Inspection & Testing"
            icon={<GraduationCap className="h-7 w-7 text-[#FFC900]" />}
            fullCardLink="/apprentices/study-materials/am2-guide"
            action={{
              label: "Access AM2 Guide",
              href: "/apprentices/study-materials/am2-guide"
            }}
          />

          <ResourceCard
            title="Level 3 Performance Units"
            description="• Electrical Installation Design
• Inspection, Testing & Commissioning
• Fault Diagnosis & Rectification
• BS7671 Requirements
• Electrical System Planning
• Advanced Circuit Applications"
            icon={<BookOpen className="h-7 w-7 text-[#FFC900]" />}
            fullCardLink="/apprentices/study-materials/nvq3/performance-units"
            action={{
              label: "View Performance Units",
              href: "/apprentices/study-materials/nvq3/performance-units"
            }}
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default StudyMaterialsPage;
