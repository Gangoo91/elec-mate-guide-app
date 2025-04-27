import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AudioTutorialCard from './AudioTutorialCard';
import { useAudioTutorials } from '@/hooks/useAudioTutorials';
import LoadingSpinner from '@/components/LoadingSpinner';

const AudioTutorialsList = () => {
  const { tutorials, categories, isLoading } = useAudioTutorials();

  // Replace test audio with real course content
  const tutorialsWithRealContent = tutorials.map(tutorial => ({
    ...tutorial,
    audioUrl: tutorial.audioUrl || 'https://download.samplelib.com/mp3/sample-15s.mp3', // Temporary sample until real content is added
    title: tutorial.title || 'Introduction to Circuit Theory',
    description: tutorial.description || 'Learn the fundamental concepts of electrical circuits, including voltage, current, and resistance.',
    duration: tutorial.duration || '15:00',
    category: tutorial.category || 'electrical_theory'
  }));

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
            {tutorialsWithRealContent
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
