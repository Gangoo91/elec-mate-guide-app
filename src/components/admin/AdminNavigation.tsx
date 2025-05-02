
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Users, 
  BookOpen, 
  Settings, 
  Shield, 
  Database,
  BarChart 
} from "lucide-react";

const AdminNavigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  const navItems = [
    { 
      label: "Dashboard", 
      path: "/admin", 
      icon: <BarChart className="h-5 w-5" /> 
    },
    { 
      label: "Tutor Approvals", 
      path: "/admin/tutors", 
      icon: <BookOpen className="h-5 w-5" /> 
    },
    { 
      label: "Users", 
      path: "/admin/users", 
      icon: <Users className="h-5 w-5" /> 
    },
    { 
      label: "Content", 
      path: "/admin/content", 
      icon: <Database className="h-5 w-5" /> 
    },
    { 
      label: "Security", 
      path: "/admin/security", 
      icon: <Shield className="h-5 w-5" /> 
    },
    { 
      label: "Settings", 
      path: "/admin/settings", 
      icon: <Settings className="h-5 w-5" /> 
    }
  ];

  return (
    <div className="bg-[#1A1C15] rounded-lg p-3 mb-6 border border-[#FFC900]/15">
      <nav className="flex overflow-x-auto space-x-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center px-3 py-2 rounded-md whitespace-nowrap transition-colors ${
              currentPath === item.path
                ? "bg-[#FFC900]/20 text-[#FFC900]"
                : "text-gray-300 hover:bg-gray-800/50 hover:text-[#FFC900]/80"
            }`}
          >
            {item.icon}
            <span className="ml-2 text-sm font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default AdminNavigation;
