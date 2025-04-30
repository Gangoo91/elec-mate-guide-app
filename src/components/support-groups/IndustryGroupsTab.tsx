
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, PhoneCall, ExternalLink } from "lucide-react";

const IndustryGroupsTab = () => {
  return (
    <div className="space-y-6">
      <Card className="border-[#FFC900]/20 bg-[#22251e]">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-3 text-[#FFC900]">
            <Users className="h-5 w-5 text-[#FFC900]" />
            Electrical Industry Support Network
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <p className="text-[#FFC900]/90 mb-4">
            A specialized support network focusing on the unique stressors and mental health challenges 
            faced by electrical professionals. Led by counselors familiar with the industry.
          </p>
          <div className="flex items-center gap-2 mb-2">
            <PhoneCall size={16} className="text-[#FFC900]/80" />
            <span className="text-[#FFC900]/80">Helpline: 0800 123 4567</span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <Calendar size={16} className="text-[#FFC900]/80" />
            <span className="text-[#FFC900]/80">Group sessions: Fridays at 6PM GMT</span>
          </div>
          <div className="mt-4">
            <a 
              href="#" 
              className="inline-flex items-center gap-1 text-[#FFC900] hover:underline"
            >
              Learn more <ExternalLink size={14} />
            </a>
          </div>
        </CardContent>
      </Card>
      
      <Card className="border-[#FFC900]/20 bg-[#22251e]">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-3 text-[#FFC900]">
            <Users className="h-5 w-5 text-[#FFC900]" />
            Apprentice Support Circle
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <p className="text-[#FFC900]/90 mb-4">
            Dedicated support group for apprentices in the electrical field, addressing the specific
            pressures of learning the trade, balancing work and study, and workplace dynamics.
          </p>
          <div className="flex items-center gap-2 mb-4">
            <Calendar size={16} className="text-[#FFC900]/80" />
            <span className="text-[#FFC900]/80">Biweekly on Tuesdays at 7PM GMT</span>
          </div>
          <div className="mt-4">
            <a 
              href="#" 
              className="inline-flex items-center gap-1 text-[#FFC900] hover:underline"
            >
              Join the circle <ExternalLink size={14} />
            </a>
          </div>
        </CardContent>
      </Card>
      
      <Card className="border-[#FFC900]/20 bg-[#22251e]">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-3 text-[#FFC900]">
            <Users className="h-5 w-5 text-[#FFC900]" />
            Senior Electricians Group
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <p className="text-[#FFC900]/90 mb-4">
            Support network for experienced electricians facing issues like career burnout, 
            work-life balance, and the physical demands of the job over a long career.
          </p>
          <div className="flex items-center gap-2 mb-4">
            <Calendar size={16} className="text-[#FFC900]/80" />
            <span className="text-[#FFC900]/80">Monthly on the last Thursday at 8PM GMT</span>
          </div>
          <div className="mt-4">
            <a 
              href="#" 
              className="inline-flex items-center gap-1 text-[#FFC900] hover:underline"
            >
              Connect with peers <ExternalLink size={14} />
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IndustryGroupsTab;
