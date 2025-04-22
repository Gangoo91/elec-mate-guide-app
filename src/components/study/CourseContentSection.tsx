
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Check, Info, BookText, ListChecks, AlertCircle, FileText, LightbulbIcon } from "lucide-react";

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
  if (!content || !content.key_points || !content.main_content || !content.practical_tips) {
    return (
      <div className="p-4 space-y-3 text-center">
        <AlertCircle className="h-6 w-6 text-yellow-500 mx-auto" />
        <p className="text-[#FFC900]/70">Content structure is incomplete or invalid.</p>
      </div>
    );
  }

  const renderContentBlock = (block: ContentBlock, index: number) => {
    switch (block.type) {
      case 'text':
        return (
          <div key={index} className="flex items-start gap-2 mb-4">
            <FileText className="h-5 w-5 mt-1 flex-shrink-0 text-[#FFC900]" />
            <p className="text-[#FFC900]/70">{block.content}</p>
          </div>
        );
      case 'regulation':
        return (
          <Card key={index} className="bg-[#FFC900]/5 border-[#FFC900]/20 mb-4">
            <CardContent className="p-4">
              <div className="flex items-start gap-2">
                <Info className="h-5 w-5 mt-1 flex-shrink-0 text-[#FFC900]" />
                <p className="text-[#FFC900]">{block.content}</p>
              </div>
            </CardContent>
          </Card>
        );
      case 'important_note':
        return (
          <Card key={index} className="bg-red-500/5 border-red-500/20 mb-4">
            <CardContent className="p-4">
              <div className="flex items-start gap-2">
                <AlertCircle className="h-5 w-5 mt-1 flex-shrink-0 text-red-400" />
                <p className="text-red-400">{block.content}</p>
              </div>
            </CardContent>
          </Card>
        );
      case 'checklist':
        return (
          <div key={index} className="space-y-2 mb-4">
            <h4 className="text-[#FFC900] font-medium flex items-center gap-2">
              <ListChecks className="h-5 w-5" />
              Key Points to Remember
            </h4>
            <ul className="space-y-2 ml-7">
              {block.items?.map((item, idx) => (
                <li key={idx} className="text-[#FFC900]/70 flex items-start gap-2">
                  <Check className="h-4 w-4 mt-1 flex-shrink-0 text-[#FFC900]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6 p-2">
      {/* Key Points */}
      {content.key_points && content.key_points.length > 0 && (
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
      )}

      {/* Main Content */}
      {content.main_content && content.main_content.length > 0 && (
        <div className="space-y-1">
          <h3 className="text-[#FFC900] text-xl font-semibold flex items-center gap-2 mb-3">
            <BookText className="h-5 w-5" />
            Main Content
          </h3>
          {content.main_content.map((block, index) => renderContentBlock(block, index))}
        </div>
      )}

      {/* Practical Tips */}
      {content.practical_tips && content.practical_tips.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-[#FFC900] text-xl font-semibold flex items-center gap-2">
            <LightbulbIcon className="h-5 w-5" />
            Practical Tips
          </h3>
          <Card className="bg-[#22251e]/50 border-[#FFC900]/20">
            <CardContent className="p-4">
              <ul className="space-y-3">
                {content.practical_tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2 text-[#FFC900]/70">
                    <Check className="h-5 w-5 mt-1 flex-shrink-0 text-[#FFC900]" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default CourseContentSection;
