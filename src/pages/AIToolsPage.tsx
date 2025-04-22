
import React from 'react';
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import BackButton from "@/components/navigation/BackButton";
import { Card, CardContent } from "@/components/ui/card";
import AIDiagnosticAssistant from "@/components/apprentices/AIDiagnosticAssistant";
import RegulationsFinderChecker from "@/components/apprentices/RegulationsFinderChecker";
import WiringDiagramGenerator from "@/components/apprentices/WiringDiagramGenerator";
import SafetyChecklistGenerator from "@/components/apprentices/SafetyChecklistGenerator";
import TechnicalSpecsAnalyzer from "@/components/apprentices/TechnicalSpecsAnalyzer";

const AIToolsPage = () => {
  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20 max-w-7xl mx-auto">
        <BackButton />
        <PageHeader 
          title="AI Learning Tools"
          description="Access our suite of AI-powered assistants to help with electrical diagnostics, regulatory compliance, and technical planning."
          hideBackButton={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <Card className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300">
            <CardContent className="p-0">
              <AIDiagnosticAssistant />
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300">
            <CardContent className="p-0">
              <RegulationsFinderChecker />
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300">
            <CardContent className="p-0">
              <WiringDiagramGenerator />
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300">
            <CardContent className="p-0">
              <SafetyChecklistGenerator />
            </CardContent>
          </Card>

          <Card className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300">
            <CardContent className="p-0">
              <TechnicalSpecsAnalyzer />
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default AIToolsPage;
