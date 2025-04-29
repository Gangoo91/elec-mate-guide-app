
import React from 'react';
import { section1_1 } from './section1-1';
import { section2_1 } from './section2-1';
import { section3_1 } from './section3-1';
import { section4_1 } from './section4-1';
import { section5_1 } from './section5-1';
import { section6_1 } from './section6-1';
import { SectionsType } from './types';

export const sections305: SectionsType = {
  "1.1": {
    id: "1.1",
    title: "Client Requirements Analysis",
    description: "Understanding client needs and translating them into design specifications",
    content: section1_1,
  },
  "1.2": {
    id: "1.2",
    title: "Regulatory Constraints",
    description: "Applying regulations and standards to electrical installation designs",
    content: <div>Content for Regulatory Constraints section</div>,
  },
  "1.3": {
    id: "1.3",
    title: "Safety and Energy Efficiency",
    description: "Incorporating safety features and energy efficiency in design",
    content: <div>Content for Safety and Energy Efficiency section</div>,
  },
  "2.1": {
    id: "2.1",
    title: "Diversity Factors and Maximum Demand",
    description: "Calculating electrical loads with appropriate diversity factors",
    content: section2_1,
  },
  "2.2": {
    id: "2.2",
    title: "Cable Sizing Calculations",
    description: "Determining appropriate cable sizes based on load and installation conditions",
    content: <div>Content for Cable Sizing Calculations section</div>,
  },
  "2.3": {
    id: "2.3",
    title: "Voltage Drop Considerations",
    description: "Calculating and mitigating voltage drop in electrical installations",
    content: <div>Content for Voltage Drop Considerations section</div>,
  },
  "3.1": {
    id: "3.1",
    title: "Consumer Unit Arrangements",
    description: "Designing effective distribution board and consumer unit layouts",
    content: section3_1,
  },
  "3.2": {
    id: "3.2",
    title: "Circuit Segregation",
    description: "Separating circuits for safety, reliability and electromagnetic compatibility",
    content: <div>Content for Circuit Segregation section</div>,
  },
  "3.3": {
    id: "3.3",
    title: "Protection Device Selection",
    description: "Selecting appropriate circuit breakers, RCDs, and other protection devices",
    content: <div>Content for Protection Device Selection section</div>,
  },
  "4.1": {
    id: "4.1",
    title: "Protection Device Coordination",
    description: "Ensuring proper discrimination between series-connected protective devices",
    content: section4_1,
  },
  "4.2": {
    id: "4.2",
    title: "Fault Current Analysis",
    description: "Calculating fault currents and ensuring protection operates correctly",
    content: <div>Content for Fault Current Analysis section</div>,
  },
  "5.1": {
    id: "5.1",
    title: "Earthing Systems",
    description: "Designing appropriate earthing arrangements (TN-S, TN-C-S, TT systems)",
    content: section5_1,
  },
  "5.2": {
    id: "5.2",
    title: "Main and Supplementary Bonding",
    description: "Calculating conductor sizes for main and supplementary equipotential bonding",
    content: <div>Content for Main and Supplementary Bonding section</div>,
  },
  "6.1": {
    id: "6.1",
    title: "BS 7671 Requirements",
    description: "Applying wiring regulations requirements to electrical installation designs",
    content: section6_1,
  },
  "6.2": {
    id: "6.2",
    title: "Building Regulations",
    description: "Compliance with building regulations for electrical installations",
    content: <div>Content for Building Regulations section</div>,
  },
};

// Adding a default export to fix the import issue in SectionPage.tsx
export default { sections305 };
