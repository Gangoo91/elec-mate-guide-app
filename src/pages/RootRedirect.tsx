
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import LoadingSpinner from "@/components/LoadingSpinner";

const RootRedirect = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [redirected, setRedirected] = useState(false);
  
  useEffect(() => {
    if (loading) return;
    
    if (!redirected) {
      setRedirected(true);
      
      if (user) {
        console.log("RootRedirect - User authenticated, redirecting to dashboard");
        navigate('/dashboard', { replace: true });
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
