
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface LessonContentProps {
  title: string;
  children: React.ReactNode;
}

const LessonContent = ({ title, children }: LessonContentProps) => {
  return (
    <Card className="bg-[#22251e] border-[#FFC900]/20 mb-6">
      <CardContent className="pt-6">
        <h2 className="text-2xl font-semibold text-[#FFC900] mb-6">{title}</h2>
        <div className="text-[#FFC900]/80 space-y-4">
          {children}
        </div>
      </CardContent>
    </Card>
  );
};

export default LessonContent;
