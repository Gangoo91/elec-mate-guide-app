
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { handleNavigationLogic } from '@/utils/navigationUtils';

interface BackButtonProps {
  onClick?: () => void;
  customAction?: () => void;
  className?: string;
}

const BackButton = ({ onClick, customAction, className = '' }: BackButtonProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    console.log("BackButton - Clicked with current path:", location.pathname);
    
    if (onClick) {
      console.log("BackButton - Using custom onClick handler");
      onClick();
    } else if (customAction) {
      console.log("BackButton - Using custom action");
      customAction();
    } else {
      console.log("BackButton - Using default navigation logic");
      handleNavigationLogic(location, navigate);
    }
  };

  return (
    <Button 
      variant="ghost" 
      className={`text-[#FFC900]/70 hover:text-[#FFC900] hover:bg-[#FFC900]/10 ${className}`} 
      onClick={handleBack} 
      size="sm"
    >
      <ChevronLeft className="h-4 w-4 mr-1" />
      <span>Back</span>
    </Button>
  );
};

export default BackButton;
