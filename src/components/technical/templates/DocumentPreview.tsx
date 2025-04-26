
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useIsMobile } from "@/hooks/use-mobile";
import { DocumentContent } from './preview/DocumentContent';

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

const DocumentPreview: React.FC<DocumentPreviewProps> = ({ 
  isOpen, 
  onOpenChange, 
  templateId, 
  documentType 
}) => {
  const [signatureData, setSignatureData] = useState<SignatureData | null>(null);
  const { user } = useAuth();
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const fetchSignatures = async () => {
      if (!templateId || !user || !isOpen) return;
      
      try {
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

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    console.log('Downloading document');
  };

  const content = (
    <DocumentContent
      isEstimate={documentType === 'estimates'}
      signatureData={signatureData}
      handleDownload={handleDownload}
      handlePrint={handlePrint}
      onOpenChange={onOpenChange}
      isMobile={isMobile}
    />
  );
  
  return isMobile ? (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="h-[100svh] p-0" style={{ overflow: 'hidden' }}>
        {content}
      </SheetContent>
    </Sheet>
  ) : (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[800px] p-0 bg-gray-100 h-[80vh]">
        {content}
      </DialogContent>
    </Dialog>
  );
};

export default DocumentPreview;
