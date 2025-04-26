
import React from "react";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { jobFormSchema, JobFormData } from "./jobValidation";

interface JobFormProps {
  onSubmit: (data: JobFormData) => Promise<void>;
  defaultValues?: Partial<JobFormData>;
}

export function JobForm({ onSubmit, defaultValues }: JobFormProps) {
  const form = useForm<JobFormData>({
    resolver: zodResolver(jobFormSchema),
    defaultValues: {
      date: format(new Date(), 'dd/MM/yyyy'),
      ...defaultValues
    }
  });
  
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="clientName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#FFC900]">Client Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter client name" {...field} className="bg-[#151812] text-[#FFC900]" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#FFC900]">Address</FormLabel>
              <FormControl>
                <Input placeholder="Enter address" {...field} className="bg-[#151812] text-[#FFC900]" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="jobType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#FFC900]">Job Type</FormLabel>
              <FormControl>
                <Input placeholder="Enter job type" {...field} className="bg-[#151812] text-[#FFC900]" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-[#FFC900]">Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal bg-[#151812] text-[#FFC900]",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {date ? (
                        format(date, 'dd/MM/yyyy')
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(selectedDate) => {
                      setDate(selectedDate);
                      field.onChange(selectedDate ? format(selectedDate, 'dd/MM/yyyy') : '');
                    }}
                    initialFocus
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="startTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#FFC900]">Start Time</FormLabel>
                <FormControl>
                  <Input type="time" {...field} className="bg-[#151812] text-[#FFC900]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="endTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#FFC900]">End Time</FormLabel>
                <FormControl>
                  <Input type="time" {...field} className="bg-[#151812] text-[#FFC900]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#FFC900]">Notes (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="Add any notes" {...field} className="bg-[#151812] text-[#FFC900]" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end pt-4">
          <Button type="submit" className="bg-[#FFC900] hover:bg-[#e5b700] text-[#151812]">
            Add Job
          </Button>
        </div>
      </form>
    </Form>
  );
}
