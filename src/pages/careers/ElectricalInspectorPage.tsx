
import React from "react";
import CareerLayout from "@/components/careers/CareerLayout";

const ElectricalInspectorPage = () => {
  return (
    <CareerLayout
      title="Electrical Inspector Career Path"
      description="Become certified to inspect, test, and verify the safety and compliance of electrical installations across various settings."
      qualifications={[
        "Level 3 Electrical Installation qualification",
        "BS7671 (18th Edition) certification",
        "City & Guilds 2391, 2394/95, or Level 4 qualification in Inspection and Testing",
        "ECS card with Inspection and Testing endorsement",
        "Membership of professional body (IET, NAPIT, NICEIC) advantageous",
        "Experience with various test equipment and procedures"
      ]}
      responsibilities={[
        "Conduct thorough inspections of electrical installations",
        "Perform comprehensive electrical testing procedures",
        "Identify non-compliant installations and safety hazards",
        "Prepare detailed inspection reports and certification",
        "Advise on remedial works to achieve compliance",
        "Keep up-to-date with changing regulations and standards",
        "Maintain accurate records of inspections and tests",
        "Provide expert testimony in disputes or legal proceedings when required"
      ]}
      experience={[
        "Minimum 5 years as qualified electrician",
        "Experience across multiple installation types (domestic, commercial, industrial)",
        "Proven track record in fault finding and diagnostics",
        "Knowledge of diverse electrical systems and equipment",
        "Understanding of construction processes and building regulations"
      ]}
      progression={[
        "Senior Electrical Inspector",
        "Authorizing Engineer",
        "Technical Compliance Manager",
        "Quality Assurance Manager",
        "Independent Electrical Consultant",
        "Building Control Officer"
      ]}
      salary="£40,000 - £55,000 for standard roles. Senior positions or specialized inspectors (e.g., hazardous areas, high-voltage) can earn £60,000 - £75,000+"
    />
  );
};

export default ElectricalInspectorPage;
