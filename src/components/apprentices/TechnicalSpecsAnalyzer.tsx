
import React, { useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { FileText, Upload } from "lucide-react";
import { Label } from "@/components/ui/label";

const TechnicalSpecsAnalyzer: React.FC = () => {
  const [specsText, setSpecsText] = useState('');
  const [analysis, setAnalysis] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const handleSpecsAnalysis = async () => {
    if (!specsText.trim()) {
      toast.error("Please enter technical specifications to analyze");
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('technical-specs-analyzer', {
        body: JSON.stringify({ specsText })
      });

      if (error) throw error;

      setAnalysis(data.analysis);
      toast.success("Technical specifications analyzed");
    } catch (err) {
      console.error(err);
      toast.error("Failed to analyze technical specifications");
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Check file type is PDF or image
    if (!file.type.includes('pdf') && !file.type.includes('image')) {
      toast.error("Please upload a PDF or image file");
      return;
    }

    setIsUploading(true);
    try {
      // Create a FormData instance
      const formData = new FormData();
      formData.append('file', file);

      // This is just a placeholder for demonstration
      // In a real implementation, you would send this to a Supabase edge function
      // that can handle file uploads and extraction
      toast.info("File upload and processing would happen here");
      setIsUploading(false);

      // For demo purposes, show a message
      setSpecsText(`Technical specifications from uploaded file: ${file.name}\n\nThis is a placeholder. In a real implementation, text would be extracted from the uploaded document.`);
    } catch (error) {
      console.error(error);
      toast.error("Failed to process uploaded file");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Card className="bg-[#22251e] border-[#FFC900]/20">
      <CardHeader className="flex flex-row items-center gap-2">
        <FileText className="h-6 w-6 text-[#FFC900]" />
        <CardTitle className="text-[#FFC900]">Technical Specs Analyzer</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="file-upload" className="text-[#FFC900] flex items-center gap-2 cursor-pointer">
              <Upload className="h-4 w-4" />
              <span>Upload PDF or image of technical specifications (optional)</span>
            </Label>
            <input 
              id="file-upload" 
              type="file" 
              onChange={handleFileUpload}
              accept=".pdf,image/*" 
              className="hidden"
              disabled={isUploading}
            />
            <div className="w-full p-2 border border-dashed border-[#FFC900]/20 rounded flex items-center justify-center">
              <Button 
                variant="outline" 
                onClick={() => document.getElementById('file-upload')?.click()}
                disabled={isUploading}
                className="border-[#FFC900]/50 text-[#FFC900] hover:bg-[#FFC900]/10"
              >
                {isUploading ? 'Uploading...' : 'Choose File'}
              </Button>
            </div>
          </div>

          <Textarea 
            placeholder="Paste technical specifications or datasheet information here for analysis..."
            value={specsText}
            onChange={(e) => setSpecsText(e.target.value)}
            className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900] placeholder-[#FFC900]/50 min-h-[120px]"
          />
          
          <Button 
            onClick={handleSpecsAnalysis} 
            disabled={isLoading || isUploading}
            className="w-full bg-[#FFC900] text-black hover:bg-[#FFF200]"
          >
            {isLoading ? 'Analyzing...' : 'Analyze Specifications'}
          </Button>
          
          {analysis && (
            <div className="mt-4 p-3 bg-[#2C2F24] rounded">
              <h4 className="font-semibold mb-2 text-[#FFC900]">Analysis:</h4>
              <div className="text-[#FFC900]/80 whitespace-pre-wrap">{analysis}</div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TechnicalSpecsAnalyzer;
