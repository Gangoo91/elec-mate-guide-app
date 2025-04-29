
import React from 'react';

export interface UnitSection {
  title: string;
  content: React.ReactNode;
  detailedContent?: React.ReactNode;
  description?: string;
}

export interface UnitContent {
  title: string;
  description: string;
  sections: UnitSection[];
  assessment?: {
    path: string;
    title: string;
    description: string;
  };
}
