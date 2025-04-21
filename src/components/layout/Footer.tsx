
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#151812] border-t border-[#FFC900]/20 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-[#FFC900] font-medium text-sm">
              © {currentYear} Elec-Mate. All rights reserved.
            </p>
          </div>
          
          <nav className="flex items-center gap-8">
            <Link 
              to="/privacy" 
              className="text-[#FFC900]/80 hover:text-[#FFC900] transition-colors text-sm font-medium"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms" 
              className="text-[#FFC900]/80 hover:text-[#FFC900] transition-colors text-sm font-medium"
            >
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
