
import React from "react";
import CareerLayout from "@/components/careers/CareerLayout";

const ProjectManagerPage = () => {
  return (
    <CareerLayout
      title="Electrical Project Manager Career Path"
      description="Lead and oversee electrical projects from conception to completion, managing teams, resources, and client relationships."
      qualifications={[
        "Electrical installation or engineering qualification (minimum Level 3)",
        "Project Management qualification (APM/Prince2/PMP)",
        "BS7671 (18th Edition) knowledge",
        "CSCS/ECS card",
        "Degree in Electrical Engineering or Construction Management (advantageous)",
      ]}
      responsibilities={[
        "Plan, execute and close electrical projects within scope, time and budget constraints",
        "Develop and maintain project schedules, budgets and resource plans",
        "Lead and coordinate project teams including electricians and subcontractors",
        "Manage client relationships and stakeholder communications",
        "Ensure compliance with relevant regulations, codes and standards",
        "Identify and mitigate project risks and issues",
        "Oversee procurement of materials and equipment",
        "Conduct regular project reviews and reports",
      ]}
      experience={[
        "Minimum 5 years in electrical contracting or installations",
        "Previous experience managing medium to large electrical projects",
        "Demonstrated experience in project budgeting and cost control",
        "Experience with project management software and tools",
        "Strong track record of successful project delivery",
      ]}
      progression={[
        "Senior Project Manager",
        "Programme Manager",
        "Contracts Manager",
        "Operations Director",
        "Construction Director",
      ]}
      salary="£40,000 - £70,000 depending on experience and project scale. Senior positions at larger firms can reach £80,000 - £100,000+"
    />
  );
};

export default ProjectManagerPage;
