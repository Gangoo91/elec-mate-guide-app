
import React, { useState, useEffect, useCallback, useMemo } from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { ChatButton } from "@/components/chat/ChatButton";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Heart, MessageSquare } from "lucide-react";

interface MentalHealthMate {
  id: string;
  user_id: string;
  about_me: string | null;
  experience: string | null;
  is_available: boolean;
  specialties: string[];
  profiles?: {
    first_name: string | null;
    last_name: string | null;
    avatar_url: string | null;
  } | null;
}

const MentalHealthBuddy = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [mates, setMates] = useState<MentalHealthMate[]>([]);
  const [loading, setLoading] = useState(true);

  // Use useCallback to avoid recreating this function on each render
  const fetchMates = useCallback(async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('mental_health_mates')
        .select(`
          id,
          user_id,
          about_me,
          experience,
          is_available,
          specialties,
          profiles:user_id(
            first_name,
            last_name,
            avatar_url
          )
        `)
        .eq('is_available', true)
        .limit(9);

      if (error) throw error;

      // Type safe handling of the returned data
      const formattedMates: MentalHealthMate[] = data.map(mate => {
        // Handle the profiles property more safely
        const typedMate = {
          ...mate,
          // Cast with a type guard to ensure proper typing
          profiles: typeof mate.profiles === 'object' && mate.profiles !== null
            ? mate.profiles as MentalHealthMate['profiles']
            : null
        };
        return typedMate;
      });

      setMates(formattedMates);
    } catch (err) {
      console.error('Error fetching mental health mates:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMates();
  }, [fetchMates]);

  // Memoize any derived values
  const emptyStateContent = useMemo(() => (
    <div className="col-span-full text-center py-10">
      <Heart className="mx-auto h-16 w-16 text-[#FFC900]/50 mb-4" />
      <h3 className="text-xl font-medium text-[#FFC900] mb-2">No Mental Health Mates Available</h3>
      <p className="text-[#FFC900]/70 mb-6">
        There are currently no mates available for support. Please check back later.
      </p>
      <Button
        className="bg-[#FFC900] text-black hover:bg-[#FFC900]/90"
        onClick={() => navigate("/mental-health")}
      >
        Return to Mental Health Hub
      </Button>
    </div>
  ), [navigate]);

  // Create a memoized handler for the chat button click to avoid recreating it on each render
  const handleViewAllMessages = useCallback(() => {
    // Open the central chat dialog with mental_health preselected
    const chatButton = document.querySelector('[data-chat-button]') as HTMLButtonElement;
    if (chatButton) chatButton.click();
    
    // Wait for the dialog to open and then select the mental_health tab
    setTimeout(() => {
      const mentalHealthTab = document.querySelector('[data-value="mental_health"]') as HTMLButtonElement;
      if (mentalHealthTab) mentalHealthTab.click();
    }, 100);
  }, []);

  return (
    <MainLayout>
      <div className="container py-8">
        <PageHeader
          title="Mental Health Mate"
          description="Connect with a mental health mate for support and guidance"
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            // Loading skeleton
            Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="animate-pulse bg-[#2C2F24] rounded-lg p-6 border border-[#FFC900]/20 h-64">
                <div className="h-10 bg-[#FFC900]/10 rounded mb-4 w-2/3"></div>
                <div className="h-4 bg-[#FFC900]/10 rounded mb-2"></div>
                <div className="h-4 bg-[#FFC900]/10 rounded mb-2 w-5/6"></div>
                <div className="h-4 bg-[#FFC900]/10 rounded mb-4 w-3/4"></div>
                <div className="flex gap-2 mt-6 justify-end">
                  <div className="h-9 w-9 rounded-full bg-[#FFC900]/10"></div>
                </div>
              </div>
            ))
          ) : mates.length === 0 ? (
            emptyStateContent
          ) : (
            mates.map((mate) => (
              <div key={mate.id} className="bg-[#2C2F24] rounded-lg p-6 border border-[#FFC900]/20 flex flex-col h-full">
                <h3 className="text-[#FFC900] font-medium text-lg mb-2">
                  {mate.profiles?.first_name} {mate.profiles?.last_name}
                </h3>
                <p className="text-[#FFC900]/80 text-sm line-clamp-3 mb-3">{mate.about_me}</p>
                <div className="text-[#FFC900]/60 text-xs mb-4">
                  <span className="font-medium">Specialties:</span>{" "}
                  {mate.specialties?.join(", ") || "General mental health support"}
                </div>
                <div className="mt-auto flex justify-end">
                  <ChatButton
                    recipientId={mate.user_id}
                    recipientName={`${mate.profiles?.first_name || ''} ${mate.profiles?.last_name || ''}`}
                    chatType="mental_health"
                  />
                  <Button
                    variant="outline"
                    className="ml-2 border-[#FFC900]/20 text-[#FFC900] hover:bg-[#FFC900]/10"
                    onClick={handleViewAllMessages}
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    View All Messages
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default MentalHealthBuddy;
