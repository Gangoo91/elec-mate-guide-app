
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, ImageOff } from "lucide-react";
import { toast } from "sonner";
import LoadingSpinner from "@/components/LoadingSpinner";
import { Camera as CapacitorCamera, CameraResultType, CameraSource } from '@capacitor/camera';

interface ImageUploaderProps {
  onIdentifyComponent: (componentId: string) => void;
}

const ImageUploader = ({ onIdentifyComponent }: ImageUploaderProps) => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleImageCapture = async () => {
    try {
      // Request camera permissions
      const permissionStatus = await CapacitorCamera.checkPermissions();
      if (permissionStatus.camera !== 'granted') {
        const requested = await CapacitorCamera.requestPermissions();
        if (requested.camera !== 'granted') {
          toast.error('Camera permission is required');
          return;
        }
      }

      // Take the picture
      const image = await CapacitorCamera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Base64,
        source: CameraSource.Camera
      });

      if (!image.base64String) {
        throw new Error('No image captured');
      }

      // Create preview URL
      setPreviewUrl(`data:image/jpeg;base64,${image.base64String}`);
      setIsAnalyzing(true);

      // Create form data
      const formData = new FormData();
      const blob = await fetch(`data:image/jpeg;base64,${image.base64String}`).then(r => r.blob());
      formData.append('image', blob, 'capture.jpg');

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
      console.error('Error capturing/analyzing image:', error);
      toast.error('Failed to capture or analyze image');
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
              onClick={handleImageCapture}
              disabled={isAnalyzing}
            >
              {isAnalyzing ? (
                <LoadingSpinner size="sm" />
              ) : (
                <>Capture Image</>
              )}
            </Button>
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

