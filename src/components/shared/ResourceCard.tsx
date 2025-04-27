
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from 'react-router-dom';

interface ResourceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  fullCardLink?: string;
  onClick?: () => void;
}

const ResourceCard = ({ title, description, icon, fullCardLink, onClick }: ResourceCardProps) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (fullCardLink) {
      console.log("ResourceCard - Navigating to:", fullCardLink);
      navigate(fullCardLink);
    }
  };
  
  return (
    <Card 
      className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300 cursor-pointer h-full"
      onClick={handleClick}
    >
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          {icon}
          <div>
            <h3 className="text-[#FFC900] font-medium text-lg mb-2">{title}</h3>
            <p className="text-[#FFC900]/70 text-sm">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResourceCard;
