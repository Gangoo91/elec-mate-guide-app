
import React from 'react';
import { Book, GraduationCap, BookOpen } from "lucide-react";
import ResourceCard from "@/components/shared/ResourceCard";

const StudyMaterialsGrid = () => {
  return (
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
  );
};

export default StudyMaterialsGrid;
