
import React from "react";
import { Link } from "react-router-dom";
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
  // If fullCardLink is provided, we'll handle the click on the card
  const handleCardClick = () => {
    if (fullCardLink) {
      window.location.href = fullCardLink;
    }
  };

  return (
    <Card 
      className="h-full flex flex-col bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#FFC900]/10 cursor-pointer"
      onClick={handleCardClick}
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
          action.href ? (
            action.href.startsWith("#") ? (
              <a 
                href={action.href}
                className="mt-auto inline-block text-[#FFC900] font-medium hover:text-[#FFF200]"
                onClick={(e) => e.stopPropagation()}
              >
                {action.label} →
              </a>
            ) : (
              <Link 
                to={action.href}
                className="mt-auto inline-block text-[#FFC900] font-medium hover:text-[#FFF200]"
                onClick={(e) => e.stopPropagation()}
              >
                {action.label} →
              </Link>
            )
          ) : (
            <Button 
              variant="ghost" 
              className="mt-auto w-full justify-start p-0 text-[#FFC900] font-medium hover:text-[#FFF200] hover:bg-transparent"
              onClick={(e) => {
                e.stopPropagation();
                action.onClick && action.onClick();
              }}
            >
              {action.label} →
            </Button>
          )
        )}
      </CardContent>
    </Card>
  );
};

export default ResourceCard;
