
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import ResourceCard from "@/components/shared/ResourceCard";
import BackButton from "@/components/navigation/BackButton";
import { Calculator, Ruler, BookOpen } from "lucide-react";

const TechnicalToolsPage = () => {
  const tools = [
    {
      title: "Job Price Estimator",
      description: "Generate detailed cost estimates for electrical jobs with AI assistance.",
      icon: <Calculator className="h-8 w-8 text-[#FFC900]" />,
      fullCardLink: "/electricians/technical-tools/estimator"
    },
    {
      title: "Calculator Tools",
      description: "Essential electrical calculations including Ohm's Law, voltage drop, and more.",
      icon: <Ruler className="h-8 w-8 text-[#FFC900]" />,
      fullCardLink: "/electricians/technical-tools/calculators"
    },
    {
      title: "Inspection & Testing Guide",
      description: "Comprehensive guide for electrical inspection and testing procedures.",
      icon: <BookOpen className="h-8 w-8 text-[#FFC900]" />,
      fullCardLink: "/electricians/technical-tools/inspection-guide"
    }
  ];

  return (
    <MainLayout>
      <div className="container py-8">
        <BackButton />
        <h1 className="text-3xl md:text-4xl font-bold text-[#FFC900] mb-4">
          Technical Tools
        </h1>
        <p className="text-[#FFC900]/80 mb-8 max-w-3xl">
          Professional tools and AI-powered features to support your technical work. From calculations to job guides, access everything you need for efficient and informed tasks.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <ResourceCard
              key={index}
              {...tool}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default TechnicalToolsPage;
