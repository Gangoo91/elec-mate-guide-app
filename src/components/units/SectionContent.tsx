
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from 'react-router-dom';

interface SectionContentProps {
  title: string;
  path: string;
  description?: string; // Optional description for more context
}

const SectionContent = ({ title, path, description }: SectionContentProps) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (path) {
      console.log("SectionContent - Navigating to:", path);
      navigate(path);
    }
  };
  
  return (
    <Card 
      className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300 cursor-pointer mb-4"
      onClick={handleClick}
    >
      <CardContent className="pt-6">
        <h3 className="text-[#FFC900] font-medium text-xl mb-2">
          {title}
        </h3>
        {description && (
          <p className="text-[#FFC900]/70">
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default SectionContent;
