
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { JobFormData } from "./jobValidation";

interface TimeInputFieldsProps {
  form: UseFormReturn<JobFormData>;
}

export function TimeInputFields({ form }: TimeInputFieldsProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <FormField
        control={form.control}
        name="startTime"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[#FFC900]">Start Time</FormLabel>
            <FormControl>
              <Input type="time" {...field} className="bg-[#151812] text-[#FFC900]" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="endTime"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[#FFC900]">End Time</FormLabel>
            <FormControl>
              <Input type="time" {...field} className="bg-[#151812] text-[#FFC900]" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
