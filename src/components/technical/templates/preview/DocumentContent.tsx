
import React from 'react';
import { DocumentHeader } from './DocumentHeader';
import { DocumentSummaryTable } from './DocumentSummaryTable';
import { DocumentSignatures } from './DocumentSignatures';
import { DocumentActions } from './DocumentActions';
import { DocumentAddressSection } from './DocumentAddressSection';
import { DocumentNotes } from './DocumentNotes';
import { DocumentTerms } from './DocumentTerms';
import { DocumentFooter } from './DocumentFooter';
import { format } from 'date-fns';

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

  return (
    <div className="p-4 overflow-y-auto max-h-[80vh] md:max-h-[80vh]">
      <DocumentActions
        handleDownload={handleDownload}
        handlePrint={handlePrint}
        onOpenChange={onOpenChange}
        isMobile={isMobile}
        documentTypeLabel={documentTypeLabel}
      />

      <div className="bg-white text-black rounded-md shadow-md print:shadow-none border border-gray-200 overflow-hidden">
        <div className="border-b border-gray-200 p-4 md:p-6">
          <DocumentHeader 
            isEstimate={isEstimate} 
            today={today} 
            documentNumber={documentNumber} 
          />
        </div>

        <div className="p-4 md:p-6">
          <DocumentAddressSection />

          <div className="mb-8">
            <h3 className="font-semibold text-gray-700 mb-4">Summary</h3>
            <DocumentSummaryTable />
          </div>

          <DocumentNotes isEstimate={isEstimate} documentNumber={documentNumber} />
          <DocumentTerms isEstimate={isEstimate} />
          <DocumentSignatures signatureData={signatureData} />
        </div>

        <DocumentFooter signatureData={signatureData} />
      </div>
    </div>
  );
};
