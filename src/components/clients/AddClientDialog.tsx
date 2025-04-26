
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import ClientForm from "./ClientForm";

export function AddClientDialog() {
  const { toast } = useToast();
  const [open, setOpen] = React.useState(false);

  const handleSubmit = async (data: {
    name: string;
    type: string;
    address: string;
    phone?: string;
    email?: string;
    notes?: string;
  }) => {
    try {
      const { error } = await supabase.from('clients').insert({
        ...data,
        user_id: (await supabase.auth.getUser()).data.user?.id
      });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Client has been added successfully",
      });
      setOpen(false);
      
      window.location.reload();
    } catch (error) {
      console.error("Error adding client:", error);
      toast({
        title: "Error",
        description: "Failed to add client. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-[#FFC900] hover:bg-[#e5b700] text-[#151812] w-full md:w-auto px-8">
          <Plus className="mr-2 h-4 w-4" /> Add New Client
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-[#22251e] border-[#FFC900]/20 w-[95%] max-w-lg mx-auto">
        <DialogHeader>
          <DialogTitle className="text-[#FFC900]">Add New Client</DialogTitle>
        </DialogHeader>
        <ClientForm onSubmit={handleSubmit} />
      </DialogContent>
    </Dialog>
  );
}
