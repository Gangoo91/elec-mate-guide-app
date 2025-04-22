
import React from 'react';
import UnitPage from './UnitPage';

const Unit201Page = () => {
  return (
    <UnitPage
      unitNumber="201"
      title="Health & Safety"
      description="Master essential electrical safety practices and protocols"
      content={[
        "Electrical safety fundamentals and best practices",
        "Risk assessment procedures and documentation",
        "Personal Protective Equipment (PPE) selection and use",
        "First aid requirements and emergency procedures",
        "Fire safety protocols and prevention measures",
        "Site safety requirements and regulations",
        "Safety signs and warning systems"
      ]}
      learningOutcomes={[
        "Understand and apply key electrical safety principles",
        "Conduct thorough risk assessments for electrical work",
        "Select and use appropriate PPE for different scenarios",
        "Respond effectively to electrical emergencies",
        "Implement proper fire safety measures"
      ]}
    />
  );
};

export default Unit201Page;
