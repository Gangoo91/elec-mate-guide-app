
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AIDiagnosticAssistant from "./AIDiagnosticAssistant";
import RegulationsFinderChecker from "./RegulationsFinderChecker";
import WiringDiagramGenerator from "./WiringDiagramGenerator";
import SafetyChecklistGenerator from "./SafetyChecklistGenerator";
import TechnicalSpecsAnalyzer from "./TechnicalSpecsAnalyzer";

const AIToolsGrid = () => {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="diagnostics" className="w-full">
        <TabsList className="bg-[#151812] border border-[#FFC900]/10 mb-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
          <TabsTrigger value="diagnostics" className="data-[state=active]:bg-[#FFC900] data-[state=active]:text-[#151812]">
            Diagnostic
          </TabsTrigger>
          <TabsTrigger value="regulations" className="data-[state=active]:bg-[#FFC900] data-[state=active]:text-[#151812]">
            Regulations
          </TabsTrigger>
          <TabsTrigger value="wiring" className="data-[state=active]:bg-[#FFC900] data-[state=active]:text-[#151812]">
            Wiring Diagrams
          </TabsTrigger>
          <TabsTrigger value="safety" className="data-[state=active]:bg-[#FFC900] data-[state=active]:text-[#151812]">
            Safety Checklists
          </TabsTrigger>
          <TabsTrigger value="specs" className="data-[state=active]:bg-[#FFC900] data-[state=active]:text-[#151812]">
            Specs Analyzer
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="diagnostics" className="animate-fade-in">
          <AIDiagnosticAssistant />
        </TabsContent>
        
        <TabsContent value="regulations" className="animate-fade-in">
          <RegulationsFinderChecker />
        </TabsContent>
        
        <TabsContent value="wiring" className="animate-fade-in">
          <WiringDiagramGenerator />
        </TabsContent>
        
        <TabsContent value="safety" className="animate-fade-in">
          <SafetyChecklistGenerator />
        </TabsContent>
        
        <TabsContent value="specs" className="animate-fade-in">
          <TechnicalSpecsAnalyzer />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AIToolsGrid;
