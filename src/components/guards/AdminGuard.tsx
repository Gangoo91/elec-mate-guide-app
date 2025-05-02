
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";

type AdminGuardProps = {
  children: React.ReactNode;
};

const AdminGuard = ({ children }: AdminGuardProps) => {
  const { user, loading, userRole } = useAuth();
  const { toast } = useToast();
  
  // If still loading auth state, show loading
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FFC900]"></div>
      </div>
    );
  }
  
  // If user is not logged in, redirect to login
  if (!user) {
    toast({
      title: "Access Denied",
      description: "Please login to continue",
      variant: "destructive",
    });
    return <Navigate to="/login" replace />;
  }
  
  // Check if the user is an admin (for now, we'll assume admin users have this in their metadata)
  // We'll need to enhance this later with proper admin role checking
  const isAdmin = userRole === "admin";
  
  if (!isAdmin) {
    toast({
      title: "Access Denied",
      description: "You don't have permission to access this area",
      variant: "destructive",
    });
    return <Navigate to="/dashboard" replace />;
  }
  
  // If user is admin, render the children
  return <>{children}</>;
};

export default AdminGuard;
