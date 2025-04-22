
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";

const ElectriciansToolboxTalk = () => (
  <MainLayout>
    <div className="container py-8">
      <PageHeader
        title="Toolbox Talk"
        description="Safety, best practices, and community conversations for electrical professionals."
      />
      <div className="bg-[#151812] p-8 rounded-xl border border-[#FFC900]/20 mt-6 text-[#FFC900] text-lg">
        🧰 Toolbox Talk content is on the way! Here you'll find focused safety topics, tips, and community discussions.
      </div>
    </div>
  </MainLayout>
);

export default ElectriciansToolboxTalk;
