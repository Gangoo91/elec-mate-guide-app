
import React from 'react';

interface DocumentTermsProps {
  isEstimate: boolean;
}

export const DocumentTerms: React.FC<DocumentTermsProps> = ({ isEstimate }) => {
  return (
    <div>
      <h3 className="font-semibold text-gray-700 mb-2">Terms & Conditions</h3>
      <ul className="list-disc pl-5 text-gray-600 text-sm">
        <li>All electrical work complies with BS7671:2018 Requirements for Electrical Installations.</li>
        <li>Work is guaranteed for 12 months from completion date.</li>
        <li>{isEstimate ? "Final invoice" : "Payment"} is due within 14 days of completion.</li>
        <li>Late payments are subject to a 2% monthly interest charge.</li>
      </ul>
    </div>
  );
};
