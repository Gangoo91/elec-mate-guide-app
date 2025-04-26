
import React from "react";
import { format, parseISO } from "date-fns";
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";

interface TimeEntry {
  id: string;
  clock_in: string;
  clock_out: string | null;
  break_start: string | null;
  break_end: string | null;
  total_hours: number | null;
  travel_time: number | null;
}

interface WeekSummary {
  day: string;
  hours: number;
  jobs: number;
}

interface TimeHistoryTableProps {
  entries: TimeEntry[];
  loading: boolean;
  weekData?: WeekSummary[];
  showSummary?: boolean;
}

export function TimeHistoryTable({ 
  entries, 
  loading, 
  weekData = [],
  showSummary = false 
}: TimeHistoryTableProps) {
  if (loading) {
    return <div className="text-center text-[#FFC900]/70">Loading time entries...</div>;
  }

  if (showSummary && weekData.length > 0) {
    return (
      <Table>
        <TableCaption>Weekly summary by day</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-[#FFC900]">Day</TableHead>
            <TableHead className="text-[#FFC900]">Hours Worked</TableHead>
            <TableHead className="text-[#FFC900]">Jobs</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {weekData.map((day) => (
            <TableRow key={day.day}>
              <TableCell className="font-medium text-[#FFC900]/90">
                {day.day}
              </TableCell>
              <TableCell className="text-[#FFC900]/90">
                {day.hours.toFixed(1)}h
              </TableCell>
              <TableCell className="text-[#FFC900]/90">
                {day.jobs}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }

  if (!entries.length) {
    return <div className="text-center text-[#FFC900]/70">No time entries found.</div>;
  }

  const formatDuration = (hours: number | null) => {
    if (hours === null) return "In progress";
    
    const h = Math.floor(hours);
    const m = Math.round((hours - h) * 60);
    
    return `${h}h ${m}m`;
  };

  const formatTime = (timestamp: string | null) => {
    if (!timestamp) return "—";
    return format(parseISO(timestamp), "h:mm a");
  };

  return (
    <Table>
      <TableCaption>Your time entries history</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="text-[#FFC900]">Date</TableHead>
          <TableHead className="text-[#FFC900]">Clock In</TableHead>
          <TableHead className="text-[#FFC900]">Clock Out</TableHead>
          <TableHead className="text-[#FFC900]">Work Time</TableHead>
          <TableHead className="text-[#FFC900]">Travel Time</TableHead>
          <TableHead className="text-[#FFC900] text-right">Total Duration</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {entries.map((entry) => (
          <TableRow key={entry.id}>
            <TableCell className="font-medium text-[#FFC900]/90">
              {format(parseISO(entry.clock_in), "MMM d, yyyy")}
            </TableCell>
            <TableCell className="text-[#FFC900]/90">
              {formatTime(entry.clock_in)}
            </TableCell>
            <TableCell className="text-[#FFC900]/90">
              {formatTime(entry.clock_out)}
            </TableCell>
            <TableCell className="text-[#FFC900]/90">
              {formatDuration(entry.total_hours)}
            </TableCell>
            <TableCell className="text-[#FFC900]/90">
              {entry.travel_time ? formatDuration(entry.travel_time) : "—"}
            </TableCell>
            <TableCell className="text-right text-[#FFC900]/90">
              {entry.total_hours && entry.travel_time 
                ? formatDuration(entry.total_hours + entry.travel_time)
                : formatDuration(entry.total_hours)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
