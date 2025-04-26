
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const projectSchema = z.object({
  name: z.string().min(2, { message: "Project name must be at least 2 characters." }),
  client_name: z.string().min(2, { message: "Client name is required." }),
  status: z.string(),
  description: z.string().optional(),
  deadline: z.string().optional(),
  budget: z.coerce.number().positive().optional(),
});

type ProjectFormData = z.infer<typeof projectSchema>;

interface ProjectFormProps {
  onSubmit: (data: ProjectFormData) => void;
  initialData?: Partial<ProjectFormData>;
}

export function ProjectForm({ onSubmit, initialData }: ProjectFormProps) {
  const form = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      name: initialData?.name || "",
      client_name: initialData?.client_name || "",
      status: initialData?.status || "planning",
      description: initialData?.description || "",
      deadline: initialData?.deadline || "",
      budget: initialData?.budget,
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
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
        
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#FFC900]">Status</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger className="bg-[#333] border-[#444] text-white">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-[#333] border-[#444] text-white">
                  <SelectItem value="planning">Planning</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="on-hold">On Hold</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
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
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#FFC900]">Budget (£)</FormLabel>
                <FormControl>
                  <Input 
                    {...field} 
                    type="number"
                    placeholder="0.00"
                    className="bg-[#333] border-[#444] text-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <div className="flex justify-end gap-2 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => form.reset()}
            className="border-[#444] text-[#FFC900]"
          >
            Cancel
          </Button>
          <Button 
            type="submit" 
            className="bg-[#FFC900] hover:bg-[#e5b700] text-[#151812]"
          >
            Save Project
          </Button>
        </div>
      </form>
    </Form>
  );
}
