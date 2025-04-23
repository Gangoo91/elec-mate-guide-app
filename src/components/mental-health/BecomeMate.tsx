
import React, { useState, useEffect } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

export const BecomeMate = () => {
  const { toast } = useToast();
  const { user } = useAuth();
  const [isAvailable, setIsAvailable] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch the current mate status when component mounts
  useEffect(() => {
    const fetchMateStatus = async () => {
      if (user) {
        try {
          const { data, error } = await supabase
            .from("mental_health_mates")
            .select("is_available")
            .eq("user_id", user.id)
            .single();

          if (error && error.code !== 'PGRST116') {
            // PGRST116 is the error code for "no rows returned" which is expected if the user hasn't signed up yet
            console.error("Error fetching mate status:", error);
          } else if (data) {
            setIsAvailable(data.is_available);
          }
        } catch (error) {
          console.error("Error in fetch mate status:", error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
      }
    };

    fetchMateStatus();
  }, [user]);

  const handleToggleChange = async (checked: boolean) => {
    try {
      if (!user) {
        toast({
          title: "Error",
          description: "You must be logged in to become a Mental Health Mate",
          variant: "destructive",
        });
        return;
      }

      // First check if the user already has a record
      const { data, error: fetchError } = await supabase
        .from("mental_health_mates")
        .select("id")
        .eq("user_id", user.id)
        .single();

      let updateError;
      
      if (data) {
        // User already exists in the table, just update the is_available flag
        const { error } = await supabase
          .from("mental_health_mates")
          .update({ is_available: checked })
          .eq("user_id", user.id);
        
        updateError = error;
      } else if (fetchError && fetchError.code === 'PGRST116') {
        // User doesn't exist yet, create a new record
        const { error } = await supabase.from("mental_health_mates").insert({
          user_id: user.id,
          is_available: checked,
          about_me: "Available to chat and support fellow professionals",
          specialties: ["peer support", "listening"],
        });
        
        updateError = error;
      } else {
        // Some other error occurred during fetch
        throw fetchError;
      }

      if (updateError) throw updateError;

      setIsAvailable(checked);
      toast({
        title: checked ? "You're now a Mental Health Mate" : "Status Updated",
        description: checked 
          ? "Thank you for offering your support to the community" 
          : "You're no longer listed as an available Mental Health Mate",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update your Mental Health Mate status",
        variant: "destructive",
      });
      console.error("Error updating mental health mate status:", error);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center space-x-4 opacity-50">
        <Switch id="become-mate" disabled />
        <Label htmlFor="become-mate">
          Loading...
        </Label>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-4">
      <Switch
        id="become-mate"
        checked={isAvailable}
        onCheckedChange={handleToggleChange}
      />
      <Label htmlFor="become-mate">
        I want to be available as a Mental Health Mate
      </Label>
    </div>
  );
};
