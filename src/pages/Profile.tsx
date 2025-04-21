import React, { useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { ProfileForm } from "@/components/profile/ProfileForm";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CreditCard } from "lucide-react";

const Profile = () => {
  const { user } = useAuth();

  useEffect(() => {
    const loadProfile = async () => {
      if (!user?.id) return;
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();
          
        if (error) throw error;
        if (data) {
          const form = document.querySelector('form');
          if (form) {
            const firstNameInput = form.querySelector('input[name="first_name"]') as HTMLInputElement;
            const lastNameInput = form.querySelector('input[name="last_name"]') as HTMLInputElement;
            if (firstNameInput) firstNameInput.value = data.first_name || '';
            if (lastNameInput) lastNameInput.value = data.last_name || '';
          }
        }
      } catch (error) {
        console.error('Error loading profile:', error);
      }
    };

    loadProfile();
  }, [user?.id]);

  return (
    <MainLayout>
      <div className="container max-w-4xl px-4 py-12">
        <h1 className="text-3xl font-bold text-[#FFC900] mb-8">Profile Settings</h1>

        <ProfileForm />
        
        <div className="mt-8 flex justify-center">
          <Button 
            variant="outline"
            onClick={() => window.location.href = "/manage-subscription"}
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
