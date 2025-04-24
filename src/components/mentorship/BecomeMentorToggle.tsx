
import React, { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";

const BecomeMentorToggle = () => {
  const [isMentor, setIsMentor] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    const checkMentorStatus = async () => {
      if (!user) return;
      
      const { data, error } = await supabase
        .from('mentors')
        .select('is_active')
        .eq('user_id', user.id)
        .single();
      
      if (!error && data) {
        setIsMentor(data.is_active);
      }
      setIsLoading(false);
    };

    checkMentorStatus();
  }, [user]);

  const handleToggle = async () => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please log in to become a mentor",
        variant: "destructive",
      });
      return;
    }

    const newValue = !isMentor;
    
    const { data, error } = await supabase
      .from('mentors')
      .upsert({
        user_id: user.id,
        is_active: newValue,
        specialties: [],
        experience: '',
      }, {
        onConflict: 'user_id'
      });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to update mentor status",
        variant: "destructive",
      });
      return;
    }

    setIsMentor(newValue);
    toast({
      title: newValue ? "You are now a mentor" : "Mentor status disabled",
      description: newValue 
        ? "Apprentices can now send you mentorship requests" 
        : "You will no longer receive mentorship requests",
    });
  };

  if (isLoading) return null;

  return (
    <div className="flex items-center space-x-4 p-4 bg-[#22251e] rounded-lg border border-[#FFC900]/20">
      <Switch
        checked={isMentor}
        onCheckedChange={handleToggle}
        className="data-[state=checked]:bg-[#FFC900]"
      />
      <div className="space-y-1">
        <h4 className="text-sm font-medium text-[#FFC900]">
          Become a Mentor
        </h4>
        <p className="text-sm text-[#FFC900]/70">
          {isMentor 
            ? "You are currently accepting mentorship requests" 
            : "Toggle to start mentoring apprentices"}
        </p>
      </div>
    </div>
  );
};

export default BecomeMentorToggle;
