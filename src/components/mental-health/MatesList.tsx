
import React from "react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { MatesSearch } from "./MatesSearch";
import { MateCard } from "./MateCard";
import { useMatesList } from "@/hooks/useMatesList";
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
  const {
    mates,
    isLoading,
    searchTerm,
    setSearchTerm,
    specialty,
    setSpecialty,
    currentPage,
    setCurrentPage,
    totalPages,
    allSpecialties,
    totalMates
  } = useMatesList();

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

  if (isLoading) {
    return <div className="flex justify-center p-8">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <MatesSearch
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        specialty={specialty}
        onSpecialtyChange={setSpecialty}
        allSpecialties={allSpecialties}
      />

      <div className="text-[#FFC900]/70 text-sm">
        Showing {mates.length} of {totalMates} mates
      </div>
      
      {mates.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mates.map((mate) => (
            <MateCard 
              key={mate.id} 
              mate={mate} 
              onSendMessage={sendMessage}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-8 bg-[#22251e] border border-[#FFC900]/20 rounded-lg">
          <p className="text-[#FFC900]">No mates found matching your criteria</p>
        </div>
      )}
      
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
            
            {Array.from({ length: totalPages }).map((_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  className={`${currentPage === i + 1 ? 
                    'bg-[#FFC900] text-[#22251e]' : 
                    'text-[#FFC900] hover:bg-[#FFC900]/10'}`}
                  onClick={() => setCurrentPage(i + 1)}
                  isActive={currentPage === i + 1}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            
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
