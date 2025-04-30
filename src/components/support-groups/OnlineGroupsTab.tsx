
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, ExternalLink } from "lucide-react";

const OnlineGroupsTab = () => {
  return (
    <div className="space-y-6">
      <Card className="border-[#FFC900]/20 bg-[#22251e]">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-3 text-[#FFC900]">
            <Users className="h-5 w-5 text-[#FFC900]" />
            Weekly Online Meetups
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <p className="text-[#FFC900]/90 mb-4">
            Join our weekly online support groups where you can connect with others in the industry,
            share experiences, and build a supportive network.
          </p>
          <div className="flex items-center gap-2 mb-2">
            <Calendar size={16} className="text-[#FFC900]/80" />
            <span className="text-[#FFC900]/80">Tuesdays and Thursdays at 7PM GMT</span>
          </div>
          <div className="mt-4">
            <a 
              href="#" 
              className="inline-flex items-center gap-1 text-[#FFC900] hover:underline"
            >
              Join next session <ExternalLink size={14} />
            </a>
          </div>
        </CardContent>
      </Card>
      
      <Card className="border-[#FFC900]/20 bg-[#22251e]">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-3 text-[#FFC900]">
            <Users className="h-5 w-5 text-[#FFC900]" />
            Mental Health Forum
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <p className="text-[#FFC900]/90 mb-4">
            An online forum where members can post anonymously about mental health challenges and receive
            support from peers in the electrical industry.
          </p>
          <div className="flex items-center gap-2 mb-2">
            <Badge className="bg-[#FFC900]/20 text-[#FFC900] hover:bg-[#FFC900]/30">
              Available 24/7
            </Badge>
          </div>
          <div className="mt-4">
            <a 
              href="#" 
              className="inline-flex items-center gap-1 text-[#FFC900] hover:underline"
            >
              Visit forum <ExternalLink size={14} />
            </a>
          </div>
        </CardContent>
      </Card>
      
      <Card className="border-[#FFC900]/20 bg-[#22251e]">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-3 text-[#FFC900]">
            <Users className="h-5 w-5 text-[#FFC900]" />
            Virtual Mindfulness Sessions
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <p className="text-[#FFC900]/90 mb-4">
            Guided mindfulness and meditation sessions specifically designed for electrical professionals
            dealing with work-related stress and anxiety.
          </p>
          <div className="flex items-center gap-2 mb-2">
            <Calendar size={16} className="text-[#FFC900]/80" />
            <span className="text-[#FFC900]/80">Mondays and Wednesdays at 8AM GMT</span>
          </div>
          <div className="mt-4">
            <a 
              href="#" 
              className="inline-flex items-center gap-1 text-[#FFC900] hover:underline"
            >
              Register for session <ExternalLink size={14} />
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OnlineGroupsTab;
