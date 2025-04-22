
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useUserPreferences } from "@/hooks/useUserPreferences";

type MobileMenuProps = {
  isActive: (path: string) => boolean;
  navigate: ReturnType<typeof useNavigate>;
};

const MobileMenu = ({ isActive, navigate }: MobileMenuProps) => {
  const { user } = useAuth();
  const { setPreferredRole, preferences } = useUserPreferences();

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (user) {
      const preferredRole = preferences.preferredRole;
      console.log("Mobile menu: Home clicked, preferredRole:", preferredRole);
      
      if (preferredRole === 'apprentice') {
        console.log("Mobile menu: Navigating to apprentice-hub based on preferredRole");
        navigate('/apprentice-hub', { replace: true });
      } else {
        console.log("Mobile menu: Navigating to dashboard (no specific role preference)");
        navigate('/dashboard', { replace: true });
      }
    } else {
      navigate('/');
    }
  };

  const handleApprenticeHubClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("Mobile menu: Apprentice Hub clicked");
    setPreferredRole('apprentice');
    navigate('/apprentice-hub', { replace: true });
  };

  const handleElectriciansClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("Mobile menu: Electricians clicked");
    setPreferredRole(null);
    navigate('/electricians', { replace: true });
  };

  const handleEmployersClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("Mobile menu: Employers clicked");
    setPreferredRole(null);
    navigate('/employers', { replace: true });
  };

  return (
    <div className="md:hidden border-t border-[#FFC900]/20 bg-[#151812] px-4 py-2 pb-4">
      <nav className="flex flex-col space-y-3">
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            console.log("Mobile menu: Dashboard clicked - clearing preferredRole");
            setPreferredRole(null);
            navigate('/dashboard', { replace: true });
          }} 
          className={`text-lg py-2 px-4 rounded-lg font-medium ${
            isActive("/dashboard") ? "bg-[#FFC900]/10 text-[#FFC900]" : "text-[#FFC900]/80 hover:bg-[#FFC900]/5"
          }`}
        >
          Dashboard
        </a>

        {user ? (
          <>
            <a
              href="#"
              onClick={handleApprenticeHubClick}
              className={`text-lg py-2 px-4 rounded-lg font-medium ${
                isActive("/apprentice-hub") ? "bg-[#FFC900]/10 text-[#FFC900]" : "text-[#FFC900]/80 hover:bg-[#FFC900]/5"
              }`}
            >
              Apprentice Hub
            </a>
            <a
              href="#"
              onClick={handleElectriciansClick}
              className={`text-lg py-2 px-4 rounded-lg font-medium ${
                isActive("/electricians") ? "bg-[#FFC900]/10 text-[#FFC900]" : "text-[#FFC900]/80 hover:bg-[#FFC900]/5"
              }`}
            >
              Electricians
            </a>
            <a
              href="#"
              onClick={handleEmployersClick}
              className={`text-lg py-2 px-4 rounded-lg font-medium ${
                isActive("/employers") ? "bg-[#FFC900]/10 text-[#FFC900]" : "text-[#FFC900]/80 hover:bg-[#FFC900]/5"
              }`}
            >
              Employers
            </a>
            <Link
              to="/faq"
              className={`text-lg py-2 px-4 rounded-lg font-medium ${
                isActive("/faq") ? "bg-[#FFC900]/10 text-[#FFC900]" : "text-[#FFC900]/80 hover:bg-[#FFC900]/5"
              }`}
            >
              FAQs
            </Link>
            <Link
              to="/profile"
              className={`text-lg py-2 px-4 rounded-lg font-medium ${
                isActive("/profile") ? "bg-[#FFC900]/10 text-[#FFC900]" : "text-[#FFC900]/80 hover:bg-[#FFC900]/5"
              }`}
            >
              Profile
            </Link>
          </>
        ) : (
          <div className="flex flex-col space-y-2 pt-2">
            <Button onClick={() => navigate("/login")} variant="outline" className="w-full border-[#FFC900]/50 text-[#FFC900]">
              Login
            </Button>
            <Button onClick={() => navigate("/signup")} className="w-full bg-[#FFC900] hover:bg-[#e5b700] text-[#151812]">
              Sign Up
            </Button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default MobileMenu;
