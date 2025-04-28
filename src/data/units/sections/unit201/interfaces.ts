
import { ReactNode } from 'react';

export interface SectionData {
  title: string;
  description?: string;
  content: ReactNode;
  detailedContent?: ReactNode;
}
