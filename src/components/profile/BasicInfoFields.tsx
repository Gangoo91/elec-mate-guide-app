
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { User } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { ProfileFormValues } from "./schema";

interface BasicInfoFieldsProps {
  form: UseFormReturn<ProfileFormValues>;
}

export const BasicInfoFields = ({ form }: BasicInfoFieldsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <FormField
        control={form.control}
        name="first_name"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[#FFC900]">First Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter your first name" {...field} className="bg-[#151812] border-[#FFC900]/20 text-[#FFC900]" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="last_name"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[#FFC900]">Last Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter your last name" {...field} className="bg-[#151812] border-[#FFC900]/20 text-[#FFC900]" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
