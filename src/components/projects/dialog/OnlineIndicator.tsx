
import { cn } from "@/lib/utils";

interface OnlineIndicatorProps {
  online?: boolean;
  className?: string;
}

export function OnlineIndicator({ online, className }: OnlineIndicatorProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className={cn(
        "h-2 w-2 rounded-full",
        online ? "bg-green-500" : "bg-gray-400"
      )} />
      <span className="text-xs text-[#FFC900]/70">
        {online ? "Online" : "Offline"}
      </span>
    </div>
  );
}
