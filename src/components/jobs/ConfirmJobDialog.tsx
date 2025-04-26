
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

type ConfirmJobDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
};

export function ConfirmJobDialog({ open, onOpenChange, onConfirm }: ConfirmJobDialogProps) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="bg-[#22251e] border-[#FFC900]/20">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-[#FFC900]">Confirm Job Completion</AlertDialogTitle>
          <AlertDialogDescription className="text-[#FFC900]/70">
            Are you sure you want to mark this job as complete? This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-[#151812] text-[#FFC900] hover:bg-[#151812]/80">Cancel</AlertDialogCancel>
          <AlertDialogAction 
            onClick={onConfirm}
            className="bg-[#FFC900] hover:bg-[#e5b700] text-[#151812]"
          >
            Confirm
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
