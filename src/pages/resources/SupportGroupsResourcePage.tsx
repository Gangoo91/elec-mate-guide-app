
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, MapPin, Calendar, ExternalLink, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const SupportGroupsResourcePage = () => {
  return (
    <MainLayout>
      <div className="container py-8">
        <PageHeader
          title="Support Group Resources"
          description="Comprehensive list of support groups for electrical professionals"
        />
        
        <div className="space-y-6">
          <Card className="border-[#FFC900]/20 bg-[#22251e]">
            <CardHeader>
              <CardTitle className="text-[#FFC900] flex items-center gap-2">
                <Users className="h-5 w-5" />
                Andy's Man Club
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#FFC900]/90 mb-4">
                Andy's Man Club is a men's suicide prevention charity that offers free-to-attend peer-to-peer support groups across the United Kingdom. It provides a safe, non-judgmental space for men to talk about their problems, challenges, and mental health.
              </p>
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-[#FFC900]/80" />
                  <span className="text-[#FFC900]/80">Every Monday at 7pm (excluding Bank Holidays)</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#FFC900]/80" />
                  <span className="text-[#FFC900]/80">Various locations across the UK</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-[#FFC900]/20 text-[#FFC900] hover:bg-[#FFC900]/30">Free</Badge>
                <Badge className="bg-[#FFC900]/20 text-[#FFC900] hover:bg-[#FFC900]/30">No Referral Needed</Badge>
                <Badge className="bg-[#FFC900]/20 text-[#FFC900] hover:bg-[#FFC900]/30">Weekly Sessions</Badge>
                <Badge className="bg-[#FFC900]/20 text-[#FFC900] hover:bg-[#FFC900]/30">Peer Support</Badge>
              </div>
              <Button 
                className="bg-[#FFC900] text-[#22251e] hover:bg-[#FFC900]/90"
                onClick={() => window.open("https://andysmanclub.co.uk/find-your-nearest-group/", "_blank")}
              >
                Find Your Nearest Group
                <ExternalLink className="ml-1 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
          
          <Card className="border-[#FFC900]/20 bg-[#22251e]">
            <CardHeader>
              <CardTitle className="text-[#FFC900] flex items-center gap-2">
                <Users className="h-5 w-5" />
                Men's Sheds
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#FFC900]/90 mb-4">
                Men's Sheds are community spaces where members share tools, resources, and skills to work on projects of their own choosing at their own pace. They're places of skill-sharing and informal learning, of individual pursuits and community projects, of purpose, achievement and social interaction.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-[#FFC900]/20 text-[#FFC900] hover:bg-[#FFC900]/30">Activity-Based Support</Badge>
                <Badge className="bg-[#FFC900]/20 text-[#FFC900] hover:bg-[#FFC900]/30">Community Focused</Badge>
                <Badge className="bg-[#FFC900]/20 text-[#FFC900] hover:bg-[#FFC900]/30">Skill Sharing</Badge>
              </div>
              <Button 
                className="bg-[#FFC900] text-[#22251e] hover:bg-[#FFC900]/90"
                onClick={() => window.open("https://menssheds.org.uk/find-a-shed/", "_blank")}
              >
                Find a Men's Shed
                <ExternalLink className="ml-1 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
          
          <Card className="border-[#FFC900]/20 bg-[#22251e]">
            <CardHeader>
              <CardTitle className="text-[#FFC900] flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Construction Industry Helpline
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#FFC900]/90 mb-4">
                Managed by the Lighthouse Construction Industry Charity, this helpline provides emotional, physical and financial wellbeing support to construction workers and their families.
              </p>
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#FFC900]/80" />
                  <span className="text-[#FFC900]/80">0345 605 1956</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-[#FFC900]/80" />
                  <span className="text-[#FFC900]/80">24/7 availability</span>
                </div>
              </div>
              <Button 
                className="bg-[#FFC900] text-[#22251e] hover:bg-[#FFC900]/90"
                onClick={() => window.open("https://www.constructionindustryhelpline.com/", "_blank")}
              >
                Visit Website
                <ExternalLink className="ml-1 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
          
          <Card className="border-[#FFC900]/20 bg-[#22251e]">
            <CardHeader>
              <CardTitle className="text-[#FFC900] flex items-center gap-2">
                <Users className="h-5 w-5" />
                Electrical Industries Charity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#FFC900]/90 mb-4">
                The Electrical Industries Charity provides practical support services to individuals and their families who work or have worked in the electrical and energy industries. They offer mental health support, financial assistance, and career development services.
              </p>
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#FFC900]/80" />
                  <span className="text-[#FFC900]/80">0800 652 1618</span>
                </div>
              </div>
              <Button 
                className="bg-[#FFC900] text-[#22251e] hover:bg-[#FFC900]/90"
                onClick={() => window.open("https://www.electricalcharity.org/", "_blank")}
              >
                Access Support
                <ExternalLink className="ml-1 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default SupportGroupsResourcePage;
