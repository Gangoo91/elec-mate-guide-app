
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, HeartPulse, Users, Check } from "lucide-react";
import { Link } from "react-router-dom";

const MentalHealth = () => {
  return (
    <MainLayout>
      <div className="container py-8">
        <PageHeader
          title="Mental Health Hub"
          description="Support and resources tailored for electrical professionals"
        />

        {/* Mental Health Mate Section */}
        <div className="mb-12">
          <Card className="border-[#FFC900]/20 bg-[#22251e] hover:border-[#FFC900]/50 transition-all duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-3 text-[#FFC900]">
                <MessageSquare className="h-7 w-7 text-[#FFC900]" />
                Mental Health Mate
              </CardTitle>
              <CardDescription className="text-[#FFC900]/70">
                Connect with our AI-powered Mental Health Mate for confidential support and guidance
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <Button 
                className="bg-[#FFC900] text-[#22251e] hover:bg-[#FFC900]/90"
                asChild
              >
                <Link to="/mental-health/buddy">
                  Talk to Mental Health Mate
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Resource Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-[#FFC900]/20 bg-[#22251e] hover:border-[#FFC900]/50 transition-all duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-[#FFC900]">
                <HeartPulse className="h-5 w-5 text-[#FFC900]" />
                <span>Stress Management</span>
              </CardTitle>
              <CardDescription className="text-[#FFC900]/70">Tools for managing work-related stress</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-[#FFC900]/90">
                  <Check className="h-4 w-4 text-[#FFC900]" />
                  <span>Breathing exercises</span>
                </li>
                <li className="flex items-center gap-2 text-[#FFC900]/90">
                  <Check className="h-4 w-4 text-[#FFC900]" />
                  <span>Mindfulness practices</span>
                </li>
                <li className="flex items-center gap-2 text-[#FFC900]/90">
                  <Check className="h-4 w-4 text-[#FFC900]" />
                  <span>Guided meditations</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-[#FFC900]/20 bg-[#22251e] hover:border-[#FFC900]/50 transition-all duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-[#FFC900]">
                <Users className="h-5 w-5 text-[#FFC900]" />
                <span>Support Groups</span>
              </CardTitle>
              <CardDescription className="text-[#FFC900]/70">Connect with others in the industry</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-[#FFC900]/90">
                  <Check className="h-4 w-4 text-[#FFC900]" />
                  <span>Weekly online meetups</span>
                </li>
                <li className="flex items-center gap-2 text-[#FFC900]/90">
                  <Check className="h-4 w-4 text-[#FFC900]" />
                  <span>Facilitated discussions</span>
                </li>
                <li className="flex items-center gap-2 text-[#FFC900]/90">
                  <Check className="h-4 w-4 text-[#FFC900]" />
                  <span>Local in-person events</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-[#FFC900]/20 bg-[#22251e] hover:border-[#FFC900]/50 transition-all duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-[#FFC900]">
                <HeartPulse className="h-5 w-5 text-[#FFC900]" />
                <span>Professional Resources</span>
              </CardTitle>
              <CardDescription className="text-[#FFC900]/70">Expert mental health assistance</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-[#FFC900]/90">
                  <Check className="h-4 w-4 text-[#FFC900]" />
                  <span>Therapist directory</span>
                </li>
                <li className="flex items-center gap-2 text-[#FFC900]/90">
                  <Check className="h-4 w-4 text-[#FFC900]" />
                  <span>Crisis support hotlines</span>
                </li>
                <li className="flex items-center gap-2 text-[#FFC900]/90">
                  <Check className="h-4 w-4 text-[#FFC900]" />
                  <span>Mental health assessments</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default MentalHealth;
