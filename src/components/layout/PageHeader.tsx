
import React from "react";
import BackButton from "@/components/navigation/BackButton";

interface PageHeaderProps {
  title: string;
  description?: string;
  customBackAction?: () => void;
  actions?: React.ReactNode;
  hideBackButton?: boolean;
}

const PageHeader = ({ title, description, customBackAction, actions, hideBackButton }: PageHeaderProps) => {
  return (
    <div className="mb-8">
      {!hideBackButton && <BackButton customAction={customBackAction} />}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold text-[#FFC900] mb-2">
            {title}
          </h1>
          {description && (
            <p className="text-[#FFC900]/70 text-sm md:text-base max-w-2xl">
              {description}
            </p>
          )}
        </div>
        {actions && <div className="mt-4 md:mt-0">{actions}</div>}
      </div>
    </div>
  );
};

export default PageHeader;
