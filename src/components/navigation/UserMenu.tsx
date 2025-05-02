
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
import { User, Settings, LogOut, BookOpen, ClipboardCheck, CheckCircle } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const UserMenu = () => {
  const { user, userRole, isTutorApproved, refreshTutorStatus } = useAuth();
  const { toast } = useToast();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  const handleApproveTutor = async () => {
    if (!user) return;

    try {
      // Check if an application record exists
      const { data: existingApplication } = await supabase
        .from('tutor_approvals')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (existingApplication) {
        // Update existing record to approved
        await supabase
          .from('tutor_approvals')
          .update({
            is_approved: true,
            approved_at: new Date().toISOString()
          })
          .eq('user_id', user.id);
      } else {
        // Create new approved record
        await supabase
          .from('tutor_approvals')
          .insert({
            user_id: user.id,
            is_approved: true,
            approved_at: new Date().toISOString()
          });
      }
      
      // Refresh the tutor status
      if (refreshTutorStatus) {
        await refreshTutorStatus();
      }

      toast({
        title: "Tutor Access Granted",
        description: "You now have access to the tutor area",
      });
    } catch (error) {
      console.error("Error approving tutor:", error);
      toast({
        title: "Error",
        description: "Could not approve tutor access",
        variant: "destructive"
      });
    }
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
            <Link to="/tutor-application" className="flex items-center w-full">
              <ClipboardCheck className="h-4 w-4 mr-2" />
              <span>Tutor Application</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem className="hover:bg-[#FFC900]/10">
            <Link to="/settings" className="flex items-center w-full">
              <Settings className="h-4 w-4 mr-2" />
              <span>Settings</span>
            </Link>
          </DropdownMenuItem>
          
          {/* Developer self-approval button */}
          {userRole === 'tutor' && !isTutorApproved && (
            <DropdownMenuItem 
              onClick={handleApproveTutor} 
              className="hover:bg-[#FFC900]/10 text-green-500"
            >
              <CheckCircle className="h-4 w-4 mr-2" />
              <span>Dev: Approve Tutor</span>
            </DropdownMenuItem>
          )}
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
