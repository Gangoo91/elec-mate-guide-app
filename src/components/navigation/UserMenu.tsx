
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, Settings, User as UserIcon, CreditCard } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useQueryClient } from "@tanstack/react-query";

type UserMenuProps = {
  user: any;
  bypassAuth: boolean;
};

const UserMenu: React.FC<UserMenuProps> = ({ user, bypassAuth }) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      // Clear all queries in the cache when logging out
      queryClient.clear();
      toast({
        title: "Logged out successfully",
        description: "You have been logged out of your account",
      });
      navigate("/login");
    } catch (error) {
      toast({
        title: "Error logging out",
        description: "There was a problem logging you out",
        variant: "destructive",
      });
    }
  };

  if (user || bypassAuth) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="rounded-full border-[#FFC900]/50 bg-transparent">
            <UserIcon className="h-5 w-5 text-[#FFC900]" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-[#22251e] border-[#FFC900]/20">
          <DropdownMenuLabel className="text-[#FFC900]">My Account</DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-[#FFC900]/20" />
          <DropdownMenuItem onClick={() => navigate("/profile")} className="text-[#FFC900]/80 focus:text-[#FFC900] focus:bg-[#FFC900]/10">
            <UserIcon className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate("/manage-subscription")} className="text-[#FFC900]/80 focus:text-[#FFC900] focus:bg-[#FFC900]/10">
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Manage Subscription</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate("/settings")} className="text-[#FFC900]/80 focus:text-[#FFC900] focus:bg-[#FFC900]/10">
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="bg-[#FFC900]/20" />
          <DropdownMenuItem onClick={handleLogout} className="text-[#FFC900]/80 focus:text-[#FFC900] focus:bg-[#FFC900]/10">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Logout</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  // Display login/signup buttons for unauthenticated users (rare on desktop)
  return (
    <div className="hidden md:flex items-center gap-2">
      <Button variant="ghost" onClick={() => navigate("/login")} className="text-[#FFC900] hover:bg-[#FFC900]/10">
        Login
      </Button>
      <Button onClick={() => navigate("/signup")} className="bg-[#FFC900] text-[#151812] hover:bg-[#e5b700]">
        Sign Up
      </Button>
    </div>
  );
};

export default UserMenu;
