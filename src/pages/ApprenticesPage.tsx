import React, { useState } from "react";
import { Book, CalendarCheck, Award, Handshake, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import PageHeader from "@/components/layout/PageHeader";
import ResourceCard from "@/components/shared/ResourceCard";
import { useIsMobile } from "@/hooks/use-mobile";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerClose } from "@/components/ui/drawer";
import IndustryResources from "@/components/IndustryResources";

const MentalHealthHubContent = () => (
  <>
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
  </>
);

const MentalHealthHubDialog = ({ open, onOpenChange }: { open: boolean; onOpenChange: (val: boolean) => void }) => (
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
      <MentalHealthHubContent />
    </DialogContent>
  </Dialog>
);

const MentalHealthHubDrawer = ({ open, onOpenChange }: { open: boolean; onOpenChange: (val: boolean) => void }) => (
  <Drawer open={open} onOpenChange={onOpenChange}>
    <DrawerContent className="bg-[#22251e] border-t-[#FFC900]/20 text-[#FFC900] max-h-[85vh]">
      <div className="mx-auto w-full max-w-lg">
        <DrawerHeader>
          <DrawerTitle className="flex items-center gap-2 justify-center">
            <Heart className="h-6 w-6 text-[#FFC900]" />
            Mental Health Hub
          </DrawerTitle>
          <DrawerDescription className="text-[#FFC900]/80 text-center">
            Support and resources for apprentices' mental health and well-being.
          </DrawerDescription>
        </DrawerHeader>
        <div className="px-4 pb-8">
          <MentalHealthHubContent />
        </div>
      </div>
      <DrawerClose className="absolute top-4 right-4 rounded-full p-1.5 bg-[#FFC900]/10 hover:bg-[#FFC900]/20">
        <span className="sr-only">Close</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FFC900]">
          <path d="M18 6 6 18" /><path d="m6 6 12 12" />
        </svg>
      </DrawerClose>
    </DrawerContent>
  </Drawer>
);

const ApprenticesPage = () => {
  const [mhModalOpen, setMhModalOpen] = useState(false);
  const isMobile = useIsMobile();

  const apprenticeResources = [
    {
      title: "Learning Hub",
      description:
        "Access our comprehensive learning tools, AI assistants, and training events all in one place. Get instant help and grow your skills.",
      icon: <Book className="h-6 w-6 text-[#FFC900]" />,
      fullCardLink: "/apprentices/learning-hub",
      action: { label: "Start Learning", href: "/apprentices/learning-hub" }
    },
    {
      title: "Mentor Connect",
      description: "Connect with experienced electricians for guidance, support, and career advice on your professional journey.",
      icon: <Handshake className="h-6 w-6 text-[#FFC900]" />,
      action: { label: "Find a Mentor", href: "/apprentices/mentorship" },
      fullCardLink: "/apprentices/mentorship"
    },
    {
      title: "Mental Health Hub",
      description: "Support, community, and resources for apprentice mental health & well-being.",
      icon: <Heart className="h-6 w-6 text-[#FFC900]" />,
      fullCardLink: "/mental-health",
      action: { label: "Learn more", href: "/mental-health" }
    }
  ];

  return (
    <MainLayout>
      <div className="container px-4 py-6 md:py-8 pt-16 md:pt-20">
        <PageHeader 
          title="Apprentice Hub"
          description="Discover tools, resources, and opportunities designed specifically for electrical apprentices at every stage."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {apprenticeResources.map((resource, index) => (
            <ResourceCard 
              key={index}
              title={resource.title}
              description={resource.description}
              icon={resource.icon}
              action={resource.action}
              fullCardLink={resource.fullCardLink}
            />
          ))}
        </div>

        {isMobile ? (
          <MentalHealthHubDrawer open={mhModalOpen} onOpenChange={setMhModalOpen} />
        ) : (
          <MentalHealthHubDialog open={mhModalOpen} onOpenChange={setMhModalOpen} />
        )}

        <div className="mt-8 bg-[#22251e] rounded-xl p-4 md:p-8 border border-[#FFC900]/20">
          <h2 className="text-xl md:text-2xl font-bold text-[#FFC900] mb-3">Getting Started as an Apprentice</h2>
          <p className="text-[#FFC900]/80 mb-4 text-sm md:text-base">
            The path to becoming a licensed electrician starts with a strong apprenticeship.
            Here you'll uncover helpful tools to support you, plus advice and info about every step along your pathway through the electrical trade.
          </p>
          <div className="space-y-3">
            <p className="text-[#FFC900]/80 text-sm md:text-base">
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
