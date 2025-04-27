
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, ImageOff } from "lucide-react";
import { toast } from "sonner";
import LoadingSpinner from "@/components/LoadingSpinner";

interface ImageUploaderProps {
  onIdentifyComponent: (componentId: string) => void;
}

const ImageUploader = ({ onIdentifyComponent }: ImageUploaderProps) => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      // Create preview
      setPreviewUrl(URL.createObjectURL(file));
      setIsAnalyzing(true);

      // Create form data
      const formData = new FormData();
      formData.append('image', file);

      // Call the Supabase Edge Function
      const response = await fetch('/functions/v1/identify-component', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Failed to analyze image');

      const data = await response.json();
      
      if (data.componentId) {
        onIdentifyComponent(data.componentId);
        toast.success('Component identified successfully!');
      } else {
        toast.error('Could not identify component');
      }
    } catch (error) {
      console.error('Error analyzing image:', error);
      toast.error('Failed to analyze image');
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <Card className="bg-[#22251e] border-[#FFC900]/20">
      <CardHeader>
        <CardTitle className="text-[#FFC900] flex items-center gap-2">
          <Camera className="h-5 w-5" />
          Identify Component
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-center">
            <Button
              className="bg-[#FFC900] hover:bg-[#FFC900]/80 text-[#22251e]"
              onClick={() => document.getElementById('image-upload')?.click()}
              disabled={isAnalyzing}
            >
              {isAnalyzing ? (
                <LoadingSpinner size="sm" />
              ) : (
                <>Upload Image</>
              )}
            </Button>
            <input
              type="file"
              id="image-upload"
              className="hidden"
              accept="image/*"
              onChange={handleImageUpload}
              disabled={isAnalyzing}
            />
          </div>

          {previewUrl && (
            <div className="relative w-full h-48 border border-[#FFC900]/20 rounded-md overflow-hidden">
              <img
                src={previewUrl}
                alt="Preview"
                className="w-full h-full object-contain"
              />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ImageUploader;
