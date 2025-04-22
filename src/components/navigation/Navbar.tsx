
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "@/components/Logo";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";
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

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const { user, loading } = useAuth();
  const { notifications } = useNotificationContext();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Determine if we should hide user menu (for login/signup/forgot-password pages)
  const hideUserMenuPaths = ["/login", "/signup", "/forgot-password"];
  const isHiddenUserMenuPath = hideUserMenuPaths.includes(location.pathname);
  
  // Handle home navigation based on authentication status
  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(user ? "/dashboard" : "/");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-[#FFC900]/20 bg-[#151812]/95 backdrop-blur supports-[backdrop-filter]:bg-[#151812]/60">
      <div className={`container flex h-16 items-center justify-between ${isHiddenUserMenuPath ? 'justify-center' : 'justify-between'}`}>
        <div className={`flex items-center gap-6 ${isHiddenUserMenuPath ? 'justify-center w-full' : 'justify-start w-auto'}`}>
          <a href="#" onClick={handleHomeClick} className="flex items-center space-x-2">
            <Logo size={36} />
            <span className="text-xl font-bold text-[#FFC900]">Elec-Mate</span>
          </a>

          {!isHiddenUserMenuPath && (
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <a href="#" onClick={handleHomeClick}>
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${isActive('/') || isActive('/dashboard') ? 'bg-[#FFC900]/10' : ''}`}>
                      {user ? 'Dashboard' : 'Home'}
                    </NavigationMenuLink>
                  </a>
                </NavigationMenuItem>
                {user && (
                  <>
                    <NavigationMenuItem>
                      <Link to="/apprentices">
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${isActive('/apprentices') ? 'bg-[#FFC900]/10' : ''}`}>
                          Apprentices
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link to="/electricians">
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${isActive('/electricians') ? 'bg-[#FFC900]/10' : ''}`}>
                          Electricians
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link to="/employers">
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${isActive('/employers') ? 'bg-[#FFC900]/10' : ''}`}>
                          Employers
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px] lg:grid-cols-2">
                          <li>
                            <Link to="/apprentices/learning-hub" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#FFC900]/10 hover:text-accent-foreground focus:bg-[#FFC900]/10 focus:text-accent-foreground">
                              <div className="text-sm font-medium leading-none text-[#FFC900]">Training</div>
                              <p className="line-clamp-2 text-sm leading-snug text-[#FFC900]/70">
                                Professional development courses
                              </p>
                            </Link>
                          </li>
                          <li>
                            <Link to="/apprentices/certifications" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#FFC900]/10 hover:text-accent-foreground focus:bg-[#FFC900]/10 focus:text-accent-foreground">
                              <div className="text-sm font-medium leading-none text-[#FFC900]">Certification</div>
                              <p className="line-clamp-2 text-sm leading-snug text-[#FFC900]/70">
                                Industry-recognized certifications
                              </p>
                            </Link>
                          </li>
                          <li>
                            <Link to="/apprentices/ai-tools" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#FFC900]/10 hover:text-accent-foreground focus:bg-[#FFC900]/10 focus:text-accent-foreground">
                              <div className="text-sm font-medium leading-none text-[#FFC900]">Tools</div>
                              <p className="line-clamp-2 text-sm leading-snug text-[#FFC900]/70">
                                Professional tools and equipment
                              </p>
                            </Link>
                          </li>
                          <li>
                            <Link to="/faq" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#FFC900]/10 hover:text-accent-foreground focus:bg-[#FFC900]/10 focus:text-accent-foreground">
                              <div className="text-sm font-medium leading-none text-[#FFC900]">FAQ</div>
                              <p className="line-clamp-2 text-sm leading-snug text-[#FFC900]/70">
                                Frequently asked questions
                              </p>
                            </Link>
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
