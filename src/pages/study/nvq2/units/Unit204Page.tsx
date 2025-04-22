
import React from 'react';
import UnitPage from './UnitPage';

const Unit204Page = () => {
  return (
    <UnitPage
      unitNumber="204"
      title="Installation of Wiring Systems"
      description="Master practical wiring installation techniques"
      content={[
        "Conduit and trunking installation methods",
        "Cable installation techniques and practices",
        "Fixing methods and tools usage",
        "Circuit arrangements and layouts",
        "Installation inspection and testing",
        "Cable management systems",
        "Installation planning and preparation"
      ]}
      learningOutcomes={[
        "Install conduit and trunking systems correctly",
        "Apply proper cable installation techniques",
        "Use appropriate fixing methods and tools",
        "Plan and implement circuit arrangements",
        "Conduct thorough installation inspections"
      ]}
    />
  );
};

export default Unit204Page;
