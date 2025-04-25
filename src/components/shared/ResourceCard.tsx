
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ResourceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  action?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  children?: React.ReactNode;
  fullCardLink?: string;
}

const ResourceCard = ({ 
  title, 
  description, 
  icon, 
  action, 
  children, 
  fullCardLink 
}: ResourceCardProps) => {
  if (fullCardLink) {
    return (
      <Link 
        to={fullCardLink}
        className="block h-full cursor-pointer"
      >
        <Card className="h-full bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="text-primary">{icon}</div>
              <div>
                <h3 className="text-[#FFC900] font-medium text-lg mb-2">{title}</h3>
                <p className="text-[#FFC900]/70 text-sm">{description}</p>
                {children && <div className="mt-4">{children}</div>}
                {action && (
                  <div className="mt-4">
                    <Button 
                      className="bg-[#FFC900] hover:bg-[#e5b700] text-[#151812]"
                    >
                      {action.label}
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    );
  }
  
  return (
    <div className="block h-full">
      <Card className="h-full bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="text-primary">{icon}</div>
            <div>
              <h3 className="text-[#FFC900] font-medium text-lg mb-2">{title}</h3>
              <p className="text-[#FFC900]/70 text-sm">{description}</p>
              {children && <div className="mt-4">{children}</div>}
              {action && (
                <div className="mt-4">
                  {action.href ? (
                    <Link 
                      to={action.href}
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                    >
                      {action.label}
                    </Link>
                  ) : (
                    <Button 
                      onClick={action.onClick}
                      className="bg-[#FFC900] hover:bg-[#e5b700] text-[#151812]"
                    >
                      {action.label}
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResourceCard;
