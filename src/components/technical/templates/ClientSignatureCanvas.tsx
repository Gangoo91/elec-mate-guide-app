
import React, { useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pen, FileCheck, Send, Signature } from "lucide-react";
import { toast } from "sonner";

interface ClientSignatureCanvasProps {
  onSave: (signatureData: string) => void;
  clientName: string;
  signer?: "client" | "electrician";
  email?: string;
}

const ClientSignatureCanvas: React.FC<ClientSignatureCanvasProps> = ({ 
  onSave, 
  clientName, 
  signer = "client",
  email
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const [emailTo, setEmailTo] = useState(email || "");

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
      toast.success(`${signer === "client" ? "Client" : "Electrician"} signature saved successfully`);
    }
  };

  const sendToClient = () => {
    if (emailTo && emailTo.includes('@')) {
      if (canvasRef.current) {
        const signatureData = canvasRef.current.toDataURL();
        onSave(signatureData);
        // In production, this would connect to a backend service to send emails
        toast.success(`Document sent to ${emailTo} for signature`);
      }
    } else {
      toast.error("Please enter a valid email address");
    }
  };

  return (
    <Card className="max-w-xl mx-auto bg-[#2C2F24] border-[#FFC900]/20">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-2">
          {signer === "client" ? (
            <Signature className="h-5 w-5 text-[#FFC900]" />
          ) : (
            <Pen className="h-5 w-5 text-[#FFC900]" />
          )}
          <CardTitle className="text-[#FFC900] text-lg">
            {signer === "client" ? "Client Signature" : "Electrician Signature"}: {clientName}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {signer === "client" && (
          <div className="flex items-center space-x-3">
            <input
              type="email"
              placeholder="Client's email address"
              value={emailTo}
              onChange={(e) => setEmailTo(e.target.value)}
              className="flex-1 px-3 py-2 bg-[#1a1c15] border border-[#FFC900]/20 rounded text-white"
            />
          </div>
        )}

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
            <FileCheck className="w-4 h-4 mr-2" />
            Sign Document
          </Button>
          {signer === "electrician" && (
            <Button
              onClick={sendToClient}
              className="bg-[#FFC900] text-black hover:bg-[#FFF200]"
            >
              <Send className="w-4 h-4 mr-2" />
              Send to Client
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ClientSignatureCanvas;
