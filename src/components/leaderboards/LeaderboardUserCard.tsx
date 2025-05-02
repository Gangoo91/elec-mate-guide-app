
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Award } from "lucide-react";

export interface LeaderboardUser {
  id: string;
  name: string;
  avatarUrl?: string;
  score: number;
  rank: number;
  level?: string;
  achievement?: string;
}

interface LeaderboardUserCardProps {
  user: LeaderboardUser;
  scoreLabel?: string;
}

const LeaderboardUserCard = ({ user, scoreLabel = "Points" }: LeaderboardUserCardProps) => {
  // Determine the medal color based on rank
  const getMedalColor = (rank: number) => {
    switch (rank) {
      case 1: return "text-yellow-500";
      case 2: return "text-gray-400";
      case 3: return "text-amber-700";
      default: return "text-[#FFC900]/50";
    }
  };

  return (
    <div className="flex items-center justify-between p-3 border-b border-[#FFC900]/10 hover:bg-[#FFC900]/5 transition-colors">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center min-w-[2rem]">
          {user.rank <= 3 ? (
            <Award className={`h-6 w-6 ${getMedalColor(user.rank)}`} />
          ) : (
            <span className="text-[#FFC900]/50 font-semibold">{user.rank}</span>
          )}
        </div>
        
        <Avatar className="h-10 w-10 border border-[#FFC900]/30">
          <AvatarImage src={user.avatarUrl} />
          <AvatarFallback className="bg-[#22251e] text-[#FFC900]">
            {user.name.substring(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex flex-col">
          <span className="font-medium text-[#FFC900]">{user.name}</span>
          {user.level && (
            <span className="text-xs text-[#FFC900]/60">{user.level}</span>
          )}
        </div>
      </div>
      
      <div className="flex flex-col items-end">
        <span className="font-semibold text-[#FFC900]">{user.score}</span>
        <span className="text-xs text-[#FFC900]/60">{scoreLabel}</span>
      </div>
    </div>
  );
};

export default LeaderboardUserCard;
