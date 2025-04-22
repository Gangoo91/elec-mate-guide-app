
import React from 'react';
import UnitPage from './UnitPage';

const Unit203Page = () => {
  return (
    <UnitPage
      unitNumber="203"
      title="Electrical Installation Technology"
      description="Learn modern electrical installation techniques and methods"
      content={[
        "Wiring systems and installation methods",
        "Cable selection and sizing calculations",
        "Earthing and bonding requirements",
        "Protection devices and their applications",
        "Testing and verification procedures",
        "Installation regulations and standards",
        "Circuit design and planning"
      ]}
      learningOutcomes={[
        "Select appropriate wiring systems for different installations",
        "Calculate correct cable sizes for various applications",
        "Implement proper earthing and bonding methods",
        "Choose and install appropriate protection devices",
        "Conduct installation testing and verification"
      ]}
    />
  );
};

export default Unit203Page;
