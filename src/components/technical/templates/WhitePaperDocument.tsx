
import React from 'react';
import { cn } from "@/lib/utils";

interface WhitePaperDocumentProps {
  children: React.ReactNode;
  className?: string;
}

export const WhitePaperDocument = ({ children, className }: WhitePaperDocumentProps) => {
  return (
    <div 
      className={cn(
        "bg-white text-black rounded-md shadow-md print:shadow-none", 
        "border border-gray-200 overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
};

export const WhitePaperHeader = ({ children, className }: WhitePaperDocumentProps) => {
  return (
    <div className={cn("border-b border-gray-200 p-6", className)}>
      {children}
    </div>
  );
};

export const WhitePaperContent = ({ children, className }: WhitePaperDocumentProps) => {
  return (
    <div className={cn("p-6", className)}>
      {children}
    </div>
  );
};

export const WhitePaperFooter = ({ children, className }: WhitePaperDocumentProps) => {
  return (
    <div className={cn("border-t border-gray-200 p-6 text-gray-500 text-sm", className)}>
      {children}
    </div>
  );
};
