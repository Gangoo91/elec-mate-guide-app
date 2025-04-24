
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { CheckCircle, CircleX } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChecklistItem {
  category: string;
  checks: string[];
}

interface SafetyChecklistProps {
  items: ChecklistItem[];
}

export const SafetyChecklist = ({ items }: SafetyChecklistProps) => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  
  const handleToggleItem = (category: string, item: string) => {
    const key = `${category}-${item}`;
    setCheckedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  
  return (
    <div className="space-y-6">
      {items.map((section, index) => (
        <Card key={index} className="bg-[#2a2d24] p-4">
          <h4 className="text-[#FFC900] font-medium mb-3">{section.category}</h4>
          <div className="space-y-2">
            {section.checks.map((item, itemIndex) => (
              <div 
                key={itemIndex}
                className="flex items-center justify-between p-2 border-b border-[#FFC900]/20 last:border-0"
              >
                <span className="text-[#FFC900]/80">{item}</span>
                <div className="flex gap-2">
                  <Button 
                    variant="outline"
                    size="sm"
                    className={`border-[#FFC900]/20 ${
                      checkedItems[`${section.category}-${item}`] 
                        ? 'bg-[#FFC900]/10' 
                        : 'hover:bg-[#FFC900]/10'
                    }`}
                    onClick={() => handleToggleItem(section.category, item)}
                  >
                    {checkedItems[`${section.category}-${item}`] ? (
                      <CheckCircle className="h-4 w-4 text-[#FFC900]" />
                    ) : (
                      <CircleX className="h-4 w-4 text-[#FFC900]/50" />
                    )}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
};
