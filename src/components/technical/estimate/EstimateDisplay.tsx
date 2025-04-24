
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Calculator } from "lucide-react";

interface EstimateDisplayProps {
  estimate: string;
}

const formatEstimate = (text: string) => {
  let formattedText = text
    .replace(/^(SUMMARY|MATERIALS BREAKDOWN|LABOUR ESTIMATE|TOTAL COST|NOTES):/gm, 
      match => `<h2 class="text-xl font-bold text-[#FFC900] mt-6 mb-3 flex items-center"><Calculator class="mr-2 h-5 w-5 text-[#FFC900]" />${match}</h2>`);
  
  formattedText = formattedText.replace(/^[-•]\s+(.*)/gm, 
    match => `<li class="mb-2 text-[#FFC900]/90 ml-5 list-disc">${match.substring(2)}</li>`);
  
  formattedText = formattedText.replace(/<li class="mb-2 text-\[#FFC900\]\/90 ml-5 list-disc">(.*?)(<\/li>[\r\n]+)(?!<li)/gs, 
    match => `<ul class="my-3">${match}</ul>`);
  
  formattedText = formattedText.replace(/£(\d+(\.\d{1,2})?)/g, 
    match => `<span class="text-[#FFC900] font-semibold">${match}</span>`);
  
  formattedText = formattedText.split('\n')
    .map(line => {
      if (line.trim() === '') return '<div class="h-2"></div>';
      if (line.match(/^<h2|^<li|^<ul|^<\/ul>/)) return line;
      return `<p class="mb-2 text-[#FFC900]/90">${line}</p>`;
    })
    .join('');
  
  formattedText = formattedText.replace(/<h2 class="text-xl font-bold text-\[#FFC900\] mt-6 mb-3 flex items-center"><Calculator class="mr-2 h-5 w-5 text-\[#FFC900\]" \/>TOTAL COST:<\/h2>/g, 
    match => `<div class="bg-[#2C2F24] border border-[#FFC900]/20 p-3 rounded-md my-4">${match}`);
  
  formattedText = formattedText.replace(/(?<=TOTAL COST:<\/h2>)(.*?)(?=<h2|$)/gs, 
    match => `${match}</div>`);
  
  return formattedText;
};

export const EstimateDisplay: React.FC<EstimateDisplayProps> = ({ estimate }) => {
  if (!estimate) return null;

  return (
    <Card className="mt-6 bg-[#2C2F24] border-[#FFC900]/20">
      <CardContent className="pt-6">
        <div 
          className="estimate-content text-[#FFC900]/90 space-y-1"
          dangerouslySetInnerHTML={{ 
            __html: formatEstimate(estimate)
          }} 
        />
      </CardContent>
    </Card>
  );
};
