
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Pencil, CheckCircle, Loader2 } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProfileFormSchema, ProfileFormValues } from "./schema";
import { BasicInfoFields } from "./BasicInfoFields";
import { ContactFields } from "./ContactFields";
import { QualificationAndBioFields } from "./QualificationAndBioFields";

interface ProfileFormProps {
  initialData?: {
    first_name?: string | null;
    last_name?: string | null;
    phone_number?: string | null;
    location?: string | null;
    qualification_level?: string | null;
    bio?: string | null;
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
    },
  });

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
    }
  };

  return (
    <Card className="mb-6 bg-[#22251e] border-[#FFC900]/20">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-[#FFC900] flex items-center gap-2">
              Personal Information
            </CardTitle>
            <CardDescription className="text-[#FFC900]/70">
              Update your profile information
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <BasicInfoFields form={form} />
            <ContactFields form={form} />
            <QualificationAndBioFields form={form} />
            
            <div className="flex items-center justify-between">
              <Button 
                type="submit" 
                disabled={isLoading}
                className="bg-[#FFC900] text-black hover:bg-[#e5b700]"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Pencil className="w-4 h-4 mr-2" />
                    Update Profile
                  </>
                )}
              </Button>
              
              {updateSuccess && (
                <div className="flex items-center text-green-500">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  <span className="text-sm">Saved successfully</span>
                </div>
              )}
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
