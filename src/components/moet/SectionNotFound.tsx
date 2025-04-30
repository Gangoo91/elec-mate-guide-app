
import React from 'react';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";

interface SectionNotFoundProps {
  handleBackClick: () => void;
}

const SectionNotFound: React.FC<SectionNotFoundProps> = ({ handleBackClick }) => {
  return (
    <MainLayout>
      <div className="container px-4 py-8">
        <PageHeader 
          title="Section Not Found"
          description="Sorry, we couldn't find the content for this section"
          customBackAction={handleBackClick}
        />
      </div>
    </MainLayout>
  );
};

export default SectionNotFound;
