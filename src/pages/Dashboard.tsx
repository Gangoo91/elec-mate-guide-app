
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/navigation/Navbar";
import { Book, Lightbulb, Briefcase, Calendar, Certificate } from "lucide-react";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeRole, setActiveRole] = useState<string>("apprentice");
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/login");
        return;
      }
      
      setUser(session.user);
      setLoading(false);
    };
    
    checkUser();
    
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT") {
        navigate("/login");
      } else if (session) {
        setUser(session.user);
      }
    });

    // Check if we have a specific role from the pathname
    const pathname = location.pathname.toLowerCase();
    if (pathname.includes("apprentices")) {
      setActiveRole("apprentice");
    } else if (pathname.includes("electrician")) {
      setActiveRole("electrician");
    } else if (pathname.includes("employers")) {
      setActiveRole("employer");
    }

    return () => subscription.unsubscribe();
  }, [navigate, location]);

  const handleRoleSwitch = (role: string) => {
    setActiveRole(role);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FFC900]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container pt-24 pb-16">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-bold">Dashboard</h1>
          
          <div className="flex space-x-4">
            <Button 
              variant={activeRole === "apprentice" ? "default" : "outline"}
              className={activeRole === "apprentice" ? "bg-[#FFC900] hover:bg-[#E6B800] text-white" : ""}
              onClick={() => handleRoleSwitch("apprentice")}
            >
              <Book className="mr-2 h-4 w-4" />
              Apprentice
            </Button>
            <Button 
              variant={activeRole === "electrician" ? "default" : "outline"}
              className={activeRole === "electrician" ? "bg-[#FFC900] hover:bg-[#E6B800] text-white" : ""}
              onClick={() => handleRoleSwitch("electrician")}
            >
              <Lightbulb className="mr-2 h-4 w-4" />
              Electrician
            </Button>
            <Button 
              variant={activeRole === "employer" ? "default" : "outline"}
              className={activeRole === "employer" ? "bg-[#FFC900] hover:bg-[#E6B800] text-white" : ""}
              onClick={() => handleRoleSwitch("employer")}
            >
              <Briefcase className="mr-2 h-4 w-4" />
              Employer
            </Button>
          </div>
        </div>
        
        {activeRole === "apprentice" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Welcome, Apprentice</h2>
              <p className="text-gray-600">Your apprentice dashboard is ready. Access training materials, track your progress, and connect with potential employers.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Upcoming Training</h2>
              <p className="text-gray-600">Your next training session is scheduled for April 25, 2025.</p>
              <Button 
                className="mt-4 px-4 py-2 bg-[#FFC900] text-white rounded-md hover:bg-[#E6B800] transition-colors"
                onClick={() => navigate("/training")}
              >
                <Calendar className="mr-2 h-4 w-4" />
                View Schedule
              </Button>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Certifications</h2>
              <p className="text-gray-600">Track your certification progress and requirements.</p>
              <Button 
                className="mt-4 px-4 py-2 bg-[#FFC900] text-white rounded-md hover:bg-[#E6B800] transition-colors"
                onClick={() => navigate("/certification")}
              >
                <Certificate className="mr-2 h-4 w-4" />
                View Certifications
              </Button>
            </div>
          </div>
        )}
        
        {activeRole === "electrician" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Welcome, Electrician</h2>
              <p className="text-gray-600">Your electrician dashboard is ready. Find jobs, access tools, and manage your certifications.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Available Jobs</h2>
              <p className="text-gray-600">3 new jobs in your area match your qualifications.</p>
              <Button 
                className="mt-4 px-4 py-2 bg-[#FFC900] text-white rounded-md hover:bg-[#E6B800] transition-colors"
                onClick={() => navigate("/jobs")}
              >
                Browse Jobs
              </Button>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">License Renewal</h2>
              <p className="text-gray-600">Your license renewal is due in 45 days.</p>
              <Button 
                className="mt-4 px-4 py-2 bg-[#FFC900] text-white rounded-md hover:bg-[#E6B800] transition-colors"
                onClick={() => navigate("/license")}
              >
                Renew License
              </Button>
            </div>
          </div>
        )}
        
        {activeRole === "employer" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Welcome, Employer</h2>
              <p className="text-gray-600">Your employer dashboard is ready. Post jobs, find qualified electricians, and manage your projects.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Your Job Postings</h2>
              <p className="text-gray-600">You have 2 active job postings with 5 applicants.</p>
              <Button 
                className="mt-4 px-4 py-2 bg-[#FFC900] text-white rounded-md hover:bg-[#E6B800] transition-colors"
                onClick={() => navigate("/manage-jobs")}
              >
                Manage Postings
              </Button>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Find Talent</h2>
              <p className="text-gray-600">Search for qualified electricians and apprentices in your area.</p>
              <Button 
                className="mt-4 px-4 py-2 bg-[#FFC900] text-white rounded-md hover:bg-[#E6B800] transition-colors"
                onClick={() => navigate("/search-talent")}
              >
                Search Talent
              </Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
