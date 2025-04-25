
import React from 'react';
import SystematicTroubleshooting from '@/components/sections/unit303/SystematicTroubleshooting';
import TestEquipment from '@/components/sections/unit303/TestEquipment';
import TestResults from '@/components/sections/unit303/TestResults';
import OpenCircuits from '@/components/sections/unit303/fault-diagnosis/OpenCircuits';
import ShortCircuits from '@/components/sections/unit303/fault-diagnosis/ShortCircuits';
import HighResistance from '@/components/sections/unit303/fault-diagnosis/HighResistance';
import IsolationProcedures from '@/components/sections/unit303/rectification/IsolationProcedures';
import ComponentReplacement from '@/components/sections/unit303/rectification/ComponentReplacement';
import SystemRestoration from '@/components/sections/unit303/rectification/SystemRestoration';

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
  },
  "2.1": {
    title: "Open Circuit Conditions",
    description: "Understanding causes and diagnosis of open circuit faults",
    content: <OpenCircuits />
  },
  "2.2": {
    title: "Short Circuits and Earth Faults",
    description: "Identifying and resolving short circuits and earth faults safely",
    content: <ShortCircuits />
  },
  "2.3": {
    title: "High Resistance Connections",
    description: "Diagnosing and fixing problematic high resistance connections",
    content: <HighResistance />
  },
  "3.1": {
    title: "Isolation and Lock-off Procedures",
    description: "Safety procedures for isolating electrical systems before working on them",
    content: <IsolationProcedures />
  },
  "3.2": {
    title: "Component Replacement Techniques",
    description: "Best practices for replacing faulty electrical components",
    content: <ComponentReplacement />
  },
  "3.3": {
    title: "System Restoration and Post-repair Testing",
    description: "Procedures for safely restoring power and verifying repairs",
    content: <SystemRestoration />
  }
};
