
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, XCircle } from "lucide-react";

type TutorApprovalRecord = {
  id: string;
  user_id: string;
  is_approved: boolean;
  applied_at: string;
  user_email?: string;
  first_name?: string;
  last_name?: string;
};

const TutorApprovals = () => {
  const [tutorRequests, setTutorRequests] = useState<TutorApprovalRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchTutorApprovals = async () => {
    try {
      setLoading(true);
      
      // Get tutor approval records
      const { data: approvals, error } = await supabase
        .from('tutor_approvals')
        .select('*')
        .order('applied_at', { ascending: false });
        
      if (error) throw error;
      
      // For each approval, fetch the associated user's email
      const recordsWithEmails = await Promise.all(
        approvals.map(async (record) => {
          // Get user information
          const { data: userData } = await supabase
            .from('profiles')
            .select('first_name, last_name')
            .eq('id', record.user_id)
            .single();
          
          // Get user email from auth.users (only works with service role, shown here for completeness)
          // In real production app, you'd use an admin API or edge function with appropriate permissions
          const { data: authData } = await supabase.auth.admin.getUserById(record.user_id);
          
          return {
            ...record,
            user_email: authData?.user?.email || 'Unknown email',
            first_name: userData?.first_name || '',
            last_name: userData?.last_name || '',
          };
        })
      );
      
      setTutorRequests(recordsWithEmails);
    } catch (error) {
      console.error("Error fetching tutor approvals:", error);
      toast({
        title: "Error",
        description: "Failed to load tutor approval requests",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };
  
  const handleApproval = async (id: string, approve: boolean) => {
    try {
      const { error } = await supabase
        .from('tutor_approvals')
        .update({ 
          is_approved: approve,
          approved_at: approve ? new Date().toISOString() : null
        })
        .eq('id', id);
      
      if (error) throw error;
      
      toast({
        title: approve ? "Tutor Approved" : "Tutor Rejected",
        description: approve 
          ? "The tutor has been approved and can now access the Tutor Hub" 
          : "The tutor request has been rejected",
      });
      
      // Refresh the list
      fetchTutorApprovals();
    } catch (error) {
      console.error("Error updating tutor approval:", error);
      toast({
        title: "Error",
        description: "Failed to update tutor approval status",
        variant: "destructive",
      });
    }
  };
  
  // For development: Approve your own account
  const approveCurrentUser = async () => {
    try {
      // Get current user
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast({
          title: "Not logged in",
          description: "Please log in first",
          variant: "destructive",
        });
        return;
      }
      
      // Check if user has a tutor role in user_metadata
      const role = user.user_metadata?.plan;
      if (role !== "tutor") {
        toast({
          title: "Not a tutor",
          description: "Your account is not registered as a tutor",
          variant: "destructive",
        });
        return;
      }
      
      // Check if entry exists in tutor_approvals
      const { data: existingRecord } = await supabase
        .from('tutor_approvals')
        .select('id')
        .eq('user_id', user.id)
        .single();
      
      if (existingRecord) {
        // Update existing record
        await supabase
          .from('tutor_approvals')
          .update({ 
            is_approved: true,
            approved_at: new Date().toISOString()
          })
          .eq('id', existingRecord.id);
      } else {
        // Create new record
        await supabase
          .from('tutor_approvals')
          .insert({
            user_id: user.id,
            is_approved: true,
            approved_at: new Date().toISOString()
          });
      }
      
      toast({
        title: "Access Granted",
        description: "You now have tutor access. Refresh the page to see the Tutor Hub.",
      });
      
      // Refresh the list
      fetchTutorApprovals();
    } catch (error) {
      console.error("Error approving current user:", error);
      toast({
        title: "Error",
        description: "Failed to grant tutor access",
        variant: "destructive",
      });
    }
  };
  
  useEffect(() => {
    fetchTutorApprovals();
  }, []);
  
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>Tutor Approval Requests</span>
          <Button onClick={approveCurrentUser} variant="secondary">
            Grant Myself Tutor Access
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : tutorRequests.length === 0 ? (
          <p className="text-center py-4 text-muted-foreground">No pending tutor approval requests.</p>
        ) : (
          <div className="space-y-4">
            {tutorRequests.map((request) => (
              <div 
                key={request.id} 
                className={`p-4 border rounded-lg flex justify-between items-center ${
                  request.is_approved ? 'bg-green-50/10 border-green-200/30' : 'bg-gray-50/5 border-gray-200/20'
                }`}
              >
                <div>
                  <div className="font-medium">
                    {request.first_name} {request.last_name} 
                    <span className="text-xs ml-2 text-muted-foreground">
                      ({request.user_email})
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Applied: {new Date(request.applied_at).toLocaleDateString()}
                    {request.is_approved && (
                      <span className="ml-2 text-green-400">• Approved</span>
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  {!request.is_approved && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-green-500/50 hover:bg-green-500/10"
                      onClick={() => handleApproval(request.id, true)}
                    >
                      <CheckCircle className="h-4 w-4 mr-1" /> Approve
                    </Button>
                  )}
                  {request.is_approved && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-red-500/50 hover:bg-red-500/10"
                      onClick={() => handleApproval(request.id, false)}
                    >
                      <XCircle className="h-4 w-4 mr-1" /> Revoke
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TutorApprovals;
