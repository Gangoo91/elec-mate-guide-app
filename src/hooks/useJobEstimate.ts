
import { useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useErrorHandler } from "@/hooks/useErrorHandler";
import { useAuth } from "@/hooks/useAuth";

export const useJobEstimate = () => {
  const [jobDescription, setJobDescription] = useState('');
  const [clientName, setClientName] = useState('');
  const [jobReference, setJobReference] = useState('');
  const [estimate, setEstimate] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { handleError } = useErrorHandler();
  const { user } = useAuth();

  const generateEstimate = async () => {
    if (!jobDescription.trim()) {
      toast.error("Please enter job details");
      return;
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('job-price-estimator', {
        body: JSON.stringify({ jobDescription })
      });

      if (error) throw error;
      
      if (data.estimate) {
        setEstimate(data.estimate);
        toast.success("Estimate generated successfully");
      } else {
        throw new Error("No estimate received");
      }
    } catch (err) {
      console.error("Error:", err);
      handleError(err, "Unable to generate estimate. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const saveEstimate = async () => {
    if (!estimate || !jobDescription) {
      toast.error("Please generate an estimate first");
      return;
    }

    if (!user) {
      toast.error("Please sign in to save estimates");
      return;
    }

    setIsLoading(true);
    try {
      const { error } = await supabase
        .from('job_estimates')
        .insert({
          job_description: jobDescription,
          estimate_response: estimate,
          client_name: clientName,
          job_reference: jobReference,
          user_id: user.id
        });

      if (error) throw error;
      
      toast.success("Estimate saved successfully");
    } catch (err) {
      console.error("Error:", err);
      handleError(err, "Unable to save estimate. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    jobDescription,
    setJobDescription,
    clientName,
    setClientName,
    jobReference,
    setJobReference,
    estimate,
    isLoading,
    generateEstimate,
    saveEstimate
  };
};
