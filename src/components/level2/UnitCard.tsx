
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Book } from "lucide-react";
import { useNavigate } from 'react-router-dom';

interface UnitCardProps {
  unitNumber: string;
  title: string;
  description: string;
  path?: string; // Make path optional
}

const UnitCard = ({ unitNumber, title, description, path }: UnitCardProps) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (path) {
      console.log("UnitCard - Navigating to:", path);
      navigate(path);
    } else {
      // Fallback for backward compatibility
      const unitPath = `/apprentices/study-materials/city-guilds/level-2/core-units/${unitNumber}`;
      console.log("UnitCard - Using fallback path:", unitPath);
      navigate(unitPath);
    }
  };
  
  return (
    <Card className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300">
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          <Book className="h-6 w-6 text-[#FFC900]" />
          <div>
            <h3 className="text-[#FFC900] font-medium text-lg mb-2">Unit {unitNumber} - {title}</h3>
            <p className="text-[#FFC900]/70 text-sm mb-4">{description}</p>
            <Button 
              className="w-full bg-[#FFC900] hover:bg-[#e5b700] text-[#151812]"
              onClick={handleClick}
            >
              Access Unit Content
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UnitCard;
