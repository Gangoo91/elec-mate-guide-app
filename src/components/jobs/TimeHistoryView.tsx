
import React, { useState } from "react";
import { format, startOfWeek, endOfWeek, subWeeks, addWeeks } from "date-fns";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TimeHistoryTable } from "./TimeHistoryTable";
import { useTimeEntries } from "@/hooks/useTimeEntries";
import { Calendar } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIsMobile } from "@/hooks/use-mobile";

export function TimeHistoryView() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { entries, isLoading, weekData } = useTimeEntries(selectedDate);
  const isMobile = useIsMobile();
  
  const start = startOfWeek(selectedDate);
  const end = endOfWeek(selectedDate);
  
  const previousWeek = () => {
    setSelectedDate(subWeeks(selectedDate, 1));
  };
  
  const nextWeek = () => {
    setSelectedDate(addWeeks(selectedDate, 1));
  };
  
  const currentWeek = () => {
    setSelectedDate(new Date());
  };

  // Filter entries for the selected week
  const weekEntries = entries.filter(entry => {
    const entryDate = new Date(entry.clock_in);
    return entryDate >= start && entryDate <= end;
  });

  return (
    <Card className="bg-[#22251e] border-[#FFC900]/20">
      <CardContent className="pt-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[#FFC900] font-medium text-lg">Time History</h3>
          <Calendar className="h-5 w-5 text-[#FFC900]" />
        </div>
        
        {isMobile ? (
          // Mobile view
          <div className="space-y-4">
            <div className="text-center text-[#FFC900] font-medium">
              {format(start, "MMM d")} - {format(end, "MMM d, yyyy")}
            </div>
            
            <div className="flex justify-between gap-2">
              <Button 
                variant="outline" 
                className="border-[#FFC900]/50 text-[#FFC900] hover:bg-[#FFC900]/10 text-xs px-2"
                onClick={previousWeek}
                size="sm"
              >
                Prev
              </Button>
              
              <Button 
                variant="outline" 
                className="border-[#FFC900]/50 text-[#FFC900] hover:bg-[#FFC900]/10 text-xs px-2"
                onClick={currentWeek}
                size="sm"
              >
                Today
              </Button>
              
              <Button 
                variant="outline" 
                className="border-[#FFC900]/50 text-[#FFC900] hover:bg-[#FFC900]/10 text-xs px-2"
                onClick={nextWeek}
                size="sm"
              >
                Next
              </Button>
            </div>
          </div>
        ) : (
          // Desktop view
          <div className="flex items-center justify-between mb-4">
            <Button 
              variant="outline" 
              className="border-[#FFC900]/50 text-[#FFC900] hover:bg-[#FFC900]/10"
              onClick={previousWeek}
            >
              Previous Week
            </Button>
            
            <div className="text-[#FFC900] font-medium">
              {format(start, "MMM d")} - {format(end, "MMM d, yyyy")}
            </div>
            
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                className="border-[#FFC900]/50 text-[#FFC900] hover:bg-[#FFC900]/10"
                onClick={currentWeek}
              >
                Current Week
              </Button>
              <Button 
                variant="outline" 
                className="border-[#FFC900]/50 text-[#FFC900] hover:bg-[#FFC900]/10"
                onClick={nextWeek}
              >
                Next Week
              </Button>
            </div>
          </div>
        )}
        
        <Tabs defaultValue="entries" className="w-full mt-4">
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="entries">Entries</TabsTrigger>
            <TabsTrigger value="summary">Weekly Summary</TabsTrigger>
          </TabsList>
          <TabsContent value="entries">
            <TimeHistoryTable entries={weekEntries} loading={isLoading} />
          </TabsContent>
          <TabsContent value="summary">
            <TimeHistoryTable 
              entries={weekEntries} 
              loading={isLoading} 
              weekData={weekData}
              showSummary={true}
            />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
