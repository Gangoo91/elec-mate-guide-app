
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface ClientFormData {
  name: string;
  type: string;
  address: string;
  phone?: string;
  email?: string;
  notes?: string;
}

interface ClientFormProps {
  onSubmit: (data: ClientFormData) => void;
  initialData?: ClientFormData;
}

export default function ClientForm({ onSubmit, initialData }: ClientFormProps) {
  const { register, handleSubmit, control, formState: { errors } } = useForm<ClientFormData>({
    defaultValues: initialData || {
      type: 'Residential'
    }
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Input
          placeholder="Client Name"
          {...register("name", { required: "Name is required" })}
          className="bg-[#151812] border-[#FFC900]/20 text-[#FFC900]"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Controller
          name="type"
          control={control}
          defaultValue="Residential"
          render={({ field }) => (
            <Select 
              onValueChange={field.onChange} 
              defaultValue={field.value}
            >
              <SelectTrigger className="bg-[#151812] border-[#FFC900]/20 text-[#FFC900]">
                <SelectValue placeholder="Client Type" />
              </SelectTrigger>
              <SelectContent className="bg-[#22251e] border-[#FFC900]/20">
                <SelectItem value="Residential">Residential</SelectItem>
                <SelectItem value="Commercial">Commercial</SelectItem>
                <SelectItem value="Industrial">Industrial</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
      </div>

      <div>
        <Input
          placeholder="Address"
          {...register("address", { required: "Address is required" })}
          className="bg-[#151812] border-[#FFC900]/20 text-[#FFC900]"
        />
        {errors.address && (
          <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
        )}
      </div>

      <div>
        <Input
          placeholder="Phone Number"
          {...register("phone")}
          className="bg-[#151812] border-[#FFC900]/20 text-[#FFC900]"
        />
      </div>

      <div>
        <Input
          placeholder="Email"
          type="email"
          {...register("email")}
          className="bg-[#151812] border-[#FFC900]/20 text-[#FFC900]"
        />
      </div>

      <div>
        <Textarea
          placeholder="Additional Notes"
          {...register("notes")}
          className="bg-[#151812] border-[#FFC900]/20 text-[#FFC900] min-h-[100px]"
        />
      </div>

      <Button 
        type="submit"
        className="w-full bg-[#FFC900] hover:bg-[#e5b700] text-[#151812]"
      >
        Save Client
      </Button>
    </form>
  );
}
