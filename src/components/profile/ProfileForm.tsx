
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { User, Pencil, CheckCircle, Loader2, Phone, MapPin, Award } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ProfileFormValues {
  first_name: string;
  last_name: string;
  phone_number: string;
  location: string;
  qualification_level: string;
  bio: string;
}

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

  const qualificationLevels = [
    "Apprentice Level 1",
    "Apprentice Level 2",
    "Apprentice Level 3",
    "Apprentice Level 4",
    "Journeyman Electrician",
    "Master Electrician",
    "Electrical Engineer",
    "Electrical Inspector",
    "Other"
  ];

  return (
    <Card className="mb-6 bg-[#22251e] border-[#FFC900]/20">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-[#FFC900] flex items-center gap-2">
              <User className="h-5 w-5" />
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="first_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#FFC900]">First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your first name" {...field} className="bg-[#151812] border-[#FFC900]/20 text-[#FFC900]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="last_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#FFC900]">Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your last name" {...field} className="bg-[#151812] border-[#FFC900]/20 text-[#FFC900]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="phone_number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#FFC900]">Phone Number</FormLabel>
                  <FormControl>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-[#FFC900]/50" />
                      <Input placeholder="Enter your phone number" {...field} className="bg-[#151812] border-[#FFC900]/20 text-[#FFC900]" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#FFC900]">Location</FormLabel>
                  <FormControl>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-[#FFC900]/50" />
                      <Input placeholder="Enter your city/state" {...field} className="bg-[#151812] border-[#FFC900]/20 text-[#FFC900]" />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="qualification_level"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#FFC900]">Qualification Level</FormLabel>
                  <FormControl>
                    <div className="flex items-center">
                      <Award className="h-4 w-4 mr-2 text-[#FFC900]/50" />
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-full bg-[#151812] border-[#FFC900]/20 text-[#FFC900]">
                          <SelectValue placeholder="Select your qualification level" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#22251e] border-[#FFC900]/20">
                          {qualificationLevels.map(level => (
                            <SelectItem key={level} value={level} className="text-[#FFC900] focus:bg-[#FFC900]/10 focus:text-[#FFC900]">
                              {level}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#FFC900]">Bio</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us about your experience, skills and goals..." 
                      className="bg-[#151812] border-[#FFC900]/20 text-[#FFC900] min-h-[120px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
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
