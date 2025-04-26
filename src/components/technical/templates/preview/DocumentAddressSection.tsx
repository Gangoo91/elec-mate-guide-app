
import React from 'react';

interface AddressData {
  companyName: string;
  street: string;
  city: string;
  postcode: string;
  country: string;
  vatNumber?: string;
}

interface DocumentAddressSectionProps {
  fromAddress: AddressData;
  toAddress: AddressData & {
    projectName?: string;
  };
}

export const DocumentAddressSection: React.FC<DocumentAddressSectionProps> = ({
  fromAddress,
  toAddress
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <div>
        <h3 className="font-semibold text-gray-700 mb-2">From:</h3>
        <p>{fromAddress.companyName}</p>
        <p>{fromAddress.street}</p>
        <p>{`${fromAddress.city}, ${fromAddress.postcode}`}</p>
        <p>{fromAddress.country}</p>
        {fromAddress.vatNumber && (
          <p className="mt-2">VAT: {fromAddress.vatNumber}</p>
        )}
      </div>
      <div>
        <h3 className="font-semibold text-gray-700 mb-2">To:</h3>
        <p>{toAddress.companyName}</p>
        <p>{toAddress.street}</p>
        <p>{`${toAddress.city}, ${toAddress.postcode}`}</p>
        <p>{toAddress.country}</p>
        {toAddress.projectName && (
          <p className="mt-2">Project: {toAddress.projectName}</p>
        )}
      </div>
    </div>
  );
};
