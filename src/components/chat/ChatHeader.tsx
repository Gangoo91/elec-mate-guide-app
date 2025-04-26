
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ChatType } from "@/contexts/ChatContext";

interface ChatHeaderProps {
  title: string;
}

export function ChatHeader({ title }: ChatHeaderProps) {
  return (
    <DialogHeader>
      <DialogTitle className="text-center text-[#FFC900]">
        {title}
      </DialogTitle>
    </DialogHeader>
  );
}
