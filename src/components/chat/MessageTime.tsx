
import { format, isToday, isYesterday } from "date-fns";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface MessageTimeProps {
  timestamp: string;
  showSeconds?: boolean;
  className?: string;
}

export function MessageTime({ timestamp, showSeconds = false, className = "" }: MessageTimeProps) {
  const date = new Date(timestamp);
  
  // Format the time display
  let displayTime: string;
  if (isToday(date)) {
    // Today: just show the time
    displayTime = format(date, showSeconds ? 'HH:mm:ss' : 'HH:mm');
  } else if (isYesterday(date)) {
    // Yesterday: show "Yesterday" and time
    displayTime = "Yesterday " + format(date, 'HH:mm');
  } else {
    // Older: show date and time
    displayTime = format(date, 'MMM d, HH:mm');
  }

  // Full detailed timestamp for tooltip
  const fullTimestamp = format(date, 'PPpp');
  
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className={`text-xs opacity-70 ${className}`}>
            {displayTime}
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-xs">{fullTimestamp}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
