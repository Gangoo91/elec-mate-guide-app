
import React, { useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pen } from "lucide-react";
import { toast } from "sonner";

interface SignatureCanvasProps {
  onSave: (signatureData: string) => void;
}

const SignatureCanvas: React.FC<SignatureCanvasProps> = ({ onSave }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext('2d');
      if (context) {
        context.strokeStyle = '#FFC900';
        context.lineWidth = 2;
        setCtx(context);
      }
    }
  }, []);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    if (ctx) {
      ctx.beginPath();
      const coords = getCoordinates(e);
      ctx.moveTo(coords.x, coords.y);
    }
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !ctx) return;
    e.preventDefault();
    const coords = getCoordinates(e);
    ctx.lineTo(coords.x, coords.y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    if (ctx) {
      ctx.closePath();
    }
  };

  const getCoordinates = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    if ('touches' in e) {
      return {
        x: (e.touches[0].clientX - rect.left) * scaleX,
        y: (e.touches[0].clientY - rect.top) * scaleY
      };
    }
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY
    };
  };

  const clearSignature = () => {
    if (ctx && canvasRef.current) {
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
  };

  const saveSignature = () => {
    if (canvasRef.current) {
      const signatureData = canvasRef.current.toDataURL();
      onSave(signatureData);
      toast.success("Signature saved successfully");
    }
  };

  return (
    <Card className="max-w-xl mx-auto bg-[#2C2F24] border-[#FFC900]/20">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Pen className="h-5 w-5 text-[#FFC900]" />
          <CardTitle className="text-[#FFC900]">Add Your Signature</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="border-2 border-dashed border-[#FFC900]/20 rounded-lg p-4 mb-4">
          <canvas
            ref={canvasRef}
            width={500}
            height={200}
            className="w-full bg-[#1a1c15] rounded cursor-crosshair touch-none"
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
          />
        </div>
        <div className="flex gap-2 justify-end">
          <Button
            variant="outline"
            onClick={clearSignature}
            className="bg-transparent border-[#FFC900] text-[#FFC900] hover:bg-[#FFC900] hover:text-black"
          >
            Clear
          </Button>
          <Button
            onClick={saveSignature}
            className="bg-[#FFC900] text-black hover:bg-[#FFF200]"
          >
            Save Signature
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SignatureCanvas;
