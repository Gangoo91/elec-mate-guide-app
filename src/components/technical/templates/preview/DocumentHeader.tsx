
import React from 'react';
import { format } from 'date-fns';

interface DocumentHeaderProps {
  isEstimate: boolean;
  today: string;
  documentNumber: string;
}

export const DocumentHeader: React.FC<DocumentHeaderProps> = ({ 
  isEstimate, 
  today, 
  documentNumber 
}) => {
  return (
    <div className="flex justify-between items-start">
      <div>
        <h1 className="text-2xl font-bold">SPARK ELECTRICAL</h1>
        <p className="text-gray-500">Professional Electrical Services</p>
      </div>
      <div className="text-right">
        <h2 className="text-xl font-semibold text-gray-700">{isEstimate ? 'Estimate' : 'Invoice'}</h2>
        <p className="text-gray-500">{documentNumber}</p>
        <p className="text-gray-500">Date: {today}</p>
      </div>
    </div>
  );
};
