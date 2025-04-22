
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Check, Info, BookText, ListChecks } from "lucide-react";

interface ContentBlock {
  type: string;
  content: string;
  items?: string[];
}

interface CourseContent {
  key_points: string[];
  main_content: ContentBlock[];
  practical_tips: string[];
}

interface CourseContentSectionProps {
  content: CourseContent;
}

const CourseContentSection = ({ content }: CourseContentSectionProps) => {
  return (
    <div className="space-y-6 p-4">
      {/* Key Points */}
      <div className="space-y-3">
        <h3 className="text-[#FFC900] text-xl font-semibold flex items-center gap-2">
          <Info className="h-5 w-5" />
          Key Points
        </h3>
        <ul className="space-y-2">
          {content.key_points.map((point, index) => (
            <li key={index} className="flex items-start gap-2 text-[#FFC900]/70">
              <Check className="h-5 w-5 mt-1 flex-shrink-0 text-[#FFC900]" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="space-y-4">
        {content.main_content.map((block, index) => {
          switch (block.type) {
            case 'text':
              return (
                <div key={index} className="flex items-start gap-2">
                  <BookText className="h-5 w-5 mt-1 flex-shrink-0 text-[#FFC900]" />
                  <p className="text-[#FFC900]/70">{block.content}</p>
                </div>
              );
            case 'regulation':
              return (
                <Card key={index} className="bg-[#FFC900]/5 border-[#FFC900]/20">
                  <CardContent className="p-4">
                    <p className="text-[#FFC900]">{block.content}</p>
                  </CardContent>
                </Card>
              );
            case 'important_note':
              return (
                <Card key={index} className="bg-red-500/5 border-red-500/20">
                  <CardContent className="p-4">
                    <p className="text-red-400">{block.content}</p>
                  </CardContent>
                </Card>
              );
            case 'checklist':
              return (
                <div key={index} className="space-y-2">
                  <h4 className="text-[#FFC900] font-medium flex items-center gap-2">
                    <ListChecks className="h-5 w-5" />
                    Safety Checklist
                  </h4>
                  <ul className="space-y-2 ml-7">
                    {block.items?.map((item, idx) => (
                      <li key={idx} className="list-disc text-[#FFC900]/70">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            default:
              return null;
          }
        })}
      </div>

      {/* Practical Tips */}
      <div className="space-y-3">
        <h3 className="text-[#FFC900] text-xl font-semibold">Practical Tips</h3>
        <ul className="space-y-2">
          {content.practical_tips.map((tip, index) => (
            <li key={index} className="flex items-start gap-2 text-[#FFC900]/70">
              <Check className="h-5 w-5 mt-1 flex-shrink-0 text-[#FFC900]" />
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseContentSection;
