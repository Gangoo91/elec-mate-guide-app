
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";

export function ProjectTeamSection() {
  return (
    <Card className="bg-[#333] border-[#444]">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-[#FFC900]">
          <Users className="inline-block w-4 h-4 mr-2" /> Team Members
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="text-xs text-[#FFC900]/70">
          <p>Project Manager: John Smith</p>
          <p>Lead Electrician: Sarah Wilson</p>
          <p>Apprentice: Mike Johnson</p>
        </div>
      </CardContent>
    </Card>
  );
}
