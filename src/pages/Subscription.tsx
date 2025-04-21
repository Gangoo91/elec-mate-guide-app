
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Logo from "@/components/Logo";
import MainLayout from "@/components/layout/MainLayout";
import { Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const Subscription = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      // Call the create-checkout edge function using supabase client
      const { data, error } = await supabase.functions.invoke("create-checkout");
      if (error) {
        throw new Error(error.message);
      }
      if (data?.url) {
        window.location.href = data.url;
      } else {
        throw new Error("Failed to get checkout URL");
      }
    } catch (error: any) {
      toast({
        title: "Payment initiation failed",
        description: error?.message || "Unknown error",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-[#151812] px-2 py-8">
        <div className="w-full max-w-md glass-morphism rounded-3xl border border-[#FFC900]/15 bg-[#151812]/40 shadow-lg flex flex-col items-center animate-fade-in p-8 md:p-10">
          <div className="flex justify-center w-full mb-6">
            <Logo size={80} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#FFC900] text-center mb-4 leading-tight drop-shadow-[0_0_4px_rgba(255,201,0,0.5)] tracking-wide select-none">
            Start Your 7-Day Free Trial
          </h1>
          <p className="text-center text-gray-300 mb-8 max-w-md">
            Enjoy full access to all Elec-Mate features for 7 days. After your trial, your subscription will start and you will be billed monthly.
          </p>

          <Button
            onClick={handleCheckout}
            disabled={isLoading}
            className="w-full rounded-2xl bg-[#FFC900] hover:bg-[#f5bb13] text-black font-bold text-lg py-6 h-auto mb-4 shadow-none border-none disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-lg transition-all duration-300"
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <Loader2 className="animate-spin mr-2" size={20} />
                Redirecting...
              </span>
            ) : (
              "Enter Payment Details"
            )}
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Subscription;
