
import React from 'react';

export interface UnitContent {
  title: string;
  description: string;
  sections: {
    title: string;
    content: React.ReactNode;
  }[];
}
