
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#151812] border-t border-[#FFC900]/20 py-6 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-[#FFC900] font-semibold">
              © {currentYear} Elec-Mate. All rights reserved.
            </p>
          </div>
          <nav className="flex flex-wrap gap-6 justify-center">
            <Link 
              to="/privacy" 
              className="text-[#FFC900]/80 hover:text-[#FFC900] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms" 
              className="text-[#FFC900]/80 hover:text-[#FFC900] transition-colors"
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
