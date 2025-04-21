import React from "react";
import { Lightbulb, Users, Award, Briefcase, Heart, Handshake, Wrench, MessageCircle, Clock } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/layout/PageHeader";
import ResourceCard from "@/components/shared/ResourceCard";
import IndustryResources from "@/components/IndustryResources";

const ElectriciansPage = () => {
  const electricianResources = [
    {
      title: "Professional Development",
      description: "Advanced training and specialization courses",
      icon: <Award className="h-6 w-6 text-[#FFC900]" />,
      action: { label: "Learn more", href: "#development" }
    },
    {
      title: "Mentor Connect",
      description: "Guide apprentices and earn recognition",
      icon: <Handshake className="h-6 w-6 text-[#FFC900]" />,
      action: { label: "Learn more", href: "#mentor-connect" }
    },
    {
      title: "Technical Resources",
      description: "Code updates and technical information",
      icon: <Lightbulb className="h-6 w-6 text-[#FFC900]" />,
      action: { label: "Learn more", href: "#resources" }
    },
    {
      title: "Job Opportunities",
      description: "Find projects and permanent positions",
      icon: <Briefcase className="h-6 w-6 text-[#FFC900]" />,
      action: { label: "Learn more", href: "#jobs" }
    }
  ];

  const discussionTopics = [
    {
      title: "Safety Protocols for High Voltage",
      author: "Thomas Edison",
      replies: 24,
      lastActivity: "2 hours ago"
    },
    {
      title: "Best Practices for Conduit Installation",
      author: "Nikola Tesla",
      replies: 18,
      lastActivity: "Yesterday"
    },
    {
      title: "Troubleshooting LED Lighting Issues",
      author: "Michael Faraday",
      replies: 32,
      lastActivity: "3 days ago"
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-12">
        <PageHeader 
          title="Electricians Portal"
          description="Professional resources and opportunities for licensed electricians to advance their career and expertise."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {electricianResources.map((resource, index) => (
            <ResourceCard 
              key={index}
              {...resource}
            />
          ))}
        </div>
        
        <div className="bg-[#22251e] rounded-xl p-8 border border-[#FFC900]/20 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="h-8 w-8 text-[#FFC900]" />
            <h2 className="text-2xl font-bold text-[#FFC900]">Mental Health Hub</h2>
          </div>
          <p className="text-[#FFC900]/80 mb-6">
            Resources and support for mental wellbeing tailored to the challenges faced by electrical professionals. 
            Take care of your mental health and find balance in a demanding career.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#151812] rounded-lg p-5 border border-[#FFC900]/10">
              <h3 className="text-[#FFC900] font-semibold mb-2">Stress Management</h3>
              <p className="text-[#FFC900]/70 mb-4">Techniques and practices to manage job-related stress and prevent burnout.</p>
              <Button variant="outline" className="border-[#FFC900]/50 text-[#FFC900] hover:bg-[#FFC900]/10">
                Access Resources
              </Button>
            </div>
            <div className="bg-[#151812] rounded-lg p-5 border border-[#FFC900]/10">
              <h3 className="text-[#FFC900] font-semibold mb-2">Professional Support</h3>
              <p className="text-[#FFC900]/70 mb-4">Connect with counselors who understand the unique challenges of the electrical trade.</p>
              <Button variant="outline" className="border-[#FFC900]/50 text-[#FFC900] hover:bg-[#FFC900]/10">
                Find Support
              </Button>
            </div>
          </div>
        </div>

        <div id="toolbox-talk" className="bg-[#22251e] rounded-xl p-8 border border-[#FFC900]/20 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Wrench className="h-8 w-8 text-[#FFC900]" />
            <h2 className="text-2xl font-bold text-[#FFC900]">Toolbox Talk</h2>
          </div>
          <p className="text-[#FFC900]/80 mb-6">
            Short, focused safety discussions to promote workplace safety awareness. Lead effective toolbox talks 
            with your team and foster a culture of safety excellence.
          </p>
          
          <Tabs defaultValue="topics" className="w-full">
            <TabsList className="bg-[#151812] border border-[#FFC900]/10 mb-6">
              <TabsTrigger value="topics" className="data-[state=active]:bg-[#FFC900] data-[state=active]:text-[#151812]">Safety Topics</TabsTrigger>
              <TabsTrigger value="community" className="data-[state=active]:bg-[#FFC900] data-[state=active]:text-[#151812]">Community Discussions</TabsTrigger>
              <TabsTrigger value="industry" className="data-[state=active]:bg-[#FFC900] data-[state=active]:text-[#151812]">Industry News</TabsTrigger>
              <TabsTrigger value="stats" className="data-[state=active]:bg-[#FFC900] data-[state=active]:text-[#151812]">Community</TabsTrigger>
            </TabsList>
            
            <TabsContent value="topics">
              <div className="bg-[#151812] rounded-lg p-5 border border-[#FFC900]/10">
                <h3 className="text-[#FFC900] font-semibold mb-2">Latest Toolbox Talk Topics</h3>
                <ul className="list-disc list-inside text-[#FFC900]/70 space-y-1 mb-4">
                  <li>Electrical Lockout/Tagout Procedures</li>
                  <li>Working at Heights Safely</li>
                  <li>Handling New Equipment</li>
                  <li>Heat Stress Prevention</li>
                </ul>
                <Button className="bg-[#FFC900] text-[#151812] hover:bg-[#e5b700]">
                  Browse Topics
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="community">
              <div className="space-y-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-[#FFC900] font-semibold">Community Discussions</h3>
                  <Button className="bg-[#FFC900] text-[#151812] hover:bg-[#e5b700]">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Start New Discussion
                  </Button>
                </div>
                
                {discussionTopics.map((topic, index) => (
                  <div key={index} className="bg-[#151812] rounded-lg p-5 border border-[#FFC900]/10 transition-all hover:border-[#FFC900]/30">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-[#FFC900] font-medium">{topic.title}</h3>
                      <span className="text-xs text-[#FFC900]/60 bg-[#FFC900]/10 px-2 py-1 rounded-full">
                        {topic.replies} replies
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-[#FFC900]/70">
                      <span>Started by {topic.author}</span>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{topic.lastActivity}</span>
                      </div>
                    </div>
                    <Button variant="ghost" className="w-full mt-3 text-[#FFC900] hover:bg-[#FFC900]/10">
                      View Discussion
                    </Button>
                  </div>
                ))}
                
                <div className="flex justify-center mt-6">
                  <Button variant="outline" className="border-[#FFC900]/50 text-[#FFC900] hover:bg-[#FFC900]/10">
                    View All Discussions
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="industry">
              <IndustryResources />
            </TabsContent>
            
            <TabsContent value="stats">
              <div className="bg-[#151812] rounded-lg p-5 border border-[#FFC900]/10">
                <h3 className="text-[#FFC900] font-semibold mb-4">Community Overview</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 bg-[#22251e] p-4 rounded-lg">
                    <Users className="h-8 w-8 text-[#FFC900]" />
                    <div>
                      <p className="text-[#FFC900] font-semibold">Active Members</p>
                      <p className="text-[#FFC900]/70">Growing community of professionals</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-[#22251e] p-4 rounded-lg">
                    <MessageCircle className="h-8 w-8 text-[#FFC900]" />
                    <div>
                      <p className="text-[#FFC900] font-semibold">Daily Discussions</p>
                      <p className="text-[#FFC900]/70">Engage with industry peers</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="bg-[#22251e] rounded-xl p-4 md:p-8 border border-[#FFC900]/20">
          <h2 className="text-xl md:text-2xl font-bold text-[#FFC900] mb-4">Continuing Education for Electricians</h2>
          <p className="text-[#FFC900]/80 mb-6 text-sm md:text-base">
            Stay current with the latest electrical codes, technologies, and best practices with our continuing education resources.
          </p>
          <div className="space-y-4">
            <p className="text-[#FFC900]/80 text-sm md:text-base">
              Content for licensed electricians will be expanded soon with code update courses, certification management, 
              and advanced technical resources.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ElectriciansPage;
