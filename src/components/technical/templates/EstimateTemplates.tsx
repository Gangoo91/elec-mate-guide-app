
import React from 'react';
import { DocumentCard } from './DocumentCard';
import { SignatureDialog } from './SignatureDialog';
import { useDocumentSignature } from '@/hooks/useDocumentSignature';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

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

  // Fetch saved estimates
  const { data: savedEstimates } = useQuery({
    queryKey: ['saved-estimates'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('job_estimates')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  });
  
  // Combine default templates with saved estimates
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
    },
    ...(savedEstimates?.map(estimate => ({
      id: estimate.id,
      name: estimate.template_name || 'Saved Estimate',
      description: estimate.template_description || 'Custom estimate template',
      thumbnail: "/placeholder.svg",
      isSaved: true
    })) || [])
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
