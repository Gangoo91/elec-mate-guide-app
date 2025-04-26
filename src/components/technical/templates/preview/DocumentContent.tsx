
import React from 'react';
import { DocumentHeader } from './DocumentHeader';
import { DocumentSummaryTable } from './DocumentSummaryTable';
import { DocumentSignatures } from './DocumentSignatures';
import { Download, Printer, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
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
      <div className="flex justify-between items-center mb-4 print:hidden">
        <h2 className="text-lg font-semibold">{documentTypeLabel} Preview</h2>
        <div className="flex space-x-2">
          <Button 
            onClick={handleDownload} 
            variant="outline" 
            size="sm"
            className="bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
          >
            <Download className="w-4 h-4 mr-2" />
            {!isMobile && "Download"}
          </Button>
          <Button 
            onClick={handlePrint} 
            variant="outline" 
            size="sm"
            className="bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
          >
            <Printer className="w-4 h-4 mr-2" />
            {!isMobile && "Print"}
          </Button>
          {isMobile && (
            <Button
              onClick={() => onOpenChange(false)}
              variant="outline"
              size="sm"
              className="bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
            >
              <X className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>

      <div className="bg-white text-black rounded-md shadow-md print:shadow-none border border-gray-200 overflow-hidden">
        <div className="border-b border-gray-200 p-4 md:p-6">
          <DocumentHeader 
            isEstimate={isEstimate} 
            today={today} 
            documentNumber={documentNumber} 
          />
        </div>

        <div className="p-4 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">From:</h3>
              <p>Spark Electrical Ltd</p>
              <p>123 Circuit Avenue</p>
              <p>London, EC1A 1BB</p>
              <p>United Kingdom</p>
              <p className="mt-2">VAT: GB123456789</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">To:</h3>
              <p>John Smith</p>
              <p>456 Wiring Road</p>
              <p>London, SW1A 1AA</p>
              <p>United Kingdom</p>
              <p className="mt-2">Project: Home Rewiring</p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-semibold text-gray-700 mb-4">Summary</h3>
            <DocumentSummaryTable />
          </div>

          {isEstimate ? (
            <div className="mb-6">
              <h3 className="font-semibold text-gray-700 mb-2">Notes</h3>
              <p className="text-gray-600">
                This estimate is valid for 30 days from the date issued. The actual cost may vary based on unforeseen circumstances discovered during the work.
              </p>
            </div>
          ) : (
            <div className="mb-6">
              <h3 className="font-semibold text-gray-700 mb-2">Payment Details</h3>
              <p className="text-gray-600 mb-2">Please make payment within 14 days to the following account:</p>
              <div className="pl-4 border-l-2 border-gray-300">
                <p>Bank: National Westminster Bank</p>
                <p>Account Name: Spark Electrical Ltd</p>
                <p>Sort Code: 12-34-56</p>
                <p>Account Number: 12345678</p>
                <p>Reference: {documentNumber}</p>
              </div>
            </div>
          )}

          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Terms & Conditions</h3>
            <ul className="list-disc pl-5 text-gray-600 text-sm">
              <li>All electrical work complies with BS7671:2018 Requirements for Electrical Installations.</li>
              <li>Work is guaranteed for 12 months from completion date.</li>
              <li>{isEstimate ? "Final invoice" : "Payment"} is due within 14 days of completion.</li>
              <li>Late payments are subject to a 2% monthly interest charge.</li>
            </ul>
          </div>

          <DocumentSignatures signatureData={signatureData} />
        </div>

        <div className="border-t border-gray-200 p-4 md:p-6 text-gray-500 text-sm">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xs md:text-sm">Spark Electrical Ltd | Registered in England & Wales No. 12345678</p>
              <p className="text-xs md:text-sm">info@sparkelectrical.com | +44 20 1234 5678 | www.sparkelectrical.com</p>
            </div>
            <div>
              {signatureData && signatureData.clientSignature ? (
                <FileCheck className="h-5 w-5 text-green-600" />
              ) : (
                <FileSignature className="h-5 w-5 text-amber-600" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
