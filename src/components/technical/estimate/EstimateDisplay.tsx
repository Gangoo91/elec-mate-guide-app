
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileCheck } from "lucide-react";

interface EstimateDisplayProps {
  estimate: string;
  clientName: string;
  jobReference: string;
}

export const EstimateDisplay: React.FC<EstimateDisplayProps> = ({ estimate, clientName, jobReference }) => {
  if (!estimate) return null;

  return (
    <Card className="border border-gray-200 mt-6 overflow-hidden">
      <CardHeader className="bg-gray-50 pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-medium flex items-center gap-2">
            <FileCheck className="h-5 w-5 text-[#FFC900]" />
            <span>Estimate Result</span>
          </CardTitle>
          {clientName && (
            <div className="text-sm text-gray-600">
              <span className="font-medium">Client:</span> {clientName}
            </div>
          )}
        </div>
        {jobReference && (
          <div className="text-sm text-gray-600">
            <span className="font-medium">Job Reference:</span> {jobReference}
          </div>
        )}
      </CardHeader>
      <CardContent className="pt-4">
        <div className="prose prose-sm max-w-none">
          <ReactMarkdown>{estimate}</ReactMarkdown>
        </div>
      </CardContent>
    </Card>
  );
}
