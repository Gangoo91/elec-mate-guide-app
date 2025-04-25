
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from 'react-router-dom';

interface UnitCardProps {
  unitNumber: string;
  title: string;
  description: string;
  path?: string;
}

const UnitCard = ({ unitNumber, title, path }: UnitCardProps) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (path) {
      console.log("UnitCard - Navigating to:", path);
      navigate(path);
    }
  };
  
  return (
    <Card 
      className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300 cursor-pointer"
      onClick={handleClick}
    >
      <CardContent className="pt-6">
        <h3 className="text-[#FFC900] font-medium text-xl text-center">
          Unit {unitNumber} - {title}
        </h3>
      </CardContent>
    </Card>
  );
};

export default UnitCard;
