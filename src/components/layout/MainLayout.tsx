
import React from "react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow pt-16 px-0 sm:px-6">
        {/* Responsive paddings for main content */}
        <div className="mx-auto w-full max-w-4xl sm:max-w-5xl">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
