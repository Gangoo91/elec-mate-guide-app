
import React, { useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Calculator, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import html2pdf from 'jspdf-html2canvas';
import { toast } from "sonner";
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger 
} from "@/components/ui/collapsible";

interface EstimateDisplayProps {
  estimate: string;
  clientName: string;
  jobReference: string;
}

export const EstimateDisplay: React.FC<EstimateDisplayProps> = ({ estimate, clientName, jobReference }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  
  const handleDownloadPDF = async () => {
    const element = contentRef.current;
    if (!element) {
      toast.error("Could not find content to download");
      return;
    }

    try {
      const options = {
        margin: {
          top: 15,
          right: 15,
          bottom: 15,
          left: 15
        },
        filename: `estimate-${jobReference || 'job'}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm' as 'mm', format: 'a4', orientation: 'portrait' as 'portrait' }
      };
      
      toast.loading("Generating PDF...");
      
      await html2pdf(element, options);
      
      toast.success("PDF downloaded successfully");
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast.error("Failed to generate PDF. Please try again.");
    }
  };

  if (!estimate) return null;

  const sections = estimate.split(/\n#\s/).filter(Boolean).map(section => {
    const [title, ...content] = section.split('\n');
    return {
      title: title.trim(),
      content: content
        .join('\n')
        .trim()
        .split('\n')
        .map(line => {
          if (line.startsWith('*') || line.startsWith('-')) {
            return `<li class="mb-2 text-[#FFC900]/90 ml-5 list-disc">${line.substring(2)}</li>`;
          }
          return `<p class="mb-2 text-[#FFC900]/90">${line}</p>`;
        })
        .join('')
    };
  });

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
        
        <div ref={contentRef} className="space-y-4">
          {sections.map((section, index) => (
            <Collapsible key={index} className="bg-[#353824] rounded-lg overflow-hidden">
              <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-[#FFC900] hover:bg-[#404328] transition-colors">
                <span className="text-xl font-bold flex items-center">
                  <Calculator className="mr-2 h-5 w-5" />
                  {section.title}
                </span>
              </CollapsibleTrigger>
              <CollapsibleContent className="p-4 pt-0">
                <div
                  className="prose prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
