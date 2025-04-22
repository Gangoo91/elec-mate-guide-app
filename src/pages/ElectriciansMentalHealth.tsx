
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Heart, Users, ShieldCheck } from "lucide-react";
import GlassCard from "@/components/shared/GlassCard";

const ElectriciansMentalHealth = () => (
  <MainLayout>
    <div className="container py-6">
      <PageHeader
        title="Mental Health Hub"
        description="Support for your wellbeing as an electrical professional."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <GlassCard className="p-4">
          <Heart className="h-8 w-8 mb-2 text-[#FFC900]" />
          <h2 className="font-bold text-[#FFC900] text-lg mb-1">Wellbeing Resources</h2>
          <p className="text-[#FFC900]/80 text-sm">
            Tools for mental resilience and support for electricians.
          </p>
        </GlassCard>
        
        <GlassCard className="p-4">
          <Users className="h-8 w-8 mb-2 text-[#FFC900]" />
          <h2 className="font-bold text-[#FFC900] text-lg mb-1">Community Support</h2>
          <p className="text-[#FFC900]/80 text-sm">
            Join discussion groups and check-in sessions with others in the trade.
          </p>
        </GlassCard>
        
        <GlassCard className="p-4">
          <ShieldCheck className="h-8 w-8 mb-2 text-[#FFC900]" />
          <h2 className="font-bold text-[#FFC900] text-lg mb-1">Confidential Help</h2>
          <p className="text-[#FFC900]/80 text-sm">
            Access counseling resources and crisis lines for tradespeople.
          </p>
        </GlassCard>
      </div>
    </div>
  </MainLayout>
);

export default ElectriciansMentalHealth;
