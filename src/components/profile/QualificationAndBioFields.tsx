
import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Award, Clock } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { ProfileFormValues, qualificationLevels, experienceYears } from "./schema";

interface QualificationAndBioFieldsProps {
  form: UseFormReturn<ProfileFormValues>;
}

export const QualificationAndBioFields = ({ form }: QualificationAndBioFieldsProps) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          name="years_experience"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#FFC900]">Years of Experience</FormLabel>
              <FormControl>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-[#FFC900]/50" />
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full bg-[#151812] border-[#FFC900]/20 text-[#FFC900]">
                      <SelectValue placeholder="Select your experience" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#22251e] border-[#FFC900]/20">
                      {experienceYears.map(years => (
                        <SelectItem key={years} value={years} className="text-[#FFC900] focus:bg-[#FFC900]/10 focus:text-[#FFC900]">
                          {years}
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
      </div>
      
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
            <FormDescription className="text-[#FFC900]/50 text-xs">
              {field.value ? `${field.value.length}/500 characters` : "0/500 characters"}
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};
