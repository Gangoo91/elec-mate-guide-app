
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookUser, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TutorBox = () => {
  const navigate = useNavigate();
  
  console.log("TutorBox rendering");

  return (
    <Card className="bg-[#22251e] border-[#FFC900]/20 shadow-lg">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-[#FFC900] flex items-center gap-2">
            <GraduationCap className="h-5 w-5" />
            Become a Tutor
          </CardTitle>
          <div className="bg-[#FFC900]/10 p-2 rounded-full">
            <BookUser className="h-5 w-5 text-[#FFC900]" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-[#FFC900]/70 mb-4">
          Share your expertise and help other electricians and apprentices by becoming a certified tutor. Earn additional income while making a difference.
        </p>
        <div className="flex flex-col space-y-2">
          <Button
            onClick={() => navigate("/tutors/apply")}
            className="bg-[#FFC900] text-black hover:bg-[#f5bb13] font-medium w-full"
          >
            Apply to be a Tutor
          </Button>
          <Button
            onClick={() => navigate("/tutors")}
            variant="outline"
            className="border-[#FFC900]/50 text-[#FFC900] hover:bg-[#FFC900]/10 w-full"
          >
            Learn More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TutorBox;
