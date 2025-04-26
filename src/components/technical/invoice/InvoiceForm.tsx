
import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { format } from 'date-fns';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { ClientInfoSection } from './ClientInfoSection';
import { InvoiceItemsSection } from './InvoiceItemsSection';

interface InvoiceItem {
  description: string;
  quantity: number;
  unitPrice: number;
  amount: number;
}

interface InvoiceFormData {
  clientName: string;
  clientAddress: string;
  clientEmail: string;
  dueDate: Date;
  items: InvoiceItem[];
  notes: string;
  terms: string;
}

export function InvoiceForm() {
  const { toast } = useToast();
  const { user } = useAuth();
  
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<InvoiceFormData>({
    defaultValues: {
      items: [{ description: '', quantity: 1, unitPrice: 0, amount: 0 }],
    }
  });

  const calculateSubtotal = (items: InvoiceItem[]): number => {
    return items.reduce((sum, item) => sum + (item.quantity * item.unitPrice), 0);
  };

  const onSubmit = async (data: InvoiceFormData) => {
    try {
      const subtotal = calculateSubtotal(data.items);
      const vatRate = 20; // 20% VAT
      const vatAmount = subtotal * (vatRate / 100);
      const total = subtotal + vatAmount;

      // Format the due date as a string (YYYY-MM-DD)
      const formattedDueDate = format(data.dueDate, 'yyyy-MM-dd');

      const invoiceData = {
        user_id: user?.id,
        client_name: data.clientName,
        client_address: data.clientAddress,
        client_email: data.clientEmail,
        due_date: formattedDueDate,
        items: data.items,
        subtotal,
        vat_rate: vatRate,
        vat_amount: vatAmount,
        total,
        notes: data.notes,
        terms: data.terms,
        status: 'draft'
        // invoice_number is generated automatically by the database
      };

      const { error } = await supabase
        .from('invoices')
        .insert(invoiceData);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Invoice created successfully",
      });
    } catch (error: any) {
      console.error('Error creating invoice:', error);
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ClientInfoSection 
          register={register}
          watch={watch}
          setValue={setValue}
        />

        <InvoiceItemsSection
          register={register}
          watch={watch}
          setValue={setValue}
        />
      </div>

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

      <Button type="submit" className="w-full">Create Invoice</Button>
    </form>
  );
}
