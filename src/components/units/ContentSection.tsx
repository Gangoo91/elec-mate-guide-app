
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ContentSectionProps {
  title: string;
  content: React.ReactNode;
  className?: string;
}

export const ContentSection = ({ title, content, className }: ContentSectionProps) => (
  <Card className={cn("mb-6 bg-[#22251e] border-[#FFC900]/20", className)}>
    <CardContent className="pt-6">
      <h3 className="text-[#FFC900] font-medium text-xl mb-4">{title}</h3>
      <div className="text-[#FFC900]/80 space-y-3">
        {content}
      </div>
    </CardContent>
  </Card>
);
