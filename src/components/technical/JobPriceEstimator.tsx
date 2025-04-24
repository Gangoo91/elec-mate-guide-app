import React, { useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Calculator, PoundSterling, InfoIcon } from "lucide-react";
import { useErrorHandler } from "@/hooks/useErrorHandler";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LoadingSpinner from "@/components/LoadingSpinner";

const JobPriceEstimator = () => {
  const [jobDescription, setJobDescription] = useState('');
  const [estimate, setEstimate] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { handleError } = useErrorHandler();

  const generateEstimate = async () => {
    if (!jobDescription.trim()) {
      toast.error("Please enter job details");
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('job-price-estimator', {
        body: JSON.stringify({ jobDescription })
      });

      if (error) throw error;
      
      if (data.estimate) {
        setEstimate(data.estimate);
        toast.success("Estimate generated");
      } else {
        throw new Error("No estimate received");
      }
    } catch (err) {
      console.error("Error:", err);
      handleError(err, "Unable to generate estimate. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const formatEstimate = (text: string) => {
    return text
      .split('\n')
      .map((line, index) => {
        if (line.toLowerCase().includes('summary')) {
          return `<div class="bg-[#2C2F24]/80 border-l-4 border-[#FFC900] pl-3 py-2 rounded-sm mt-6 mb-3">
            <h2 class="text-xl font-bold text-[#FFC900] flex items-center">
              <Calculator class="mr-2 h-5 w-5 text-[#FFC900]" /> ${line}
            </h2>
          </div>`;
        }
        
        if (line.toLowerCase().includes('total cost')) {
          return `<div class="bg-[#2C2F24] border border-[#FFC900]/20 p-3 rounded-md my-3 flex items-center">
            <PoundSterling class="mr-2 h-5 w-5 text-[#FFC900] flex-shrink-0" />
            <span class="text-[#FFC900] font-bold">${line}</span>
          </div>`;
        }
        
        if (line.match(/^[A-Z][\w\s]+:/)) {
          return `<div class="text-[#FFC900] font-semibold mt-4 mb-2">${line}</div>`;
        }

        return line.trim() ? 
          `<p class="mb-2 text-[#FFC900]/90 ml-2">${line}</p>` : 
          '<div class="h-2"></div>';
      })
      .join('');
  };

  const placeholderText = `Please provide detailed information about the job:

• Type of work (e.g., rewire, consumer unit replacement, fault finding)
• Property details (size, age, access considerations)
• Location (helps account for regional price differences)
• Specific requirements (brands, specifications)
• Time constraints or scheduling preferences
• Current state of existing installations
• Any known complications or challenges

Example: "Full rewire needed for a 3-bed semi-detached house in Manchester. Property is 1960s with mostly surface mounted wiring. Occupied property, requires minimal disruption. Need premium consumer unit with surge protection. Garden office needs new circuit. Preferred start date in 2 months."`;

  return (
    <div className="space-y-6">
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
        <div className="relative">
          <div className="mb-3 flex items-start gap-2">
            <InfoIcon className="h-5 w-5 text-[#FFC900] flex-shrink-0 mt-0.5" />
            <p className="text-sm text-[#FFC900]/90">
              Providing detailed information helps generate more accurate estimates. Include property type, 
              location, and specific requirements.
            </p>
          </div>
          
          <Textarea 
            placeholder={placeholderText}
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900] placeholder-[#FFC900]/40 min-h-[280px] text-base leading-relaxed"
          />
        </div>

        <Button 
          onClick={generateEstimate} 
          disabled={isLoading}
          className="w-full bg-[#FFC900] text-black hover:bg-[#FFF200] h-12 text-base font-medium"
        >
          {isLoading ? (
            <>
              <LoadingSpinner size="sm" className="mr-2" />
              Generating...
            </>
          ) : (
            'Generate'
          )}
        </Button>
        
        {estimate && (
          <Card className="mt-6 bg-[#2C2F24] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <div 
                className="estimate-content text-[#FFC900]/90 space-y-1"
                dangerouslySetInnerHTML={{ 
                  __html: formatEstimate(estimate)
                }} 
              />
            </CardContent>
          </Card>
        )}
      </CardContent>
    </div>
  );
};

export default JobPriceEstimator;
