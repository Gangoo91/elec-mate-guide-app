
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from 'react-router-dom';

interface SectionCardProps {
  sectionId: string;
  unitId: string;
  title: string;
  description: string;
  isLevel3?: boolean;
  customPath?: string; // Added to support custom navigation paths
}

const SectionCard = ({ sectionId, unitId, title, description, isLevel3 = false, customPath }: SectionCardProps) => {
  const navigate = useNavigate();
  
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (customPath) {
      console.log("Navigating to custom path:", customPath);
      navigate(customPath);
      return;
    }
    
    const basePath = isLevel3 
      ? '/apprentices/study-materials/city-guilds/level-3'
      : '/apprentices/study-materials/city-guilds/level-2/core-units';
    
    // Log the navigation path to debug
    const path = `${basePath}/${unitId}/${sectionId}`;
    console.log("Navigating to:", path);
    
    navigate(path);
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
        <p className="text-[#FFC900]/70">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default SectionCard;
