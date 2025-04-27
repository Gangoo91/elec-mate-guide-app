
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { useDirectChat } from "@/hooks/useDirectChat";
import { MessageList } from "./MessageList";
import { ChatInput } from "./ChatInput";
import { Button } from "@/components/ui/button";
import { AlertCircle, Ban, Flag } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ChatErrorBoundary } from "./ChatErrorBoundary";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface DirectChatDialogProps {
  recipientId: string;
  recipientName: string;
  chatType: 'mentor' | 'mental_health' | 'team';
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DirectChatDialog({
  recipientId,
  recipientName,
  chatType,
  open,
  onOpenChange
}: DirectChatDialogProps) {
  const { messages, loading, sendMessage, blockUser, reportUser } = useDirectChat(recipientId, chatType);
  const { toast } = useToast();
  const [reportDialogOpen, setReportDialogOpen] = useState(false);
  const [blockDialogOpen, setBlockDialogOpen] = useState(false);

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;
    await sendMessage(content);
  };

  const handleBlockConfirm = async () => {
    await blockUser();
    toast({
      title: "User Blocked",
      description: `You have blocked ${recipientName}. They can no longer send you messages.`,
    });
    setBlockDialogOpen(false);
    onOpenChange(false);
  };

  const handleReportConfirm = async () => {
    await reportUser("Inappropriate content");
    toast({
      title: "User Reported",
      description: "Thank you for your report. Our team will review it shortly.",
    });
    setReportDialogOpen(false);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-md bg-[#22251e] border-[#FFC900]/20">
          <ChatErrorBoundary>
            <div className="flex flex-col h-[400px]">
              <div className="flex items-center justify-between border-b border-[#FFC900]/20 p-3">
                <DialogTitle className="text-[#FFC900] font-medium">
                  Chat with {recipientName}
                </DialogTitle>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setReportDialogOpen(true)}
                    className="text-[#FFC900] hover:bg-[#FFC900]/10"
                  >
                    <Flag className="h-4 w-4" />
                    <span className="sr-only">Report user</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setBlockDialogOpen(true)}
                    className="text-[#FFC900] hover:bg-[#FFC900]/10"
                  >
                    <Ban className="h-4 w-4" />
                    <span className="sr-only">Block user</span>
                  </Button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4">
                <MessageList messages={messages} loading={loading} />
              </div>

              <div className="p-3">
                <ChatInput 
                  onSendMessage={handleSendMessage} 
                  chatTitle={`Chat with ${recipientName}`}
                  placeholder="Type your message..."
                />
              </div>
            </div>
          </ChatErrorBoundary>
        </DialogContent>
      </Dialog>

      <AlertDialog open={reportDialogOpen} onOpenChange={setReportDialogOpen}>
        <AlertDialogContent className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-[#FFC900]">Report User</AlertDialogTitle>
            <AlertDialogDescription className="text-[#FFC900]/80">
              Are you sure you want to report {recipientName}? This will notify our moderation team to review their behavior.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="border-[#FFC900]/20 text-[#FFC900] hover:bg-[#FFC900]/10">Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleReportConfirm}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              Report
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={blockDialogOpen} onOpenChange={setBlockDialogOpen}>
        <AlertDialogContent className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-[#FFC900]">Block User</AlertDialogTitle>
            <AlertDialogDescription className="text-[#FFC900]/80">
              Are you sure you want to block {recipientName}? They will no longer be able to send you messages.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="border-[#FFC900]/20 text-[#FFC900] hover:bg-[#FFC900]/10">Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleBlockConfirm}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              Block
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
