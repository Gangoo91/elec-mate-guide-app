
import React from "react";
import CareerLayout from "@/components/careers/CareerLayout";

const CommissioningEngineerPage = () => {
  return (
    <CareerLayout
      title="Commissioning Engineer Career Path"
      description="Focus on testing, commissioning and validating electrical systems in commercial, industrial and critical environments."
      qualifications={[
        "Electrical or Electronic Engineering qualification (HNC/HND or higher)",
        "NVQ Level 3 in Electrical Installation or equivalent",
        "BS7671 (18th Edition) qualification",
        "Testing and Inspection qualification (2391 or 2394/2395)",
        "Manufacturer-specific training certificates (advantageous)",
      ]}
      responsibilities={[
        "Test and validate electrical systems against specifications and standards",
        "Perform systematic pre-commissioning and commissioning activities",
        "Create and follow detailed commissioning plans and methodologies",
        "Identify and resolve technical issues during commissioning",
        "Document all test results and prepare commissioning reports",
        "Verify functionality of control systems and safety features",
        "Coordinate with project managers and contractors during handover",
      ]}
      experience={[
        "Minimum 3 years in electrical installation or maintenance",
        "Experience with building management systems",
        "Proficiency with specialist test equipment",
        "Experience with LV/HV switchgear and distribution systems",
        "Knowledge of health and safety requirements for commissioning",
      ]}
      progression={[
        "Senior Commissioning Engineer",
        "Commissioning Manager",
        "Lead Commissioning Engineer",
        "Technical Operations Manager",
        "Specialist in critical environments (data centers, healthcare)",
      ]}
      salary="£35,000 - £60,000 depending on experience, with senior roles commanding £65,000+ and specialist positions reaching £80,000+"
    />
  );
};

export default CommissioningEngineerPage;
