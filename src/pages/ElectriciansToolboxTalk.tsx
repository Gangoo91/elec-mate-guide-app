
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Wrench, Shield, Users } from "lucide-react";

const ElectriciansToolboxTalk = () => (
  <MainLayout>
    <div className="container py-8">
      <PageHeader
        title="Toolbox Talk"
        description="Focused safety, practical tips, and electrician community conversations."
      />
      <div className="mt-10 flex flex-col md:flex-row gap-6">
        <div className="bg-[#151812] border border-[#FFC900]/20 p-6 rounded-xl flex-1 flex flex-col items-center text-center text-[#FFC900]">
          <Shield className="h-9 w-9 mb-2" />
          <div className="font-bold text-lg mb-2">Safety Topics</div>
          <div className="text-[#FFC900]/80 text-base">
            Explore the latest in electrical site safety, from PPE to hazard recognition and emergency protocols.
          </div>
        </div>
        <div className="bg-[#151812] border border-[#FFC900]/20 p-6 rounded-xl flex-1 flex flex-col items-center text-center text-[#FFC900]">
          <Wrench className="h-9 w-9 mb-2" />
          <div className="font-bold text-lg mb-2">Best Practices</div>
          <div className="text-[#FFC900]/80 text-base">
            Share, learn, and discuss the newest methods and workflows making jobs safer and more efficient.
          </div>
        </div>
        <div className="bg-[#151812] border border-[#FFC900]/20 p-6 rounded-xl flex-1 flex flex-col items-center text-center text-[#FFC900]">
          <Users className="h-9 w-9 mb-2" />
          <div className="font-bold text-lg mb-2">Join the Conversation</div>
          <div className="text-[#FFC900]/80 text-base">
            Engage with the community: toolbox talks, live Q&A events, and upcoming peer-led discussions.
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
);

export default ElectriciansToolboxTalk;
