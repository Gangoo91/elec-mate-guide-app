
import React from 'react';
import { Button } from "@/components/ui/button";
import { PoundSterling, Save } from "lucide-react";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LoadingSpinner from "@/components/LoadingSpinner";
import { EstimateForm } from './estimate/EstimateForm';
import { EstimateDisplay } from './estimate/EstimateDisplay';
import { useJobEstimate } from '@/hooks/useJobEstimate';
import { ScrollArea } from "@/components/ui/scroll-area";

const JobPriceEstimator = () => {
  const {
    jobDescription,
    setJobDescription,
    clientName,
    setClientName,
    jobReference,
    setJobReference,
    estimate,
    isLoading,
    generateEstimate,
    saveEstimate
  } = useJobEstimate();

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <CardHeader className="pb-4">
        <div className="flex items-start gap-4">
          <PoundSterling className="h-8 w-8 text-[#FFC900] flex-shrink-0 mt-1" />
          <div>
            <CardTitle className="text-2xl font-bold text-[#FFC900] mb-2">
              Job Price Estimator
            </CardTitle>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <EstimateForm
          jobDescription={jobDescription}
          clientName={clientName}
          jobReference={jobReference}
          onJobDescriptionChange={setJobDescription}
          onClientNameChange={setClientName}
          onJobReferenceChange={setJobReference}
        />

        <div className="flex gap-4">
          <Button 
            onClick={generateEstimate} 
            disabled={isLoading}
            className="flex-1 bg-[#FFC900] text-black hover:bg-[#FFF200] h-12 text-base font-medium"
          >
            {isLoading ? (
              <>
                <LoadingSpinner size="sm" className="mr-2" />
                Generating...
              </>
            ) : (
              'Generate Estimate'
            )}
          </Button>

          {estimate && (
            <Button
              onClick={saveEstimate}
              disabled={isLoading}
              variant="outline"
              className="bg-transparent border-[#FFC900] text-[#FFC900] hover:bg-[#FFC900] hover:text-black"
            >
              <Save className="w-4 h-4 mr-2" />
              Save Estimate
            </Button>
          )}
        </div>
        
        <ScrollArea className="max-h-[60vh] overflow-y-auto pb-20">
          <EstimateDisplay 
            estimate={estimate}
            clientName={clientName}
            jobReference={jobReference}
          />
        </ScrollArea>
      </CardContent>
    </div>
  );
};

export default JobPriceEstimator;
