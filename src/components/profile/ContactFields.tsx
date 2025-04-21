
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Phone, MapPin } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { ProfileFormValues } from "./schema";

interface ContactFieldsProps {
  form: UseFormReturn<ProfileFormValues>;
}

export const ContactFields = ({ form }: ContactFieldsProps) => {
  return (
    <>
      <FormField
        control={form.control}
        name="phone_number"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[#FFC900]">Phone Number</FormLabel>
            <FormControl>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-[#FFC900]/50" />
                <Input placeholder="Enter your phone number" {...field} className="bg-[#151812] border-[#FFC900]/20 text-[#FFC900]" />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="location"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[#FFC900]">Location</FormLabel>
            <FormControl>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-[#FFC900]/50" />
                <Input placeholder="Enter your city/state" {...field} className="bg-[#151812] border-[#FFC900]/20 text-[#FFC900]" />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};
