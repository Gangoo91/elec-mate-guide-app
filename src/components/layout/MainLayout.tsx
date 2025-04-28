
import React from "react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#151812]">
      <Navbar />
      <motion.main 
        className="flex-grow pt-16 px-4 sm:px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Responsive paddings for main content */}
        <div className="mx-auto w-full max-w-4xl sm:max-w-5xl">
          {children}
        </div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default MainLayout;
