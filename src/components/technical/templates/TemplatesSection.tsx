
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText } from "lucide-react";
import EstimateTemplates from "./EstimateTemplates";
import InvoiceTemplates from "./InvoiceTemplates";

const TemplatesSection = () => {
  const [activeTab, setActiveTab] = useState("estimates");

  return (
    <Card className="bg-[#1a1c15] border-[#FFC900]/20">
      <CardHeader className="pb-4 border-b border-[#FFC900]/10">
        <div className="flex items-start gap-4">
          <FileText className="h-8 w-8 text-[#FFC900] flex-shrink-0 mt-1" />
          <div>
            <CardTitle className="text-2xl font-bold text-[#FFC900] mb-2">
              Templates & Documents
            </CardTitle>
            <p className="text-[#FFC900]/80 text-sm">
              Professional document templates for your electrical business. Generate, customize, and download as PDFs.
            </p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-6">
        <Tabs 
          defaultValue="estimates" 
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-[#2C2F24]">
            <TabsTrigger 
              value="estimates" 
              className="data-[state=active]:bg-[#FFC900] data-[state=active]:text-black text-[#FFC900]"
            >
              Estimates
            </TabsTrigger>
            <TabsTrigger 
              value="invoices" 
              className="data-[state=active]:bg-[#FFC900] data-[state=active]:text-black text-[#FFC900]"
            >
              Invoices
            </TabsTrigger>
            <TabsTrigger 
              value="certificates" 
              className="data-[state=active]:bg-[#FFC900] data-[state=active]:text-black text-[#FFC900]"
            >
              Certificates
            </TabsTrigger>
          </TabsList>

          <TabsContent value="estimates" className="mt-0">
            <EstimateTemplates />
          </TabsContent>

          <TabsContent value="invoices" className="mt-0">
            <InvoiceTemplates />
          </TabsContent>

          <TabsContent value="certificates" className="mt-0">
            <div className="flex flex-col items-center justify-center p-8 border border-dashed border-[#FFC900]/20 rounded-lg">
              <FileText className="h-16 w-16 text-[#FFC900]/30 mb-4" />
              <p className="text-[#FFC900]/70 text-lg">Certificate templates coming soon</p>
              <p className="text-[#FFC900]/50 text-sm max-w-md text-center mt-2">
                We're working on adding professional electrical certificates for compliance and safety documentation.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default TemplatesSection;
