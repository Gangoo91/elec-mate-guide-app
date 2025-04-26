
import React from "react";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { jobFormSchema, JobFormData } from "./jobValidation";
import { DatePickerField } from "./DatePickerField";
import { TimeInputFields } from "./TimeInputFields";

interface JobFormProps {
  onSubmit: (data: JobFormData) => Promise<void>;
  defaultValues?: Partial<JobFormData>;
}

export function JobForm({ onSubmit, defaultValues }: JobFormProps) {
  const form = useForm<JobFormData>({
    resolver: zodResolver(jobFormSchema),
    defaultValues: {
      date: format(new Date(), 'dd/MM/yyyy'),
      ...defaultValues
    }
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="clientName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#FFC900]">Client Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter client name" {...field} className="bg-[#151812] text-[#FFC900]" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#FFC900]">Address</FormLabel>
              <FormControl>
                <Input placeholder="Enter address" {...field} className="bg-[#151812] text-[#FFC900]" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="jobType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#FFC900]">Job Type</FormLabel>
              <FormControl>
                <Input placeholder="Enter job type" {...field} className="bg-[#151812] text-[#FFC900]" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <DatePickerField form={form} />
        <TimeInputFields form={form} />
        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#FFC900]">Notes (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="Add any notes" {...field} className="bg-[#151812] text-[#FFC900]" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end pt-4">
          <Button type="submit" className="bg-[#FFC900] hover:bg-[#e5b700] text-[#151812]">
            Add Job
          </Button>
        </div>
      </form>
    </Form>
  );
}
