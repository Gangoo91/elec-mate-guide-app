
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTeamNotifications } from "@/hooks/useTeamNotifications";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export function NotificationBadge() {
  const { notifications, markAsRead, markAllAsRead, unreadCount } = useTeamNotifications();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5 text-[#FFC900]" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {unreadCount > 9 ? "9+" : unreadCount}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0 bg-[#333] border-[#444]">
        <div className="flex justify-between items-center p-3 border-b border-[#444]">
          <h4 className="text-[#FFC900] font-medium">Notifications</h4>
          {unreadCount > 0 && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={markAllAsRead}
              className="text-xs text-[#FFC900]/70 hover:text-[#FFC900]"
            >
              Mark all as read
            </Button>
          )}
        </div>
        <div className="max-h-64 overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="p-4 text-center text-[#FFC900]/50">
              No new notifications
            </div>
          ) : (
            notifications.map((notification) => (
              <div 
                key={notification.id} 
                className={cn(
                  "p-3 border-b border-[#444] hover:bg-[#444]/30 cursor-pointer",
                  !notification.read && "bg-[#444]/50"
                )}
                onClick={() => markAsRead(notification.id)}
              >
                <div className="flex justify-between items-start">
                  <p className="text-sm text-[#FFC900]">
                    New message
                  </p>
                  <span className="text-xs text-[#FFC900]/50">
                    {new Date(notification.created_at).toLocaleTimeString()}
                  </span>
                </div>
                <p className="text-xs text-[#FFC900]/70 mt-1">
                  {notification.content.length > 50 
                    ? `${notification.content.substring(0, 50)}...` 
                    : notification.content}
                </p>
              </div>
            ))
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
