
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import EstimateTemplates from "./EstimateTemplates";
import InvoiceTemplates from "./InvoiceTemplates";

const TemplatesSection = () => {
  const [selectedType, setSelectedType] = useState<'estimates' | 'invoices' | 'certificates'>('estimates');

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
              <Select 
                value={selectedType} 
                onValueChange={(value: 'estimates' | 'invoices' | 'certificates') => setSelectedType(value)}
              >
                <SelectTrigger 
                  className="w-[180px] bg-[#2C2F24] border-[#FFC900]/20 text-[#FFC900]"
                >
                  <SelectValue placeholder="Select document type" />
                </SelectTrigger>
                <SelectContent className="bg-[#2C2F24] border-[#FFC900]/20">
                  <SelectItem value="estimates" className="text-[#FFC900] focus:bg-[#363A2B] focus:text-[#FFC900]">Estimates</SelectItem>
                  <SelectItem value="invoices" className="text-[#FFC900] focus:bg-[#363A2B] focus:text-[#FFC900]">Invoices</SelectItem>
                  <SelectItem value="certificates" className="text-[#FFC900] focus:bg-[#363A2B] focus:text-[#FFC900]">Certificates</SelectItem>
                </SelectContent>
              </Select>
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
