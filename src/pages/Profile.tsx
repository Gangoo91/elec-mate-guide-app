
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { ProfileForm } from "@/components/profile/ProfileForm";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { CreditCard, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

const Profile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const { data: profile, isLoading, error } = useQuery({
    queryKey: ['profile', user?.id],
    queryFn: async () => {
      if (!user?.id) return null;
      
      // Create profile if it doesn't exist
      const { data: existingProfile, error: checkError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .maybeSingle();
      
      if (checkError && checkError.code !== 'PGRST116') {
        console.error('Error checking profile:', checkError);
        throw new Error('Failed to load profile');
      }
      
      // If profile doesn't exist, create it
      if (!existingProfile) {
        const { data: newProfile, error: createError } = await supabase
          .from('profiles')
          .insert([{ id: user.id }])
          .select()
          .single();
          
        if (createError) {
          console.error('Error creating profile:', createError);
          throw new Error('Failed to create profile');
        }
        
        return newProfile;
      }
      
      return existingProfile;
    },
    enabled: !!user?.id
  });

  return (
    <MainLayout>
      <div className="container max-w-4xl px-4 py-12">
        <h1 className="text-3xl font-bold text-[#FFC900] mb-8">Profile Settings</h1>
        
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-[#FFC900] mr-2" />
            <span className="text-[#FFC900]/70">Loading profile...</span>
          </div>
        ) : error ? (
          <div className="bg-red-100/10 border border-red-300/30 p-6 rounded-lg text-center">
            <p className="text-red-400">There was a problem loading your profile.</p>
            <Button 
              onClick={() => window.location.reload()}
              variant="outline"
              className="mt-4 border-red-400/50 text-red-400 hover:bg-red-400/10"
            >
              Try Again
            </Button>
          </div>
        ) : (
          <ProfileForm initialData={profile} />
        )}
        
        <div className="mt-8 flex justify-center">
          <Button 
            variant="outline"
            onClick={() => navigate("/manage-subscription")}
            className="border-[#FFC900]/50 text-[#FFC900] hover:bg-[#FFC900]/10"
          >
            <CreditCard className="mr-2 h-4 w-4" />
            Manage Subscription
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;
