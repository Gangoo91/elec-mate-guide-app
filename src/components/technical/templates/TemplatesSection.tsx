
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import EstimateTemplates from "./EstimateTemplates";
import InvoiceTemplates from "./InvoiceTemplates";

const TemplatesSection = () => {
  const [selectedType, setSelectedType] = useState<'estimates' | 'invoices' | 'certificates'>('estimates');

  const getDocumentTitle = () => {
    switch (selectedType) {
      case 'estimates':
        return 'Estimates';
      case 'invoices':
        return 'Invoices';
      case 'certificates':
        return 'Certificates';
      default:
        return 'Estimates';
    }
  };

  return (
    <Card className="bg-[#1a1c15] border-[#FFC900]/20">
      <CardHeader className="pb-4 border-b border-[#FFC900]/10">
        <div className="flex items-start gap-4">
          <FileText className="h-8 w-8 text-[#FFC900] flex-shrink-0 mt-1" />
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <CardTitle className="text-2xl font-bold text-[#FFC900]">
                Templates & Documents
              </CardTitle>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="bg-[#2C2F24] border-[#FFC900]/20 text-[#FFC900] hover:bg-[#363A2B] hover:text-[#FFC900]"
                  >
                    {getDocumentTitle()}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-[#2C2F24] border-[#FFC900]/20">
                  <DropdownMenuItem 
                    className="text-[#FFC900] focus:bg-[#363A2B] focus:text-[#FFC900]"
                    onClick={() => setSelectedType('estimates')}
                  >
                    Estimates
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    className="text-[#FFC900] focus:bg-[#363A2B] focus:text-[#FFC900]"
                    onClick={() => setSelectedType('invoices')}
                  >
                    Invoices
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    className="text-[#FFC900] focus:bg-[#363A2B] focus:text-[#FFC900]"
                    onClick={() => setSelectedType('certificates')}
                  >
                    Certificates
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <p className="text-[#FFC900]/80 text-sm">
              Professional document templates for your electrical business. Generate, customize, and download as PDFs.
            </p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-6">
        {selectedType === 'estimates' && <EstimateTemplates />}
        {selectedType === 'invoices' && <InvoiceTemplates />}
        {selectedType === 'certificates' && (
          <div className="flex flex-col items-center justify-center p-8 border border-dashed border-[#FFC900]/20 rounded-lg">
            <FileText className="h-16 w-16 text-[#FFC900]/30 mb-4" />
            <p className="text-[#FFC900]/70 text-lg">Certificate templates coming soon</p>
            <p className="text-[#FFC900]/50 text-sm max-w-md text-center mt-2">
              We're working on adding professional electrical certificates for compliance and safety documentation.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TemplatesSection;
