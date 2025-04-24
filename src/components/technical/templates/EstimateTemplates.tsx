
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Eye, Printer, Pen } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner";

const EstimateTemplates = () => {
  const navigate = useNavigate();
  
  const templates = [
    {
      id: "standard",
      name: "Standard Estimate",
      description: "Professional itemized estimate with materials and labor breakdown",
      thumbnail: "/placeholder.svg"
    },
    {
      id: "detailed",
      name: "Detailed Project Estimate",
      description: "Comprehensive estimate with project phases and timelines",
      thumbnail: "/placeholder.svg"
    }
  ];

  const handlePrint = () => {
    window.print();
    toast.success("Preparing document for printing...");
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {templates.map((template) => (
        <Card key={template.id} className="overflow-hidden border-[#FFC900]/20 bg-[#2C2F24] hover:bg-[#363A2B] transition-colors">
          <div className="p-4">
            <AspectRatio ratio={16/9} className="bg-[#1a1c15] rounded-lg overflow-hidden mb-3">
              <div className="w-full h-full flex items-center justify-center">
                <FileText className="h-16 w-16 text-[#FFC900]/30" />
              </div>
            </AspectRatio>
            
            <h3 className="font-medium text-[#FFC900] text-lg mb-4">{template.name}</h3>
            
            <div className="grid grid-cols-3 gap-2">
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => navigate('/electricians/technical-tools/estimator')}
                className="bg-transparent border-[#FFC900] text-[#FFC900] hover:bg-[#FFC900] hover:text-black"
              >
                <Eye className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                onClick={handlePrint}
                className="bg-transparent border-[#FFC900] text-[#FFC900] hover:bg-[#FFC900] hover:text-black"
              >
                <Printer className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => navigate(`/electricians/technical-tools/templates/${template.id}/sign`)}
                className="bg-transparent border-[#FFC900] text-[#FFC900] hover:bg-[#FFC900] hover:text-black"
              >
                <Pen className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default EstimateTemplates;
