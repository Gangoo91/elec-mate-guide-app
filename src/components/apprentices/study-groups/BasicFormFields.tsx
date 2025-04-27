
import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import type { StudyGroupFormValues } from "./schema";

interface BasicFormFieldsProps {
  form: UseFormReturn<StudyGroupFormValues>;
}

const BasicFormFields = ({ form }: BasicFormFieldsProps) => {
  return (
    <>
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[#FFC900]">Group Name</FormLabel>
            <FormControl>
              <Input
                placeholder="Group Name"
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
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[#FFC900]">Description</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Describe your study group..."
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
        name="topic"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[#FFC900]">Topic</FormLabel>
            <FormControl>
              <Input
                placeholder="Topic (e.g., Electrical Theory, Wiring)"
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
        name="level"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[#FFC900]">Level</FormLabel>
            <Select 
              onValueChange={field.onChange}
              defaultValue={field.value}
            >
              <FormControl>
                <SelectTrigger className="bg-[#151812] border-[#FFC900]/20 text-[#FFC900]">
                  <SelectValue placeholder="Select Level" />
                </SelectTrigger>
              </FormControl>
              <SelectContent className="bg-[#22251e] border-[#FFC900]/20">
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage className="text-red-400" />
          </FormItem>
        )}
      />
    </>
  );
};

export default BasicFormFields;
