import React, { useState } from 'react';
import { toast } from "sonner";
import { useAuth } from '@/hooks/useAuth';
import { supabase } from "@/integrations/supabase/client";
import { DocumentCard } from './DocumentCard';
import { SignatureDialog } from './SignatureDialog';

const InvoiceTemplates = () => {
  const { user } = useAuth();
  const [isSignatureModalOpen, setIsSignatureModalOpen] = useState(false);
  const [selectedTemplateId, setSelectedTemplateId] = useState<string | null>(null);
  const [signerType, setSignerType] = useState<"client" | "electrician">("electrician");
  const [clientName, setClientName] = useState<string>("");
  const [clientEmail, setClientEmail] = useState<string>("");
  const [invoiceData, setInvoiceData] = useState({});
  
  const templates = [
    {
      id: "standard-invoice",
      name: "Standard Invoice",
      description: "Professional invoice with itemized charges and payment details",
      thumbnail: "/placeholder.svg",
      comingSoon: false
    },
    {
      id: "detailed-invoice",
      name: "Detailed Service Invoice",
      description: "Comprehensive invoice with detailed breakdown of services",
      thumbnail: "/placeholder.svg",
      comingSoon: true
    }
  ];

  const handlePrint = () => {
    window.print();
    toast.success("Preparing document for printing...");
  };

  const handleSignatureComplete = async (signatureData: string) => {
    try {
      if (!user) {
        toast.error("You must be logged in to save documents");
        setIsSignatureModalOpen(false);
        return;
      }

      if (signerType === "electrician") {
        if (!clientEmail || !clientName) {
          toast.error("Please provide client name and email");
          return;
        }

        const { data, error } = await supabase.from('job_estimates').insert({
          user_id: user.id,
          client_name: clientName,
          job_reference: `INV-${Date.now().toString().slice(-6)}`,
          job_description: `Invoice Template: ${selectedTemplateId}`,
          estimate_response: JSON.stringify({
            template_id: selectedTemplateId,
            client_email: clientEmail,
            document_type: 'invoice',
            electrician_signature: signatureData,
            status: 'sent',
            ...invoiceData
          })
        }).select();

        if (error) {
          console.error("Error saving document:", error);
          toast.error("Failed to save document");
        } else {
          toast.success("Document signed and sent to client for signature");
        }
      } else {
        if (!selectedTemplateId) {
          toast.error("Document reference missing");
          return;
        }

        const { data, error } = await supabase
          .from('job_estimates')
          .select()
          .eq('job_reference', selectedTemplateId)
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
          .eq('job_reference', selectedTemplateId);

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

  const openElectricianSignatureModal = (templateId: string) => {
    setSelectedTemplateId(templateId);
    setSignerType("electrician");
    setIsSignatureModalOpen(true);
  };
  
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {templates.map((template) => (
          <DocumentCard
            key={template.id}
            template={template}
            onPrint={handlePrint}
            onSignature={openElectricianSignatureModal}
          />
        ))}
      </div>

      <SignatureDialog
        isOpen={isSignatureModalOpen}
        onOpenChange={setIsSignatureModalOpen}
        onSignatureComplete={handleSignatureComplete}
        signerType={signerType}
        clientName={clientName}
        clientEmail={clientEmail}
        onClientNameChange={setClientName}
        onClientEmailChange={setClientEmail}
        userName={user?.email}
      />
    </>
  );
};

export default InvoiceTemplates;
