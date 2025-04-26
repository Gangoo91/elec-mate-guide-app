
import React from 'react';
import { FileCheck, FileSignature } from 'lucide-react';

interface DocumentFooterProps {
  signatureData: any;
}

export const DocumentFooter: React.FC<DocumentFooterProps> = ({ signatureData }) => {
  return (
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
  );
};
