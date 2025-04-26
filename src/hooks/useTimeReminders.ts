
import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useTimeEntries } from "@/hooks/useTimeEntries";
import { useToast } from "@/hooks/use-toast";
import { parseISO, differenceInMinutes } from "date-fns";

export function useTimeReminders() {
  const { user } = useAuth();
  const { entries } = useTimeEntries();
  const { toast } = useToast();
  const [activeEntry, setActiveEntry] = useState<any>(null);
  
  // Default values for reminders (in minutes)
  const BREAK_REMINDER_TIME = 240; // 4 hours
  const CLOCK_OUT_REMINDER_TIME = 480; // 8 hours

  useEffect(() => {
    // Find the active time entry (no clock_out)
    const active = entries?.find(entry => entry.clock_out === null);
    setActiveEntry(active);

    if (!active) return;

    const clockInTime = parseISO(active.clock_in);
    const now = new Date();
    const minutesWorked = differenceInMinutes(now, clockInTime);
    
    // Set up break reminder (4 hours)
    if (minutesWorked >= BREAK_REMINDER_TIME && !active.break_start) {
      toast({
        title: "Break Reminder",
        description: "You've been working for 4 hours. Consider taking a break.",
        duration: 10000,
      });
    }
    
    // Set up clock-out reminder (8 hours)
    if (minutesWorked >= CLOCK_OUT_REMINDER_TIME) {
      toast({
        title: "Clock Out Reminder",
        description: "You've been working for 8 hours. Consider clocking out if your workday is complete.",
        duration: 10000,
      });
    }
  }, [entries, toast]);

  return {
    hasActiveTimeEntry: !!activeEntry,
    activeEntry
  };
}
