
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";
import AIDiagnosticAssistant from "./AIDiagnosticAssistant";
import RegulationsAssistant from "./RegulationsAssistant";

const AILearningTools = () => {
  return (
    <Card className="bg-[#22251e] border-[#FFC900]/20">
      <CardHeader>
        <CardTitle className="text-[#FFC900] flex items-center gap-2">
          <Lightbulb className="h-6 w-6" />
          AI Learning Tools
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <AIDiagnosticAssistant />
        <RegulationsAssistant />
      </CardContent>
    </Card>
  );
};

export default AILearningTools;
