
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Camera, User } from "lucide-react";

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
      
      toast({
        title: "Avatar updated",
        description: "Your profile picture has been updated successfully.",
      });
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
    <div className="flex flex-col items-center gap-4">
      <Avatar className="w-24 h-24 border-2 border-[#FFC900]/30">
        <AvatarImage src={url || ""} />
        <AvatarFallback className="bg-[#22251e] text-[#FFC900] text-xl">
          {userInitials}
        </AvatarFallback>
      </Avatar>
      
      <Button 
        variant="outline" 
        className="relative border-[#FFC900]/50 text-[#FFC900] hover:bg-[#FFC900]/10"
        disabled={isUploading}
      >
        <input
          type="file"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          accept="image/*"
          onChange={uploadAvatar}
          disabled={isUploading}
        />
        <Camera className="mr-2 h-4 w-4" />
        {isUploading ? "Uploading..." : "Change Avatar"}
      </Button>
    </div>
  );
}
