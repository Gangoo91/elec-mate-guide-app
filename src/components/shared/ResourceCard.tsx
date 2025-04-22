
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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

  // All cards, including resources & hubs, navigate on click if given a fullCardLink
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

  // Make sure the card is focusable & keyboard navigable
  return fullCardLink ? (
    <Link
      to={fullCardLink}
      className="block h-full focus:outline-none focus:ring-2 focus:ring-[#FFC900]"
      tabIndex={0}
    >
      <Card className="h-full bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/40 transition-all duration-300 group cursor-pointer">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3 mb-2">
            <div className="text-[#FFC900]">{icon}</div>
            <h3 className="text-[#FFC900] text-lg font-semibold">{title}</h3>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-[#FFC900]/70 mb-4 text-sm">{description}</p>
          <div className="flex items-center gap-2 text-[#FFC900] font-medium group-hover:underline">
            <span>Open</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3 mb-2">
            <div className="text-[#FFC900]">{icon}</div>
            <h3 className="text-[#FFC900] text-lg font-semibold">{title}</h3>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-[#FFC900]/70 mb-4 text-sm">{description}</p>
          {action && (
            <span className="flex items-center gap-1 text-[#FFC900]">
              {action.label}
              <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </span>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ResourceCard;
