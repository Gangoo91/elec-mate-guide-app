
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

type MobileMenuProps = {
  isActive: (path: string) => boolean;
  navigate: ReturnType<typeof useNavigate>;
};

const MobileMenu = ({ isActive, navigate }: MobileMenuProps) => {
  const { user } = useAuth();

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (user) {
      // Check preferred role
      const preferredRole = localStorage.getItem('preferredRole');
      if (preferredRole === 'apprentice') {
        navigate('/apprentice-hub');
      } else {
        navigate('/dashboard');
      }
    } else {
      navigate('/');
    }
  };

  const handleApprenticeHubClick = (e: React.MouseEvent) => {
    e.preventDefault();
    localStorage.setItem('preferredRole', 'apprentice');
    navigate('/apprentice-hub');
  };

  return (
    <div className="md:hidden border-t border-[#FFC900]/20 bg-[#151812] px-4 py-2 pb-4">
      <nav className="flex flex-col space-y-3">
        <a 
          href="#" 
          onClick={handleHomeClick} 
          className={`text-lg py-2 px-4 rounded-lg font-medium ${
            isActive("/") || isActive("/dashboard") ? "bg-[#FFC900]/10 text-[#FFC900]" : "text-[#FFC900]/80 hover:bg-[#FFC900]/5"
          }`}
        >
          {user ? "Dashboard" : "Home"}
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
            <Link
              to="/electricians"
              className={`text-lg py-2 px-4 rounded-lg font-medium ${
                isActive("/electricians") ? "bg-[#FFC900]/10 text-[#FFC900]" : "text-[#FFC900]/80 hover:bg-[#FFC900]/5"
              }`}
            >
              Electricians
            </Link>
            <Link
              to="/employers"
              className={`text-lg py-2 px-4 rounded-lg font-medium ${
                isActive("/employers") ? "bg-[#FFC900]/10 text-[#FFC900]" : "text-[#FFC900]/80 hover:bg-[#FFC900]/5"
              }`}
            >
              Employers
            </Link>
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
