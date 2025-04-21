
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Camera } from "lucide-react";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_FILE_TYPES = ["image/jpeg", "image/png", "image/webp", "image/heic"];

interface AvatarUploadProps {
  url: string | null;
  onUploadComplete: (url: string) => void;
  userInitials: string;
}

export function AvatarUpload({ url, onUploadComplete, userInitials }: AvatarUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const validateFile = (file: File) => {
    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      throw new Error("Please upload a valid image file (JPEG, PNG, WEBP, or HEIC)");
    }
    if (file.size > MAX_FILE_SIZE) {
      throw new Error("File size must be less than 5MB");
    }
  };

  const uploadAvatar = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setIsUploading(true);
      
      const file = event.target.files?.[0];
      if (!file) return;

      // Validate file type and size
      validateFile(file);

      const user = supabase.auth.getUser();
      if (!user) throw new Error("No user found");

      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).slice(2)}.${fileExt}`;
      const filePath = `${(await user).data.user?.id}/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('avatars')
        .getPublicUrl(filePath);

      onUploadComplete(publicUrl);
      
      toast({
        title: "Avatar updated",
        description: "Your profile picture has been successfully updated.",
      });
    } catch (error: any) {
      console.error('Error uploading avatar:', error);
      toast({
        title: "Upload failed",
        description: error.message || "There was a problem uploading your avatar.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
      // Clear the input value to allow selecting the same file again
      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
    }
  };

  return (
    <div className="group relative cursor-pointer">
      <Avatar className="w-24 h-24 border-2 border-[#FFC900]/30 transition-all duration-200 group-hover:border-[#FFC900]/50">
        <AvatarImage src={url || ""} />
        <AvatarFallback className="bg-[#22251e] text-[#FFC900] text-xl">
          {userInitials}
        </AvatarFallback>
      </Avatar>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <label className="absolute inset-0 w-full h-full cursor-pointer z-10" aria-label="Upload profile picture">
          <input
            type="file"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            accept="image/jpeg,image/png,image/webp,image/heic"
            onChange={uploadAvatar}
            disabled={isUploading}
          />
        </label>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/50 absolute inset-0 rounded-full flex flex-col items-center justify-center">
          <Camera className="w-6 h-6 text-white mb-1" />
          <span className="text-white text-xs px-2 text-center">Click to change photo</span>
        </div>
      </div>
      
      {isUploading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full">
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}
