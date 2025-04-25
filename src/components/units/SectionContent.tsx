
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from 'react-router-dom';

interface SectionContentProps {
  title: string;
  path: string;
}

const SectionContent = ({ title, path }: SectionContentProps) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (path) {
      navigate(path);
    }
  };
  
  return (
    <Card 
      className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300 cursor-pointer mb-4"
      onClick={handleClick}
    >
      <CardContent className="pt-6">
        <h3 className="text-[#FFC900] font-medium text-xl">
          {title}
        </h3>
      </CardContent>
    </Card>
  );
};

export default SectionContent;
