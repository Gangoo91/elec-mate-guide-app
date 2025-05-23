
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, HeartPulse, Users, Check } from "lucide-react";
import { Link } from "react-router-dom";
import ResourceCard from "@/components/shared/ResourceCard";

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
          <Link to="/mental-health/buddy" className="block w-full">
            <Card className="border-[#FFC900]/20 bg-[#22251e] hover:border-[#FFC900]/50 transition-all duration-300 cursor-pointer">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-3 text-[#FFC900]">
                  <MessageSquare className="h-7 w-7 text-[#FFC900]" />
                  Mental Health Mate
                </CardTitle>
                <CardDescription className="text-[#FFC900]/70">
                  Connect with a supportive colleague who's ready to listen and provide peer support
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <Button 
                  className="bg-[#FFC900] text-[#22251e] hover:bg-[#FFC900]/90"
                >
                  Find a Mental Health Mate
                </Button>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Resource Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Stress Management */}
          <ResourceCard
            title="Stress Management"
            description="Tools for managing work-related stress"
            icon={<HeartPulse className="h-5 w-5 text-[#FFC900]" />}
            fullCardLink="/mental-health/stress-management"
          >
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
          </ResourceCard>
          
          {/* Support Groups */}
          <ResourceCard
            title="Support Groups"
            description="Connect with others in the industry"
            icon={<Users className="h-5 w-5 text-[#FFC900]" />}
            fullCardLink="/mental-health/support-groups"
          >
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
          </ResourceCard>
          
          {/* Professional Resources */}
          <ResourceCard
            title="Professional Resources"
            description="Expert mental health assistance"
            icon={<HeartPulse className="h-5 w-5 text-[#FFC900]" />}
            fullCardLink="/mental-health/professional-resources"
          >
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
          </ResourceCard>
        </div>
      </div>
    </MainLayout>
  );
};

export default MentalHealth;
