
import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Plus, Trash2 } from 'lucide-react';
import { UseFormRegister, UseFormSetValue, UseFormWatch } from 'react-hook-form';

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

interface InvoiceItemsSectionProps {
  register: UseFormRegister<InvoiceFormData>;
  watch: UseFormWatch<InvoiceFormData>;
  setValue: UseFormSetValue<InvoiceFormData>;
}

export function InvoiceItemsSection({ register, watch, setValue }: InvoiceItemsSectionProps) {
  const items = watch('items');

  const addItem = () => {
    setValue('items', [...items, { description: '', quantity: 1, unitPrice: 0, amount: 0 }]);
  };

  const removeItem = (index: number) => {
    setValue('items', items.filter((_, i) => i !== index));
  };

  return (
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
  );
}
