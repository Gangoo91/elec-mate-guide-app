
import React, { useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { FileCheck, FileSearch } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const RegulationsFinderChecker: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleQuery = async (mode: 'find' | 'check') => {
    if (!query.trim()) {
      toast.error("Please enter a query about electrical regulations");
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('regulations-assistant', {
        body: JSON.stringify({ 
          query,
          mode // Pass the mode to the backend
        })
      });

      if (error) throw error;

      setResponse(data.response);
      toast.success(mode === 'find' ? "Regulations found" : "Regulations checked");
    } catch (err) {
      console.error(err);
      toast.error("Failed to process your request");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="bg-[#22251e] border-[#FFC900]/20">
      <CardHeader>
        <CardTitle className="text-[#FFC900] flex items-center gap-2">
          <FileCheck className="h-6 w-6" />
          Regulations Finder & Checker
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="find" className="w-full">
          <TabsList className="bg-[#151812] border border-[#FFC900]/10 mb-4 grid w-full grid-cols-2">
            <TabsTrigger value="find" className="data-[state=active]:bg-[#FFC900] data-[state=active]:text-[#151812]">
              <FileSearch className="h-4 w-4 mr-2" />
              Find Regulations
            </TabsTrigger>
            <TabsTrigger value="check" className="data-[state=active]:bg-[#FFC900] data-[state=active]:text-[#151812]">
              <FileCheck className="h-4 w-4 mr-2" />
              Check Compliance
            </TabsTrigger>
          </TabsList>

          <TabsContent value="find" className="space-y-4">
            <Textarea 
              placeholder="Search for specific UK electrical regulations..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900] placeholder-[#FFC900]/50"
            />
            <Button 
              onClick={() => handleQuery('find')} 
              disabled={isLoading}
              className="w-full bg-[#FFC900] text-black hover:bg-[#FFF200]"
            >
              <FileSearch className="h-4 w-4 mr-2" />
              {isLoading ? 'Searching...' : 'Find Regulations'}
            </Button>
          </TabsContent>

          <TabsContent value="check" className="space-y-4">
            <Textarea 
              placeholder="Describe your installation to check compliance..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900] placeholder-[#FFC900]/50"
            />
            <Button 
              onClick={() => handleQuery('check')} 
              disabled={isLoading}
              className="w-full bg-[#FFC900] text-black hover:bg-[#FFF200]"
            >
              <FileCheck className="h-4 w-4 mr-2" />
              {isLoading ? 'Checking...' : 'Check Compliance'}
            </Button>
          </TabsContent>

          {response && (
            <div className="mt-4 p-3 bg-[#2C2F24] rounded text-[#FFC900]/80">
              <h4 className="font-semibold mb-2">Results:</h4>
              <p className="whitespace-pre-wrap">{response}</p>
            </div>
          )}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default RegulationsFinderChecker;
