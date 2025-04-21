
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";

const SubscriptionSuccess = () => {
  const navigate = useNavigate();

  // Optional: After showing the page for a few secs, auto-redirect to dashboard/home
  // useEffect(() => {
  //   const timer = setTimeout(() => navigate("/dashboard"), 5000);
  //   return () => clearTimeout(timer);
  // }, [navigate]);

  return (
    <MainLayout>
      <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-[#151812] px-2 py-8">
        <div className="w-full max-w-md glass-morphism border border-[#FFC900]/20 bg-[#151812]/60 shadow-lg rounded-3xl flex flex-col items-center p-8 md:p-10">
          <Logo size={70} className="mb-6" />
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#FFC900] text-center mb-4">
            You're All Set!
          </h1>
          <p className="text-center text-gray-200 mb-3">
            Thank you for subscribing. Your free trial has started and you're ready to use Elec-Mate.
          </p>
          <p className="text-center text-[#FFC900] text-sm mb-6 font-medium">
            Manage or cancel your subscription from your profile at any time.
          </p>
          <Button
            className="w-full rounded-xl bg-[#FFC900] text-black text-lg font-bold py-4 hover:bg-[#f5bb13] transition-all duration-300"
            onClick={() => navigate("/dashboard")}
          >
            Go to Dashboard
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default SubscriptionSuccess;
