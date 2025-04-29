
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import AudioTutorialCard from './AudioTutorialCard';
import { useAudioTutorials } from '@/hooks/useAudioTutorials';
import LoadingSpinner from '@/components/LoadingSpinner';
import { AudioTutorial } from '@/types/audio';

const AudioTutorialsList = () => {
  const { tutorials, categories, isLoading } = useAudioTutorials();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTutorials = tutorials.filter(tutorial => 
    tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tutorial.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (tutorial.unitNumber && tutorial.unitNumber.includes(searchQuery))
  );

  const getFilteredTutorialsByCategory = (category: string) => {
    return filteredTutorials.filter(tutorial => tutorial.category === category);
  };

  if (isLoading) {
    return <div className="flex justify-center py-8"><LoadingSpinner /></div>;
  }

  return (
    <div className="space-y-6">
      <div className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#FFC900]/50 h-4 w-4" />
          <Input
            type="search"
            placeholder="Search tutorials by title, description or unit..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-[#22251e] border-[#FFC900]/20 text-[#FFC900] placeholder-[#FFC900]/50"
          />
        </div>
      </div>

      <Tabs defaultValue="electrical_theory" className="w-full">
        <ScrollArea className="w-full whitespace-nowrap">
          <TabsList className="inline-flex w-full justify-start border-b pb-2">
            {categories.map((category) => (
              <TabsTrigger 
                key={category} 
                value={category}
                className="text-[#FFC900]/70 data-[state=active]:text-[#FFC900]"
              >
                {category.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </TabsTrigger>
            ))}
          </TabsList>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        {categories.map((category) => (
          <TabsContent key={category} value={category} className="mt-4">
            {getFilteredTutorialsByCategory(category).length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {getFilteredTutorialsByCategory(category).map((tutorial) => (
                  <AudioTutorialCard key={tutorial.id} tutorial={tutorial} />
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <p className="text-[#FFC900]/70">
                  {searchQuery ? 
                    "No tutorials matching your search criteria in this category." : 
                    "No tutorials available in this category yet."}
                </p>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default AudioTutorialsList;
