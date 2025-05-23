
import React, { useState } from 'react';
import { DocumentHeader } from './DocumentHeader';
import { DocumentSummaryTable } from './DocumentSummaryTable';
import { DocumentSignatures } from './DocumentSignatures';
import { DocumentActions } from './DocumentActions';
import { DocumentAddressSection } from './DocumentAddressSection';
import { DocumentNotes } from './DocumentNotes';
import { DocumentTerms } from './DocumentTerms';
import { DocumentFooter } from './DocumentFooter';
import { format } from 'date-fns';
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";

interface DocumentContentProps {
  isEstimate: boolean;
  signatureData: any;
  handleDownload: () => void;
  handlePrint: () => void;
  onOpenChange: (open: boolean) => void;
  isMobile: boolean;
}

export const DocumentContent: React.FC<DocumentContentProps> = ({
  isEstimate,
  signatureData,
  handleDownload,
  handlePrint,
  onOpenChange,
  isMobile,
}) => {
  const today = format(new Date(), 'dd MMM yyyy');
  const documentNumber = isEstimate ? 'EST-2025-0001' : 'INV-2025-0001';
  const documentTypeLabel = isEstimate ? 'Estimate' : 'Invoice';

  const [fromAddress, setFromAddress] = useState({
    companyName: 'Spark Electrical Ltd',
    street: '123 Circuit Avenue',
    city: 'London',
    postcode: 'EC1A 1BB',
    country: 'United Kingdom',
    vatNumber: 'GB123456789'
  });

  const [toAddress, setToAddress] = useState({
    companyName: 'John Smith',
    street: '456 Wiring Road',
    city: 'London',
    postcode: 'SW1A 1AA',
    country: 'United Kingdom',
    projectName: 'Home Rewiring'
  });

  const handleFromAddressChange = (field: string, value: string) => {
    setFromAddress(prev => ({ ...prev, [field]: value }));
  };

  const handleToAddressChange = (field: string, value: string) => {
    setToAddress(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="flex flex-col h-[100svh] md:h-[80vh] bg-gray-100">
      <div className="px-4 py-4 md:p-4">
        <DocumentActions
          handleDownload={handleDownload}
          handlePrint={handlePrint}
          onOpenChange={onOpenChange}
          isMobile={isMobile}
          documentTypeLabel={documentTypeLabel}
        />
      </div>

      <ScrollArea className="flex-1 px-4 pb-4 md:px-4 md:pb-4">
        <div className="bg-white text-black rounded-md shadow-md print:shadow-none border border-gray-200">
          <div className="border-b border-gray-200 p-4">
            <DocumentHeader 
              isEstimate={isEstimate} 
              today={today} 
              documentNumber={documentNumber} 
            />
          </div>

          <div className="p-4">
            <DocumentAddressSection 
              fromAddress={fromAddress}
              toAddress={toAddress}
              onFromAddressChange={handleFromAddressChange}
              onToAddressChange={handleToAddressChange}
              editable={true}
            />

            <div className="mb-6">
              <h3 className="font-semibold text-gray-700 mb-4">Summary</h3>
              <DocumentSummaryTable />
            </div>

            <DocumentNotes isEstimate={isEstimate} documentNumber={documentNumber} />
            <DocumentTerms isEstimate={isEstimate} />
            <DocumentSignatures signatureData={signatureData} />
          </div>

          <DocumentFooter signatureData={signatureData} />
        </div>
      </ScrollArea>
    </div>
  );
};
