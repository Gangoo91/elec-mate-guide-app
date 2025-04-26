
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import type { ProjectFormData } from "../validation/projectSchema";

interface ProjectBasicInfoProps {
  form: UseFormReturn<ProjectFormData>;
}

export function ProjectBasicInfo({ form }: ProjectBasicInfoProps) {
  return (
    <>
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[#FFC900]">Project Name</FormLabel>
            <FormControl>
              <Input 
                {...field} 
                placeholder="Enter project name" 
                className="bg-[#333] border-[#444] text-white"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="client_name"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[#FFC900]">Client Name</FormLabel>
            <FormControl>
              <Input 
                {...field} 
                placeholder="Enter client name" 
                className="bg-[#333] border-[#444] text-white"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
