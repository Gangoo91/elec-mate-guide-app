
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";
import { LogOut, Settings, User as UserIcon, Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";

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

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
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

  const isActive = (path: string) => {
    return location.pathname === path;
  };

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
          
          {user || bypassAuth ? ( // Show user menu if logged in or bypassing auth
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
          ) : (
            <div className="hidden md:flex items-center gap-2">
              <Button variant="ghost" onClick={() => navigate("/login")} className="text-[#FFC900] hover:bg-[#FFC900]/10">
                Login
              </Button>
              <Button onClick={() => navigate("/signup")} className="bg-[#FFC900] text-[#151812] hover:bg-[#e5b700]">
                Sign Up
              </Button>
            </div>
          )}
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-[#151812] border-b border-[#FFC900]/20">
          <nav className="flex flex-col space-y-3">
            <Link to="/" className={`px-3 py-2 rounded-md ${isActive('/') || isActive('/dashboard') ? 'bg-[#FFC900]/10' : ''} text-[#FFC900] font-medium`}>
              Dashboard
            </Link>
            <Link to="/apprentices" className={`px-3 py-2 rounded-md ${isActive('/apprentices') ? 'bg-[#FFC900]/10' : ''} text-[#FFC900] font-medium`}>
              Apprentices
            </Link>
            <Link to="/electricians" className={`px-3 py-2 rounded-md ${isActive('/electricians') ? 'bg-[#FFC900]/10' : ''} text-[#FFC900] font-medium`}>
              Electricians
            </Link>
            <Link to="/employers" className={`px-3 py-2 rounded-md ${isActive('/employers') ? 'bg-[#FFC900]/10' : ''} text-[#FFC900] font-medium`}>
              Employers
            </Link>
            <Link to="/apprentice-hub" className={`px-3 py-2 rounded-md ${isActive('/apprentice-hub') ? 'bg-[#FFC900]/10' : ''} text-[#FFC900] font-medium`}>
              Apprentice Hub
            </Link>
            {!user && !bypassAuth && (
              <div className="flex flex-col space-y-2 pt-2 border-t border-[#FFC900]/20">
                <Button variant="outline" onClick={() => navigate("/login")} className="border-[#FFC900]/50 text-[#FFC900] hover:bg-[#FFC900]/10 justify-start">
                  Login
                </Button>
                <Button onClick={() => navigate("/signup")} className="bg-[#FFC900] text-[#151812] hover:bg-[#e5b700] justify-start">
                  Sign Up
                </Button>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
