
import React from "react";
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
import { MentorshipRequest } from "../MentorshipRequestList";

interface StopMentoringDialogProps {
  request: MentorshipRequest | null;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
}

export const StopMentoringDialog = ({
  request,
  onOpenChange,
  onConfirm,
}: StopMentoringDialogProps) => {
  return (
    <AlertDialog open={!!request} onOpenChange={onOpenChange}>
      <AlertDialogContent className="bg-[#22251e] border-[#FFC900]/20 text-[#FFC900]">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-[#FFC900]">Stop Mentoring</AlertDialogTitle>
          <AlertDialogDescription className="text-[#FFC900]/80">
            Are you sure you want to stop mentoring {request?.apprenticeName}? This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="border-[#FFC900]/20 text-[#FFC900] hover:bg-[#FFC900]/10">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={onConfirm}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            Stop Mentoring
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
