
import React, { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";

export function TimeClockCard() {
  const { toast } = useToast();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [activeEntry, setActiveEntry] = useState<any>(null);
  const [onBreak, setOnBreak] = useState(false);
  
  useEffect(() => {
    if (user) {
      checkActiveEntry();
    }
  }, [user]);

  const checkActiveEntry = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('time_entries')
        .select('*')
        .eq('user_id', user?.id)
        .is('clock_out', null)
        .order('clock_in', { ascending: false })
        .limit(1);
      
      if (error) throw error;
      
      if (data && data.length > 0) {
        setActiveEntry(data[0]);
        setOnBreak(data[0].break_start !== null && data[0].break_end === null);
      } else {
        setActiveEntry(null);
        setOnBreak(false);
      }
    } catch (error) {
      console.error("Error checking active entry:", error);
      toast({
        title: "Error",
        description: "Unable to check your clock status",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleClockIn = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('time_entries')
        .insert({
          user_id: user?.id,
          clock_in: new Date().toISOString(),
        })
        .select();
      
      if (error) throw error;
      
      setActiveEntry(data?.[0]);
      toast({
        title: "Clocked In",
        description: `You clocked in at ${format(new Date(), 'h:mm a')}`,
      });
    } catch (error) {
      console.error("Error clocking in:", error);
      toast({
        title: "Error",
        description: "Unable to clock in. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleClockOut = async () => {
    if (!activeEntry) return;
    
    try {
      setLoading(true);
      
      const { error } = await supabase
        .from('time_entries')
        .update({
          clock_out: new Date().toISOString(),
        })
        .eq('id', activeEntry.id);
      
      if (error) throw error;
      
      toast({
        title: "Clocked Out",
        description: `You clocked out at ${format(new Date(), 'h:mm a')}`,
      });
      setActiveEntry(null);
      setOnBreak(false);
    } catch (error) {
      console.error("Error clocking out:", error);
      toast({
        title: "Error",
        description: "Unable to clock out. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleBreakStart = async () => {
    if (!activeEntry) return;
    
    try {
      setLoading(true);
      const { error } = await supabase
        .from('time_entries')
        .update({
          break_start: new Date().toISOString()
        })
        .eq('id', activeEntry.id);
      
      if (error) throw error;
      
      setOnBreak(true);
      toast({
        title: "Break Started",
        description: `Your break started at ${format(new Date(), 'h:mm a')}`,
      });
    } catch (error) {
      console.error("Error starting break:", error);
      toast({
        title: "Error",
        description: "Unable to start break. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleBreakEnd = async () => {
    if (!activeEntry) return;
    
    try {
      setLoading(true);
      const { error } = await supabase
        .from('time_entries')
        .update({
          break_end: new Date().toISOString()
        })
        .eq('id', activeEntry.id);
      
      if (error) throw error;
      
      setOnBreak(false);
      toast({
        title: "Break Ended",
        description: `Your break ended at ${format(new Date(), 'h:mm a')}`,
      });
    } catch (error) {
      console.error("Error ending break:", error);
      toast({
        title: "Error",
        description: "Unable to end break. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const renderButtons = () => {
    if (loading) {
      return (
        <Button disabled className="w-full bg-[#FFC900] hover:bg-[#e5b700] text-[#151812]">
          Loading...
        </Button>
      );
    }

    if (!activeEntry) {
      return (
        <Button 
          onClick={handleClockIn} 
          className="w-full bg-[#FFC900] hover:bg-[#e5b700] text-[#151812]"
        >
          Clock In
        </Button>
      );
    }

    if (onBreak) {
      return (
        <div className="space-y-2">
          <Button 
            onClick={handleBreakEnd} 
            className="w-full bg-[#FFC900] hover:bg-[#e5b700] text-[#151812]"
          >
            End Break
          </Button>
          <Button 
            onClick={handleClockOut}
            variant="outline" 
            className="w-full border border-[#FFC900]/50 text-[#FFC900] hover:bg-[#FFC900]/10"
          >
            Clock Out
          </Button>
        </div>
      );
    }

    return (
      <div className="space-y-4">
        <Button 
          onClick={handleClockOut} 
          className="w-full bg-[#FFC900] hover:bg-[#e5b700] text-[#151812]"
        >
          Clock Out
        </Button>
        <Button 
          onClick={handleBreakStart}
          variant="outline" 
          className="w-full border border-[#FFC900]/50 text-[#FFC900] hover:bg-[#FFC900]/10"
        >
          Start Break
        </Button>
      </div>
    );
  };

  const getStatus = () => {
    if (!activeEntry) return "Not clocked in";
    if (onBreak) return "On break";
    return "Clocked in";
  };

  return (
    <Card className="bg-[#22251e] border-[#FFC900]/20">
      <CardContent className="pt-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[#FFC900] font-medium text-lg">Time Tracking</h3>
          <Clock className="h-5 w-5 text-[#FFC900]" />
        </div>
        
        <div className="mb-4">
          <p className="text-sm text-[#FFC900]/70">Current Status</p>
          <p className="text-lg font-semibold text-[#FFC900]">{getStatus()}</p>
          {activeEntry && (
            <p className="text-sm text-[#FFC900]/70">
              Since {format(new Date(activeEntry.clock_in), 'h:mm a')}
            </p>
          )}
        </div>
        
        <div className="space-y-2">
          {renderButtons()}
        </div>
      </CardContent>
    </Card>
  );
}
