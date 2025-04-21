
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

type MobileMenuProps = {
  isActive: (path: string) => boolean;
  user: any;
  bypassAuth: boolean;
  navigate: (path: string) => void;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ isActive, user, bypassAuth, navigate }) => {
  return (
    <div className="md:hidden py-4 px-4 bg-[#151812] border-b border-[#FFC900]/20">
      <div className="text-center mb-4">
        <p className="text-[#FFC900]/80 text-sm">Quick Access</p>
      </div>
      
      <nav className="flex flex-col space-y-3">
        <Link to="/faq" className={`px-3 py-2 rounded-md ${isActive('/faq') ? 'bg-[#FFC900]/10' : ''} text-[#FFC900] font-medium`}>
          FAQ
        </Link>
        <Link to="/tools" className={`px-3 py-2 rounded-md ${isActive('/tools') ? 'bg-[#FFC900]/10' : ''} text-[#FFC900] font-medium`}>
          Tools
        </Link>
        
        {/* Authentication buttons only for non-logged in users */}
        {!user && !bypassAuth && (
          <div className="flex flex-col space-y-2 pt-3 border-t border-[#FFC900]/20">
            <Button variant="outline" onClick={() => navigate("/login")} className="border-[#FFC900]/50 text-[#FFC900] hover:bg-[#FFC900]/10 justify-start">
              Login
            </Button>
            <Button onClick={() => navigate("/signup")} className="bg-[#FFC900] text-[#151812] hover:bg-[#e5b700] justify-start">
              Sign Up
            </Button>
          </div>
        )}
      </nav>
      
      <div className="mt-6 pt-4 border-t border-[#FFC900]/20 text-center">
        <p className="text-[#FFC900]/70 text-sm">
          Click the Elec-Mate logo to return to home
        </p>
      </div>
    </div>
  );
};

export default MobileMenu;
