
import React from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface EstimateFormProps {
  jobDescription: string;
  clientName: string;
  jobReference: string;
  onJobDescriptionChange: (value: string) => void;
  onClientNameChange: (value: string) => void;
  onJobReferenceChange: (value: string) => void;
}

export const EstimateForm: React.FC<EstimateFormProps> = ({
  jobDescription,
  clientName,
  jobReference,
  onJobDescriptionChange,
  onClientNameChange,
  onJobReferenceChange,
}) => {
  const placeholderText = `Please provide detailed information about the job:

• Type of work (e.g., rewire, consumer unit replacement, fault finding)
• Property details (size, age, access considerations)
• Location (helps account for regional price differences)
• Specific requirements (brands, specifications)
• Time constraints or scheduling preferences
• Current state of existing installations
• Any known complications or challenges

Example: "Full rewire needed for a 3-bed semi-detached house in Manchester. Property is 1960s with mostly surface mounted wiring. Occupied property, requires minimal disruption. Need premium consumer unit with surge protection. Garden office needs new circuit. Preferred start date in 2 months."`;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          placeholder="Client Name (optional)"
          value={clientName}
          onChange={(e) => onClientNameChange(e.target.value)}
          className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900] placeholder-[#FFC900]/40"
        />
        <Input
          placeholder="Job Reference (optional)"
          value={jobReference}
          onChange={(e) => onJobReferenceChange(e.target.value)}
          className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900] placeholder-[#FFC900]/40"
        />
      </div>

      <div className="relative">
        <Textarea 
          placeholder={placeholderText}
          value={jobDescription}
          onChange={(e) => onJobDescriptionChange(e.target.value)}
          className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900] placeholder-[#FFC900]/40 min-h-[280px] text-base leading-relaxed"
        />
      </div>
    </>
  );
};
