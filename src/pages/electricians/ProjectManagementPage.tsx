
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import BackButton from "@/components/navigation/BackButton";
import { Card, CardContent } from "@/components/ui/card";
import { FolderGit2 } from "lucide-react";

const ProjectManagementPage = () => {
  return (
    <MainLayout>
      <div className="container py-8">
        <BackButton />
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-[#FFC900] mb-4">
            Project Management
          </h1>
          <p className="text-[#FFC900]/80 mb-8">
            Track and manage your electrical projects efficiently.
          </p>
          
          <Card className="bg-[#22251e] border-[#FFC900]/20">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <FolderGit2 className="h-8 w-8 text-[#FFC900]" />
                <h2 className="text-xl font-semibold text-[#FFC900]">Coming Soon</h2>
              </div>
              <p className="text-[#FFC900]/70">
                Our project management tools are being developed. Soon you'll be able to:
              </p>
              <ul className="list-disc list-inside mt-4 text-[#FFC900]/70 space-y-2">
                <li>Create and manage projects</li>
                <li>Track project progress</li>
                <li>Collaborate with team members</li>
                <li>Manage project resources</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProjectManagementPage;
