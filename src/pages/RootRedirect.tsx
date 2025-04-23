
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import LoadingSpinner from "@/components/LoadingSpinner";

const RootRedirect = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [redirected, setRedirected] = useState(false);
  
  useEffect(() => {
    if (loading) return; // Wait until auth state is determined
    
    if (!redirected) {
      setRedirected(true); // Prevent multiple redirects
      
      if (user) {
        console.log("RootRedirect - User authenticated, redirecting to apprentice-hub");
        localStorage.setItem('preferredRole', 'apprentice');
        navigate('/apprentice-hub', { replace: true });
      } else {
        console.log("RootRedirect - No authenticated user, redirecting to welcome");
        navigate('/welcome', { replace: true });
      }
    }
  }, [user, loading, navigate, redirected]);
  
  return (
    <div className="flex items-center justify-center h-screen bg-[#151812]">
      <LoadingSpinner size="lg" message="Loading..." />
    </div>
  );
};

export default RootRedirect;
