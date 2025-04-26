
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import ClientForm from "./ClientForm";

interface Client {
  id: string;
  name: string;
  type: string;
  address: string;
  phone: string | null;
  email: string | null;
  notes: string | null;
}

interface EditClientDialogProps {
  client: Client;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onClientUpdated: () => void;
}

export function EditClientDialog({ client, open, onOpenChange, onClientUpdated }: EditClientDialogProps) {
  const { toast } = useToast();

  const handleSubmit = async (data: Omit<Client, 'id'>) => {
    try {
      const { error } = await supabase
        .from('clients')
        .update(data)
        .eq('id', client.id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Client has been updated successfully",
      });
      onOpenChange(false);
      onClientUpdated();
    } catch (error) {
      console.error("Error updating client:", error);
      toast({
        title: "Error",
        description: "Failed to update client. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#22251e] border-[#FFC900]/20 w-[95%] max-w-lg mx-auto">
        <DialogHeader>
          <DialogTitle className="text-[#FFC900]">Edit Client</DialogTitle>
        </DialogHeader>
        <ClientForm onSubmit={handleSubmit} initialData={client} />
      </DialogContent>
    </Dialog>
  );
}
