
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
• Any known complications or challenges`;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="clientName" className="block text-sm font-medium text-[#FFC900] mb-1">Client Name (optional)</label>
          <Input
            id="clientName"
            placeholder="Enter client name"
            value={clientName}
            onChange={(e) => onClientNameChange(e.target.value)}
            className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900] placeholder-[#FFC900]/40 font-medium"
          />
        </div>
        <div>
          <label htmlFor="jobReference" className="block text-sm font-medium text-[#FFC900] mb-1">Job Reference (optional)</label>
          <Input
            id="jobReference"
            placeholder="Enter job reference"
            value={jobReference}
            onChange={(e) => onJobReferenceChange(e.target.value)}
            className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900] placeholder-[#FFC900]/40 font-medium"
          />
        </div>
      </div>

      <div className="relative">
        <label htmlFor="jobDescription" className="block text-sm font-medium text-[#FFC900] mb-1">Job Description</label>
        <Textarea 
          id="jobDescription"
          placeholder={placeholderText}
          value={jobDescription}
          onChange={(e) => onJobDescriptionChange(e.target.value)}
          className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900] placeholder-[#FFC900]/40 min-h-[280px] text-base leading-relaxed font-medium"
        />
      </div>
    </>
  );
};
