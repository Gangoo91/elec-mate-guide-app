
import { Message } from "@/types/chat";

export interface ChatHookState {
  messages: Message[];
  loading: boolean;
}

export interface ChatHookActions {
  sendMessage: (content: string) => Promise<any>;
  blockUser: () => Promise<boolean>;
  reportUser: (reason: string) => Promise<boolean>;
}
