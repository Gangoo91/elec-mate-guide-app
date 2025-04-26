
import { MessageSquare, Users, Heart, Bookmark } from "lucide-react";

export type ChatType = "private" | "team" | "mental_health" | "mentor";

export interface ChatTypeConfig {
  id: ChatType;
  title: string;
  icon: typeof MessageSquare;
  description: string;
}

export const chatTypes: ChatTypeConfig[] = [
  {
    id: "private",
    title: "Private Chat",
    icon: MessageSquare,
    description: "One-on-one private conversations",
  },
  {
    id: "team",
    title: "Team Chat",
    icon: Users,
    description: "Team-wide discussions",
  },
  {
    id: "mental_health",
    title: "Mental Health Mate",
    icon: Heart,
    description: "Connect with Mental Health Mates",
  },
  {
    id: "mentor",
    title: "Mentor Connect",
    icon: Bookmark,
    description: "Mentor-mentee discussions",
  },
];

export const getChatTypeConfig = (type: ChatType): ChatTypeConfig => {
  return chatTypes.find(t => t.id === type) || chatTypes[0];
};

export const getChatTitle = (type: ChatType): string => {
  return getChatTypeConfig(type).title;
};
