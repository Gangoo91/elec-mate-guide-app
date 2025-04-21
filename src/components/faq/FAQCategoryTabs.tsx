
import React from 'react';

interface FAQCategoryTabsProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const FAQCategoryTabs = ({ categories, activeCategory, onCategoryChange }: FAQCategoryTabsProps) => {
  return (
    <div className="max-w-4xl mx-auto mt-6 mb-2 overflow-x-auto">
      <div className="flex space-x-2 pb-2 min-w-max">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeCategory === category
                ? 'bg-[#FFC900] text-[#151812] font-medium'
                : 'bg-[#22251e] text-[#FFC900]/70 hover:bg-[#22251e]/80 hover:text-[#FFC900]'
            }`}
          >
            {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FAQCategoryTabs;
