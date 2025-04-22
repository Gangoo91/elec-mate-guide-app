
import React from 'react';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import BackButton from "@/components/navigation/BackButton";
import ResourceCard from "@/components/shared/ResourceCard";
import { Book, GraduationCap, BookOpen } from "lucide-react";

const StudyMaterialsPage = () => {
  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
        <BackButton />
        <PageHeader 
          title="Study Materials"
          description="Comprehensive study resources for UK electrical qualifications, including NVQ Level 2, Level 3, and HNC materials."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <ResourceCard
            title="NVQ Level 2 Electrical Installation"
            description="Essential resources covering core units, practical assessments, and fundamental electrical concepts for Level 2 qualification."
            icon={<Book className="h-7 w-7 text-[#FFC900]" />}
            action={{
              label: "View Level 2 Resources",
              href: "#nvq2-content"
            }}
          />
          
          <ResourceCard
            title="NVQ Level 3 & AM2"
            description="Advanced electrical training materials, including AM2 preparation resources and complex installation techniques."
            icon={<GraduationCap className="h-7 w-7 text-[#FFC900]" />}
            action={{
              label: "Access Level 3 & AM2",
              href: "#nvq3-content"
            }}
          />
          
          <ResourceCard
            title="HNC Electrical Engineering"
            description="Higher-level study materials covering electrical principles, power systems, and engineering mathematics."
            icon={<BookOpen className="h-7 w-7 text-[#FFC900]" />}
            action={{
              label: "Explore HNC Materials",
              href: "#hnc-content"
            }}
          />
        </div>

        {/* NVQ Level 2 Content Section */}
        <div id="nvq2-content" className="mt-12 pt-8">
          <h2 className="text-2xl font-bold text-[#FFC900] mb-6">NVQ Level 2 Electrical Installation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ResourceCard
              title="Core Units"
              description="Health & Safety, Environmental Protection, Installation of Wiring Systems, and BS 7671 Requirements."
              icon={<Book className="h-6 w-6 text-[#FFC900]" />}
            />
            <ResourceCard
              title="Practical Assessments"
              description="Circuit Installation, Cable Selection, Earthing and Bonding, Testing and Verification."
              icon={<Book className="h-6 w-6 text-[#FFC900]" />}
            />
          </div>
        </div>

        {/* NVQ Level 3 & AM2 Content Section */}
        <div id="nvq3-content" className="mt-12 pt-8">
          <h2 className="text-2xl font-bold text-[#FFC900] mb-6">NVQ Level 3 & AM2</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ResourceCard
              title="Advanced Units"
              description="Complex Circuits, Electrical Science, Inspection & Testing, Fault Diagnosis."
              icon={<GraduationCap className="h-6 w-6 text-[#FFC900]" />}
            />
            <ResourceCard
              title="AM2 Assessment Preparation"
              description="Installation Tasks, Safe Isolation, Testing Procedures, and Fault Finding."
              icon={<GraduationCap className="h-6 w-6 text-[#FFC900]" />}
            />
          </div>
        </div>

        {/* HNC Content Section */}
        <div id="hnc-content" className="mt-12 pt-8 mb-12">
          <h2 className="text-2xl font-bold text-[#FFC900] mb-6">HNC Electrical Engineering</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ResourceCard
              title="Core Modules"
              description="Electrical Principles, Mathematics, Project Design, Engineering Science."
              icon={<BookOpen className="h-6 w-6 text-[#FFC900]" />}
            />
            <ResourceCard
              title="Specialist Units"
              description="Power Systems, Industrial Automation, Renewable Energy, Installation Design."
              icon={<BookOpen className="h-6 w-6 text-[#FFC900]" />}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default StudyMaterialsPage;
