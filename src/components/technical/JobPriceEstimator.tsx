
import React, { useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Calculator, PoundSterling, Save, FileText, Trash } from "lucide-react";
import { useErrorHandler } from "@/hooks/useErrorHandler";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LoadingSpinner from "@/components/LoadingSpinner";

const JobPriceEstimator = () => {
  const [jobDescription, setJobDescription] = useState('');
  const [clientName, setClientName] = useState('');
  const [jobReference, setJobReference] = useState('');
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
        toast.success("Estimate generated successfully");
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

  const saveEstimate = async () => {
    if (!estimate || !jobDescription) {
      toast.error("Please generate an estimate first");
      return;
    }

    setIsLoading(true);
    try {
      const { error } = await supabase
        .from('job_estimates')
        .insert({
          job_description: jobDescription,
          estimate_response: estimate,
          client_name: clientName,
          job_reference: jobReference
        });

      if (error) throw error;
      
      toast.success("Estimate saved successfully");
    } catch (err) {
      console.error("Error:", err);
      handleError(err, "Unable to save estimate. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const formatEstimate = (text: string) => {
    let formattedText = text
      .replace(/^(SUMMARY|MATERIALS BREAKDOWN|LABOUR ESTIMATE|TOTAL COST|NOTES):/gm, 
        match => `<h2 class="text-xl font-bold text-[#FFC900] mt-6 mb-3 flex items-center"><Calculator class="mr-2 h-5 w-5 text-[#FFC900]" />${match}</h2>`);
    
    formattedText = formattedText.replace(/^[-•]\s+(.*)/gm, 
      match => `<li class="mb-2 text-[#FFC900]/90 ml-5 list-disc">${match.substring(2)}</li>`);
    
    formattedText = formattedText.replace(/<li class="mb-2 text-\[#FFC900\]\/90 ml-5 list-disc">(.*?)(<\/li>[\r\n]+)(?!<li)/gs, 
      match => `<ul class="my-3">${match}</ul>`);
    
    formattedText = formattedText.replace(/£(\d+(\.\d{1,2})?)/g, 
      match => `<span class="text-[#FFC900] font-semibold">${match}</span>`);
    
    formattedText = formattedText.split('\n')
      .map(line => {
        if (line.trim() === '') return '<div class="h-2"></div>';
        if (line.match(/^<h2|^<li|^<ul|^<\/ul>/)) return line;
        return `<p class="mb-2 text-[#FFC900]/90">${line}</p>`;
      })
      .join('');
    
    formattedText = formattedText.replace(/<h2 class="text-xl font-bold text-\[#FFC900\] mt-6 mb-3 flex items-center"><Calculator class="mr-2 h-5 w-5 text-\[#FFC900\]" \/>TOTAL COST:<\/h2>/g, 
      match => `<div class="bg-[#2C2F24] border border-[#FFC900]/20 p-3 rounded-md my-4">${match}`);
    
    formattedText = formattedText.replace(/(?<=TOTAL COST:<\/h2>)(.*?)(?=<h2|$)/gs, 
      match => `${match}</div>`);
    
    return formattedText;
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            placeholder="Client Name (optional)"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900] placeholder-[#FFC900]/40"
          />
          <Input
            placeholder="Job Reference (optional)"
            value={jobReference}
            onChange={(e) => setJobReference(e.target.value)}
            className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900] placeholder-[#FFC900]/40"
          />
        </div>

        <div className="relative">
          <Textarea 
            placeholder={placeholderText}
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900] placeholder-[#FFC900]/40 min-h-[280px] text-base leading-relaxed"
          />
        </div>

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
