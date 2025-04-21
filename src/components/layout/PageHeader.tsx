
import React from "react";
import BackButton from "@/components/navigation/BackButton";

interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <div className="text-center mb-6 md:mb-8 animate-fade-in px-4">
      <div className="mb-4">
        <BackButton />
      </div>
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-[#FFC900] mb-2 md:mb-3">{title}</h1>
      {description && (
        <p className="text-sm md:text-base text-[#FFC900]/80 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

export default PageHeader;
