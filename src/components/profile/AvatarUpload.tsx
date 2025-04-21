
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Camera } from "lucide-react";

interface AvatarUploadProps {
  url: string | null;
  onUploadComplete: (url: string) => void;
  userInitials: string;
}

export function AvatarUpload({ url, onUploadComplete, userInitials }: AvatarUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const uploadAvatar = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setIsUploading(true);
      
      const file = event.target.files?.[0];
      if (!file) return;

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
    } catch (error) {
      console.error('Error uploading avatar:', error);
      toast({
        title: "Upload failed",
        description: "There was a problem uploading your avatar.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="group relative">
      <Avatar className="w-24 h-24 border-2 border-[#FFC900]/30 transition-all duration-200 group-hover:border-[#FFC900]/50">
        <AvatarImage src={url || ""} />
        <AvatarFallback className="bg-[#22251e] text-[#FFC900] text-xl">
          {userInitials}
        </AvatarFallback>
      </Avatar>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <input
          type="file"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          accept="image/*"
          onChange={uploadAvatar}
          disabled={isUploading}
        />
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/50 absolute inset-0 rounded-full flex items-center justify-center">
          <Camera className="w-6 h-6 text-white" />
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
