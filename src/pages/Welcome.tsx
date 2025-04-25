
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { BadgeAlert } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Alert } from "@/components/ui/alert";

const pricingData = [
  {
    title: "Apprentice",
    price: "£2.99/mo",
    annual: "£29.99/yr",
    features: [
      "Full apprentice toolkit",
      "Access all learning features",
      "Track your progress"
    ],
    color: "border-[#FFC900]",
    highlight: false,
  },
  {
    title: "Electrician",
    price: "£5.99/mo",
    annual: "£59.99/yr",
    features: [
      "All Apprentice features",
      "Advanced tools",
      "Premium electrician resources"
    ],
    color: "border-[#FFD700]",
    highlight: true,
  },
  {
    title: "Employer",
    price: "£9.99/mo",
    annual: "£99.99/yr",
    features: [
      "All Electrician features",
      "Recruitment dashboard",
      "Unlimited job postings"
    ],
    color: "border-[#FFB300]",
    highlight: false,
    comingSoon: true
  }
];

const Welcome = () => {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleGetStarted = () => {
    setIsAnimating(true);
    setTimeout(() => {
      navigate("/signup");
    }, 300);
  };

  return (
    <div className="min-h-screen bg-[#151812] flex flex-col items-center justify-center p-4 overflow-hidden">
      <div className="w-full max-w-md flex flex-col items-center text-center animate-fade-in">
        <Logo size={120} />
        
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#FFC900] mt-8 mb-6 leading-tight drop-shadow-[0_0_8px_rgba(255,201,0,0.75)] tracking-wide select-none">
          ELEC-MATE
        </h1>
        
        <p className="text-white text-lg mb-6 max-w-xs">
          Your ultimate guide to the electrical industry, built for apprentices, electricians, and employers.
        </p>

        {/* Pricing Section */}
        <div className="w-full flex flex-col items-center mb-8">
          <span className="inline-block px-3 py-1 rounded-full bg-[#FFC900]/20 text-[#FFC900] text-xs font-semibold uppercase mb-2 tracking-widest">
            7 days free trial • Free download
          </span>
          <div className="flex flex-col gap-4 w-full max-w-xs">
            {pricingData.map((tier) => (
              <div
                key={tier.title}
                className={`
                  border-2 rounded-xl p-4 bg-[#14130A]/60 text-white relative
                  ${tier.color}
                  ${tier.highlight ? "shadow-lg scale-105 border-4 border-yellow-400" : "shadow"}
                  transition-all
                  ${tier.comingSoon ? "opacity-85 cursor-not-allowed" : ""}
                `}
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">{tier.title}</span>
                  {tier.highlight && (
                    <span className="ml-2 px-2 py-0.5 rounded bg-[#FFC900] text-[#14130A] text-xs font-semibold">MOST VALUE</span>
                  )}
                  {tier.comingSoon && (
                    <Badge className="bg-amber-500/80 text-black font-semibold border-0 hover:bg-amber-500/90 flex items-center gap-1">
                      <BadgeAlert className="h-4 w-4" />
                      <span>Coming Soon</span>
                    </Badge>
                  )}
                </div>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-2xl font-extrabold">{tier.price}</span>
                  <span className="text-xs text-[#FFC900] font-semibold">or {tier.annual}</span>
                </div>
                <ul className="mt-2 space-y-1 text-left text-sm text-[#e0e0e0] list-disc list-inside">
                  {tier.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                
                {tier.comingSoon && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/30 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center z-10">
                      <span className="px-4 py-2 bg-amber-500 text-black font-bold text-lg rounded-full shadow-lg transform -rotate-6 animate-pulse mb-2">Coming Soon</span>
                      <p className="text-amber-300 text-sm px-4 text-center">Register to be notified when this launches</p>
                    </div>
                    <div className="absolute -top-2 -right-2 w-24 h-24 overflow-hidden z-20">
                      <div className="bg-amber-500 text-black font-bold text-xs py-1 px-4 rotate-45 origin-bottom-left shadow-md absolute top-0 right-0 transform translate-y-2 translate-x-6">
                        SOON
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* End Pricing Section */}
        
        <div className="space-y-4 w-full max-w-xs">
          <Button
            onClick={handleGetStarted}
            className={`w-full rounded-2xl bg-[#FFC900] hover:bg-[#f5bb13] text-black font-bold text-lg py-6 h-auto shadow transition-all duration-300 ${isAnimating ? 'scale-95 opacity-70' : ''}`}
          >
            GET STARTED
          </Button>
          
          <Button
            onClick={() => navigate("/login")}
            variant="outline"
            className="w-full rounded-2xl bg-transparent border border-[#FFC900] text-[#FFC900] hover:bg-[#FFC900]/10 font-bold text-lg py-6 h-auto"
          >
            I ALREADY HAVE AN ACCOUNT
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
