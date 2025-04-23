
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, UserCheck } from "lucide-react";

interface MateCardProps {
  mate: any;
  onSendMessage: (userId: string) => void;
}

export const MateCard = ({ mate, onSendMessage }: MateCardProps) => {
  return (
    <Card className="border-[#FFC900]/20 bg-[#22251e]">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <UserCheck className="h-5 w-5 text-[#FFC900]" />
          <span className="text-[#FFC900]">
            {mate.profiles?.first_name || 'Anonymous'} {mate.profiles?.last_name || 'User'}
          </span>
        </CardTitle>
        <CardDescription className="line-clamp-2">{mate.about_me}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium text-[#FFC900]">Specialties</h4>
            <div className="flex flex-wrap gap-2 mt-1">
              {mate.specialties?.map((specialty: string, i: number) => (
                <span
                  key={i}
                  className="text-xs bg-[#FFC900]/10 text-[#FFC900] px-2 py-1 rounded"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>
          <Button
            onClick={() => onSendMessage(mate.user_id)}
            className="w-full bg-[#FFC900] text-[#22251e] hover:bg-[#FFC900]/90"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Connect
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
