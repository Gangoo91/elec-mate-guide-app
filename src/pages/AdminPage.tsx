
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import TutorApprovals from "@/components/admin/TutorApprovals";
import AdminNavigation from "@/components/admin/AdminNavigation";
import { useLocation } from "react-router-dom";

const AdminPage = () => {
  const location = useLocation();
  const path = location.pathname;

  // Render different content based on the current path
  const renderContent = () => {
    if (path === "/admin") {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <DashboardCard 
            title="Users" 
            count={128} 
            change="+12%" 
            icon={<div className="rounded-full bg-blue-500/20 p-3"><Users className="h-5 w-5 text-blue-500" /></div>} 
          />
          <DashboardCard 
            title="Tutor Approvals" 
            count={5} 
            change="+2" 
            icon={<div className="rounded-full bg-yellow-500/20 p-3"><BookOpen className="h-5 w-5 text-yellow-500" /></div>} 
          />
          <DashboardCard 
            title="Subscriptions" 
            count={84} 
            change="+8%" 
            icon={<div className="rounded-full bg-green-500/20 p-3"><BarChart className="h-5 w-5 text-green-500" /></div>} 
          />
        </div>
      );
    } else if (path === "/admin/tutors") {
      return <TutorApprovals />;
    } else {
      return <div className="text-center py-20 text-gray-400">This section is coming soon</div>;
    }
  };

  return (
    <MainLayout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6 text-[#FFC900]">Admin Dashboard</h1>
        <AdminNavigation />
        {renderContent()}
      </div>
    </MainLayout>
  );
};

// Dashboard card component for the admin dashboard
const DashboardCard = ({ 
  title, 
  count, 
  change, 
  icon 
}: { 
  title: string; 
  count: number; 
  change: string; 
  icon: React.ReactNode;
}) => {
  return (
    <div className="bg-[#1A1C15] border border-[#FFC900]/15 rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-300 font-medium text-sm">{title}</h3>
        {icon}
      </div>
      <div className="flex items-end space-x-3">
        <div className="text-2xl font-bold text-white">{count}</div>
        <div className={`text-xs font-medium ${
          change.startsWith('+') ? 'text-green-500' : 'text-red-500'
        }`}>
          {change}
        </div>
      </div>
    </div>
  );
};

// Import the needed icons
import { Users, BookOpen, BarChart } from "lucide-react";

export default AdminPage;
