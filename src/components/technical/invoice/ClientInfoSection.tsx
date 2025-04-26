
import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { UseFormRegister, UseFormSetValue, UseFormWatch } from 'react-hook-form';

interface InvoiceFormData {
  clientName: string;
  clientAddress: string;
  clientEmail: string;
  dueDate: Date;
  items: any[];
  notes: string;
  terms: string;
}

interface ClientInfoSectionProps {
  register: UseFormRegister<InvoiceFormData>;
  watch: UseFormWatch<InvoiceFormData>;
  setValue: UseFormSetValue<InvoiceFormData>;
}

export function ClientInfoSection({ register, watch, setValue }: ClientInfoSectionProps) {
  return (
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
  );
}
