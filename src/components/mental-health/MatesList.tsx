
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, UserCheck, Search } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export const MatesList = () => {
  const { toast } = useToast();
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [specialty, setSpecialty] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  
  const { data: mates, isLoading } = useQuery({
    queryKey: ["mental-health-mates"],
    queryFn: async () => {
      const { data: matesData, error: matesError } = await supabase
        .from("mental_health_mates")
        .select("*")
        .eq("is_available", true);
        
      if (matesError) throw matesError;
      
      const matesWithProfiles = await Promise.all(
        matesData.map(async (mate) => {
          const { data: profileData, error: profileError } = await supabase
            .from("profiles")
            .select("first_name, last_name")
            .eq("id", mate.user_id)
            .single();
            
          if (profileError) {
            console.error("Error fetching profile:", profileError);
            return {
              ...mate,
              profiles: { first_name: "Anonymous", last_name: "User" }
            };
          }
          
          return {
            ...mate,
            profiles: profileData
          };
        })
      );
      
      return matesWithProfiles;
    },
  });

  const sendMessage = async (recipientId: string) => {
    try {
      if (!user) {
        toast({
          title: "Error",
          description: "You must be logged in to send a message",
          variant: "destructive",
        });
        return;
      }

      const { error } = await supabase.from("mate_notifications").insert({
        sender_id: user.id,
        recipient_id: recipientId,
        message: "Hi! I would like to connect with you as a Mental Health Mate.",
      });

      if (error) throw error;

      toast({
        title: "Message Sent",
        description: "Your request has been sent to the Mental Health Mate",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message",
        variant: "destructive",
      });
      console.error("Error sending message:", error);
    }
  };

  // Get all unique specialties for filter dropdown
  const allSpecialties = React.useMemo(() => {
    if (!mates) return [];
    const specialtiesSet = new Set<string>();
    mates.forEach(mate => {
      mate.specialties?.forEach((specialty: string) => {
        specialtiesSet.add(specialty);
      });
    });
    return Array.from(specialtiesSet);
  }, [mates]);

  // Filter mates based on search term and specialty
  const filteredMates = React.useMemo(() => {
    if (!mates) return [];
    
    return mates.filter(mate => {
      const nameMatch = 
        (mate.profiles?.first_name?.toLowerCase() || "")
          .includes(searchTerm.toLowerCase()) ||
        (mate.profiles?.last_name?.toLowerCase() || "")
          .includes(searchTerm.toLowerCase()) ||
        (mate.about_me?.toLowerCase() || "")
          .includes(searchTerm.toLowerCase());
          
      const specialtyMatch = !specialty || 
        mate.specialties?.some((s: string) => 
          s.toLowerCase() === specialty.toLowerCase()
        );
        
      return nameMatch && specialtyMatch;
    });
  }, [mates, searchTerm, specialty]);

  // Pagination logic
  const totalPages = Math.ceil((filteredMates?.length || 0) / itemsPerPage);
  const paginatedMates = filteredMates.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Generate page numbers for pagination
  const pageNumbers = [];
  const maxVisiblePages = 5;
  
  if (totalPages <= maxVisiblePages) {
    // If we have less pages than max visible, show all
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  } else {
    // Always show first page
    pageNumbers.push(1);
    
    // Determine start and end of the middle section
    let startPage = Math.max(2, currentPage - 1);
    let endPage = Math.min(totalPages - 1, currentPage + 1);
    
    // Adjust if we're too close to the beginning
    if (currentPage <= 3) {
      endPage = Math.min(maxVisiblePages - 1, totalPages - 1);
    }
    
    // Adjust if we're too close to the end
    if (currentPage >= totalPages - 2) {
      startPage = Math.max(2, totalPages - maxVisiblePages + 2);
    }
    
    // Add ellipsis after first page if needed
    if (startPage > 2) {
      pageNumbers.push('ellipsis1');
    }
    
    // Add the middle pages
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    
    // Add ellipsis before last page if needed
    if (endPage < totalPages - 1) {
      pageNumbers.push('ellipsis2');
    }
    
    // Always show last page
    pageNumbers.push(totalPages);
  }

  if (isLoading) {
    return <div className="flex justify-center p-8">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Input
            placeholder="Search by name or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-[#22251e] border-[#FFC900]/20"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-[#FFC900]/70" />
        </div>
        
        <Select value={specialty} onValueChange={setSpecialty}>
          <SelectTrigger className="w-full md:w-[220px] bg-[#22251e] border-[#FFC900]/20">
            <SelectValue placeholder="Filter by specialty" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All specialties</SelectItem>
            {allSpecialties.map((spec) => (
              <SelectItem key={spec} value={spec}>
                {spec}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Results count */}
      <div className="text-[#FFC900]/70 text-sm">
        Showing {paginatedMates.length} of {filteredMates.length} mates
      </div>
      
      {/* Mates Grid */}
      {paginatedMates.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {paginatedMates?.map((mate) => (
            <Card key={mate.id} className="border-[#FFC900]/20 bg-[#22251e]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserCheck className="h-5 w-5 text-[#FFC900]" />
                  <span className="text-[#FFC900]">
                    {mate.profiles?.first_name || 'Anonymous'} {mate.profiles?.last_name || 'User'}
                  </span>
                </CardTitle>
                <CardDescription className="line-clamp-2">{mate.about_me}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-[#FFC900]">Specialties</h4>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {mate.specialties?.map((specialty: string, i: number) => (
                        <span
                          key={i}
                          className="text-xs bg-[#FFC900]/10 text-[#FFC900] px-2 py-1 rounded"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button
                    onClick={() => sendMessage(mate.user_id)}
                    className="w-full bg-[#FFC900] text-[#22251e] hover:bg-[#FFC900]/90"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Connect
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 bg-[#22251e] border border-[#FFC900]/20 rounded-lg">
          <p className="text-[#FFC900]">No mates found matching your criteria</p>
        </div>
      )}
      
      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination className="mt-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                className="text-[#FFC900] hover:bg-[#FFC900]/10" 
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                aria-disabled={currentPage === 1}
                tabIndex={currentPage === 1 ? -1 : undefined}
                style={{ opacity: currentPage === 1 ? 0.5 : 1, cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}
              />
            </PaginationItem>
            
            {pageNumbers.map((page, index) => {
              if (page === 'ellipsis1' || page === 'ellipsis2') {
                return (
                  <PaginationItem key={`ellipsis-${index}`}>
                    <PaginationEllipsis />
                  </PaginationItem>
                );
              }
              
              return (
                <PaginationItem key={index}>
                  <PaginationLink
                    className={`${currentPage === page ? 
                      'bg-[#FFC900] text-[#22251e]' : 
                      'text-[#FFC900] hover:bg-[#FFC900]/10'}`}
                    onClick={() => setCurrentPage(page as number)}
                    isActive={currentPage === page}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              );
            })}
            
            <PaginationItem>
              <PaginationNext 
                className="text-[#FFC900] hover:bg-[#FFC900]/10" 
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                aria-disabled={currentPage === totalPages}
                tabIndex={currentPage === totalPages ? -1 : undefined}
                style={{ opacity: currentPage === totalPages ? 0.5 : 1, cursor: currentPage === totalPages ? 'not-allowed' : 'pointer' }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};
