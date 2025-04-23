
import React, { useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { CircuitBoard } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useErrorHandler } from "@/hooks/useErrorHandler";

const WiringDiagramGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [diagramType, setDiagramType] = useState('domestic');
  const [response, setResponse] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { handleError } = useErrorHandler();

  const handlePromptChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setPrompt(newValue);
    
    // Clear response and image when input is cleared
    if (!newValue.trim()) {
      setResponse('');
      setImageUrl('');
    }
  };

  const handleDiagramTypeChange = (value: string) => {
    setDiagramType(value);
    
    // Clear response and image when type is changed
    setResponse('');
    setImageUrl('');
  };

  const handleGenerateDiagram = async () => {
    if (!prompt.trim()) {
      toast.error("Please describe the wiring setup you need diagrammed");
      return;
    }

    setIsLoading(true);
    setResponse('');
    setImageUrl('');
    
    try {
      console.log("Sending request to wiring-diagram-generator with prompt:", prompt);
      const { data, error } = await supabase.functions.invoke('wiring-diagram-generator', {
        body: JSON.stringify({ 
          prompt, 
          diagramType 
        })
      });

      if (error) {
        console.error("Supabase function error:", error);
        throw error;
      }

      if (!data || (!data.response && !data.imageUrl)) {
        console.error("Invalid response format:", data);
        throw new Error("Invalid response received from diagram generator");
      }

      setResponse(data.response);
      setImageUrl(data.imageUrl || '');
      toast.success("Wiring diagram generated successfully");
    } catch (err) {
      console.error("Error in WiringDiagramGenerator:", err);
      handleError(err, "Failed to generate wiring diagram");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="bg-[#22251e] border-[#FFC900]/20">
      <CardHeader className="flex flex-row items-center gap-2">
        <CircuitBoard className="h-6 w-6 text-[#FFC900]" />
        <CardTitle className="text-[#FFC900]">Wiring Diagram Generator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="diagram-type" className="text-[#FFC900]">Diagram Type</Label>
            <Select 
              value={diagramType} 
              onValueChange={handleDiagramTypeChange}
            >
              <SelectTrigger id="diagram-type" className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]">
                <SelectValue placeholder="Select diagram type" />
              </SelectTrigger>
              <SelectContent className="bg-[#22251e] border-[#FFC900]/20">
                <SelectItem value="domestic" className="text-[#FFC900] focus:bg-[#FFC900]/10 focus:text-[#FFC900]">Domestic Wiring</SelectItem>
                <SelectItem value="commercial" className="text-[#FFC900] focus:bg-[#FFC900]/10 focus:text-[#FFC900]">Commercial Wiring</SelectItem>
                <SelectItem value="industrial" className="text-[#FFC900] focus:bg-[#FFC900]/10 focus:text-[#FFC900]">Industrial Wiring</SelectItem>
                <SelectItem value="circuit" className="text-[#FFC900] focus:bg-[#FFC900]/10 focus:text-[#FFC900]">Circuit Diagram</SelectItem>
                <SelectItem value="panel" className="text-[#FFC900] focus:bg-[#FFC900]/10 focus:text-[#FFC900]">Panel Layout</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Textarea 
            placeholder="Describe the wiring setup you need diagrammed (e.g., 'Two-way lighting circuit with power at switch', 'Consumer unit layout for 3-bedroom house')..."
            value={prompt}
            onChange={handlePromptChange}
            className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900] placeholder-[#FFC900]/50 min-h-[120px]"
          />
          <Button 
            onClick={handleGenerateDiagram} 
            disabled={isLoading}
            className="w-full bg-[#FFC900] text-black hover:bg-[#FFF200]"
          >
            {isLoading ? 'Generating Diagram...' : 'Generate Wiring Diagram'}
          </Button>
          
          {imageUrl && (
            <div className="mt-4 p-3 bg-[#2C2F24] rounded">
              <h4 className="font-semibold mb-2 text-[#FFC900]">Generated Diagram:</h4>
              <img 
                src={imageUrl} 
                alt="Generated wiring diagram" 
                className="w-full max-h-[400px] object-contain border border-[#FFC900]/20 rounded"
              />
            </div>
          )}

          {response && (
            <div className="mt-4 p-3 bg-[#2C2F24] rounded">
              <h4 className="font-semibold mb-2 text-[#FFC900]">Explanation:</h4>
              <p className="text-[#FFC900]/80 whitespace-pre-wrap">{response}</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default WiringDiagramGenerator;
