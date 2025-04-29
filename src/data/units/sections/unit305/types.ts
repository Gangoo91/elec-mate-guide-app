
import React from 'react';

export interface SectionContentItem {
  title: string;
  content: React.ReactNode;
}

export interface Section305 {
  id: string;
  title: string;
  description: string;
  content: SectionContentItem[];
}
