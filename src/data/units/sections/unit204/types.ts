
import { ReactNode } from 'react';

export interface Section {
  title: string;
  description?: string;
  content: ReactNode;
  detailedContent?: ReactNode;
}

export interface SectionMap {
  [key: string]: Section;
}
