
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";
import { LogOut, Settings, User as UserIcon } from "lucide-react";
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
  const navigate = useNavigate();
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

  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center space-x-2">
            <Logo size={36} />
            <span className="text-xl font-bold">Elec-Mate</span>
          </Link>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/dashboard">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Dashboard
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/apprentices">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Apprentices
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/premium"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Premium Services
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Access exclusive training and certification programs
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <Link to="/training" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Training</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Professional development courses
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/certification" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Certification</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Industry-recognized certifications
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/tools" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Tools</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
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
          {user || bypassAuth ? ( // Show user menu if logged in or bypassing auth
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full">
                  <UserIcon className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate("/profile")}>
                  <UserIcon className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/settings")}>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button variant="ghost" onClick={() => navigate("/login")}>
                Login
              </Button>
              <Button onClick={() => navigate("/signup")}>
                Sign Up
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
