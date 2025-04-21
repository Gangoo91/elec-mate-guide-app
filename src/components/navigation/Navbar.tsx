
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

const Navbar = () => {
  const [user, setUser] = useState<User | null>(null);
  const [bypassAuth, setBypassAuth] = useState(true); // Add bypass state for demo purposes
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_, session) => {
        setUser(session?.user ?? null);
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Do not show UserMenu on these auth/guest pages
  const hideUserMenuPaths = ["/login", "/signup", "/forgot-password"];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-[#FFC900]/20 bg-[#151812]/95 backdrop-blur supports-[backdrop-filter]:bg-[#151812]/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center space-x-2">
            <Logo size={36} />
            <span className="text-xl font-bold text-[#FFC900]">Elec-Mate</span>
          </Link>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${isActive('/') || isActive('/dashboard') ? 'bg-[#FFC900]/10' : ''}`}>
                    Dashboard
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
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
                      <NavigationMenuLink asChild>
                        <Link
                          to="/apprentice-hub"
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-[#FFC900]/10 to-[#FFC900]/5 p-6 no-underline outline-none focus:shadow-md hover:bg-[#FFC900]/20"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-[#FFC900]">
                            Apprentice Hub
                          </div>
                          <p className="text-sm leading-tight text-[#FFC900]/70">
                            Access training resources and certification programs
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <Link to="/training" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#FFC900]/10 hover:text-accent-foreground focus:bg-[#FFC900]/10 focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none text-[#FFC900]">Training</div>
                        <p className="line-clamp-2 text-sm leading-snug text-[#FFC900]/70">
                          Professional development courses
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/certification" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#FFC900]/10 hover:text-accent-foreground focus:bg-[#FFC900]/10 focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none text-[#FFC900]">Certification</div>
                        <p className="line-clamp-2 text-sm leading-snug text-[#FFC900]/70">
                          Industry-recognized certifications
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/tools" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#FFC900]/10 hover:text-accent-foreground focus:bg-[#FFC900]/10 focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none text-[#FFC900]">Tools</div>
                        <p className="line-clamp-2 text-sm leading-snug text-[#FFC900]/70">
                          Professional tools and equipment
                        </p>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-2">
          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5 text-[#FFC900]" /> : <Menu className="h-5 w-5 text-[#FFC900]" />}
          </Button>

          {/* User/account menu */}
          {!hideUserMenuPaths.includes(location.pathname) && (
            <UserMenu user={user} bypassAuth={bypassAuth} />
          )}
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <MobileMenu
          isActive={isActive}
          user={user}
          bypassAuth={bypassAuth}
          navigate={navigate}
        />
      )}
    </header>
  );
};

export default Navbar;
