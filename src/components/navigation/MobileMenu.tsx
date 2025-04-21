
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

type MobileMenuProps = {
  isActive: (path: string) => boolean;
  user: any;
  bypassAuth: boolean;
  navigate: (path: string) => void;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ isActive, user, bypassAuth, navigate }) => {
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
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
        
        {/* Resources dropdown for mobile */}
        <div className="border-t border-[#FFC900]/20 pt-3">
          <button
            onClick={() => setResourcesOpen(!resourcesOpen)}
            className={`w-full flex justify-between items-center px-3 py-2 rounded-md ${
              isActive('/apprentice-hub') || isActive('/training') || isActive('/certification') || isActive('/tools')
                ? 'bg-[#FFC900]/10'
                : ''
            } text-[#FFC900] font-medium`}
          >
            <span>Resources</span>
            {resourcesOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          
          {resourcesOpen && (
            <div className="mt-2 ml-4 flex flex-col space-y-2 border-l-2 border-[#FFC900]/20 pl-4">
              <Link to="/apprentice-hub" className={`px-3 py-2 rounded-md ${isActive('/apprentice-hub') ? 'bg-[#FFC900]/10' : ''} text-[#FFC900] font-medium`}>
                Apprentice Hub
              </Link>
              <Link to="/training" className={`px-3 py-2 rounded-md ${isActive('/training') ? 'bg-[#FFC900]/10' : ''} text-[#FFC900] font-medium`}>
                Training
              </Link>
              <Link to="/certification" className={`px-3 py-2 rounded-md ${isActive('/certification') ? 'bg-[#FFC900]/10' : ''} text-[#FFC900] font-medium`}>
                Certification
              </Link>
              <Link to="/tools" className={`px-3 py-2 rounded-md ${isActive('/tools') ? 'bg-[#FFC900]/10' : ''} text-[#FFC900] font-medium`}>
                Tools
              </Link>
            </div>
          )}
        </div>

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
  );
};

export default MobileMenu;
