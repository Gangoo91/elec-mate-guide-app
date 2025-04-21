
import React from "react";
import { Users } from "lucide-react";
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
    <div
      className="flex items-center justify-center gap-2 mt-5 bg-[#22251e] border border-[#FFC900]/30 rounded-full px-5 py-2 shadow text-[#FFC900] text-sm font-semibold"
      style={{ maxWidth: 280 }}
    >
      <Users className="h-5 w-5" />
      <span>Community Size:</span>
      <span className="ml-2 text-[#FFC900] font-bold">
        {isLoading ? "..." : `${userCount} member${userCount !== 1 ? 's' : ''}`}
      </span>
    </div>
  );
};

export default CommunityCounter;
