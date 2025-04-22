
import React from 'react';
import UnitPage from './UnitPage';

const Unit202Page = () => {
  return (
    <UnitPage
      unitNumber="202"
      title="Electrical Scientific Principles"
      description="Understanding fundamental electrical theory and calculations"
      content={[
        "Ohm's law and basic electrical circuits",
        "AC and DC theory fundamentals",
        "Resistance and impedance calculations",
        "Power calculations and applications",
        "Circuit diagrams and electrical symbols",
        "Voltage, current, and resistance relationships",
        "Electrical formulas and their applications"
      ]}
      learningOutcomes={[
        "Apply Ohm's law to solve electrical problems",
        "Understand the differences between AC and DC circuits",
        "Calculate power requirements accurately",
        "Read and interpret circuit diagrams",
        "Apply electrical formulas in practical scenarios"
      ]}
    />
  );
};

export default Unit202Page;
