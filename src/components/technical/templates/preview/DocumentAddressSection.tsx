
import React from 'react';

export const DocumentAddressSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <div>
        <h3 className="font-semibold text-gray-700 mb-2">From:</h3>
        <p>Spark Electrical Ltd</p>
        <p>123 Circuit Avenue</p>
        <p>London, EC1A 1BB</p>
        <p>United Kingdom</p>
        <p className="mt-2">VAT: GB123456789</p>
      </div>
      <div>
        <h3 className="font-semibold text-gray-700 mb-2">To:</h3>
        <p>John Smith</p>
        <p>456 Wiring Road</p>
        <p>London, SW1A 1AA</p>
        <p>United Kingdom</p>
        <p className="mt-2">Project: Home Rewiring</p>
      </div>
    </div>
  );
};
