import React, { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Heart, Users, ShieldCheck, User, MessageCircle } from "lucide-react";
import GlassCard from "@/components/shared/GlassCard";
import { Switch } from "@/components/ui/switch";

const ApprenticeMentalHealth = () => {
  // Local UI state for toggle
  const [isBuddy, setIsBuddy] = useState(false);

  return (
    <MainLayout>
      <div className="container py-6">
        <PageHeader
          title="Mental Health Hub"
          description="Support, community, and resources for your wellbeing as an electrical apprentice."
        />

        {/* Mental Health Buddy card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <GlassCard className="p-4 md:col-span-3 flex-col flex items-center justify-center">
            <User className="h-8 w-8 mb-2 text-[#FFC900]" />
            <h2 className="font-bold text-[#FFC900] text-lg mb-1">Mental Health Buddy</h2>
            <p className="text-[#FFC900]/80 text-sm mb-2">
              Become a Mental Health Buddy to let others in the community know you're open for a chat and support. 
            </p>
            <div className="flex items-center justify-center gap-3 mt-2">
              <span className="text-[#FFC900]/90 font-medium">Willing to be a buddy?</span>
              <Switch
                checked={isBuddy}
                onCheckedChange={setIsBuddy}
                id="buddy-switch"
                className="border-[#FFC900]/60 data-[state=checked]:bg-[#FFC900] data-[state=checked]:border-[#FFC900]"
                aria-checked={isBuddy}
              />
              <span className="text-[#FFC900] font-semibold">{isBuddy ? "Yes" : "No"}</span>
            </div>
            {isBuddy && (
              <div className="mt-4 flex items-center gap-2 px-4 py-1 rounded-lg bg-[#FFC900]/10 border border-[#FFC900]/30">
                <MessageCircle className="h-4 w-4 text-[#FFC900]" />
                <span className="text-[#FFC900] text-sm">You are a Mental Health Buddy &amp; open to receive messages.</span>
              </div>
            )}
          </GlassCard>
        </div>

        {/* Community Support Card - Now placed right after Buddy card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <GlassCard className="p-4 md:col-span-3">
            <Users className="h-8 w-8 mb-2 text-[#FFC900]" />
            <h2 className="font-bold text-[#FFC900] text-lg mb-1">Community Support</h2>
            <p className="text-[#FFC900]/80 text-sm mb-3">
              Connect with peers, join group discussions, and find support through private or open chats.
            </p>
            <div className="bg-[#FFC900]/10 border border-[#FFC900]/30 rounded-lg p-3">
              <p className="text-[#FFC900] text-sm">
                Chat features coming soon! You'll be able to:
                <ul className="list-disc list-inside ml-2 mt-1">
                  <li>Start private conversations</li>
                  <li>Join open support group chats</li>
                  <li>Connect with Mental Health Buddies</li>
                </ul>
              </p>
            </div>
          </GlassCard>
        </div>

        {/* Existing info cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <GlassCard className="p-4">
            <Heart className="h-8 w-8 mb-2 text-[#FFC900]" />
            <h2 className="font-bold text-[#FFC900] text-lg mb-1">Wellbeing Resources</h2>
            <p className="text-[#FFC900]/80 text-sm">
              Tools for mental resilience and support for apprentices.
            </p>
          </GlassCard>
          
          <GlassCard className="p-4">
            <ShieldCheck className="h-8 w-8 mb-2 text-[#FFC900]" />
            <h2 className="font-bold text-[#FFC900] text-lg mb-1">Confidential Help</h2>
            <p className="text-[#FFC900]/80 text-sm">
              Access counseling resources and crisis lines for apprentices.
            </p>
          </GlassCard>
        </div>
      </div>
    </MainLayout>
  );
};

export default ApprenticeMentalHealth;
