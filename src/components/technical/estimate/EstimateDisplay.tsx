import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Calculator, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import html2pdf from 'jspdf-html2canvas';

interface EstimateDisplayProps {
  estimate: string;
  clientName: string;
  jobReference: string;
}

export const EstimateDisplay: React.FC<EstimateDisplayProps> = ({ estimate, clientName, jobReference }) => {
  const handleDownloadPDF = async () => {
    const element = document.getElementById('estimate-content');
    if (!element) return;

    try {
      await html2pdf(element, {
        margin: [15, 15, 15, 15],
        filename: `estimate-${jobReference || 'job'}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      });
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  if (!estimate) return null;

  return (
    <Card className="mt-6 bg-[#2C2F24] border-[#FFC900]/20">
      <CardContent className="pt-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            {clientName && (
              <p className="text-[#FFC900] text-sm mb-1">Client: {clientName}</p>
            )}
            {jobReference && (
              <p className="text-[#FFC900] text-sm">Reference: {jobReference}</p>
            )}
          </div>
          <Button
            onClick={handleDownloadPDF}
            variant="outline"
            className="bg-transparent border-[#FFC900] text-[#FFC900] hover:bg-[#FFC900] hover:text-black"
          >
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        </div>
        
        <div 
          id="estimate-content"
          className="estimate-content text-[#FFC900]/90 space-y-1"
          dangerouslySetInnerHTML={{ 
            __html: formatEstimate(estimate)
          }} 
        />
      </CardContent>
    </Card>
  );
};

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
