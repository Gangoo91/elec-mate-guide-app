import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "@/components/Logo";
import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const DashboardHeroSection = () => {
  const navigate = useNavigate();

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
    <div className="flex flex-col items-center text-center mb-12 animate-fade-in">
      <Logo size={80} />
      <h1 className="text-4xl sm:text-5xl font-extrabold text-[#FFC900] mb-4 mt-6">
        Electrical Industry Hub
      </h1>
      <p className="text-lg text-[#FFC900]/80 mb-6 max-w-xl">
        Your all-in-one platform for apprentices, electricians, and employers to connect, learn, and thrive.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Button
          onClick={() => navigate("/signup")}
          className="bg-[#FFC900] text-[#151812] hover:bg-[#e5b700]"
        >
          Get Started
        </Button>
        <Button
          onClick={() => navigate("/login")}
          variant="outline"
          className="border-[#FFC900]/50 text-[#FFC900] hover:bg-[#FFC900]/10"
        >
          Sign In
        </Button>
      </div>
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
    </div>
  );
};

export default DashboardHeroSection;
