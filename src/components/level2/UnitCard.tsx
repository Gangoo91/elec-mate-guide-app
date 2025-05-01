
import React from 'react';
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
      className="bg-[#22251e] border border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300 cursor-pointer p-6 rounded-lg"
      onClick={handleClick}
    >
      <div className="flex flex-col h-full">
        <h3 className="text-[#FFC900] font-medium text-xl mb-2">
          {unitNumber}
        </h3>
        <h4 className="text-white font-medium text-lg mb-3">
          {title}
        </h4>
        <p className="text-[#FFC900]/70 text-sm mt-auto">
          {description}
        </p>
      </div>
    </div>
  );
};

export default UnitCard;
