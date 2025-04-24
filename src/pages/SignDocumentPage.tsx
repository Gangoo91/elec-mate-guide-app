
import React from 'react';
import MainLayout from "@/components/layout/MainLayout";
import BackButton from "@/components/navigation/BackButton";
import SignatureCanvas from "@/components/technical/templates/SignatureCanvas";
import { useParams, useNavigate } from 'react-router-dom';

const SignDocumentPage = () => {
  const { templateId } = useParams();
  const navigate = useNavigate();

  const handleSignatureSave = (signatureData: string) => {
    // Here you would typically save the signature data and associate it with the document
    console.log('Signature saved:', signatureData);
    navigate('/electricians/technical-tools/templates');
  };

  return (
    <MainLayout>
      <div className="container py-8">
        <BackButton />
        <div className="max-w-4xl mx-auto mt-6">
          <SignatureCanvas onSave={handleSignatureSave} />
        </div>
      </div>
    </MainLayout>
  );
};

export default SignDocumentPage;
