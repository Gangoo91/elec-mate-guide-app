
import React from 'react';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { User, Settings, LogOut, BookOpen } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';

const UserMenu = () => {
  const { user, userRole, isTutorApproved } = useAuth();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  if (!user) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="hover:bg-[#FFC900]/20 rounded-full">
          <User className="h-5 w-5 text-[#FFC900]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 border border-[#FFC900]/20 bg-[#1A1C15]">
        <DropdownMenuGroup>
          <DropdownMenuItem className="hover:bg-[#FFC900]/10">
            <Link to="/profile" className="flex items-center w-full">
              <User className="h-4 w-4 mr-2" />
              <span>Profile</span>
            </Link>
          </DropdownMenuItem>

          {userRole === 'tutor' && (
            <DropdownMenuItem className="hover:bg-[#FFC900]/10">
              <Link to="/tutors" className="flex items-center w-full">
                <BookOpen className="h-4 w-4 mr-2" />
                <span>Tutor Hub</span>
              </Link>
            </DropdownMenuItem>
          )}

          <DropdownMenuItem className="hover:bg-[#FFC900]/10">
            <Link to="/settings" className="flex items-center w-full">
              <Settings className="h-4 w-4 mr-2" />
              <span>Settings</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator className="bg-[#FFC900]/20" />

        <DropdownMenuItem onClick={handleLogout} className="hover:bg-[#FFC900]/10">
          <LogOut className="h-4 w-4 mr-2" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
