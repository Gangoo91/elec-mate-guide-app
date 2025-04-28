
import React from 'react';
import { section1_1 } from './section1-1';
import { section1_2 } from './section1-2';
import { section1_3 } from './section1-3';
import { section1_4 } from './section1-4';

// Define the section content structure
export interface Section210 {
  title: string;
  description?: string;
  content: React.ReactNode;
  detailedContent?: React.ReactNode;
}

// Define all unit 210 sections
export const sections210: Record<string, Section210> = {
  "1.1": section1_1,
  "1.2": section1_2,
  "1.3": section1_3,
  "1.4": section1_4
};
