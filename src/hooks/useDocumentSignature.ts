
import { useState } from 'react';
import { toast } from "sonner";
import { useAuth } from '@/hooks/useAuth';
import { supabase } from "@/integrations/supabase/client";

interface DocumentSignatureState {
  isSignatureModalOpen: boolean;
  selectedTemplateId: string | null;
  signerType: "client" | "electrician";
  clientName: string;
  clientEmail: string;
}

export const useDocumentSignature = (documentType: 'estimate' | 'invoice') => {
  const { user } = useAuth();
  const [state, setState] = useState<DocumentSignatureState>({
    isSignatureModalOpen: false,
    selectedTemplateId: null,
    signerType: "electrician",
    clientName: "",
    clientEmail: ""
  });

  const setIsSignatureModalOpen = (isOpen: boolean) => {
    setState(prev => ({ ...prev, isSignatureModalOpen: isOpen }));
  };

  const openElectricianSignatureModal = (templateId: string) => {
    setState(prev => ({
      ...prev,
      selectedTemplateId: templateId,
      signerType: "electrician",
      isSignatureModalOpen: true
    }));
  };

  const handleSignatureComplete = async (signatureData: string) => {
    try {
      if (!user) {
        toast.error("You must be logged in to save documents");
        setIsSignatureModalOpen(false);
        return;
      }

      if (state.signerType === "electrician") {
        if (!state.clientEmail || !state.clientName) {
          toast.error("Please provide client name and email");
          return;
        }

        const { data, error } = await supabase.from('job_estimates').insert({
          user_id: user.id,
          client_name: state.clientName,
          job_reference: `${documentType === 'estimate' ? 'EST' : 'INV'}-${Date.now().toString().slice(-6)}`,
          job_description: `Template: ${state.selectedTemplateId}`,
          estimate_response: JSON.stringify({
            template_id: state.selectedTemplateId,
            client_email: state.clientEmail,
            document_type: documentType,
            electrician_signature: signatureData,
            status: 'sent',
          })
        }).select();

        if (error) {
          console.error("Error saving document:", error);
          toast.error("Failed to save document");
        } else {
          toast.success("Document signed and sent to client for signature");
        }
      } else {
        if (!state.selectedTemplateId) {
          toast.error("Document reference missing");
          return;
        }

        const { data, error } = await supabase
          .from('job_estimates')
          .select()
          .eq('job_reference', state.selectedTemplateId)
          .single();

        if (error) {
          console.error("Error finding document:", error);
          toast.error("Failed to find document");
          return;
        }

        const existingData = JSON.parse(data.estimate_response);
        existingData.client_signature = signatureData;
        existingData.status = 'signed';

        const { error: updateError } = await supabase
          .from('job_estimates')
          .update({ 
            estimate_response: JSON.stringify(existingData),
            status: 'signed' 
          })
          .eq('job_reference', state.selectedTemplateId);

        if (updateError) {
          console.error("Error updating document:", updateError);
          toast.error("Failed to update document with client signature");
        } else {
          toast.success("Document signed successfully");
        }
      }

      setIsSignatureModalOpen(false);
    } catch (err) {
      console.error("Error in signature process:", err);
      toast.error("An error occurred during the signature process");
    }
  };

  const handleClientInfoChange = (field: 'name' | 'email', value: string) => {
    setState(prev => ({
      ...prev,
      [field === 'name' ? 'clientName' : 'clientEmail']: value
    }));
  };

  return {
    ...state,
    setIsSignatureModalOpen,
    openElectricianSignatureModal,
    handleSignatureComplete,
    handleClientInfoChange
  };
};
