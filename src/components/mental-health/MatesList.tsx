
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, UserCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const MatesList = () => {
  const { toast } = useToast();
  
  const { data: mates, isLoading } = useQuery({
    queryKey: ["mental-health-mates"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("mental_health_mates")
        .select(`
          *,
          profiles:profiles(first_name, last_name)
        `)
        .eq("is_available", true);
        
      if (error) throw error;
      return data;
    },
  });

  const sendMessage = async (recipientId: string) => {
    try {
      const { error } = await supabase.from("mate_notifications").insert({
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
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {mates?.map((mate) => (
        <Card key={mate.id} className="border-[#FFC900]/20 bg-[#22251e]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserCheck className="h-5 w-5 text-[#FFC900]" />
              {mate.profiles?.first_name} {mate.profiles?.last_name}
            </CardTitle>
            <CardDescription className="line-clamp-2">{mate.about_me}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-[#FFC900]">Specialties</h4>
                <div className="flex flex-wrap gap-2 mt-1">
                  {mate.specialties?.map((specialty, i) => (
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
  );
};
