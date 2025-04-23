
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useUserPreferences } from "@/hooks/useUserPreferences";

type MobileMenuProps = {
  isActive: (path: string) => boolean;
  navigate: (path: string, options?: { replace?: boolean }) => void;
};

const MobileMenu = ({ isActive, navigate }: MobileMenuProps) => {
  const { user } = useAuth();
  const { setPreferredRole } = useUserPreferences();

  const handleApprenticeHubClick = () => {
    console.log("Mobile menu: Apprentice Hub clicked, setting role");
    setPreferredRole('apprentice');
    navigate('/apprentice-hub', { replace: true });
  };

  const handleElectriciansClick = () => {
    setPreferredRole(null);
    navigate('/electricians', { replace: true });
  };

  const handleEmployersClick = () => {
    setPreferredRole(null);
    navigate('/employers', { replace: true });
  };

  return (
    <div className="md:hidden border-t border-[#FFC900]/20 bg-[#151812] px-4 py-2 pb-4">
      <nav className="flex flex-col space-y-3">
        {user && (
          <Button
            variant="ghost"
            onClick={handleApprenticeHubClick}
            className={`justify-start text-lg py-6 px-4 h-auto font-medium ${
              isActive("/apprentice-hub") || location.pathname.includes('/apprentices/') 
                ? "bg-[#FFC900]/10 text-[#FFC900]" 
                : "text-[#FFC900]/80 hover:bg-[#FFC900]/5"
            }`}
          >
            Apprentice Hub
          </Button>
        )}

        {user ? (
          <>
            <Button
              variant="ghost"
              onClick={handleElectriciansClick}
              className={`justify-start text-lg py-6 px-4 h-auto font-medium ${
                isActive("/electricians") || location.pathname.includes('/electricians/') 
                  ? "bg-[#FFC900]/10 text-[#FFC900]" 
                  : "text-[#FFC900]/80 hover:bg-[#FFC900]/5"
              }`}
            >
              Electricians
            </Button>
            <Button
              variant="ghost"
              onClick={handleEmployersClick}
              className={`justify-start text-lg py-6 px-4 h-auto font-medium ${
                isActive("/employers") 
                  ? "bg-[#FFC900]/10 text-[#FFC900]" 
                  : "text-[#FFC900]/80 hover:bg-[#FFC900]/5"
              }`}
            >
              Employers
            </Button>
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
