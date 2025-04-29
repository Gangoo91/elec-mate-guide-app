
import React from 'react';
import SectionItem from './SectionItem';

interface SectionGroupProps {
  number: string;
  title: string;
  sections: Array<{
    id: string;
    title: string;
    description: string;
  }>;
  onStudy: (id: string) => void;
}

const SectionGroup: React.FC<SectionGroupProps> = ({ number, title, sections, onStudy }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-[#FFC900] mb-6">{number}. {title}</h2>
      <div className="grid grid-cols-1 gap-4">
        {sections.map((section) => (
          <SectionItem
            key={section.id}
            id={section.id}
            title={section.title}
            description={section.description}
            onStudy={onStudy}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionGroup;
