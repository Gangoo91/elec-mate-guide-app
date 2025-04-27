
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircuitBoard, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ComponentCategory } from "@/types/arLearning";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface ComponentSelectorProps {
  categories: ComponentCategory[];
  activeTab: string;
  openCategories: string[];
  onSelectComponent: (id: string) => void;
  onToggleCategory: (categoryId: string) => void;
}

const ComponentSelector = ({
  categories,
  activeTab,
  openCategories,
  onSelectComponent,
  onToggleCategory
}: ComponentSelectorProps) => {
  return (
    <Card className="bg-[#22251e] border-[#FFC900]/20">
      <CardHeader>
        <CardTitle className="text-[#FFC900] flex items-center gap-2">
          <CircuitBoard className="h-5 w-5" />
          Components
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {categories.map((category) => (
          <Collapsible
            key={category.id}
            open={openCategories.includes(category.id)}
            onOpenChange={() => onToggleCategory(category.id)}
            className="space-y-2"
          >
            <CollapsibleTrigger className="flex w-full items-center justify-between p-2 text-[#FFC900] hover:bg-[#FFC900]/10 rounded-md">
              <span>{category.name}</span>
              <ChevronDown className={`h-4 w-4 transform transition-transform ${
                openCategories.includes(category.id) ? 'rotate-180' : ''
              }`} />
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-2 pl-4">
              {category.items.map(component => (
                <Button
                  key={component.id}
                  variant="ghost"
                  className={`w-full justify-start ${
                    activeTab === component.id
                      ? 'bg-[#FFC900] text-[#22251e]'
                      : 'text-[#FFC900] hover:bg-[#FFC900]/10'
                  }`}
                  onClick={() => onSelectComponent(component.id)}
                >
                  {component.name}
                </Button>
              ))}
            </CollapsibleContent>
          </Collapsible>
        ))}
      </CardContent>
    </Card>
  );
};

export default ComponentSelector;
