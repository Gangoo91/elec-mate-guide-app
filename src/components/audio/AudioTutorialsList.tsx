
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AudioTutorialCard from './AudioTutorialCard';
import { useAudioTutorials } from '@/hooks/useAudioTutorials';
import LoadingSpinner from '@/components/LoadingSpinner';

const AudioTutorialsList = () => {
  const { tutorials, categories, isLoading } = useAudioTutorials();

  if (isLoading) {
    return <div className="flex justify-center py-8"><LoadingSpinner /></div>;
  }

  return (
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tutorials
              .filter(tutorial => tutorial.category === category)
              .map((tutorial) => (
                <AudioTutorialCard key={tutorial.id} tutorial={tutorial} />
              ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default AudioTutorialsList;
