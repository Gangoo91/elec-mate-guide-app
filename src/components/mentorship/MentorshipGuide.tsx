
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MessageSquare, Calendar, Users } from "lucide-react";

export const MentorshipGuide = () => {
  return (
    <div className="mt-12 bg-[#22251e] rounded-xl p-6 border border-[#FFC900]/20">
      <h3 className="text-xl font-bold text-[#FFC900] mb-3">How Mentorship Works</h3>
      <div className="grid gap-6 md:grid-cols-3 mt-6">
        <Card className="border-[#FFC900]/20 bg-[#151812]">
          <CardHeader>
            <div className="rounded-full bg-[#FFC900]/10 p-3 w-12 h-12 flex items-center justify-center mb-2">
              <MessageSquare className="h-6 w-6 text-[#FFC900]" />
            </div>
            <CardTitle className="text-base text-[#FFC900]">1. Send a Request</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-[#FFC900]/80">
              Select a mentor who matches your interests and send them a request with your goals and questions.
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-[#FFC900]/20 bg-[#151812]">
          <CardHeader>
            <div className="rounded-full bg-[#FFC900]/10 p-3 w-12 h-12 flex items-center justify-center mb-2">
              <Calendar className="h-6 w-6 text-[#FFC900]" />
            </div>
            <CardTitle className="text-base text-[#FFC900]">2. Schedule Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-[#FFC900]/80">
              Once accepted, arrange meetings that work for both of you - online, phone call, or in person.
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-[#FFC900]/20 bg-[#151812]">
          <CardHeader>
            <div className="rounded-full bg-[#FFC900]/10 p-3 w-12 h-12 flex items-center justify-center mb-2">
              <Users className="h-6 w-6 text-[#FFC900]" />
            </div>
            <CardTitle className="text-base text-[#FFC900]">3. Grow Together</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-[#FFC900]/80">
              Build a valuable professional relationship and gain insights that will help advance your career.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
