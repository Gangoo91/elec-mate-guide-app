
import { useNavigate } from "react-router-dom";
import { Briefcase, User, Wrench } from "lucide-react";
import DashboardHeroSection from "@/components/dashboard/DashboardHeroSection";
import DashboardRoleGrid from "@/components/dashboard/DashboardRoleGrid";
import { useUserPreferences } from "@/hooks/useUserPreferences";

const Dashboard = () => {
  const navigate = useNavigate();
  const { setPreferredRole } = useUserPreferences();

  const roles = [
    {
      label: "Apprentice",
      icon: <User className="h-8 w-8" />,
      path: "/apprentice-hub",
      description: "Access learning resources and track your progress"
    },
    {
      label: "Electrician",
      icon: <Wrench className="h-8 w-8" />,
      path: "/electricians",
      description: "Tools and resources for qualified electricians"
    },
    {
      label: "Employer",
      icon: <Briefcase className="h-8 w-8" />,
      path: "/employers",
      description: "Manage your business and recruitment"
    }
  ];

  const handleRoleSelected = (role: { label: string; path: string }) => {
    const roleValue = role.label.toLowerCase();
    setPreferredRole(roleValue);
    navigate(role.path, { replace: true });
  };

  return (
    <div className="min-h-screen bg-[#151812] text-white">
      <div className="container mx-auto px-4 py-12">
        <DashboardHeroSection />
        <DashboardRoleGrid 
          roles={roles} 
          filteredRoles={roles} 
          onRoleSelected={handleRoleSelected}
        />
      </div>
    </div>
  );
};

export default Dashboard;
