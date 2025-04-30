
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Handshake, Users, PhoneCall, BadgeHelp, Brain, ExternalLink } from "lucide-react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import ResourceCard from "@/components/shared/ResourceCard";
import { useNavigate } from "react-router-dom";

const ProfessionalResources = () => {
  const navigate = useNavigate();
  
  return (
    <MainLayout>
      <div className="container py-8">
        <PageHeader
          title="Professional Resources"
          description="Access to professional mental health support and resources"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Crisis Support Card */}
          <Card className="border-[#FFC900]/20 bg-[#22251e] hover:shadow-lg hover:shadow-[#FFC900]/10 transition-all md:col-span-2">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <PhoneCall className="h-6 w-6 text-[#FFC900]" />
                <h3 className="text-xl font-semibold text-[#FFC900]">Immediate Crisis Support</h3>
              </div>
              <p className="text-[#FFC900]/90 mb-6">
                If you're experiencing a mental health crisis or need immediate support, these hotlines are available:
              </p>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-[#FFC900]/20">
                      <TableHead className="text-[#FFC900] font-medium">Organisation</TableHead>
                      <TableHead className="text-[#FFC900] font-medium">Contact</TableHead>
                      <TableHead className="text-[#FFC900] font-medium">Hours</TableHead>
                      <TableHead className="text-[#FFC900] font-medium hidden md:table-cell">Support Type</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="border-[#FFC900]/10 hover:bg-[#FFC900]/5">
                      <TableCell className="text-[#FFC900]/90 font-medium">Samaritans</TableCell>
                      <TableCell className="text-[#FFC900]/90">116 123</TableCell>
                      <TableCell className="text-[#FFC900]/90">24/7</TableCell>
                      <TableCell className="text-[#FFC900]/90 hidden md:table-cell">Emotional support for anyone in distress</TableCell>
                    </TableRow>
                    <TableRow className="border-[#FFC900]/10 hover:bg-[#FFC900]/5">
                      <TableCell className="text-[#FFC900]/90 font-medium">Mind</TableCell>
                      <TableCell className="text-[#FFC900]/90">0300 123 3393</TableCell>
                      <TableCell className="text-[#FFC900]/90">Mon-Fri, 9am-6pm</TableCell>
                      <TableCell className="text-[#FFC900]/90 hidden md:table-cell">Mental health information and advice</TableCell>
                    </TableRow>
                    <TableRow className="border-[#FFC900]/10 hover:bg-[#FFC900]/5">
                      <TableCell className="text-[#FFC900]/90 font-medium">CALM</TableCell>
                      <TableCell className="text-[#FFC900]/90">0800 58 58 58</TableCell>
                      <TableCell className="text-[#FFC900]/90">5pm-midnight</TableCell>
                      <TableCell className="text-[#FFC900]/90 hidden md:table-cell">Crisis support for men</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Support Groups Card */}
          <ResourceCard
            title="Support Groups"
            description="Peer-led mental health support networks"
            icon={<Users className="h-5 w-5 text-[#FFC900]" />}
            fullCardLink="/mental-health/professional-resources/support-groups"
          >
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="amclub" className="border-[#FFC900]/20">
                <AccordionTrigger className="text-[#FFC900] hover:text-[#FFC900]/80 hover:no-underline py-2">
                  Andy's Man Club
                  <Badge variant="outline" className="ml-2 border-green-500/30 text-green-400 text-xs">
                    Recommended
                  </Badge>
                </AccordionTrigger>
                <AccordionContent className="text-[#FFC900]/80">
                  <div className="space-y-3">
                    <p>
                      A men's mental health group that meets every Monday at 7pm (except bank holidays).
                      Open to any man over 18 who wants to talk about their mental health in a supportive environment.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge className="bg-[#FFC900]/20 text-[#FFC900] hover:bg-[#FFC900]/30">Free</Badge>
                      <Badge className="bg-[#FFC900]/20 text-[#FFC900] hover:bg-[#FFC900]/30">No Referral Needed</Badge>
                      <Badge className="bg-[#FFC900]/20 text-[#FFC900] hover:bg-[#FFC900]/30">Weekly Sessions</Badge>
                    </div>
                    <a 
                      href="https://andysmanclub.co.uk/find-your-nearest-group/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[#FFC900] hover:underline inline-flex items-center gap-1 mt-2"
                    >
                      Find your nearest Andy's Man Club <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="menssheds" className="border-[#FFC900]/20">
                <AccordionTrigger className="text-[#FFC900] hover:text-[#FFC900]/80 hover:no-underline py-2">
                  Men's Sheds
                </AccordionTrigger>
                <AccordionContent className="text-[#FFC900]/80">
                  <p className="mb-3">
                    Community spaces for men to connect, converse and create. Activities are often focused around 
                    woodwork, metalwork, and other practical skills in a relaxed environment.
                  </p>
                  <a 
                    href="https://menssheds.org.uk/find-a-shed/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#FFC900] hover:underline inline-flex items-center gap-1"
                  >
                    Find your local Men's Shed <ExternalLink className="h-3 w-3" />
                  </a>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </ResourceCard>

          {/* Professional Directory Card */}
          <ResourceCard
            title="Find a Professional"
            description="Accredited mental health specialists"
            icon={<Brain className="h-5 w-5 text-[#FFC900]" />}
            fullCardLink="/mental-health/professional-resources/find-professional"
          >
            <div className="space-y-4 text-[#FFC900]/90">
              <p>
                Find qualified and accredited mental health professionals through these trusted directories:
              </p>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://www.bacp.co.uk/search/Therapists" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#FFC900] hover:underline flex items-center gap-2"
                  >
                    <Handshake className="h-4 w-4" />
                    British Association for Counselling and Psychotherapy
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.psychotherapy.org.uk/find-a-therapist/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#FFC900] hover:underline flex items-center gap-2"
                  >
                    <Handshake className="h-4 w-4" />
                    UK Council for Psychotherapy
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.counselling-directory.org.uk/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#FFC900] hover:underline flex items-center gap-2"
                  >
                    <Handshake className="h-4 w-4" />
                    Counselling Directory
                  </a>
                </li>
              </ul>
            </div>
          </ResourceCard>
          
          {/* Self-Help Resources Card */}
          <ResourceCard
            title="Self-Help Resources"
            description="Tools and techniques for managing mental health"
            icon={<BadgeHelp className="h-5 w-5 text-[#FFC900]" />}
            fullCardLink="/mental-health/professional-resources/self-help"
          >
            <div className="space-y-4 text-[#FFC900]/90">
              <p>
                Access a range of self-help resources designed for electrical professionals:
              </p>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="#"  
                    className="text-[#FFC900] hover:underline flex items-center gap-2"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/mental-health/professional-resources/self-help");
                    }}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Mental Health Workbooks
                  </a>
                </li>
                <li>
                  <a 
                    href="#"  
                    className="text-[#FFC900] hover:underline flex items-center gap-2"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/mental-health/professional-resources/self-help");
                    }}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Guided Meditation Resources
                  </a>
                </li>
                <li>
                  <a 
                    href="#"  
                    className="text-[#FFC900] hover:underline flex items-center gap-2"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/mental-health/professional-resources/self-help");
                    }}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Industry-Specific Mental Health Guides
                  </a>
                </li>
              </ul>
            </div>
          </ResourceCard>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProfessionalResources;
