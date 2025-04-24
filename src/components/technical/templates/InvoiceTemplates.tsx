import React from 'react';
import { DocumentCard } from './DocumentCard';
import { SignatureDialog } from './SignatureDialog';
import { useDocumentSignature } from '@/hooks/useDocumentSignature';

const InvoiceTemplates = () => {
  const {
    isSignatureModalOpen,
    setIsSignatureModalOpen,
    handleSignatureComplete,
    signerType,
    clientName,
    clientEmail,
    handleClientInfoChange,
    openElectricianSignatureModal
  } = useDocumentSignature('invoice');
  
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
        onClientNameChange={(name) => handleClientInfoChange('name', name)}
        onClientEmailChange={(email) => handleClientInfoChange('email', email)}
      />
    </>
  );
};

export default InvoiceTemplates;
