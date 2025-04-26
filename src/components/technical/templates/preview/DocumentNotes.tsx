
import React from 'react';

interface DocumentNotesProps {
  isEstimate: boolean;
  documentNumber: string;
}

export const DocumentNotes: React.FC<DocumentNotesProps> = ({ isEstimate, documentNumber }) => {
  if (isEstimate) {
    return (
      <div className="mb-6">
        <h3 className="font-semibold text-gray-700 mb-2">Notes</h3>
        <p className="text-gray-600">
          This estimate is valid for 30 days from the date issued. The actual cost may vary based on unforeseen circumstances discovered during the work.
        </p>
      </div>
    );
  }

  return (
    <div className="mb-6">
      <h3 className="font-semibold text-gray-700 mb-2">Payment Details</h3>
      <p className="text-gray-600 mb-2">Please make payment within 14 days to the following account:</p>
      <div className="pl-4 border-l-2 border-gray-300">
        <p>Bank: National Westminster Bank</p>
        <p>Account Name: Spark Electrical Ltd</p>
        <p>Sort Code: 12-34-56</p>
        <p>Account Number: 12345678</p>
        <p>Reference: {documentNumber}</p>
      </div>
    </div>
  );
};
