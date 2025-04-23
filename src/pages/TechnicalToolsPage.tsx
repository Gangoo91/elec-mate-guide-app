import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import RegulationsFinderChecker from "@/components/apprentices/RegulationsFinderChecker";
import TechnicalSpecsAnalyzer from "@/components/apprentices/TechnicalSpecsAnalyzer";
import HowToGenerator from "@/components/apprentices/HowToGenerator";
import AIDiagnosticAssistant from "@/components/technical/AIDiagnosticAssistant";
import { Calculator, Ruler, BookOpen } from "lucide-react";
import CalculatorTools from "@/components/technical/CalculatorTools";
import InspectionTestingGuide from "@/components/technical/InspectionTestingGuide";

const TechnicalToolsPage = () => {
  return (
    <MainLayout>
      <div className="container py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#FFC900] mb-4">
          Technical Tools
        </h1>
        <p className="text-[#FFC900]/80 mb-8 max-w-3xl">
          Professional tools and AI-powered features to support your technical work. From calculations to job guides, access everything you need for efficient and informed tasks.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Calculator Tools Section */}
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardHeader className="flex flex-row items-center gap-2">
              <Calculator className="h-6 w-6 text-[#FFC900]" />
              <CardTitle className="text-[#FFC900]">Calculation Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <CalculatorTools />
            </CardContent>
          </Card>

          {/* Inspection & Testing Guide */}
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent>
              <InspectionTestingGuide />
            </CardContent>
          </Card>

          {/* Fault Finding Tool */}
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent>
              <AIDiagnosticAssistant />
            </CardContent>
          </Card>

          {/* Regulations Finder/Checker */}
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <RegulationsFinderChecker />
          </Card>

          {/* How to Generator */}
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <HowToGenerator />
          </Card>

          {/* Technical Specifications Analyser */}
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <TechnicalSpecsAnalyzer />
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default TechnicalToolsPage;
