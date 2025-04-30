
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Users, MapPin, Calendar, ExternalLink, PhoneCall } from "lucide-react";

const SupportGroups = () => {
  return (
    <MainLayout>
      <div className="container py-8">
        <PageHeader
          title="Support Groups"
          description="Connect with fellow electrical professionals in a supportive environment"
        />
        
        <Tabs defaultValue="online" className="w-full">
          <TabsList className="grid grid-cols-3 mb-6 bg-[#22251e] border border-[#FFC900]/20">
            <TabsTrigger value="online" className="data-[state=active]:bg-[#FFC900] data-[state=active]:text-[#22251e]">
              Online Groups
            </TabsTrigger>
            <TabsTrigger value="inperson" className="data-[state=active]:bg-[#FFC900] data-[state=active]:text-[#22251e]">
              In-Person Groups
            </TabsTrigger>
            <TabsTrigger value="industry" className="data-[state=active]:bg-[#FFC900] data-[state=active]:text-[#22251e]">
              Industry-Specific
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="online" className="space-y-6">
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
          </TabsContent>
          
          <TabsContent value="inperson" className="space-y-6">
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
                  <Users className="h-5 w-5 text-[#FFC900]" />
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
          </TabsContent>
          
          <TabsContent value="industry" className="space-y-6">
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
          </TabsContent>
        </Tabs>

        <div className="mt-8 p-6 bg-[#22251e] border border-[#FFC900]/20 rounded-md">
          <h3 className="text-xl font-semibold mb-4 text-[#FFC900]">Need Immediate Support?</h3>
          <p className="text-[#FFC900]/90 mb-4">
            If you need to talk to someone right now, our Mental Health Mate service 
            connects you directly with a trained peer supporter.
          </p>
          <a 
            href="/mental-health/buddy" 
            className="inline-block px-4 py-2 bg-[#FFC900] text-[#22251e] rounded-md hover:bg-[#FFC900]/90"
          >
            Find a Mental Health Mate
          </a>
        </div>
      </div>
    </MainLayout>
  );
};

export default SupportGroups;
