
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Eye, Printer, FileCheck, Signature } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner";

interface DocumentTemplate {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  comingSoon?: boolean;
}

interface DocumentCardProps {
  template: DocumentTemplate;
  onPrint: () => void;
  onSignature: (templateId: string) => void;
  onPreview: (templateId: string) => void;
}

export const DocumentCard = ({ template, onPrint, onSignature, onPreview }: DocumentCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className="overflow-hidden border-[#FFC900]/20 bg-[#2C2F24] hover:bg-[#363A2B] transition-colors">
      <div className="p-4">
        <AspectRatio ratio={16/9} className="bg-[#1a1c15] rounded-lg overflow-hidden mb-3">
          <div className="w-full h-full flex items-center justify-center">
            <FileText className="h-16 w-16 text-[#FFC900]/30" />
          </div>
        </AspectRatio>
        
        <h3 className="font-medium text-[#FFC900] text-lg mb-2">{template.name}</h3>
        <p className="text-[#FFC900]/70 text-sm mb-4">{template.description}</p>
        
        {template.comingSoon ? (
          <Button 
            variant="outline" 
            size="sm"
            disabled
            className="w-full bg-transparent border-[#FFC900]/30 text-[#FFC900]/30"
          >
            Coming Soon
          </Button>
        ) : (
          <div className="grid grid-cols-5 gap-2">
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => navigate('/electricians/technical-tools/estimator')}
              className="bg-transparent border-[#FFC900] text-[#FFC900] hover:bg-[#FFC900] hover:text-black"
              title="Edit Document"
            >
              <Eye className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => onPreview(template.id)}
              className="bg-transparent border-[#FFC900] text-[#FFC900] hover:bg-[#FFC900] hover:text-black"
              title="Preview Document"
            >
              <FileText className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              onClick={onPrint}
              className="bg-transparent border-[#FFC900] text-[#FFC900] hover:bg-[#FFC900] hover:text-black"
              title="Print Document"
            >
              <Printer className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => onSignature(template.id)}
              className="bg-transparent border-[#FFC900] text-[#FFC900] hover:bg-[#FFC900] hover:text-black"
              title="Sign and Send to Client"
            >
              <Signature className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => toast.info("Document history feature coming soon")}
              className="bg-transparent border-[#FFC900] text-[#FFC900] hover:bg-[#FFC900] hover:text-black"
              title="View Document History"
            >
              <FileCheck className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};
