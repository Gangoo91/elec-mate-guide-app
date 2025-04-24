
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Eye, Printer, FileCheck, Signature, Send } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ClientSignatureCanvas from './ClientSignatureCanvas';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from "@/integrations/supabase/client";

const EstimateTemplates = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isSignatureModalOpen, setIsSignatureModalOpen] = useState(false);
  const [selectedTemplateId, setSelectedTemplateId] = useState<string | null>(null);
  const [signerType, setSignerType] = useState<"client" | "electrician">("electrician");
  const [clientName, setClientName] = useState<string>("");
  const [clientEmail, setClientEmail] = useState<string>("");
  const [estimateData, setEstimateData] = useState({});
  
  const templates = [
    {
      id: "standard",
      name: "Standard Estimate",
      description: "Professional itemized estimate with materials and labour breakdown",
      thumbnail: "/placeholder.svg"
    },
    {
      id: "detailed",
      name: "Detailed Project Estimate",
      description: "Comprehensive estimate with project phases and timelines",
      thumbnail: "/placeholder.svg"
    }
  ];

  const handlePrint = () => {
    window.print();
    toast.success("Preparing document for printing...");
  };

  const handleSignatureComplete = async (signatureData: string) => {
    try {
      if (!user) {
        toast.error("You must be logged in to save documents");
        setIsSignatureModalOpen(false);
        return;
      }

      if (signerType === "electrician") {
        // Save the electrician's signature and create document
        if (!clientEmail || !clientName) {
          toast.error("Please provide client name and email");
          return;
        }

        const { data, error } = await supabase.from('documents').insert({
          electrician_id: user.id,
          client_name: clientName,
          client_email: clientEmail,
          document_type: 'estimate',
          content: {
            template_id: selectedTemplateId,
            ...estimateData
          },
          electrician_signature: signatureData,
          status: 'sent'
        }).select();

        if (error) {
          console.error("Error saving document:", error);
          toast.error("Failed to save document");
        } else {
          toast.success("Document signed and sent to client for signature");
          // In a real app, send an email to the client with a link to sign
        }
      } else {
        // Update with client signature
        if (!selectedTemplateId) {
          toast.error("Document reference missing");
          return;
        }

        const { error } = await supabase
          .from('documents')
          .update({
            client_signature: signatureData,
            status: 'signed'
          })
          .eq('id', selectedTemplateId);

        if (error) {
          console.error("Error updating document:", error);
          toast.error("Failed to update document with client signature");
        } else {
          toast.success("Document signed successfully");
        }
      }

      setIsSignatureModalOpen(false);
    } catch (err) {
      console.error("Error in signature process:", err);
      toast.error("An error occurred during the signature process");
    }
  };

  const openElectricianSignatureModal = (templateId: string) => {
    setSelectedTemplateId(templateId);
    setSignerType("electrician");
    setIsSignatureModalOpen(true);
  };
  
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {templates.map((template) => (
          <Card key={template.id} className="overflow-hidden border-[#FFC900]/20 bg-[#2C2F24] hover:bg-[#363A2B] transition-colors">
            <div className="p-4">
              <AspectRatio ratio={16/9} className="bg-[#1a1c15] rounded-lg overflow-hidden mb-3">
                <div className="w-full h-full flex items-center justify-center">
                  <FileText className="h-16 w-16 text-[#FFC900]/30" />
                </div>
              </AspectRatio>
              
              <h3 className="font-medium text-[#FFC900] text-lg mb-2">{template.name}</h3>
              <p className="text-[#FFC900]/70 text-sm mb-4">{template.description}</p>
              
              <div className="grid grid-cols-4 gap-2">
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => navigate('/electricians/technical-tools/estimator')}
                  className="bg-transparent border-[#FFC900] text-[#FFC900] hover:bg-[#FFC900] hover:text-black"
                  title="Edit Estimate"
                >
                  <Eye className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={handlePrint}
                  className="bg-transparent border-[#FFC900] text-[#FFC900] hover:bg-[#FFC900] hover:text-black"
                  title="Print Estimate"
                >
                  <Printer className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => openElectricianSignatureModal(template.id)}
                  className="bg-transparent border-[#FFC900] text-[#FFC900] hover:bg-[#FFC900] hover:text-black"
                  title="Sign and Send to Client"
                >
                  <Signature className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => {
                    // This would navigate to a view showing sent/signed documents
                    toast.info("Document history feature coming soon");
                  }}
                  className="bg-transparent border-[#FFC900] text-[#FFC900] hover:bg-[#FFC900] hover:text-black"
                  title="View Document History"
                >
                  <FileCheck className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Dialog open={isSignatureModalOpen} onOpenChange={setIsSignatureModalOpen}>
        <DialogContent className="bg-[#1a1c15] border-[#FFC900]/20 max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-[#FFC900]">
              {signerType === "electrician" ? "Sign and Send Estimate" : "Client Signature"}
            </DialogTitle>
          </DialogHeader>
          
          {signerType === "electrician" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-[#FFC900]/80 text-sm mb-1">Client Name</label>
                <input 
                  type="text" 
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full p-2 bg-[#2C2F24] border border-[#FFC900]/20 rounded text-white"
                  placeholder="Enter client name"
                />
              </div>
              <div>
                <label className="block text-[#FFC900]/80 text-sm mb-1">Client Email</label>
                <input 
                  type="email" 
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  className="w-full p-2 bg-[#2C2F24] border border-[#FFC900]/20 rounded text-white"
                  placeholder="Enter client email"
                />
              </div>
            </div>
          )}
          
          <ClientSignatureCanvas
            onSave={handleSignatureComplete}
            clientName={signerType === "electrician" ? user?.email || "Electrician" : clientName}
            signer={signerType}
            email={clientEmail}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EstimateTemplates;
