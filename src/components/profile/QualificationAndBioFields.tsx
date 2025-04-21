
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Award } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { ProfileFormValues, qualificationLevels } from "./schema";

interface QualificationAndBioFieldsProps {
  form: UseFormReturn<ProfileFormValues>;
}

export const QualificationAndBioFields = ({ form }: QualificationAndBioFieldsProps) => {
  return (
    <>
      <FormField
        control={form.control}
        name="qualification_level"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[#FFC900]">Qualification Level</FormLabel>
            <FormControl>
              <div className="flex items-center">
                <Award className="h-4 w-4 mr-2 text-[#FFC900]/50" />
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-full bg-[#151812] border-[#FFC900]/20 text-[#FFC900]">
                    <SelectValue placeholder="Select your qualification level" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#22251e] border-[#FFC900]/20">
                    {qualificationLevels.map(level => (
                      <SelectItem key={level} value={level} className="text-[#FFC900] focus:bg-[#FFC900]/10 focus:text-[#FFC900]">
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="bio"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[#FFC900]">Bio</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Tell us about your experience, skills and goals..." 
                className="bg-[#151812] border-[#FFC900]/20 text-[#FFC900] min-h-[120px]"
                {...field} 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};
