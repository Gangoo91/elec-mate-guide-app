
import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UseFormRegister } from 'react-hook-form';

interface InvoiceFormData {
  clientName: string;
  clientAddress: string;
  clientEmail: string;
  dueDate: Date;
  items: any[];
  notes: string;
  terms: string;
}

interface FormFooterSectionProps {
  register: UseFormRegister<InvoiceFormData>;
}

export function FormFooterSection({ register }: FormFooterSectionProps) {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="notes">Notes</Label>
        <Input
          id="notes"
          {...register('notes')}
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="terms">Terms and Conditions</Label>
        <Input
          id="terms"
          {...register('terms')}
          className="mt-1"
        />
      </div>
    </div>
  );
}
