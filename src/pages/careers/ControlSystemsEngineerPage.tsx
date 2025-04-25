
import React from "react";
import CareerLayout from "@/components/careers/CareerLayout";

const ControlSystemsEngineerPage = () => {
  return (
    <CareerLayout
      title="Control Systems Engineer Career Path"
      description="Specialize in designing, programming, and maintaining automated control systems for industrial and building applications."
      qualifications={[
        "Electrical/Electronic Engineering qualification (HNC/HND minimum)",
        "PLC programming certification (e.g., Siemens, Allen Bradley)",
        "SCADA systems training",
        "Knowledge of industrial networking protocols (Modbus, Profibus, etc)",
        "Understanding of instrumentation principles",
        "Degree in Control Systems, Automation, or similar (advantageous)",
      ]}
      responsibilities={[
        "Design and develop control system architectures",
        "Program PLCs, RTUs, and other control devices",
        "Configure HMIs and SCADA systems for operator interfaces",
        "Implement and test control logic and safety systems",
        "Commission and start up automated systems",
        "Troubleshoot and resolve control system issues",
        "Integrate various subsystems and equipment",
        "Provide technical support and training to clients",
      ]}
      experience={[
        "Minimum 3-5 years in industrial controls or automation",
        "Experience with multiple PLC platforms and programming languages",
        "Industrial network configuration and troubleshooting",
        "Understanding of process control loops and instrumentation",
        "Familiarity with industrial safety standards (IEC 61508/61511)",
      ]}
      progression={[
        "Senior Controls Engineer",
        "Lead Automation Engineer",
        "Systems Integration Specialist",
        "Controls Project Manager",
        "Technical Director",
      ]}
      salary="£35,000 - £65,000 depending on experience and industry. Specialist roles in critical industries (oil and gas, pharmaceuticals) can command £70,000 - £90,000+"
    />
  );
};

export default ControlSystemsEngineerPage;
