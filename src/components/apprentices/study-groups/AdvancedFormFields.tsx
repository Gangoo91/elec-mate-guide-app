
import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import type { StudyGroupFormValues } from "./schema";

interface AdvancedFormFieldsProps {
  form: UseFormReturn<StudyGroupFormValues>;
}

const AdvancedFormFields = ({ form }: AdvancedFormFieldsProps) => {
  return (
    <>
      <FormField
        control={form.control}
        name="maxParticipants"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[#FFC900]">Maximum Participants</FormLabel>
            <FormControl>
              <Input
                type="number"
                {...field}
                onChange={(e) => field.onChange(Number(e.target.value))}
                className="bg-[#151812] border-[#FFC900]/20 text-[#FFC900]"
              />
            </FormControl>
            <FormMessage className="text-red-400" />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="meetingLink"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[#FFC900]">Meeting Link (optional)</FormLabel>
            <FormControl>
              <Input
                placeholder="Teams/Zoom meeting link"
                {...field}
                className="bg-[#151812] border-[#FFC900]/20 text-[#FFC900]"
              />
            </FormControl>
            <FormMessage className="text-red-400" />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="is_private"
        render={({ field }) => (
          <FormItem className="flex items-center gap-2">
            <FormControl>
              <input
                type="checkbox"
                checked={field.value}
                onChange={field.onChange}
                className="bg-[#151812] border-[#FFC900]/20 text-[#FFC900]"
              />
            </FormControl>
            <FormLabel className="text-[#FFC900] mb-0">Make group private</FormLabel>
          </FormItem>
        )}
      />
    </>
  );
};

export default AdvancedFormFields;
