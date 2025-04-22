
import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ResourceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  action?: {
    label: string;
    onClick?: () => void;
    href?: string;
  };
  fullCardLink?: string; // Prop to enable full card navigation
}

const ResourceCard = ({ title, description, icon, action, fullCardLink }: ResourceCardProps) => {
  const navigate = useNavigate();
  
  // If fullCardLink is provided, we'll handle the click on the card
  const handleCardClick = () => {
    if (fullCardLink) {
      navigate(fullCardLink);
    }
  };

  return (
    <Card 
      className={`h-full flex flex-col bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#FFC900]/10 ${fullCardLink ? 'cursor-pointer' : ''}`}
      onClick={fullCardLink ? handleCardClick : undefined}
    >
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          {React.isValidElement(icon) ? icon : null}
          <CardTitle className="text-[#FFC900] text-lg md:text-xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col justify-between flex-grow pt-2">
        <CardDescription className="text-[#FFC900]/70 text-sm mb-3">
          {description}
        </CardDescription>
        
        {action && (
          <div className="mt-auto">
            {action.href ? (
              <Button 
                variant="ghost" 
                className="w-full justify-start p-0 text-[#FFC900] font-medium hover:text-[#FFF200] hover:bg-transparent"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  navigate(action.href);
                }}
              >
                {action.label} →
              </Button>
            ) : (
              <Button 
                variant="ghost" 
                className="w-full justify-start p-0 text-[#FFC900] font-medium hover:text-[#FFF200] hover:bg-transparent"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  action.onClick && action.onClick();
                }}
              >
                {action.label} →
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ResourceCard;
