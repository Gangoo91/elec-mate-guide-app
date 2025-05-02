
import { ReactNode } from 'react';

export interface ApprenticeHubCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  content: string;
  path: string;
  onClick: (path: string) => void;
}
