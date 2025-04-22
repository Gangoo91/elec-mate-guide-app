
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

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
  const isMobile = useIsMobile();

  const handleCardClick = (e: React.MouseEvent) => {
    if (fullCardLink) {
      e.preventDefault();
      navigate(fullCardLink);
    }
    if (action?.onClick) {
      e.preventDefault();
      action.onClick();
    }
  };

  return fullCardLink ? (
    <Link
      to={fullCardLink}
      className="block h-full focus:outline-none focus:ring-2 focus:ring-[#FFC900]"
      tabIndex={0}
    >
      <Card className="h-full bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/40 transition-all duration-300 group cursor-pointer">
        <CardHeader className="pb-1 p-3 md:p-4">
          <div className="flex items-center gap-2">
            <div className="text-[#FFC900]">{icon}</div>
            <h3 className="text-[#FFC900] text-base md:text-lg font-semibold">{title}</h3>
          </div>
        </CardHeader>
        <CardContent className="p-3 pt-0 md:p-4 md:pt-0">
          <p className="text-[#FFC900]/70 mb-2 text-xs md:text-sm">{description}</p>
          <div className="flex items-center gap-1 text-[#FFC900] text-xs md:text-sm font-medium group-hover:underline">
            <span>Open</span>
            <ArrowRight className="h-3 w-3 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </CardContent>
      </Card>
    </Link>
  ) : (
    <div
      className="h-full cursor-pointer group"
      tabIndex={0}
      onClick={handleCardClick}
      onKeyDown={e => {
        if (e.key === "Enter" || e.key === " ") handleCardClick(e as any);
      }}
      role="button"
      aria-pressed="false"
    >
      <Card className="h-full bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/40 transition-all duration-300">
        <CardHeader className="pb-1 p-3 md:p-4">
          <div className="flex items-center gap-2">
            <div className="text-[#FFC900]">{icon}</div>
            <h3 className="text-[#FFC900] text-base md:text-lg font-semibold">{title}</h3>
          </div>
        </CardHeader>
        <CardContent className="p-3 pt-0 md:p-4 md:pt-0">
          <p className="text-[#FFC900]/70 mb-2 text-xs md:text-sm">{description}</p>
          {action && (
            <span className="flex items-center gap-1 text-[#FFC900] text-xs md:text-sm">
              {action.label}
              <ArrowRight className="h-3 w-3 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform" />
            </span>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ResourceCard;
