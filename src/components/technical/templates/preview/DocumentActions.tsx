
import React from 'react';
import { Download, Printer, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface DocumentActionsProps {
  handleDownload: () => void;
  handlePrint: () => void;
  onOpenChange: (open: boolean) => void;
  isMobile: boolean;
  documentTypeLabel: string;
}

export const DocumentActions: React.FC<DocumentActionsProps> = ({
  handleDownload,
  handlePrint,
  onOpenChange,
  isMobile,
  documentTypeLabel
}) => {
  return (
    <div className="flex justify-between items-center mb-4 print:hidden">
      <h2 className="text-lg font-semibold">{documentTypeLabel} Preview</h2>
      <div className="flex space-x-2">
        <Button 
          onClick={handleDownload} 
          variant="outline" 
          size="sm"
          className="bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
        >
          <Download className="w-4 h-4 mr-2" />
          {!isMobile && "Download"}
        </Button>
        <Button 
          onClick={handlePrint} 
          variant="outline" 
          size="sm"
          className="bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
        >
          <Printer className="w-4 h-4 mr-2" />
          {!isMobile && "Print"}
        </Button>
        {isMobile && (
          <Button
            onClick={() => onOpenChange(false)}
            variant="outline"
            size="sm"
            className="bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
};
