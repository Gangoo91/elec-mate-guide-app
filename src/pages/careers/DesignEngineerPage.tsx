
import React from "react";
import CareerLayout from "@/components/careers/CareerLayout";

const DesignEngineerPage = () => {
  return (
    <CareerLayout
      title="Design Engineer Career Path"
      description="Specialize in electrical system design, creating detailed plans and specifications for installations in various settings."
      qualifications={[
        "Level 3 Electrical/Electronic Engineering qualification or higher",
        "HNC/HND in Electrical Engineering (preferred)",
        "AutoCAD or similar CAD software certification",
        "Knowledge of BS7671 Wiring Regulations",
        "Electrical Design Software proficiency (e.g., Amtech, Hevacomp)",
      ]}
      responsibilities={[
        "Create detailed electrical design drawings and specifications",
        "Perform electrical load calculations and system sizing",
        "Design power distribution systems for buildings and facilities",
        "Ensure compliance with relevant standards and regulations",
        "Coordinate with architects, contractors, and other engineers",
        "Review and approve contractor submittals and shop drawings",
        "Provide technical support during construction phases",
      ]}
      experience={[
        "Minimum 3-5 years of electrical installation experience",
        "Previous experience with commercial/industrial electrical design",
        "Project documentation and specification writing",
        "Experience with building regulations and standards",
        "Understanding of energy efficiency and sustainable design",
      ]}
      progression={[
        "Senior Design Engineer",
        "Lead Design Engineer",
        "Technical Director",
        "Engineering Manager",
        "Consulting Engineer",
        "Own Design Consultancy",
      ]}
      salary="£35,000 - £65,000 depending on experience and location. Senior positions can command £70,000+"
    />
  );
};

export default DesignEngineerPage;
