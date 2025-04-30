
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, ExternalLink } from "lucide-react";

const InPersonGroupsTab = () => {
  return (
    <div className="space-y-6">
      <Card className="border-[#FFC900]/20 bg-[#22251e]">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-3 text-[#FFC900]">
            <MapPin className="h-5 w-5 text-[#FFC900]" />
            Local In-Person Events
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <p className="text-[#FFC900]/90 mb-4">
            Monthly in-person meetups organized by region. Connect face-to-face with others in your area
            and build lasting support networks.
          </p>
          <div className="flex items-center gap-2 mb-2">
            <Calendar size={16} className="text-[#FFC900]/80" />
            <span className="text-[#FFC900]/80">First Saturday of each month</span>
          </div>
          <div className="mt-4">
            <a 
              href="#" 
              className="inline-flex items-center gap-1 text-[#FFC900] hover:underline"
            >
              Find nearest group <ExternalLink size={14} />
            </a>
          </div>
        </CardContent>
      </Card>
      
      <Card className="border-[#FFC900]/20 bg-[#22251e]">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-3 text-[#FFC900]">
            <MapPin className="h-5 w-5 text-[#FFC900]" />
            Regional Workshop Groups
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <p className="text-[#FFC900]/90 mb-4">
            Quarterly workshops focused on mental health and wellbeing for electrical professionals.
            These sessions include professional facilitators and practical coping strategies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-[#FFC900]/10 p-3 rounded-md">
              <p className="font-medium text-[#FFC900] mb-1">London</p>
              <p className="text-sm text-[#FFC900]/80">Next workshop: July 15th</p>
            </div>
            <div className="bg-[#FFC900]/10 p-3 rounded-md">
              <p className="font-medium text-[#FFC900] mb-1">Manchester</p>
              <p className="text-sm text-[#FFC900]/80">Next workshop: July 22nd</p>
            </div>
            <div className="bg-[#FFC900]/10 p-3 rounded-md">
              <p className="font-medium text-[#FFC900] mb-1">Birmingham</p>
              <p className="text-sm text-[#FFC900]/80">Next workshop: July 29th</p>
            </div>
            <div className="bg-[#FFC900]/10 p-3 rounded-md">
              <p className="font-medium text-[#FFC900] mb-1">Glasgow</p>
              <p className="text-sm text-[#FFC900]/80">Next workshop: August 5th</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="border-[#FFC900]/20 bg-[#22251e]">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-3 text-[#FFC900]">
            <MapPin className="h-5 w-5 text-[#FFC900]" />
            Mental Health Walk & Talk
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <p className="text-[#FFC900]/90 mb-4">
            Informal walking groups that meet in local parks and natural settings. Physical activity 
            combined with peer support in a relaxed, outdoor environment.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="bg-[#FFC900]/20 text-[#FFC900] hover:bg-[#FFC900]/30">
              Weekend mornings
            </Badge>
            <Badge className="bg-[#FFC900]/20 text-[#FFC900] hover:bg-[#FFC900]/30">
              All fitness levels
            </Badge>
            <Badge className="bg-[#FFC900]/20 text-[#FFC900] hover:bg-[#FFC900]/30">
              Family friendly
            </Badge>
          </div>
          <div className="mt-4">
            <a 
              href="#" 
              className="inline-flex items-center gap-1 text-[#FFC900] hover:underline"
            >
              Find a walking group <ExternalLink size={14} />
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InPersonGroupsTab;
