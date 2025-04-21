
import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { User, IdentificationCard } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { ProfileFormValues } from "./schema";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface BasicInfoFieldsProps {
  form: UseFormReturn<ProfileFormValues>;
}

export const BasicInfoFields = ({ form }: BasicInfoFieldsProps) => {
  const getInitials = () => {
    const firstName = form.watch("first_name") || "";
    const lastName = form.watch("last_name") || "";
    return (firstName.charAt(0) + lastName.charAt(0)).toUpperCase();
  };

  return (
    <>
      <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
        <Avatar className="w-20 h-20 border-2 border-[#FFC900]/30">
          <AvatarImage src="" />
          <AvatarFallback className="bg-[#22251e] text-[#FFC900] text-xl">
            {getInitials() || "EC"}
          </AvatarFallback>
        </Avatar>
        <div className="text-center md:text-left">
          <h3 className="text-[#FFC900] text-lg font-medium">Your Profile</h3>
          <p className="text-[#FFC900]/70 text-sm">
            Complete your profile to get the most out of ElectroConnect
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="first_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#FFC900]">First Name</FormLabel>
              <FormControl>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2 text-[#FFC900]/50" />
                  <Input placeholder="Enter your first name" {...field} className="bg-[#151812] border-[#FFC900]/20 text-[#FFC900]" />
                </div>
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
                <div className="flex items-center">
                  <IdentificationCard className="h-4 w-4 mr-2 text-[#FFC900]/50" />
                  <Input placeholder="Enter your last name" {...field} className="bg-[#151812] border-[#FFC900]/20 text-[#FFC900]" />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  );
};
