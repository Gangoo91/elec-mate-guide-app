
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { PhoneCall, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CrisisResourcesPage = () => {
  return (
    <MainLayout>
      <div className="container py-8">
        <PageHeader
          title="Crisis Support Resources"
          description="Immediate support for mental health emergencies"
        />
        
        <Card className="border-[#FFC900]/20 bg-[#22251e] mb-8">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <PhoneCall className="h-6 w-6 text-[#FFC900]" />
              <h3 className="text-xl font-semibold text-[#FFC900]">24/7 Crisis Hotlines</h3>
            </div>
            
            <p className="text-[#FFC900]/90 mb-6">
              If you're experiencing a mental health crisis or need immediate support, 
              don't hesitate to call one of these hotlines. Trained professionals are available 
              to help you through difficult moments.
            </p>
            
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-[#FFC900]/20">
                    <TableHead className="text-[#FFC900] font-medium">Organisation</TableHead>
                    <TableHead className="text-[#FFC900] font-medium">Contact</TableHead>
                    <TableHead className="text-[#FFC900] font-medium">Hours</TableHead>
                    <TableHead className="text-[#FFC900] font-medium">Support Type</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-[#FFC900]/10 hover:bg-[#FFC900]/5">
                    <TableCell className="text-[#FFC900]/90 font-medium">Samaritans</TableCell>
                    <TableCell className="text-[#FFC900]/90">116 123</TableCell>
                    <TableCell className="text-[#FFC900]/90">24/7</TableCell>
                    <TableCell className="text-[#FFC900]/90">Emotional support for anyone in distress</TableCell>
                  </TableRow>
                  <TableRow className="border-[#FFC900]/10 hover:bg-[#FFC900]/5">
                    <TableCell className="text-[#FFC900]/90 font-medium">Mind</TableCell>
                    <TableCell className="text-[#FFC900]/90">0300 123 3393</TableCell>
                    <TableCell className="text-[#FFC900]/90">Mon-Fri, 9am-6pm</TableCell>
                    <TableCell className="text-[#FFC900]/90">Mental health information and advice</TableCell>
                  </TableRow>
                  <TableRow className="border-[#FFC900]/10 hover:bg-[#FFC900]/5">
                    <TableCell className="text-[#FFC900]/90 font-medium">CALM</TableCell>
                    <TableCell className="text-[#FFC900]/90">0800 58 58 58</TableCell>
                    <TableCell className="text-[#FFC900]/90">5pm-midnight</TableCell>
                    <TableCell className="text-[#FFC900]/90">Crisis support for men</TableCell>
                  </TableRow>
                  <TableRow className="border-[#FFC900]/10 hover:bg-[#FFC900]/5">
                    <TableCell className="text-[#FFC900]/90 font-medium">Shout</TableCell>
                    <TableCell className="text-[#FFC900]/90">Text SHOUT to 85258</TableCell>
                    <TableCell className="text-[#FFC900]/90">24/7</TableCell>
                    <TableCell className="text-[#FFC900]/90">Crisis text service</TableCell>
                  </TableRow>
                  <TableRow className="border-[#FFC900]/10 hover:bg-[#FFC900]/5">
                    <TableCell className="text-[#FFC900]/90 font-medium">Electrical Workers Support</TableCell>
                    <TableCell className="text-[#FFC900]/90">0800 917 8574</TableCell>
                    <TableCell className="text-[#FFC900]/90">24/7</TableCell>
                    <TableCell className="text-[#FFC900]/90">Industry-specific mental health support</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-medium text-[#FFC900] mb-4">How to get the most from crisis support</h4>
              <ul className="space-y-2 text-[#FFC900]/90">
                <li className="flex items-start gap-2">
                  <Badge className="mt-1 bg-[#FFC900]/20 text-[#FFC900]">1</Badge>
                  <span>Find a quiet place where you can speak freely</span>
                </li>
                <li className="flex items-start gap-2">
                  <Badge className="mt-1 bg-[#FFC900]/20 text-[#FFC900]">2</Badge>
                  <span>Be honest about how you're feeling - there's no judgment</span>
                </li>
                <li className="flex items-start gap-2">
                  <Badge className="mt-1 bg-[#FFC900]/20 text-[#FFC900]">3</Badge>
                  <span>Let the support worker guide the conversation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Badge className="mt-1 bg-[#FFC900]/20 text-[#FFC900]">4</Badge>
                  <span>Take notes of any advice or resources recommended</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-8 p-4 border border-[#FFC900]/20 rounded-md bg-[#FFC900]/5">
              <p className="text-[#FFC900] font-medium">
                In an immediate emergency where your life or someone else's life is at risk, 
                always call 999 first.
              </p>
            </div>
            
            <div className="mt-8">
              <a 
                href="https://www.mind.org.uk/information-support/guides-to-support-and-services/crisis-services/helplines-listening-services/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#FFC900] hover:underline inline-flex items-center gap-1"
              >
                Find more crisis support options <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default CrisisResourcesPage;
