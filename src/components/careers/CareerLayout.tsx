
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

interface CareerLayoutProps {
  title: string;
  description: string;
  qualifications: string[];
  responsibilities: string[];
  experience: string[];
  progression: string[];
  salary: string;
}

const CareerLayout = ({
  title,
  description,
  qualifications,
  responsibilities,
  experience,
  progression,
  salary
}: CareerLayoutProps) => {
  return (
    <MainLayout>
      <div className="container px-4 py-2 md:py-4">
        <PageHeader 
          title={title}
          description={description}
        />
        
        <div className="grid gap-6 mt-8">
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold text-[#FFC900] mb-4">Required Qualifications</h2>
              <ul className="space-y-2">
                {qualifications.map((qual, index) => (
                  <li key={index} className="flex items-start gap-2 text-[#FFC900]/70">
                    <Check className="h-5 w-5 text-[#FFC900] mt-0.5" />
                    <span>{qual}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold text-[#FFC900] mb-4">Key Responsibilities</h2>
              <ul className="space-y-2">
                {responsibilities.map((resp, index) => (
                  <li key={index} className="flex items-start gap-2 text-[#FFC900]/70">
                    <Check className="h-5 w-5 text-[#FFC900] mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold text-[#FFC900] mb-4">Required Experience</h2>
              <ul className="space-y-2">
                {experience.map((exp, index) => (
                  <li key={index} className="flex items-start gap-2 text-[#FFC900]/70">
                    <Check className="h-5 w-5 text-[#FFC900] mt-0.5" />
                    <span>{exp}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold text-[#FFC900] mb-4">Career Progression</h2>
              <ul className="space-y-2">
                {progression.map((prog, index) => (
                  <li key={index} className="flex items-start gap-2 text-[#FFC900]/70">
                    <Check className="h-5 w-5 text-[#FFC900] mt-0.5" />
                    <span>{prog}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold text-[#FFC900] mb-4">Typical Salary Range</h2>
              <p className="text-[#FFC900]/70">{salary}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default CareerLayout;
