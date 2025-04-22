
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const CommunityCounter = () => {
  const { data: userCount = 0, isLoading } = useQuery({
    queryKey: ['communitySize'],
    queryFn: async () => {
      const { count, error } = await supabase
        .from('subscribers')
        .select('*', { count: 'exact', head: true });
      
      if (error) {
        console.error('Error fetching community size:', error);
        return 0;
      }
      
      return count || 0;
    }
  });

  return (
    <span className="text-[#FFC900]/70">
      {isLoading ? "Loading..." : `${userCount} member${userCount !== 1 ? 's' : ''}`}
    </span>
  );
};

export default CommunityCounter;
