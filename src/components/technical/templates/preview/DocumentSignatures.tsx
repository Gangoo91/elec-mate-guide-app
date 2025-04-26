
import React from 'react';
import { FileCheck, FileSignature } from 'lucide-react';
import { format } from 'date-fns';

interface SignatureData {
  electricianSignature?: string;
  clientSignature?: string;
  dateSigned?: string;
  status?: string;
}

interface DocumentSignaturesProps {
  signatureData: SignatureData | null;
}

export const DocumentSignatures: React.FC<DocumentSignaturesProps> = ({ signatureData }) => {
  if (!signatureData) return null;

  return (
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
  );
};
