
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Share2, LineChart } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const QuickActionsCard = () => {
  const navigate = useNavigate();

  const handleQuickAction = (path: string) => {
    navigate(path);
  };

  return (
    <Card className="bg-[#22251e] border-[#FFC900]/20">
      <CardHeader>
        <CardTitle className="text-[#FFC900]">Quick Actions</CardTitle>
        <CardDescription className="text-[#FFC900]/70">
          Common project management tasks
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Button 
          variant="outline" 
          className="w-full justify-start border-[#333] text-[#FFC900] hover:bg-[#333] hover:text-[#FFC900]"
          onClick={() => handleQuickAction("/electricians/project-management/team")}
        >
          <Users className="mr-2 h-4 w-4" />
          Manage Team Members
        </Button>
        <Button 
          variant="outline" 
          className="w-full justify-start border-[#333] text-[#FFC900] hover:bg-[#333] hover:text-[#FFC900]"
          onClick={() => handleQuickAction("/electricians/technical-tools/templates")}
        >
          <Share2 className="mr-2 h-4 w-4" />
          Share Project Documents
        </Button>
        <Button 
          variant="outline" 
          className="w-full justify-start border-[#333] text-[#FFC900] hover:bg-[#333] hover:text-[#FFC900]"
          onClick={() => handleQuickAction("/electricians/job-scheduling")}
        >
          <LineChart className="mr-2 h-4 w-4" />
          View Schedule Analytics
        </Button>
      </CardContent>
    </Card>
  );
};
