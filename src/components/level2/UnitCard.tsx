
import React from 'react';
import { CardContent } from "@/components/ui/card";
import { useNavigate } from 'react-router-dom';

interface UnitCardProps {
  unitNumber: string;
  title: string;
  description: string;
  path?: string;
}

const UnitCard = ({ unitNumber, title, description, path }: UnitCardProps) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (path) {
      console.log("UnitCard - Navigating to:", path);
      navigate(path);
    }
  };
  
  return (
    <div 
      className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300 cursor-pointer p-6"
      onClick={handleClick}
    >
      <h3 className="text-[#FFC900] font-medium text-xl text-center mb-2">
        Unit {unitNumber} - {title}
      </h3>
      <p className="text-[#FFC900]/70 text-sm text-center">
        {description}
      </p>
    </div>
  );
};

export default UnitCard;
