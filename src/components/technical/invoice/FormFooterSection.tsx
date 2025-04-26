
import React from 'react';
import { Textarea } from "@/components/ui/textarea";
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
        <Textarea
          id="notes"
          {...register('notes')}
          className="mt-1 h-24 resize-none"
          placeholder="Add any additional notes for the client..."
        />
      </div>

      <div>
        <Label htmlFor="terms">Terms and Conditions</Label>
        <Textarea
          id="terms"
          {...register('terms')}
          className="mt-1 h-24 resize-none"
          placeholder="Enter terms and conditions for this invoice..."
        />
      </div>
    </div>
  );
}
