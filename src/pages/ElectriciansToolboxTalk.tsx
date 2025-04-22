
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Wrench, Shield, Users } from "lucide-react";
import GlassCard from "@/components/shared/GlassCard";

const ElectriciansToolboxTalk = () => (
  <MainLayout>
    <div className="container py-6">
      <PageHeader
        title="Toolbox Talk"
        description="Safety discussions and community conversations."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <GlassCard className="p-4">
          <Shield className="h-8 w-8 mb-2 text-[#FFC900]" />
          <h2 className="font-bold text-[#FFC900] text-lg mb-1">Safety Topics</h2>
          <p className="text-[#FFC900]/80 text-sm">
            Latest in electrical site safety, PPE, and hazard recognition.
          </p>
        </GlassCard>
        
        <GlassCard className="p-4">
          <Wrench className="h-8 w-8 mb-2 text-[#FFC900]" />
          <h2 className="font-bold text-[#FFC900] text-lg mb-1">Best Practices</h2>
          <p className="text-[#FFC900]/80 text-sm">
            Share efficient methods and workflows for safer jobs.
          </p>
        </GlassCard>
        
        <GlassCard className="p-4">
          <Users className="h-8 w-8 mb-2 text-[#FFC900]" />
          <h2 className="font-bold text-[#FFC900] text-lg mb-1">Join the Conversation</h2>
          <p className="text-[#FFC900]/80 text-sm">
            Engage in toolbox talks, Q&A events, and peer discussions.
          </p>
        </GlassCard>
      </div>
    </div>
  </MainLayout>
);

export default ElectriciansToolboxTalk;
