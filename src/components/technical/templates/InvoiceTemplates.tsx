
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Eye } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const InvoiceTemplates = () => {
  const templates = [
    {
      id: "standard-invoice",
      name: "Standard Invoice",
      description: "Professional invoice with itemized charges and payment details",
      thumbnail: "/placeholder.svg",
      comingSoon: false
    },
    {
      id: "detailed-invoice",
      name: "Detailed Service Invoice",
      description: "Comprehensive invoice with detailed breakdown of services",
      thumbnail: "/placeholder.svg",
      comingSoon: true
    }
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {templates.map((template) => (
        <Card key={template.id} className="overflow-hidden border-[#FFC900]/20 bg-[#2C2F24]">
          <div className="p-2">
            <AspectRatio ratio={16/9} className="bg-[#222]">
              <div className="w-full h-full flex items-center justify-center">
                <FileText className="h-16 w-16 text-[#FFC900]/30" />
              </div>
            </AspectRatio>
          </div>
          <CardContent className="p-4">
            <h3 className="font-medium text-[#FFC900]">{template.name}</h3>
            <p className="text-sm text-[#FFC900]/70 mt-1 mb-4">{template.description}</p>
            <div className="flex space-x-2">
              {template.comingSoon ? (
                <Button 
                  variant="outline" 
                  size="sm"
                  disabled
                  className="bg-transparent border-[#FFC900]/30 text-[#FFC900]/30 flex-1"
                >
                  Coming Soon
                </Button>
              ) : (
                <Button 
                  variant="outline" 
                  size="sm"
                  className="bg-transparent border-[#FFC900] text-[#FFC900] hover:bg-[#FFC900] hover:text-black flex-1"
                >
                  <Eye className="h-4 w-4 mr-2" />
                  Use Template
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default InvoiceTemplates;
