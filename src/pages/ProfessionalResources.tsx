
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Handshake, Users } from "lucide-react";

const ProfessionalResources = () => {
  return (
    <MainLayout>
      <div className="container py-8">
        <PageHeader
          title="Professional Resources"
          description="Access to professional mental health support and resources"
        />
        
        <div className="grid gap-6">
          {/* Crisis Support */}
          <Card className="border-[#FFC900]/20 bg-[#22251e]">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Users className="h-5 w-5 text-[#FFC900]" />
                <h3 className="text-xl font-semibold text-[#FFC900]">Crisis Support Hotlines</h3>
              </div>
              <p className="text-[#FFC900]/90 mb-4">
                24/7 crisis support hotlines available when you need immediate assistance:
              </p>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-[#FFC900]">Organization</TableHead>
                    <TableHead className="text-[#FFC900]">Contact</TableHead>
                    <TableHead className="text-[#FFC900]">Hours</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="text-[#FFC900]/90">Samaritans</TableCell>
                    <TableCell className="text-[#FFC900]/90">116 123</TableCell>
                    <TableCell className="text-[#FFC900]/90">24/7</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-[#FFC900]/90">Mind</TableCell>
                    <TableCell className="text-[#FFC900]/90">0300 123 3393</TableCell>
                    <TableCell className="text-[#FFC900]/90">Mon-Fri, 9am-6pm</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-[#FFC900]/90">CALM</TableCell>
                    <TableCell className="text-[#FFC900]/90">0800 58 58 58</TableCell>
                    <TableCell className="text-[#FFC900]/90">5pm-midnight</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Support Groups */}
          <Card className="border-[#FFC900]/20 bg-[#22251e]">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Handshake className="h-5 w-5 text-[#FFC900]" />
                <h3 className="text-xl font-semibold text-[#FFC900]">Support Groups</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium text-[#FFC900] mb-2">Andy's Man Club</h4>
                  <p className="text-[#FFC900]/90 mb-2">
                    A men's mental health group that meets every Monday at 7pm (except bank holidays).
                    Open to any man over 18 who wants to talk about their mental health.
                  </p>
                  <a 
                    href="https://andysmanclub.co.uk/find-your-nearest-group/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#FFC900] hover:underline"
                  >
                    Find your nearest Andy's Man Club →
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Directory */}
          <Card className="border-[#FFC900]/20 bg-[#22251e]">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Handshake className="h-5 w-5 text-[#FFC900]" />
                <h3 className="text-xl font-semibold text-[#FFC900]">Find a Professional</h3>
              </div>
              <p className="text-[#FFC900]/90 mb-4">
                Find accredited mental health professionals through these trusted directories:
              </p>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://www.bacp.co.uk/search/Therapists" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#FFC900] hover:underline"
                  >
                    British Association for Counselling and Psychotherapy (BACP) →
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.psychotherapy.org.uk/find-a-therapist/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#FFC900] hover:underline"
                  >
                    UK Council for Psychotherapy (UKCP) →
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.counselling-directory.org.uk/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#FFC900] hover:underline"
                  >
                    Counselling Directory →
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProfessionalResources;
