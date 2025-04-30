
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, FileText, Download, PlayCircle, ExternalLink } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const SelfHelpResourcesPage = () => {
  return (
    <MainLayout>
      <div className="container py-8">
        <PageHeader
          title="Self-Help Resources"
          description="Tools and guides for managing mental health and wellbeing"
        />
        
        <Tabs defaultValue="guides" className="w-full">
          <TabsList className="grid grid-cols-4 mb-6 bg-[#22251e] border border-[#FFC900]/20">
            <TabsTrigger value="guides" className="data-[state=active]:bg-[#FFC900] data-[state=active]:text-[#22251e]">
              Guides
            </TabsTrigger>
            <TabsTrigger value="workbooks" className="data-[state=active]:bg-[#FFC900] data-[state=active]:text-[#22251e]">
              Workbooks
            </TabsTrigger>
            <TabsTrigger value="meditation" className="data-[state=active]:bg-[#FFC900] data-[state=active]:text-[#22251e]">
              Meditation
            </TabsTrigger>
            <TabsTrigger value="apps" className="data-[state=active]:bg-[#FFC900] data-[state=active]:text-[#22251e]">
              Apps & Tools
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="guides" className="space-y-6">
            <Card className="border-[#FFC900]/20 bg-[#22251e]">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-3 text-[#FFC900]">
                  <FileText className="h-5 w-5 text-[#FFC900]" />
                  Stress Management for Electrical Workers
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-[#FFC900]/90 mb-4">
                  A comprehensive guide addressing the specific stressors faced by electrical professionals, including
                  practical techniques for managing workplace stress, anxiety, and burnout prevention strategies.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-[#FFC900]/20 text-[#FFC900] hover:bg-[#FFC900]/30">Industry-Specific</Badge>
                  <Badge className="bg-[#FFC900]/20 text-[#FFC900] hover:bg-[#FFC900]/30">PDF Format</Badge>
                  <Badge className="bg-[#FFC900]/20 text-[#FFC900] hover:bg-[#FFC900]/30">Practical Exercises</Badge>
                </div>
                <Button 
                  className="bg-[#FFC900] text-[#22251e] hover:bg-[#FFC900]/90 flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Download Guide
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-[#FFC900]/20 bg-[#22251e]">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-3 text-[#FFC900]">
                  <FileText className="h-5 w-5 text-[#FFC900]" />
                  Work-Life Balance Handbook
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-[#FFC900]/90 mb-4">
                  Strategies and practical advice for maintaining a healthy balance between work demands and personal life,
                  especially for those working irregular hours or in high-pressure electrical environments.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-[#FFC900]/20 text-[#FFC900] hover:bg-[#FFC900]/30">Boundary Setting</Badge>
                  <Badge className="bg-[#FFC900]/20 text-[#FFC900] hover:bg-[#FFC900]/30">Time Management</Badge>
                  <Badge className="bg-[#FFC900]/20 text-[#FFC900] hover:bg-[#FFC900]/30">Self-Care</Badge>
                </div>
                <Button 
                  className="bg-[#FFC900] text-[#22251e] hover:bg-[#FFC900]/90 flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Download Handbook
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-[#FFC900]/20 bg-[#22251e]">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-3 text-[#FFC900]">
                  <FileText className="h-5 w-5 text-[#FFC900]" />
                  Sleep Improvement for Shift Workers
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-[#FFC900]/90 mb-4">
                  A specialized guide addressing sleep challenges for electrical professionals who work shifts, 
                  night hours, or irregular schedules, with evidence-based techniques to improve sleep quality.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-[#FFC900]/20 text-[#FFC900] hover:bg-[#FFC900]/30">Sleep Hygiene</Badge>
                  <Badge className="bg-[#FFC900]/20 text-[#FFC900] hover:bg-[#FFC900]/30">Shift Work Strategies</Badge>
                  <Badge className="bg-[#FFC900]/20 text-[#FFC900] hover:bg-[#FFC900]/30">Recovery Techniques</Badge>
                </div>
                <Button 
                  className="bg-[#FFC900] text-[#22251e] hover:bg-[#FFC900]/90 flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Download Guide
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="workbooks" className="space-y-6">
            <Card className="border-[#FFC900]/20 bg-[#22251e]">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-3 text-[#FFC900]">
                  <BookOpen className="h-5 w-5 text-[#FFC900]" />
                  Anxiety Management Workbook
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-[#FFC900]/90 mb-4">
                  An interactive workbook with exercises, worksheets, and journaling prompts to help identify
                  anxiety triggers in the workplace and develop personalized coping strategies.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-[#FFC900]/20 text-[#FFC900] hover:bg-[#FFC900]/30">Interactive</Badge>
                  <Badge className="bg-[#FFC900]/20 text-[#FFC900] hover:bg-[#FFC900]/30">CBT-Based</Badge>
                  <Badge className="bg-[#FFC900]/20 text-[#FFC900] hover:bg-[#FFC900]/30">12-Week Program</Badge>
                </div>
                <Button 
                  className="bg-[#FFC900] text-[#22251e] hover:bg-[#FFC900]/90 flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Download Workbook
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-[#FFC900]/20 bg-[#22251e]">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-3 text-[#FFC900]">
                  <BookOpen className="h-5 w-5 text-[#FFC900]" />
                  Stress Resilience Journal
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-[#FFC900]/90 mb-4">
                  A structured journal designed specifically for tradespeople to record stressful situations,
                  emotional responses, and develop effective coping mechanisms to build resilience over time.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-[#FFC900]/20 text-[#FFC900] hover:bg-[#FFC900]/30">Daily Entries</Badge>
                  <Badge className="bg-[#FFC900]/20 text-[#FFC900] hover:bg-[#FFC900]/30">Progress Tracking</Badge>
                  <Badge className="bg-[#FFC900]/20 text-[#FFC900] hover:bg-[#FFC900]/30">Reflection Prompts</Badge>
                </div>
                <Button 
                  className="bg-[#FFC900] text-[#22251e] hover:bg-[#FFC900]/90 flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Download Journal Template
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="meditation" className="space-y-6">
            <Card className="border-[#FFC900]/20 bg-[#22251e]">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-3 text-[#FFC900]">
                  <PlayCircle className="h-5 w-5 text-[#FFC900]" />
                  Quick Break Meditations
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-[#FFC900]/90 mb-4">
                  A collection of short 5-10 minute guided meditations designed to be used during work breaks
                  to reduce stress, improve focus, and enhance mental clarity before returning to electrical work.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <Button variant="outline" className="border-[#FFC900]/20 text-[#FFC900] flex justify-between w-full">
                    <span>5-min Stress Relief</span>
                    <PlayCircle className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="border-[#FFC900]/20 text-[#FFC900] flex justify-between w-full">
                    <span>7-min Focus Reset</span>
                    <PlayCircle className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="border-[#FFC900]/20 text-[#FFC900] flex justify-between w-full">
                    <span>10-min Anxiety Reducer</span>
                    <PlayCircle className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="border-[#FFC900]/20 text-[#FFC900] flex justify-between w-full">
                    <span>8-min Energy Booster</span>
                    <PlayCircle className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-[#FFC900]/20 bg-[#22251e]">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-3 text-[#FFC900]">
                  <PlayCircle className="h-5 w-5 text-[#FFC900]" />
                  End of Day Wind-Down
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-[#FFC900]/90 mb-4">
                  Longer guided meditation sessions specifically designed to help electrical professionals 
                  transition from work mode to relaxation, releasing the tension and stress of the workday.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <Button variant="outline" className="border-[#FFC900]/20 text-[#FFC900] flex justify-between w-full">
                    <span>15-min Body Scan</span>
                    <PlayCircle className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="border-[#FFC900]/20 text-[#FFC900] flex justify-between w-full">
                    <span>20-min Tension Release</span>
                    <PlayCircle className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="apps" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-[#FFC900]/20 bg-[#22251e]">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-3 text-[#FFC900] text-lg">
                    Headspace
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-[#FFC900]/90 mb-4">
                    Guided meditation app with specific sessions for workplace stress, anxiety, and improving focus.
                  </p>
                  <Button 
                    className="w-full bg-[#FFC900] text-[#22251e] hover:bg-[#FFC900]/90 flex items-center justify-center gap-2"
                    onClick={() => window.open("https://www.headspace.com/", "_blank")}
                  >
                    Learn More
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-[#FFC900]/20 bg-[#22251e]">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-3 text-[#FFC900] text-lg">
                    Calm
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-[#FFC900]/90 mb-4">
                    Sleep stories, meditation, and breathing exercises to help with stress, anxiety and insomnia.
                  </p>
                  <Button 
                    className="w-full bg-[#FFC900] text-[#22251e] hover:bg-[#FFC900]/90 flex items-center justify-center gap-2"
                    onClick={() => window.open("https://www.calm.com/", "_blank")}
                  >
                    Learn More
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-[#FFC900]/20 bg-[#22251e]">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-3 text-[#FFC900] text-lg">
                    Woebot
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-[#FFC900]/90 mb-4">
                    AI chatbot using cognitive behavioral therapy techniques to help manage mental health.
                  </p>
                  <Button 
                    className="w-full bg-[#FFC900] text-[#22251e] hover:bg-[#FFC900]/90 flex items-center justify-center gap-2"
                    onClick={() => window.open("https://woebothealth.com/", "_blank")}
                  >
                    Learn More
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-[#FFC900]/20 bg-[#22251e]">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-3 text-[#FFC900] text-lg">
                    Sleepio
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-[#FFC900]/90 mb-4">
                    Clinically proven sleep improvement program, particularly helpful for shift workers.
                  </p>
                  <Button 
                    className="w-full bg-[#FFC900] text-[#22251e] hover:bg-[#FFC900]/90 flex items-center justify-center gap-2"
                    onClick={() => window.open("https://www.sleepio.com/", "_blank")}
                  >
                    Learn More
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-8 p-6 bg-[#22251e] border border-[#FFC900]/20 rounded-md">
          <h3 className="text-xl font-semibold mb-4 text-[#FFC900]">Need More Personalized Support?</h3>
          <p className="text-[#FFC900]/90 mb-4">
            While self-help resources can be valuable tools, sometimes it's helpful to talk with someone directly.
            Our Mental Health Mate service connects you with trained peer supporters who understand the unique 
            challenges faced by electrical professionals.
          </p>
          <Button 
            className="bg-[#FFC900] text-[#22251e] hover:bg-[#FFC900]/90"
            onClick={() => window.location.href = "/mental-health/buddy"}
          >
            Connect with a Mental Health Mate
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default SelfHelpResourcesPage;
