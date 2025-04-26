
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MessageSquare, 
  Users, 
  Heart, 
  Bookmark 
} from "lucide-react";
import { ChatType } from "@/contexts/ChatContext";
import { Badge } from "@/components/ui/badge";

interface ChatTypeSelectorProps {
  activeType: ChatType;
  onTypeChange: (type: ChatType) => void;
  unreadCounts: {
    private: number;
    team: number;
    mental_health: number;
    mentor: number;
  };
}

export function ChatTypeSelector({ 
  activeType, 
  onTypeChange,
  unreadCounts
}: ChatTypeSelectorProps) {
  return (
    <Tabs 
      value={activeType} 
      className="w-full" 
      onValueChange={(value) => onTypeChange(value as ChatType)}
    >
      <TabsList className="grid grid-cols-4 w-full">
        <TabsTrigger value="private" className="relative">
          <MessageSquare className="h-4 w-4 mr-1" />
          <span className="hidden sm:inline">Private</span>
          {unreadCounts.private > 0 && (
            <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center bg-red-500 text-[10px]">
              {unreadCounts.private}
            </Badge>
          )}
        </TabsTrigger>
        
        <TabsTrigger value="team" className="relative">
          <Users className="h-4 w-4 mr-1" />
          <span className="hidden sm:inline">Team</span>
          {unreadCounts.team > 0 && (
            <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center bg-red-500 text-[10px]">
              {unreadCounts.team}
            </Badge>
          )}
        </TabsTrigger>
        
        <TabsTrigger value="mental_health" className="relative">
          <Heart className="h-4 w-4 mr-1" />
          <span className="hidden sm:inline">Mate</span>
          {unreadCounts.mental_health > 0 && (
            <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center bg-red-500 text-[10px]">
              {unreadCounts.mental_health}
            </Badge>
          )}
        </TabsTrigger>
        
        <TabsTrigger value="mentor" className="relative">
          <Bookmark className="h-4 w-4 mr-1" />
          <span className="hidden sm:inline">Mentor</span>
          {unreadCounts.mentor > 0 && (
            <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center bg-red-500 text-[10px]">
              {unreadCounts.mentor}
            </Badge>
          )}
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
