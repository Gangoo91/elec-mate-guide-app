
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface EALContentSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

const EALContentSection = ({ title, children, className, icon }: EALContentSectionProps) => {
  return (
    <Card className={cn("mb-6 overflow-hidden border-[#FFC900]/20 bg-[#22251e] shadow-md", className)}>
      <CardContent className="p-0">
        <div className="bg-[#2a2d24] p-4 border-b border-[#FFC900]/20">
          <h3 className="text-[#FFC900] font-medium text-xl flex items-center">
            {icon && <span className="mr-2">{icon}</span>}
            {title}
          </h3>
        </div>
        <div className="p-5 text-[#FFC900]/80">
          {children}
        </div>
      </CardContent>
    </Card>
  );
};

export default EALContentSection;
