
import React from 'react';

export interface Section {
  id: string;
  title: string;
  description: string;
  content: React.ReactNode;
  detailedContent?: React.ReactNode;
}

export interface SectionsType {
  [key: string]: Section;
}
