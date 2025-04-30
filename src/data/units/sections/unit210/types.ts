
import { ReactNode } from 'react';

export interface Section210 {
  title: string;
  description?: string;
  content: ReactNode;
  detailedContent?: ReactNode;
}

export interface SectionsMap210 {
  [key: string]: Section210;
}
