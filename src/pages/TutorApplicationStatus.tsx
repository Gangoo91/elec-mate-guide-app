
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { Loader2, CheckCircle, XCircle, Clock } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type TutorApplicationStatus = {
  isApplied: boolean;
  isApproved: boolean;
  appliedAt: string | null;
  approvedAt: string | null;
};

const TutorApplicationStatus = () => {
  const { user, userRole, refreshTutorStatus } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [applicationStatus, setApplicationStatus] = useState<TutorApplicationStatus>({
    isApplied: false,
    isApproved: false,
    appliedAt: null,
    approvedAt: null
  });

  useEffect(() => {
    const fetchApplicationStatus = async () => {
      if (!user) return;

      try {
        setLoading(true);
        
        // Check if user has applied as a tutor
        const { data, error } = await supabase
          .from('tutor_approvals')
          .select('*')
          .eq('user_id', user.id)
          .single();

        if (error && error.code !== 'PGRST116') {
          console.error("Error fetching tutor application:", error);
          toast({
            title: "Failed to fetch application status",
            description: "Please try again later",
            variant: "destructive"
          });
          return;
        }

        if (data) {
          setApplicationStatus({
            isApplied: true,
            isApproved: data.is_approved,
            appliedAt: data.applied_at,
            approvedAt: data.approved_at
          });
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchApplicationStatus();
  }, [user, toast]);

  const handleApplyAsTutor = async () => {
    if (!user) return;
    
    try {
      const { data, error } = await supabase
        .from('tutor_approvals')
        .insert({
          user_id: user.id,
          is_approved: false,
        });
        
      if (error) {
        console.error("Error creating tutor application:", error);
        toast({
          title: "Application Failed",
          description: "Could not submit your application",
          variant: "destructive"
        });
        return;
      }
      
      // Refresh the application status
      setApplicationStatus({
        isApplied: true,
        isApproved: false,
        appliedAt: new Date().toISOString(),
        approvedAt: null
      });
      
      toast({
        title: "Application Submitted",
        description: "Your tutor application has been submitted for review",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  // Self-approve function for development purposes
  const handleSelfApprove = async () => {
    if (!user) return;

    try {
      // Create or update tutor approval record to approved
      const { error } = await supabase
        .from('tutor_approvals')
        .upsert({
          user_id: user.id,
          is_approved: true,
          applied_at: new Date().toISOString(),
          approved_at: new Date().toISOString()
        });

      if (error) {
        console.error("Error self-approving tutor application:", error);
        toast({
          title: "Approval Failed",
          description: "Could not approve your tutor status",
          variant: "destructive"
        });
        return;
      }
      
      // Refresh auth context to update tutor approval status
      if (refreshTutorStatus) {
        await refreshTutorStatus();
      }
      
      setApplicationStatus({
        isApplied: true,
        isApproved: true,
        appliedAt: new Date().toISOString(),
        approvedAt: new Date().toISOString()
      });
      
      toast({
        title: "Tutor Status Approved",
        description: "You now have access to the tutor hub",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleGoTutorHub = () => {
    navigate("/tutors");
  };

  const handleGoHome = () => {
    navigate("/dashboard");
  };

  if (!user) {
    return (
      <MainLayout>
        <div className="container py-8">
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Authentication Required</CardTitle>
              <CardDescription>Please sign in to check your tutor application status</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button onClick={() => navigate("/login")}>Sign In</Button>
            </CardFooter>
          </Card>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container py-8">
        <Card className="max-w-md mx-auto border-[#FFC900]/20">
          <CardHeader>
            <CardTitle className="text-[#FFC900]">Tutor Application Status</CardTitle>
            <CardDescription>Check the status of your tutor application</CardDescription>
          </CardHeader>
          
          <CardContent>
            {loading ? (
              <div className="flex items-center justify-center p-6">
                <Loader2 className="h-8 w-8 text-[#FFC900] animate-spin" />
              </div>
            ) : (
              <div className="space-y-4">
                {!applicationStatus.isApplied ? (
                  <div>
                    {userRole === "tutor" ? (
                      <div className="bg-yellow-900/20 border border-yellow-500/30 p-4 rounded-md">
                        <p className="text-[#FFC900]">You have the tutor role but haven't formally applied yet.</p>
                        <p className="text-sm text-[#FFC900]/70 mt-2">
                          Complete your application to enable your tutor account.
                        </p>
                        <Button 
                          variant="outline" 
                          onClick={handleApplyAsTutor} 
                          className="mt-4 border-[#FFC900] text-[#FFC900] hover:bg-[#FFC900]/10"
                        >
                          Submit Application
                        </Button>
                        
                        <Button 
                          variant="outline" 
                          onClick={handleSelfApprove}
                          className="mt-4 ml-2 border-green-500 text-green-500 hover:bg-green-500/10"
                        >
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Dev: Self-Approve
                        </Button>
                      </div>
                    ) : (
                      <div className="bg-yellow-900/20 border border-yellow-500/30 p-4 rounded-md">
                        <p className="text-[#FFC900]">You haven't applied to be a tutor yet.</p>
                        <p className="text-sm text-[#FFC900]/70 mt-2">
                          Apply through the application box on the welcome page.
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Application submitted: {applicationStatus.appliedAt ? new Date(applicationStatus.appliedAt).toLocaleDateString() : "Unknown"}</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      {applicationStatus.isApproved ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <Clock className="h-5 w-5 text-yellow-500" />
                      )}
                      <span>
                        {applicationStatus.isApproved 
                          ? `Approved on: ${applicationStatus.approvedAt ? new Date(applicationStatus.approvedAt).toLocaleDateString() : "Unknown"}` 
                          : "Approval pending"}
                      </span>
                    </div>
                    
                    {applicationStatus.isApproved ? (
                      <div className="bg-green-900/20 border border-green-500/30 p-4 rounded-md mt-4">
                        <p className="text-green-500">Congratulations! Your application has been approved.</p>
                        <p className="text-sm text-green-500/70 mt-2">
                          You can now access the tutor hub and start using tutor features.
                        </p>
                      </div>
                    ) : (
                      <div className="bg-yellow-900/20 border border-yellow-500/30 p-4 rounded-md mt-4">
                        <p className="text-[#FFC900]">Your application is pending approval.</p>
                        <p className="text-sm text-[#FFC900]/70 mt-2">
                          An administrator will review your application soon. Please check back later.
                        </p>
                        
                        {/* Add self-approve button for development */}
                        <Button 
                          variant="outline" 
                          onClick={handleSelfApprove}
                          className="mt-4 border-green-500 text-green-500 hover:bg-green-500/10"
                        >
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Dev: Self-Approve
                        </Button>
                      </div>
                    )}
                  </>
                )}
              </div>
            )}
          </CardContent>
          
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handleGoHome}>
              Back to Dashboard
            </Button>
            
            {applicationStatus.isApproved && (
              <Button 
                variant="default" 
                onClick={handleGoTutorHub}
                className="bg-[#FFC900] hover:bg-[#FFC900]/80 text-black"
              >
                Go to Tutor Hub
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </MainLayout>
  );
};

export default TutorApplicationStatus;
