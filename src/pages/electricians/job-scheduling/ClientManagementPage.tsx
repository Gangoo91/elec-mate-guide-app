
import React, { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { User, Phone, MapPin, Search } from "lucide-react";

const ClientManagementPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Example client data
  const clients = [
    {
      id: "client1",
      name: "John Smith",
      type: "Residential",
      address: "123 Main Street, London",
      phone: "020-1234-5678",
      email: "john.smith@example.com",
      lastJob: "April 15, 2025"
    },
    {
      id: "client2",
      name: "ABC Corporation",
      type: "Commercial",
      address: "456 Business Avenue, Manchester",
      phone: "0161-876-5432",
      email: "contact@abccorp.com",
      lastJob: "April 22, 2025"
    },
    {
      id: "client3",
      name: "Sarah Williams",
      type: "Residential",
      address: "789 Park Lane, Birmingham",
      phone: "0121-555-7890",
      email: "sarah.w@example.com",
      lastJob: "April 28, 2025"
    },
    {
      id: "client4",
      name: "City Hospital",
      type: "Institutional",
      address: "101 Health Drive, Glasgow",
      phone: "0141-222-3333",
      email: "maintenance@cityhospital.org",
      lastJob: "May 1, 2025"
    }
  ];
  
  // Filter clients based on search term
  const filteredClients = clients.filter(client => 
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    client.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <MainLayout>
      <div className="container py-8">
        <PageHeader
          title="Client Management"
          description="Access client details, contact information, and job histories."
        />
        
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
                <Card key={client.id} className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300 cursor-pointer">
                  <CardContent className="pt-6">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="text-[#FFC900] font-medium text-lg flex items-center">
                          <User className="h-5 w-5 mr-2" />
                          {client.name}
                        </h3>
                        <p className="text-[#FFC900]/70 text-sm">Client Type: {client.type}</p>
                        
                        <div className="mt-3 space-y-1">
                          <p className="text-[#FFC900]/70 text-sm flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {client.address}
                          </p>
                          <p className="text-[#FFC900]/70 text-sm flex items-center">
                            <Phone className="h-4 w-4 mr-1" />
                            {client.phone}
                          </p>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <span className="bg-[#FFC900]/20 text-[#FFC900] px-2 py-1 rounded text-xs">
                          Last Job: {client.lastJob}
                        </span>
                        <div className="mt-4">
                          <button className="bg-[#FFC900] hover:bg-[#e5b700] text-[#151812] px-3 py-1 rounded text-sm">
                            View History
                          </button>
                        </div>
                      </div>
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
