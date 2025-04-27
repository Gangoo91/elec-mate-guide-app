
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ComponentInfo } from "@/types/arLearning";

interface HowToUseSectionProps {
  component: ComponentInfo;
}

const HowToUseSection = ({ component }: HowToUseSectionProps) => {
  return (
    <Card className="bg-[#22251e] border-[#FFC900]/20">
      <CardHeader>
        <CardTitle className="text-[#FFC900]">How to Use This Feature</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 text-[#FFC900]/70">
          <p>
            Interact with the {component.name} to learn about its structure and function:
          </p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Use the zoom buttons to get a closer look</li>
            <li>Rotate the component to view from different angles</li>
            <li>Reset the view to return to default position</li>
            <li>Review specifications and installation tips</li>
            <li>Watch the video demonstration for practical insights</li>
          </ol>
        </div>
      </CardContent>
    </Card>
  );
};

export default HowToUseSection;
