
import React from 'react';

export interface Section210 {
  id: string;
  title: string;
  description?: string;
  content: React.ReactNode;
  detailedContent?: React.ReactNode;
}

export interface SectionsMap210 {
  [key: string]: Section210;
}
