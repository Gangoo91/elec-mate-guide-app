
import React, { useState } from 'react';
import { componentCategories } from "@/data/components/categories";
import ComponentSelector from "./ar-learning/ComponentSelector";
import ComponentViewer from "./ar-learning/ComponentViewer";
import ComponentDetails from "./ar-learning/ComponentDetails";
import ImageUploader from "./ar-learning/ImageUploader";
import { ComponentInfo } from "@/types/arLearning";

const ARLearningView = () => {
  const [activeTab, setActiveTab] = useState('rcbo');
  const [openCategories, setOpenCategories] = useState<string[]>(['protection-devices']);

  function getActiveComponent(): ComponentInfo {
    return componentCategories
      .flatMap(category => category.items)
      .find(comp => comp.id === activeTab) || componentCategories[0].items[0];
  }

  const toggleCategory = (categoryId: string) => {
    setOpenCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(c => c !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleIdentifiedComponent = (componentId: string) => {
    setActiveTab(componentId);
    // Open the category containing this component
    const category = componentCategories.find(cat => 
      cat.items.some(item => item.id === componentId)
    );
    if (category && !openCategories.includes(category.id)) {
      setOpenCategories(prev => [...prev, category.id]);
    }
  };

  const activeComponent = getActiveComponent();

  return (
    <div className="space-y-6">
      <ImageUploader onIdentifyComponent={handleIdentifiedComponent} />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <ComponentSelector
          categories={componentCategories}
          activeTab={activeTab}
          openCategories={openCategories}
          onSelectComponent={setActiveTab}
          onToggleCategory={toggleCategory}
        />
        <ComponentViewer activeComponent={activeComponent} />
      </div>

      <ComponentDetails component={activeComponent} />
    </div>
  );
};

export default ARLearningView;
