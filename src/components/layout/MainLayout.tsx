
import React, { useEffect } from "react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { useAuth } from "@/hooks/useAuth";
import { useUserPreferences } from "@/hooks/useUserPreferences";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  const { refreshSession, user } = useAuth();
  const { preferences } = useUserPreferences();
  
  // Ensure auth session is refreshed on layout mount
  useEffect(() => {
    console.log("MainLayout - Refreshing session, current preferred role:", preferences.preferredRole);
    // Add a short delay to ensure auth state is stable
    const refreshTimer = setTimeout(() => {
      refreshSession();
    }, 50);
    
    return () => clearTimeout(refreshTimer);
  }, [refreshSession, preferences.preferredRole]);
  
  return (
    <div className="flex flex-col min-h-screen bg-background">
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
