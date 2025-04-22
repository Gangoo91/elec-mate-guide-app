
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";

const ElectriciansMentalHealth = () => (
  <MainLayout>
    <div className="container py-8">
      <PageHeader
        title="Mental Health Hub"
        description="Support and resources for electricians' wellbeing. We'll be adding more content soon!"
      />
      <div className="bg-[#151812] p-8 rounded-xl border border-[#FFC900]/20 mt-6 text-[#FFC900] text-lg">
        🌱 This section is coming soon. Stay tuned for expert advice, stress management, and wellness resources just for electricians.
      </div>
    </div>
  </MainLayout>
);

export default ElectriciansMentalHealth;
