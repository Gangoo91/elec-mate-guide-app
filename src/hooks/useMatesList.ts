
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const useMatesList = () => {
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
          
      const specialtyMatch = !specialty || specialty === "all" || 
        mate.specialties?.some((s: string) => 
          s.toLowerCase() === specialty.toLowerCase()
        );
        
      return nameMatch && specialtyMatch;
    });
  }, [mates, searchTerm, specialty]);

  const totalPages = Math.ceil((filteredMates?.length || 0) / itemsPerPage);
  const paginatedMates = filteredMates.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return {
    mates: paginatedMates,
    isLoading,
    searchTerm,
    setSearchTerm,
    specialty,
    setSpecialty,
    currentPage,
    setCurrentPage,
    totalPages,
    allSpecialties,
    totalMates: filteredMates.length
  };
};
