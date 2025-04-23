import React, { useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { BookOpen } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useErrorHandler } from "@/hooks/useErrorHandler";

const HowToGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [jobType, setJobType] = useState('electrical');
  const [response, setResponse] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { handleError } = useErrorHandler();

  const handlePromptChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setPrompt(newValue);
    
    if (!newValue.trim()) {
      setResponse('');
      setImageUrl('');
    }
  };

  const handleJobTypeChange = (value: string) => {
    setJobType(value);
    
    setResponse('');
    setImageUrl('');
  };

  const handleGenerateGuide = async () => {
    if (!prompt.trim()) {
      toast.error("Please describe the job you need guidance on");
      return;
    }

    setIsLoading(true);
    setResponse('');
    setImageUrl('');
    
    try {
      console.log("Sending request to how-to-generator with prompt:", prompt);
      const { data, error } = await supabase.functions.invoke('how-to-generator', {
        body: JSON.stringify({ 
          prompt, 
          jobType 
        })
      });

      if (error) {
        console.error("Supabase function error:", error);
        throw error;
      }

      if (!data || (!data.response && !data.imageUrl)) {
        console.error("Invalid response format:", data);
        throw new Error("Invalid response received from guide generator");
      }

      setResponse(data.response);
      setImageUrl(data.imageUrl || '');
      toast.success("Job guide generated successfully");
    } catch (err) {
      console.error("Error in HowToGenerator:", err);
      handleError(err, "Failed to generate job guide");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="bg-[#22251e] border-[#FFC900]/20">
      <CardHeader className="flex flex-row items-center gap-2">
        <BookOpen className="h-6 w-6 text-[#FFC900]" />
        <CardTitle className="text-[#FFC900]">How to Generator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="job-type" className="text-[#FFC900]">Job Type</Label>
            <Select 
              value={jobType} 
              onValueChange={handleJobTypeChange}
            >
              <SelectTrigger id="job-type" className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]">
                <SelectValue placeholder="Select job type" />
              </SelectTrigger>
              <SelectContent className="bg-[#22251e] border-[#FFC900]/20">
                <SelectItem value="electrical" className="text-[#FFC900] focus:bg-[#FFC900]/10 focus:text-[#FFC900]">Electrical</SelectItem>
                <SelectItem value="construction" className="text-[#FFC900] focus:bg-[#FFC900]/10 focus:text-[#FFC900]">Construction</SelectItem>
                <SelectItem value="maintenance" className="text-[#FFC900] focus:bg-[#FFC900]/10 focus:text-[#FFC900]">Maintenance</SelectItem>
                <SelectItem value="other" className="text-[#FFC900] focus:bg-[#FFC900]/10 focus:text-[#FFC900]">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Textarea 
            placeholder="Type in this box your job, and we'll tell you how to do it step by step (e.g., 'Install a new light switch', 'Repair a damaged electrical outlet')..."
            value={prompt}
            onChange={handlePromptChange}
            className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900] placeholder-[#FFC900]/50 min-h-[120px]"
          />
          <Button 
            onClick={handleGenerateGuide} 
            disabled={isLoading}
            className="w-full bg-[#FFC900] text-black hover:bg-[#FFF200]"
          >
            {isLoading ? 'Generating Guide...' : 'Generate Job Guide'}
          </Button>
          
          {imageUrl && (
            <div className="mt-4 p-3 bg-[#2C2F24] rounded">
              <h4 className="font-semibold mb-2 text-[#FFC900]">Illustrative Image:</h4>
              <img 
                src={imageUrl} 
                alt="Generated job guide illustration" 
                className="w-full max-h-[400px] object-contain border border-[#FFC900]/20 rounded"
              />
            </div>
          )}

          {response && (
            <div className="mt-4 p-3 bg-[#2C2F24] rounded">
              <h4 className="font-semibold mb-2 text-[#FFC900]">Step-by-Step Guide:</h4>
              <p className="text-[#FFC900]/80 whitespace-pre-wrap">{response}</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default HowToGenerator;
