
import React from 'react';
import { Input } from "@/components/ui/input";

interface AddressData {
  companyName: string;
  street: string;
  city: string;
  postcode: string;
  country: string;
  vatNumber?: string;
  projectName?: string;
}

interface DocumentAddressSectionProps {
  fromAddress: AddressData;
  toAddress: AddressData & {
    projectName?: string;
  };
  editable?: boolean;
  onFromAddressChange?: (field: string, value: string) => void;
  onToAddressChange?: (field: string, value: string) => void;
}

export const DocumentAddressSection: React.FC<DocumentAddressSectionProps> = ({
  fromAddress,
  toAddress,
  editable = false,
  onFromAddressChange,
  onToAddressChange
}) => {
  const renderValue = (value: string, field: string, isFromAddress: boolean) => {
    if (!editable) return <p>{value}</p>;
    
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const handler = isFromAddress ? onFromAddressChange : onToAddressChange;
      handler?.(field, e.target.value);
    };

    return (
      <Input
        value={value}
        onChange={onChange}
        className="border-gray-200 bg-transparent hover:bg-gray-50 transition-colors"
      />
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <div>
        <h3 className="font-semibold text-gray-700 mb-2">From:</h3>
        <div className="space-y-2">
          {renderValue(fromAddress.companyName, 'companyName', true)}
          {renderValue(fromAddress.street, 'street', true)}
          {renderValue(`${fromAddress.city}, ${fromAddress.postcode}`, 'city', true)}
          {renderValue(fromAddress.country, 'country', true)}
          {fromAddress.vatNumber && (
            <div className="mt-2">
              {renderValue(`VAT: ${fromAddress.vatNumber}`, 'vatNumber', true)}
            </div>
          )}
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-gray-700 mb-2">To:</h3>
        <div className="space-y-2">
          {renderValue(toAddress.companyName, 'companyName', false)}
          {renderValue(toAddress.street, 'street', false)}
          {renderValue(`${toAddress.city}, ${toAddress.postcode}`, 'city', false)}
          {renderValue(toAddress.country, 'country', false)}
          {toAddress.projectName && (
            <div className="mt-2">
              {renderValue(`Project: ${toAddress.projectName}`, 'projectName', false)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
