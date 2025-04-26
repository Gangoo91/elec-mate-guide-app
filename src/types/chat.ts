
import { ChatType } from "@/config/chatTypes";

export interface Message {
  id: string;
  sender_id: string;
  recipient_id: string;
  content: string;
  created_at: string;
  read: boolean;
  chat_type: ChatType;
  is_group_message: boolean;
}

export interface ChatReport {
  id: string;
  reporter_id: string;
  reported_id: string;
  reason: string;
  created_at: string;
}
