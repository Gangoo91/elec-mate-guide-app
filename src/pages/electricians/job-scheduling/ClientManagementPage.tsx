
import React, { useState, useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { User, Phone, MapPin, Search, Mail, FileText } from "lucide-react";
import { AddClientDialog } from "@/components/clients/AddClientDialog";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import BackButton from "@/components/navigation/BackButton";

interface Client {
  id: string;
  name: string;
  type: string;
  address: string;
  phone: string | null;
  email: string | null;
  notes: string | null;
}

const ClientManagementPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [clients, setClients] = useState<Client[]>([]);
  const { toast } = useToast();
  
  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const { data, error } = await supabase
        .from('clients')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setClients(data || []);
    } catch (error) {
      console.error("Error fetching clients:", error);
      toast({
        title: "Error",
        description: "Failed to fetch clients. Please try again.",
        variant: "destructive",
      });
    }
  };

  const filteredClients = clients.filter(client => 
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    client.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <MainLayout>
      <div className="container py-8">
        <div className="mb-4">
          <BackButton />
        </div>

        <div className="flex flex-col items-center justify-center mb-8">
          <AddClientDialog />
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-[#FFC900]/50" />
            </div>
            <input
              type="text"
              placeholder="Search clients by name or address..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-[#FFC900]/30 rounded-md bg-[#22251e] text-[#FFC900] focus:outline-none focus:border-[#FFC900]/70"
            />
          </div>
          
          <div className="space-y-4">
            {filteredClients.length > 0 ? (
              filteredClients.map(client => (
                <Card key={client.id} className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-[#FFC900] font-medium text-lg flex items-center">
                          <User className="h-5 w-5 mr-2" />
                          {client.name}
                        </h3>
                        <p className="text-[#FFC900]/70 text-sm">Client Type: {client.type}</p>
                      </div>
                      
                      <div className="space-y-2">
                        <p className="text-[#FFC900]/70 text-sm flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          {client.address}
                        </p>
                        {client.phone && (
                          <p className="text-[#FFC900]/70 text-sm flex items-center">
                            <Phone className="h-4 w-4 mr-2" />
                            {client.phone}
                          </p>
                        )}
                        {client.email && (
                          <p className="text-[#FFC900]/70 text-sm flex items-center">
                            <Mail className="h-4 w-4 mr-2" />
                            {client.email}
                          </p>
                        )}
                      </div>

                      {client.notes && (
                        <div className="mt-4 border-t border-[#FFC900]/10 pt-4">
                          <p className="text-[#FFC900]/70 text-sm flex items-start">
                            <FileText className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                            <span className="whitespace-pre-wrap">{client.notes}</span>
                          </p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="text-center py-8">
                <User className="h-12 w-12 text-[#FFC900]/50 mx-auto mb-4" />
                <h3 className="text-xl text-[#FFC900]">No Clients Found</h3>
                <p className="text-[#FFC900]/70 mt-2">Try adjusting your search term</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ClientManagementPage;
