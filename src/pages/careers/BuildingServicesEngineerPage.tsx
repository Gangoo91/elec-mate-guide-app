
import React from "react";
import CareerLayout from "@/components/careers/CareerLayout";

const BuildingServicesEngineerPage = () => {
  return (
    <CareerLayout
      title="Building Services Engineer Career Path"
      description="Specialize in designing and managing electrical systems within buildings, including power distribution, lighting, and integrated building technologies."
      qualifications={[
        "HNC/HND or degree in Building Services Engineering or Electrical Engineering",
        "Knowledge of BS7671 and building regulations",
        "Understanding of energy efficiency standards and BREEAM",
        "BIM software proficiency (advantageous)",
        "Membership of CIBSE or IET (advantageous)",
        "MEP design software experience (AutoCAD MEP, Revit MEP)"
      ]}
      responsibilities={[
        "Design integrated building electrical systems including power, lighting, and security",
        "Develop sustainable and energy-efficient solutions",
        "Create detailed specifications and technical documentation",
        "Coordinate with architects and other engineering disciplines",
        "Ensure compliance with building regulations and standards",
        "Perform load calculations and equipment sizing",
        "Consider lifecycle costs and maintainability in designs",
        "Commission and handover building systems"
      ]}
      experience={[
        "Minimum 3-5 years in electrical design or installations",
        "Experience with building management systems (BMS)",
        "Knowledge of multiple building types and their specific requirements",
        "Understanding of other building services (HVAC, plumbing)",
        "Experience with energy modeling and calculations"
      ]}
      progression={[
        "Senior Building Services Engineer",
        "Lead Electrical Design Engineer",
        "MEP Coordinator",
        "Building Services Design Manager",
        "Technical Director",
        "Sustainability Consultant"
      ]}
      salary="£35,000 - £60,000 depending on experience and location. Senior positions in major firms can reach £65,000 - £85,000+"
    />
  );
};

export default BuildingServicesEngineerPage;
