
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import ClientSignatureCanvas from './ClientSignatureCanvas';

interface SignatureDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onSignatureComplete: (signature: string) => void;
  signerType: "client" | "electrician";
  clientName: string;
  clientEmail: string;
  onClientNameChange: (name: string) => void;
  onClientEmailChange: (email: string) => void;
  userName?: string;
}

export const SignatureDialog = ({
  isOpen,
  onOpenChange,
  onSignatureComplete,
  signerType,
  clientName,
  clientEmail,
  onClientNameChange,
  onClientEmailChange,
  userName
}: SignatureDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#1a1c15] border-[#FFC900]/20 max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-[#FFC900]">
            {signerType === "electrician" ? "Sign and Send Document" : "Client Signature"}
          </DialogTitle>
          <DialogDescription className="text-[#FFC900]/70">
            {signerType === "electrician" 
              ? "Sign this document and send it to your client for their signature." 
              : "Please sign this document to confirm your agreement."}
          </DialogDescription>
        </DialogHeader>
        
        {signerType === "electrician" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-[#FFC900]/80 text-sm mb-1">Client Name</label>
              <input 
                type="text" 
                value={clientName}
                onChange={(e) => onClientNameChange(e.target.value)}
                className="w-full p-2 bg-[#2C2F24] border border-[#FFC900]/20 rounded text-white"
                placeholder="Enter client name"
              />
            </div>
            <div>
              <label className="block text-[#FFC900]/80 text-sm mb-1">Client Email</label>
              <input 
                type="email" 
                value={clientEmail}
                onChange={(e) => onClientEmailChange(e.target.value)}
                className="w-full p-2 bg-[#2C2F24] border border-[#FFC900]/20 rounded text-white"
                placeholder="Enter client email"
              />
            </div>
          </div>
        )}
        
        <ClientSignatureCanvas
          onSave={onSignatureComplete}
          clientName={signerType === "electrician" ? userName || "Electrician" : clientName}
          signer={signerType}
          email={clientEmail}
        />
      </DialogContent>
    </Dialog>
  );
};
