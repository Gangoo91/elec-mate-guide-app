import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { startOfWeek, endOfWeek, parseISO, format } from "date-fns";

export interface TimeEntry {
  id: string;
  clock_in: string;
  clock_out: string | null;
  break_start: string | null;
  break_end: string | null;
  total_hours: number | null;
  travel_time: number | null;
  created_at: string;
}

export interface WeekData {
  day: string;
  hours: number;
  jobs: number;
}

export function useTimeEntries(selectedDate = new Date()) {
  const { user } = useAuth();
  const { toast } = useToast();
  const [weekData, setWeekData] = useState<WeekData[]>([]);

  // Query for time entries
  const {
    data: entries,
    isLoading,
    error,
    refetch
  } = useQuery({
    queryKey: ["timeEntries", user?.id, format(selectedDate, 'yyyy-MM-dd')],
    queryFn: async () => {
      if (!user) return [];
      
      const { data, error } = await supabase
        .from("time_entries")
        .select("*")
        .eq("user_id", user.id)
        .order("clock_in", { ascending: false });
        
      if (error) {
        throw error;
      }
      
      return data as TimeEntry[];
    },
    enabled: !!user,
  });

  // Query for jobs (for the weekly summary)
  const { data: jobs } = useQuery({
    queryKey: ["weeklyJobs", user?.id, format(selectedDate, 'yyyy-MM-dd')],
    queryFn: async () => {
      if (!user) return [];
      
      const startDate = format(startOfWeek(selectedDate), 'yyyy-MM-dd');
      const endDate = format(endOfWeek(selectedDate), 'yyyy-MM-dd');
      
      const { data, error } = await supabase
        .from("jobs")
        .select("*")
        .eq("user_id", user.id)
        .gte("date", startDate)
        .lte("date", endDate);
        
      if (error) {
        throw error;
      }
      
      return data;
    },
    enabled: !!user,
  });

  // Generate weekly summary data
  useEffect(() => {
    if (!entries || !jobs) return;
    
    const start = startOfWeek(selectedDate);
    const end = endOfWeek(selectedDate);
    
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const weekSummary = days.map((day, index) => {
      // Calculate hours worked on this day (including work time + travel time)
      const dayHours = entries
        .filter(entry => {
          const clockInDate = parseISO(entry.clock_in);
          return clockInDate.getDay() === index && entry.total_hours;
        })
        .reduce((sum, entry) => {
          const workHours = entry.total_hours || 0;
          const travelHours = entry.travel_time || 0;
          return sum + workHours + travelHours;
        }, 0);
      
      // Count jobs on this day
      const dayJobs = jobs.filter(job => {
        const jobDate = parseISO(job.date);
        return jobDate.getDay() === index;
      }).length;
      
      return {
        day,
        hours: Math.round(dayHours * 10) / 10, // Round to 1 decimal place
        jobs: dayJobs
      };
    });
    
    setWeekData(weekSummary);
  }, [entries, jobs, selectedDate]);

  useEffect(() => {
    if (error) {
      toast({
        title: "Error loading time entries",
        description: (error as Error).message,
        variant: "destructive",
      });
    }
  }, [error, toast]);

  return {
    entries: entries || [],
    isLoading,
    error,
    refetch,
    weekData
  };
}
