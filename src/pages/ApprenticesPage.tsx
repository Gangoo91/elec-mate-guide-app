
import React, { useState } from "react";
import { Book, CalendarCheck, Award, Handshake, Heart } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const MentalHealthHubModal = ({ open, onOpenChange }: { open: boolean; onOpenChange: (val: boolean) => void }) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="max-w-lg bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]">
      <DialogHeader>
        <DialogTitle className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-[#FFC900]" />
          Mental Health Hub
        </DialogTitle>
        <DialogDescription className="text-[#FFC900]/80">
          Support and resources for apprentices' mental health and well-being.
        </DialogDescription>
      </DialogHeader>
      <div className="py-2 space-y-4">
        <section>
          <h3 className="font-semibold text-lg mb-1 text-[#FFC900]">Mental Health Buddies</h3>
          <p className="text-[#FFC900]/80">Connect with a peer buddy trained to provide support and listen when things feel tough. <span className="italic">Feature launching soon.</span></p>
        </section>
        <hr className="border-[#FFC900]/20" />
        <section>
          <h3 className="font-semibold text-lg mb-1 text-[#FFC900]">External Help</h3>
          <ul className="list-disc list-inside text-[#FFC900]/80 space-y-1">
            <li>
              <a className="underline hover:text-[#FFF200] transition" href="https://www.lifeline.org.au/" target="_blank" rel="noopener noreferrer">
                Lifeline (24/7 Crisis Support)
              </a>
            </li>
            <li>
              <a className="underline hover:text-[#FFF200] transition" href="https://www.beyondblue.org.au/" target="_blank" rel="noopener noreferrer">
                Beyond Blue
              </a>
            </li>
          </ul>
        </section>
        <hr className="border-[#FFC900]/20" />
        <section>
          <h3 className="font-semibold text-lg mb-1 text-[#FFC900]">Coping Mechanisms</h3>
          <ul className="text-[#FFC900]/80 list-disc list-inside space-y-1">
            <li>Guided breathing & mindfulness exercises</li>
            <li>Tips for managing job site stress</li>
            <li>Links to podcasts & articles</li>
            <li className="italic">More coming soon...</li>
          </ul>
        </section>
      </div>
    </DialogContent>
  </Dialog>
);

const ApprenticesPage = () => {
  const [mhModalOpen, setMhModalOpen] = useState(false);

  const apprenticeResources = [
    {
      title: "Learning Tools",
      description: "A growing toolbox to help apprentices study, revise, and practice.",
      icon: <Book className="h-6 w-6 text-[#FFC900]" />,
      link: "#tools"
    },
    {
      title: "Mentor Connect",
      description: "Connect with experienced electricians",
      icon: <Handshake className="h-6 w-6 text-[#FFC900]" />,
      link: "#mentor-connect"
    },
    {
      title: "Mental Health Hub",
      description: "Support, community, and resources for apprentice mental health & well-being.",
      icon: <Heart className="h-6 w-6 text-[#FFC900]" />,
      link: null,
      showMHModal: true,
    },
    {
      title: "Skill Assessments",
      description: "Test your knowledge and track progress",
      icon: <Award className="h-6 w-6 text-[#FFC900]" />,
      link: "#assessments"
    },
    {
      title: "Training Events",
      description: "Workshops and training opportunities",
      icon: <CalendarCheck className="h-6 w-6 text-[#FFC900]" />,
      link: "#events"
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#FFC900] mb-4">Apprentice Hub</h1>
          <p className="text-lg text-[#FFC900]/80 max-w-2xl mx-auto">
            Discover tools, resources, and opportunities designed specifically for electrical apprentices at every stage.
            Whether you're just beginning or progressing further, you'll find support along your pathway through the electrical journey—from essential learning tools to well-being and skills development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {apprenticeResources.map((resource, index) => (
            <Card key={index} className="bg-[#22251e] border-[#FFC900]/20 hover:border-[#FFC900]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#FFC900]/10">
              <CardHeader>
                <div className="flex items-center gap-3">
                  {resource.icon}
                  <CardTitle className="text-[#FFC900]">{resource.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col justify-between">
                <div>
                  <CardDescription className="text-[#FFC900]/70">{resource.description}</CardDescription>
                </div>
                {resource.showMHModal ? (
                  <a
                    className="mt-4 inline-block text-[#FFC900] font-medium hover:underline"
                    onClick={() => setMhModalOpen(true)}
                    role="button"
                    tabIndex={0}
                  >
                    Learn more →
                  </a>
                ) : (
                  <a href={resource.link!} className="mt-4 inline-block text-[#FFC900] font-medium hover:underline">
                    Learn more →
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <MentalHealthHubModal open={mhModalOpen} onOpenChange={setMhModalOpen} />

        <div className="bg-[#22251e] rounded-xl p-8 border border-[#FFC900]/20">
          <h2 className="text-2xl font-bold text-[#FFC900] mb-4">Getting Started as an Apprentice</h2>
          <p className="text-[#FFC900]/80 mb-6">
            The path to becoming a licensed electrician starts with a strong apprenticeship.
            Here you'll uncover helpful tools to support you, plus advice and info about every step along your pathway through the electrical trade.
          </p>
          <div className="space-y-4">
            <p className="text-[#FFC900]/80">
              Content for apprentices will be expanded soon with interactive learning modules, progress tracking, study tools,
              and resources to prepare you for each stage of your journey.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ApprenticesPage;
