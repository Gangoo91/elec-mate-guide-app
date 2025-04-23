
import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

export const BecomeMate = () => {
  const { toast } = useToast();
  const { user } = useAuth();
  const [isAvailable, setIsAvailable] = useState(false);

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

      const { error } = await supabase.from("mental_health_mates").upsert({
        user_id: user.id,
        is_available: checked,
        about_me: "Available to chat and support fellow professionals",
        specialties: ["peer support", "listening"],
      });

      if (error) throw error;

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
