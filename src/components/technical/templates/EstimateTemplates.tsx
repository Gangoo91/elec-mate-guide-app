
import React from 'react';
import { DocumentCard } from './DocumentCard';
import { SignatureDialog } from './SignatureDialog';
import { useDocumentSignature } from '@/hooks/useDocumentSignature';

interface EstimateTemplatesProps {
  onPreview: (templateId: string) => void;
}

const EstimateTemplates = ({ onPreview }: EstimateTemplatesProps) => {
  const {
    isSignatureModalOpen,
    setIsSignatureModalOpen,
    handleSignatureComplete,
    signerType,
    clientName,
    clientEmail,
    handleClientInfoChange,
    openElectricianSignatureModal
  } = useDocumentSignature('estimate');
  
  const templates = [
    {
      id: "standard",
      name: "Standard Estimate",
      description: "Professional itemized estimate with materials and labour breakdown",
      thumbnail: "/placeholder.svg"
    },
    {
      id: "detailed",
      name: "Detailed Project Estimate",
      description: "Comprehensive estimate with project phases and timelines",
      thumbnail: "/placeholder.svg"
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
            onPreview={onPreview}
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

export default EstimateTemplates;
