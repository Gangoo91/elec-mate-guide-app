
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, HeartPulse, Users } from "lucide-react";

const MentalHealth = () => {
  return (
    <MainLayout>
      <div className="container py-8">
        <PageHeader
          title="Mental Health Hub"
          description="Resources and support for electrical professionals"
        />
        
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-[#FFC900]/20">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <HeartPulse className="h-5 w-5 text-[#FFC900]" />
                <span>Stress Management</span>
              </CardTitle>
              <CardDescription>Tools for managing work-related stress</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#FFC900]" />
                  <span>Breathing exercises</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#FFC900]" />
                  <span>Mindfulness practices</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#FFC900]" />
                  <span>Guided meditations</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-[#FFC900]/20">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-[#FFC900]" />
                <span>Support Groups</span>
              </CardTitle>
              <CardDescription>Connect with others in the industry</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#FFC900]" />
                  <span>Weekly online meetups</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#FFC900]" />
                  <span>Facilitated discussions</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#FFC900]" />
                  <span>Local in-person events</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-[#FFC900]/20">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <HeartPulse className="h-5 w-5 text-[#FFC900]" />
                <span>Professional Resources</span>
              </CardTitle>
              <CardDescription>Expert mental health assistance</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#FFC900]" />
                  <span>Therapist directory</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#FFC900]" />
                  <span>Crisis support hotlines</span>
                </li>
                <li className="flex items-center gap-2">
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
