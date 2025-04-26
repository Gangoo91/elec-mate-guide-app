
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";
import { InvoiceForm } from './InvoiceForm';

export function InvoiceManager() {
  return (
    <Card className="bg-[#1a1c15] border-[#FFC900]/20">
      <CardHeader className="pb-4 border-b border-[#FFC900]/10">
        <div className="flex items-center gap-4">
          <FileText className="h-8 w-8 text-[#FFC900] flex-shrink-0" />
          <CardTitle className="text-2xl font-bold text-[#FFC900]">
            Create Invoice
          </CardTitle>
        </div>
      </CardHeader>
      
      <CardContent className="pt-6">
        <InvoiceForm />
      </CardContent>
    </Card>
  );
}
