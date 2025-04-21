import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Pencil, CheckCircle, Loader2, Save } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProfileFormSchema, ProfileFormValues } from "./schema";
import { BasicInfoFields } from "./BasicInfoFields";
import { ContactFields } from "./ContactFields";
import { QualificationAndBioFields } from "./QualificationAndBioFields";
import { Separator } from "@/components/ui/separator";
import { AvatarUpload } from "./AvatarUpload";

interface ProfileFormProps {
  initialData?: {
    first_name?: string | null;
    last_name?: string | null;
    phone_number?: string | null;
    location?: string | null;
    qualification_level?: string | null;
    bio?: string | null;
    years_experience?: string | null;
    avatar_url?: string | null;
  } | null;
}

export function ProfileForm({ initialData }: ProfileFormProps) {
  const { toast } = useToast();
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const queryClient = useQueryClient();

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(ProfileFormSchema),
    defaultValues: {
      first_name: initialData?.first_name || "",
      last_name: initialData?.last_name || "",
      phone_number: initialData?.phone_number || "",
      location: initialData?.location || "",
      qualification_level: initialData?.qualification_level || "",
      bio: initialData?.bio || "",
      years_experience: initialData?.years_experience || "",
    },
  });

  const handleAvatarUpload = async (url: string) => {
    if (!user?.id) return;
    
    try {
      const { error } = await supabase
        .from('profiles')
        .update({ avatar_url: url })
        .eq('id', user.id);

      if (error) throw error;
      
      queryClient.invalidateQueries({ queryKey: ['profile'] });
    } catch (error) {
      console.error('Error updating profile with new avatar:', error);
      toast({
        title: "Error",
        description: "Failed to update profile with new avatar.",
        variant: "destructive",
      });
    }
  };

  const getInitials = () => {
    const firstName = form.watch("first_name") || "";
    const lastName = form.watch("last_name") || "";
    return (firstName.charAt(0) + lastName.charAt(0)).toUpperCase() || "EM";
  };

  const onSubmit = async (data: ProfileFormValues) => {
    if (!user?.id) return;
    
    setIsLoading(true);
    setUpdateSuccess(false);
    
    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          first_name: data.first_name,
          last_name: data.last_name,
          phone_number: data.phone_number,
          location: data.location,
          qualification_level: data.qualification_level,
          bio: data.bio,
          years_experience: data.years_experience,
          updated_at: new Date().toISOString(),
        })
        .eq('id', user.id);

      if (error) throw error;

      queryClient.invalidateQueries({ queryKey: ['profile'] });
      
      setUpdateSuccess(true);
      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully.",
      });
    } catch (error) {
      console.error('Error updating profile:', error);
      toast({
        title: "Error",
        description: "Failed to update profile. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
      
      // Reset success message after 3 seconds
      if (updateSuccess) {
        setTimeout(() => setUpdateSuccess(false), 3000);
      }
    }
  };

  return (
    <Card className="mb-6 bg-[#22251e] border-[#FFC900]/20 rounded-xl shadow-lg">
      <CardHeader className="border-b border-[#FFC900]/10 pb-4">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-[#FFC900] flex items-center gap-2 text-2xl">
              Profile Settings
            </CardTitle>
            <CardDescription className="text-[#FFC900]/70 mt-1">
              Update your personal information and qualifications
            </CardDescription>
          </div>
          <AvatarUpload 
            url={initialData?.avatar_url || null}
            onUploadComplete={handleAvatarUpload}
            userInitials={getInitials()}
          />
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <BasicInfoFields form={form} />
            
            <Separator className="my-6 bg-[#FFC900]/10" />
            <h3 className="text-[#FFC900] text-lg font-medium mb-4">Contact Information</h3>
            <ContactFields form={form} />
            
            <Separator className="my-6 bg-[#FFC900]/10" />
            <h3 className="text-[#FFC900] text-lg font-medium mb-4">Professional Details</h3>
            <QualificationAndBioFields form={form} />
            
            <div className="flex items-center justify-between pt-4">
              <Button 
                type="submit" 
                disabled={isLoading}
                className="bg-[#FFC900] text-black hover:bg-[#e5b700] px-6"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : updateSuccess ? (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Saved
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </>
                )}
              </Button>
              
              {updateSuccess && (
                <div className="flex items-center text-green-500 animate-fade-in">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  <span className="text-sm">Profile updated successfully</span>
                </div>
              )}
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
