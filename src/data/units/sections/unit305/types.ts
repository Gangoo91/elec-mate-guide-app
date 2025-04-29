
export interface Section {
  id: string;
  title: string;
  description?: string;
  content: React.ReactNode;
  detailedContent?: React.ReactNode;
}

export interface SectionMap {
  [key: string]: Section;
}
