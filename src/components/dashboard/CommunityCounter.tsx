
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

const CommunityCounter = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['community-count'],
    queryFn: async () => {
      try {
        // Count unique users from profiles
        const { count, error } = await supabase
          .from('profiles')
          .select('id', { count: 'exact' });
          
        if (error) throw error;
        return count || 0;
      } catch (err) {
        console.error('Error fetching community count:', err);
        return 0;
      }
    }
  });
  
  return (
    <span className="bg-[#FFC900]/10 px-2 py-1 rounded text-[#FFC900] font-medium">
      {isLoading ? '...' : data?.toLocaleString() || '0'} members
    </span>
  );
};

export default CommunityCounter;
