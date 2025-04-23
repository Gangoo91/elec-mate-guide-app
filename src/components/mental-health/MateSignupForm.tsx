
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface MateSignupFormData {
  experience: string;
  about_me: string;
  specialties: string;
}

export const MateSignupForm = () => {
  const { toast } = useToast();
  const form = useForm<MateSignupFormData>();

  const onSubmit = async (data: MateSignupFormData) => {
    try {
      const { error } = await supabase.from("mental_health_mates").insert({
        experience: data.experience,
        about_me: data.about_me,
        specialties: data.specialties.split(",").map(s => s.trim()),
      });

      if (error) throw error;

      toast({
        title: "Success!",
        description: "You are now registered as a Mental Health Mate",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to register as a Mental Health Mate",
        variant: "destructive",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="experience"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Experience</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Share your relevant experience..."
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="about_me"
          render={({ field }) => (
            <FormItem>
              <FormLabel>About You</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell others about yourself..."
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="specialties"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Specialties</FormLabel>
              <FormControl>
                <Input
                  placeholder="anxiety, stress, work-life balance (comma-separated)"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">Register as Mental Health Mate</Button>
      </form>
    </Form>
  );
};
