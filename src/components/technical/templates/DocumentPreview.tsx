
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { WhitePaperDocument, WhitePaperHeader, WhitePaperContent, WhitePaperFooter } from './WhitePaperDocument';
import { Button } from "@/components/ui/button";
import { Download, Printer, FileCheck, X, FileSignature } from "lucide-react";
import { format } from 'date-fns';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

interface DocumentPreviewProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  templateId: string | null;
  documentType: 'estimates' | 'invoices' | 'certificates';
}

interface SignatureData {
  electricianSignature?: string;
  clientSignature?: string;
  dateSigned?: string;
  status?: string;
}

const DocumentPreview = ({ isOpen, onOpenChange, templateId, documentType }: DocumentPreviewProps) => {
  const [signatureData, setSignatureData] = useState<SignatureData | null>(null);
  const { user } = useAuth();
  
  useEffect(() => {
    const fetchSignatures = async () => {
      if (!templateId || !user || !isOpen) return;
      
      try {
        // Try to fetch any existing signed document with this template
        const { data, error } = await supabase
          .from('job_estimates')
          .select('*')
          .eq('user_id', user.id)
          .eq('job_description', `Template: ${templateId}`)
          .order('created_at', { ascending: false })
          .limit(1);
          
        if (error) {
          console.error("Error fetching signatures:", error);
          return;
        }
        
        if (data && data.length > 0) {
          try {
            const parsedResponse = JSON.parse(data[0].estimate_response || '{}');
            setSignatureData({
              electricianSignature: parsedResponse.electrician_signature,
              clientSignature: parsedResponse.client_signature,
              dateSigned: parsedResponse.date_signed,
              status: parsedResponse.status
            });
          } catch (e) {
            console.error("Error parsing signature data:", e);
          }
        } else {
          setSignatureData(null);
        }
      } catch (err) {
        console.error("Error in signature fetching:", err);
      }
    };
    
    fetchSignatures();
  }, [templateId, user, isOpen]);

  if (!templateId) return null;
  
  const isMobile = useIsMobile();
  const isEstimate = documentType === 'estimates';
  const documentTypeLabel = isEstimate ? 'Estimate' : 'Invoice';
  const today = format(new Date(), 'dd MMM yyyy');
  const documentNumber = isEstimate ? 'EST-2025-0001' : 'INV-2025-0001';
  
  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // In a real implementation, we would generate and download a PDF
    console.log('Downloading document');
  };
  
  const DocumentContent = () => (
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

      <WhitePaperDocument>
        <WhitePaperHeader>
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold">SPARK ELECTRICAL</h1>
              <p className="text-gray-500">Professional Electrical Services</p>
            </div>
            <div className="text-right">
              <h2 className="text-xl font-semibold text-gray-700">{documentTypeLabel}</h2>
              <p className="text-gray-500">{documentNumber}</p>
              <p className="text-gray-500">Date: {today}</p>
            </div>
          </div>
        </WhitePaperHeader>

        <WhitePaperContent>
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
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="text-left py-2 text-gray-700">Description</th>
                    <th className="text-right py-2 text-gray-700">Quantity</th>
                    <th className="text-right py-2 text-gray-700">Unit Price</th>
                    <th className="text-right py-2 text-gray-700">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-2">Full home rewiring service</td>
                    <td className="text-right py-2">1</td>
                    <td className="text-right py-2">£2,500.00</td>
                    <td className="text-right py-2">£2,500.00</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2">Premium electrical outlets</td>
                    <td className="text-right py-2">12</td>
                    <td className="text-right py-2">£25.00</td>
                    <td className="text-right py-2">£300.00</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2">LED light fixtures</td>
                    <td className="text-right py-2">8</td>
                    <td className="text-right py-2">£45.00</td>
                    <td className="text-right py-2">£360.00</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2">Consumer unit replacement</td>
                    <td className="text-right py-2">1</td>
                    <td className="text-right py-2">£350.00</td>
                    <td className="text-right py-2">£350.00</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={2}></td>
                    <td className="text-right py-2 font-semibold">Subtotal</td>
                    <td className="text-right py-2">£3,510.00</td>
                  </tr>
                  <tr>
                    <td colSpan={2}></td>
                    <td className="text-right py-2 font-semibold">VAT (20%)</td>
                    <td className="text-right py-2">£702.00</td>
                  </tr>
                  <tr className="border-t border-gray-300">
                    <td colSpan={2}></td>
                    <td className="text-right py-2 font-bold">Total</td>
                    <td className="text-right py-2 font-bold">£4,212.00</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          {isEstimate ? (
            <div className="mb-6">
              <h3 className="font-semibold text-gray-700 mb-2">Notes</h3>
              <p className="text-gray-600">This estimate is valid for 30 days from the date issued. The actual cost may vary based on unforeseen circumstances discovered during the work.</p>
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
          
          {/* Signatures Section */}
          {signatureData && (
            <div className="mt-10 border-t pt-6 border-gray-200">
              <h3 className="font-semibold text-gray-700 mb-4">Signatures</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {signatureData.electricianSignature && (
                  <div>
                    <p className="text-gray-500 mb-2">Electrician Signature:</p>
                    <div className="border border-gray-200 rounded h-24 flex items-center justify-center overflow-hidden">
                      <img 
                        src={signatureData.electricianSignature} 
                        alt="Electrician Signature" 
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    {signatureData.dateSigned && (
                      <p className="text-sm text-gray-500 mt-1">
                        Signed on {format(new Date(signatureData.dateSigned), 'dd MMM yyyy')}
                      </p>
                    )}
                  </div>
                )}
                
                {signatureData.clientSignature ? (
                  <div>
                    <p className="text-gray-500 mb-2">Client Signature:</p>
                    <div className="border border-gray-200 rounded h-24 flex items-center justify-center overflow-hidden">
                      <img 
                        src={signatureData.clientSignature} 
                        alt="Client Signature" 
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    {signatureData.clientSignature && (
                      <p className="text-sm text-gray-500 mt-1">
                        Document fully signed and completed
                      </p>
                    )}
                  </div>
                ) : (
                  <div className="border border-dashed border-gray-200 rounded h-24 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <FileSignature className="mx-auto h-6 w-6 mb-1" />
                      <p className="text-sm">Awaiting client signature</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </WhitePaperContent>

        <WhitePaperFooter>
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
        </WhitePaperFooter>
      </WhitePaperDocument>
    </div>
  );

  return isMobile ? (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="h-[90vh] p-0 bg-gray-100">
        <DocumentContent />
      </SheetContent>
    </Sheet>
  ) : (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[800px] p-0 bg-gray-100">
        <DocumentContent />
      </DialogContent>
    </Dialog>
  );
};

export default DocumentPreview;
