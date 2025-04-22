
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Heart, Users, ShieldCheck } from "lucide-react";

const ElectriciansMentalHealth = () => (
  <MainLayout>
    <div className="container py-8">
      <PageHeader
        title="Mental Health Hub"
        description="Support and resources for your wellbeing as an electrical professional."
      />
      <div className="mt-10 flex flex-col md:flex-row gap-6">
        <div className="bg-[#151812] border border-[#FFC900]/20 p-6 rounded-xl flex-1 flex flex-col items-center text-center text-[#FFC900]">
          <Heart className="h-9 w-9 mb-2" />
          <div className="font-bold text-lg mb-2">Your Wellbeing Matters</div>
          <div className="text-[#FFC900]/80 text-base">
            Discover tools for mental resilience, connect with peers, and access mental health support – all tailored for electricians.
          </div>
        </div>
        <div className="bg-[#151812] border border-[#FFC900]/20 p-6 rounded-xl flex-1 flex flex-col items-center text-center text-[#FFC900]">
          <Users className="h-9 w-9 mb-2" />
          <div className="font-bold text-lg mb-2">Community Support</div>
          <div className="text-[#FFC900]/80 text-base">
            Join moderated discussion groups, attend our check-in sessions, or simply read stories from others in the trade.
          </div>
        </div>
        <div className="bg-[#151812] border border-[#FFC900]/20 p-6 rounded-xl flex-1 flex flex-col items-center text-center text-[#FFC900]">
          <ShieldCheck className="h-9 w-9 mb-2" />
          <div className="font-bold text-lg mb-2">Confidential Assistance</div>
          <div className="text-[#FFC900]/80 text-base">
            Need urgent help? Confidential counseling resources and crisis lines for tradespeople are available here.
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
);

export default ElectriciansMentalHealth;
