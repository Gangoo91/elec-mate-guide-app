
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AIDiagnosticAssistant from "./AIDiagnosticAssistant";
import RegulationsAssistant from "./RegulationsAssistant";
import WiringDiagramGenerator from "./WiringDiagramGenerator";
import SafetyChecklistGenerator from "./SafetyChecklistGenerator";
import TechnicalSpecsAnalyzer from "./TechnicalSpecsAnalyzer";

const AIToolsGrid = () => {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="diagnostics" className="w-full">
        <TabsList className="bg-[#151812] border border-[#FFC900]/10 mb-6 grid grid-cols-2 md:grid-cols-5">
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
        
        <TabsContent value="diagnostics">
          <AIDiagnosticAssistant />
        </TabsContent>
        
        <TabsContent value="regulations">
          <RegulationsAssistant />
        </TabsContent>
        
        <TabsContent value="wiring">
          <WiringDiagramGenerator />
        </TabsContent>
        
        <TabsContent value="safety">
          <SafetyChecklistGenerator />
        </TabsContent>
        
        <TabsContent value="specs">
          <TechnicalSpecsAnalyzer />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AIToolsGrid;
