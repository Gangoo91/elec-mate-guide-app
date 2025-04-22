import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "@/components/Logo";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useToast } from "@/hooks/use-toast";
import MobileMenu from "./MobileMenu";
import UserMenu from "./UserMenu";
import NotificationBell from "../notifications/NotificationBell";
import { useNotificationContext } from "@/contexts/NotificationContext";
import { useAuth } from "@/hooks/useAuth";
import { useUserPreferences } from "@/hooks/useUserPreferences";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const { user, loading, refreshSession } = useAuth();
  const { notifications } = useNotificationContext();
  const { setPreferredRole, preferences } = useUserPreferences();

  // Refresh session when navbar is mounted
  useEffect(() => {
    console.log("Navbar - Component mounted, refreshing session");
    refreshSession();
  }, [refreshSession]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Determine if we should hide user menu (for login/signup/forgot-password pages)
  const hideUserMenuPaths = ["/login", "/signup", "/forgot-password"];
  const isHiddenUserMenuPath = hideUserMenuPaths.includes(location.pathname);
  
  // Handle logo click - navigate based on preferences
  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (user) {
      const preferredRole = preferences.preferredRole;
      console.log("Navbar: Logo clicked, preferredRole:", preferredRole);
      
      if (preferredRole === 'apprentice') {
        console.log("Navbar: Navigating to apprentice-hub based on preferredRole");
        setPreferredRole('apprentice'); // Reinforce preference
        navigate('/apprentice-hub', { replace: true });
      } else {
        console.log("Navbar: Navigating to dashboard (no specific role preference)");
        setPreferredRole(null); // Clear preference
        navigate('/dashboard', { replace: true });
      }
    } else {
      navigate('/welcome', { replace: true });
    }
  };

  // Handle apprentice hub click with proper event prevention
  const handleApprenticeHubClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("Apprentice hub clicked, setting role and navigating");
    setPreferredRole('apprentice');
    navigate('/apprentice-hub', { replace: true });
  };
  
  // Handle dashboard click
  const handleDashboardClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("Dashboard clicked, clearing role and navigating");
    setPreferredRole(null);
    navigate('/dashboard', { replace: true });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-[#FFC900]/20 bg-[#151812]/95 backdrop-blur supports-[backdrop-filter]:bg-[#151812]/60">
      <div className={`container flex h-16 items-center justify-between ${isHiddenUserMenuPath ? 'justify-center' : 'justify-between'}`}>
        <div className={`flex items-center gap-6 ${isHiddenUserMenuPath ? 'justify-center w-full' : 'justify-start w-auto'}`}>
          <div onClick={handleHomeClick} className="flex items-center space-x-2 cursor-pointer">
            <Logo size={36} />
            <span className="text-xl font-bold text-[#FFC900]">Elec-Mate</span>
          </div>

          {!isHiddenUserMenuPath && (
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <div onClick={handleDashboardClick} className="cursor-pointer">
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${isActive('/dashboard') ? 'bg-[#FFC900]/10' : ''}`}>
                      Dashboard
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuItem>
                {user && (
                  <>
                    <NavigationMenuItem>
                      <div 
                        onClick={handleApprenticeHubClick}
                        className="cursor-pointer"
                      >
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${isActive('/apprentice-hub') || location.pathname.includes('/apprentices/') ? 'bg-[#FFC900]/10' : ''}`}>
                          Apprentice Hub
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <div 
                        onClick={() => {
                          setPreferredRole(null);
                          navigate('/electricians', { replace: true });
                        }}
                        className="cursor-pointer"
                      >
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${isActive('/electricians') || location.pathname.includes('/electricians/') ? 'bg-[#FFC900]/10' : ''}`}>
                          Electricians
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <div 
                        onClick={() => {
                          setPreferredRole(null);
                          navigate('/employers', { replace: true });
                        }}
                        className="cursor-pointer"
                      >
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${isActive('/employers') ? 'bg-[#FFC900]/10' : ''}`}>
                          Employers
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px] lg:grid-cols-2">
                          <li className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#FFC900]/10 hover:text-accent-foreground focus:bg-[#FFC900]/10 focus:text-accent-foreground cursor-pointer" onClick={() => navigate('/apprentices/learning-hub')}>
                            <div className="text-sm font-medium leading-none text-[#FFC900]">Training</div>
                            <p className="line-clamp-2 text-sm leading-snug text-[#FFC900]/70">
                              Professional development courses
                            </p>
                          </li>
                          <li className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#FFC900]/10 hover:text-accent-foreground focus:bg-[#FFC900]/10 focus:text-accent-foreground cursor-pointer" onClick={() => navigate('/apprentices/certifications')}>
                            <div className="text-sm font-medium leading-none text-[#FFC900]">Certification</div>
                            <p className="line-clamp-2 text-sm leading-snug text-[#FFC900]/70">
                              Industry-recognized certifications
                            </p>
                          </li>
                          <li className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#FFC900]/10 hover:text-accent-foreground focus:bg-[#FFC900]/10 focus:text-accent-foreground cursor-pointer" onClick={() => navigate('/apprentices/ai-tools')}>
                            <div className="text-sm font-medium leading-none text-[#FFC900]">Tools</div>
                            <p className="line-clamp-2 text-sm leading-snug text-[#FFC900]/70">
                              Professional tools and equipment
                            </p>
                          </li>
                          <li className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#FFC900]/10 hover:text-accent-foreground focus:bg-[#FFC900]/10 focus:text-accent-foreground cursor-pointer" onClick={() => navigate('/faq')}>
                            <div className="text-sm font-medium leading-none text-[#FFC900]">FAQ</div>
                            <p className="line-clamp-2 text-sm leading-snug text-[#FFC900]/70">
                              Frequently asked questions
                            </p>
                          </li>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </>
                )}
              </NavigationMenuList>
            </NavigationMenu>
          )}
        </div>

        <div className="flex items-center gap-2">
          {user && (
            <NotificationBell className="mr-1" />
          )}
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5 text-[#FFC900]" /> : <Menu className="h-5 w-5 text-[#FFC900]" />}
          </Button>

          <UserMenu />
        </div>
      </div>
      
      {mobileMenuOpen && (
        <MobileMenu
          isActive={isActive}
          navigate={navigate}
        />
      )}
    </header>
  );
};

export default Navbar;
