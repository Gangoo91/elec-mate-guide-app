
import React, { useState } from "react";
import { Bell } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useNotificationContext } from "@/contexts/NotificationContext";
import { Link } from "react-router-dom";

const NotificationBell: React.FC<{ className?: string }> = ({ className }) => {
  const [open, setOpen] = useState(false);
  const { 
    notifications,
    markAsRead,
    markAllAsRead,
    unreadCount
  } = useNotificationContext();
  
  const handleMarkAsRead = (id: string) => {
    markAsRead(id);
  };
  
  const handleMarkAllAsRead = () => {
    markAllAsRead();
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className={cn("relative", className)}
        >
          <Bell className="h-5 w-5 text-[#FFC900]" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {unreadCount > 9 ? "9+" : unreadCount}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-[#22251e] border-[#FFC900]/20 p-0">
        <div className="flex items-center justify-between p-4 border-b border-[#FFC900]/20">
          <h3 className="font-medium text-[#FFC900]">Notifications</h3>
          {unreadCount > 0 && (
            <Button 
              variant="ghost" 
              size="sm"
              onClick={handleMarkAllAsRead}
              className="text-[#FFC900]/70 hover:text-[#FFC900] hover:bg-[#FFC900]/10 text-xs"
            >
              Mark all as read
            </Button>
          )}
        </div>
        <div className="max-h-80 overflow-auto">
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className={cn(
                  "p-4 border-b border-[#FFC900]/10 cursor-pointer hover:bg-[#FFC900]/5",
                  !notification.read && "bg-[#FFC900]/10"
                )}
              >
                {notification.link ? (
                  <Link 
                    to={notification.link} 
                    className="block" 
                    onClick={() => handleMarkAsRead(notification.id)}
                  >
                    <NotificationItem notification={notification} />
                  </Link>
                ) : (
                  <div onClick={() => handleMarkAsRead(notification.id)}>
                    <NotificationItem notification={notification} />
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="p-8 text-center">
              <p className="text-[#FFC900]/50">No notifications</p>
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};

// Separate component for notification content
const NotificationItem = ({ notification }) => (
  <>
    <div className="flex items-center justify-between mb-1">
      <p className="font-medium text-[#FFC900]">{notification.title}</p>
      <span className="text-xs text-[#FFC900]/50">
        {new Date(notification.date).toLocaleDateString()}
      </span>
    </div>
    <p className="text-sm text-[#FFC900]/70">{notification.message}</p>
  </>
);

export default NotificationBell;
