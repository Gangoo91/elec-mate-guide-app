
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";
import type { ProjectFormData } from "../validation/projectSchema";

interface ProjectDetailsFieldsProps {
  form: UseFormReturn<ProjectFormData>;
}

export function ProjectDetailsFields({ form }: ProjectDetailsFieldsProps) {
  return (
    <>
      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-[#FFC900]">Description</FormLabel>
            <FormControl>
              <Textarea 
                {...field} 
                placeholder="Provide a brief description of the project" 
                className="bg-[#333] border-[#444] text-white resize-none"
                rows={3}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="deadline"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#FFC900]">Deadline</FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  type="date" 
                  className="bg-[#333] border-[#444] text-white"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="budget"
          render={({ field: { onChange, ...field }}) => (
            <FormItem>
              <FormLabel className="text-[#FFC900]">Budget (£)</FormLabel>
              <FormControl>
                <Input 
                  {...field}
                  type="number"
                  onChange={(e) => onChange(e.target.value ? Number(e.target.value) : '')}
                  placeholder="0.00"
                  className="bg-[#333] border-[#444] text-white"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  );
}
