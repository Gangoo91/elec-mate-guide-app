
import React from 'react';
import SystematicTroubleshooting from '@/components/sections/unit303/SystematicTroubleshooting';
import TestEquipment from '@/components/sections/unit303/TestEquipment';
import TestResults from '@/components/sections/unit303/TestResults';

interface SectionData {
  title: string;
  description: string;
  content: React.ReactNode;
}

export const sections303: Record<string, SectionData> = {
  "1.1": {
    title: "Systematic Troubleshooting Methods",
    description: "Learning structured approaches to electrical fault diagnosis",
    content: <SystematicTroubleshooting />
  },
  "1.2": {
    title: "Using Test Equipment Effectively",
    description: "Learning to select and use appropriate test equipment for fault diagnosis",
    content: <TestEquipment />
  },
  "1.3": {
    title: "Interpreting Test Results",
    description: "Understanding how to analyze and interpret electrical test results",
    content: <TestResults />
  }
};
