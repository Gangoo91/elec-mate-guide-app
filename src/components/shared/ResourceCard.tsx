
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

type ResourceCardAction = {
  label: string;
  href?: string;
  onClick?: () => void;
};

type ResourceCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  action?: ResourceCardAction;
  fullCardLink?: string;
};

const ResourceCard = ({
  title,
  description,
  icon,
  action,
  fullCardLink,
}: ResourceCardProps) => {
  const navigate = useNavigate();
  
  const handleClick = (e: React.MouseEvent) => {
    if (action?.onClick) {
      e.preventDefault();
      action.onClick();
    } else if (fullCardLink) {
      e.preventDefault();
      navigate(fullCardLink);
    }
  };

  const cardContent = (
    <Card className="h-full bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/40 transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3 mb-2">
          <div className="text-[#FFC900]">{icon}</div>
          <h3 className="text-[#FFC900] text-lg font-semibold">{title}</h3>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-[#FFC900]/70 mb-4 text-sm">{description}</p>
        
        {action && (
          <Button
            variant="link"
            onClick={action.onClick}
            className="text-[#FFC900] px-0 hover:text-[#FFC900] hover:no-underline flex items-center gap-1 group"
          >
            {action.label}
            <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
        )}
      </CardContent>
    </Card>
  );

  if (fullCardLink && !action?.onClick) {
    return (
      <Link to={fullCardLink} className="block h-full">
        {cardContent}
      </Link>
    );
  }

  return (
    <div onClick={handleClick} className="cursor-pointer h-full">
      {cardContent}
    </div>
  );
};

export default ResourceCard;
