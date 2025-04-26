
import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from 'date-fns';
import { CalendarIcon, Plus, Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';

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
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<InvoiceFormData>({
    defaultValues: {
      items: [{ description: '', quantity: 1, unitPrice: 0, amount: 0 }],
    }
  });

  const items = watch('items');

  const addItem = () => {
    setValue('items', [...items, { description: '', quantity: 1, unitPrice: 0, amount: 0 }]);
  };

  const removeItem = (index: number) => {
    setValue('items', items.filter((_, i) => i !== index));
  };

  const onSubmit = async (data: InvoiceFormData) => {
    try {
      const subtotal = data.items.reduce((sum, item) => sum + (item.quantity * item.unitPrice), 0);
      const vatRate = 20; // 20% VAT
      const vatAmount = subtotal * (vatRate / 100);
      const total = subtotal + vatAmount;

      const invoiceData = {
        ...data,
        subtotal,
        vat_rate: vatRate,
        vat_amount: vatAmount,
        total,
      };

      // TODO: Implement invoice creation with Supabase
      console.log('Invoice data:', invoiceData);
    } catch (error) {
      console.error('Error creating invoice:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="clientName">Client Name</Label>
            <Input
              id="clientName"
              {...register('clientName', { required: true })}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="clientAddress">Client Address</Label>
            <Input
              id="clientAddress"
              {...register('clientAddress')}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="clientEmail">Client Email</Label>
            <Input
              id="clientEmail"
              type="email"
              {...register('clientEmail')}
              className="mt-1"
            />
          </div>

          <div>
            <Label>Due Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !watch('dueDate') && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {watch('dueDate') ? format(watch('dueDate'), 'PPP') : <span>Pick a due date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={watch('dueDate')}
                  onSelect={(date) => setValue('dueDate', date as Date)}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="space-y-4">
          <Label>Items</Label>
          <div className="space-y-4">
            {items.map((item, index) => (
              <div key={index} className="flex gap-2 items-start">
                <Input
                  placeholder="Description"
                  {...register(`items.${index}.description`)}
                  className="flex-grow"
                />
                <Input
                  type="number"
                  placeholder="Qty"
                  {...register(`items.${index}.quantity`)}
                  className="w-20"
                />
                <Input
                  type="number"
                  placeholder="Price"
                  {...register(`items.${index}.unitPrice`)}
                  className="w-24"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => removeItem(index)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
          <Button type="button" variant="outline" onClick={addItem}>
            <Plus className="w-4 h-4 mr-2" />
            Add Item
          </Button>
        </div>
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
