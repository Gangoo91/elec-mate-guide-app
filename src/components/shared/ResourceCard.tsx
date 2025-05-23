
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from 'react-router-dom';

interface ResourceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  fullCardLink?: string;
  onClick?: () => void;
  action?: {
    label: string;
    href: string;
  };
  children?: React.ReactNode;
}

const ResourceCard = ({ title, description, icon, fullCardLink, onClick, action, children }: ResourceCardProps) => {
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
          <div className="flex-1">
            <h3 className="text-[#FFC900] font-medium text-lg mb-2">{title}</h3>
            <p className="text-[#FFC900]/70 text-sm">{description}</p>
            {children && <div className="mt-4">{children}</div>}
            {action && (
              <div className="mt-4">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(action.href);
                  }}
                  className="bg-[#FFC900] hover:bg-[#e5b700] text-[#151812] px-4 py-2 rounded-md text-sm font-medium"
                >
                  {action.label}
                </button>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResourceCard;
