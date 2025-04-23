
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Heart, Lightbulb, ExternalLink } from "lucide-react";

interface ExerciseInfoProps {
  benefits: string;
  tips: string;
  duration: number;
  referenceUrl?: string;
}

const ExerciseInfo = ({ benefits, tips, duration, referenceUrl }: ExerciseInfoProps) => {
  return (
    <div className="space-y-6">
      <Card className="bg-[#22251e] border-[#FFC900]/20">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-[#FFC900]" />
            <CardTitle className="text-[#FFC900]">Duration</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-[#FFC900]/70">{duration} minutes</p>
        </CardContent>
      </Card>

      <Card className="bg-[#22251e] border-[#FFC900]/20">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-[#FFC900]" />
            <CardTitle className="text-[#FFC900]">Benefits</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-[#FFC900]/70">{benefits}</p>
        </CardContent>
      </Card>

      <Card className="bg-[#22251e] border-[#FFC900]/20">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-[#FFC900]" />
            <CardTitle className="text-[#FFC900]">Tips</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-[#FFC900]/70">{tips}</p>
        </CardContent>
      </Card>

      {referenceUrl && (
        <a 
          href={referenceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[#FFC900] hover:text-[#FFC900]/70 transition-colors"
        >
          <ExternalLink className="h-4 w-4" />
          Learn more about this technique
        </a>
      )}
    </div>
  );
};

export default ExerciseInfo;
