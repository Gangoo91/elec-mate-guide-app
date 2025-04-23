
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Award, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface LeaderboardUser {
  user_id: string;
  first_name: string | null;
  last_name: string | null;
  total_points: number;
  exercises_completed: number;
}

const KudosLeaderboard = () => {
  const [leaders, setLeaders] = useState<LeaderboardUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedWinner, setSelectedWinner] = useState<LeaderboardUser | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .rpc('get_kudos_leaderboard')
          .order('total_points', { ascending: false })
          .limit(10);
          
        if (error) throw error;
        setLeaders(data || []);
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchLeaderboard();
  }, []);
  
  const handlePickWinner = () => {
    // Simple random selection from top participants
    if (leaders.length > 0) {
      // Only select from top 5 participants
      const topParticipants = leaders.slice(0, 5);
      const randomIndex = Math.floor(Math.random() * topParticipants.length);
      setSelectedWinner(topParticipants[randomIndex]);
      
      toast({
        title: "Winner Selected!",
        description: `${topParticipants[randomIndex].first_name || 'User'} has been selected as the winner!`,
      });
    }
  };
  
  if (loading) {
    return <div className="text-center p-8">Loading leaderboard...</div>;
  }
  
  return (
    <Card className="bg-[#22251e] border-[#FFC900]/20">
      <CardHeader className="border-b border-[#FFC900]/10 pb-4">
        <CardTitle className="text-[#FFC900] text-2xl flex items-center gap-2">
          <Trophy className="h-6 w-6" /> Kudos Leaderboard
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        {leaders.length === 0 ? (
          <p className="text-center text-[#FFC900]/70 py-4">No participation data yet.</p>
        ) : (
          <>
            <div className="space-y-4">
              {leaders.map((user, index) => (
                <div 
                  key={user.user_id} 
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    index < 3 ? 'bg-[#FFC900]/10' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`
                      w-8 h-8 rounded-full flex items-center justify-center
                      ${index === 0 ? 'bg-[#FFC900]/20 text-[#FFC900]' : 
                        index === 1 ? 'bg-gray-300/20 text-gray-300' : 
                        index === 2 ? 'bg-amber-700/20 text-amber-700' : 'bg-[#22251e] text-[#FFC900]/70'}
                    `}>
                      {index === 0 ? <Trophy className="h-4 w-4" /> : 
                       index === 1 ? <Star className="h-4 w-4" /> : 
                       index === 2 ? <Award className="h-4 w-4" /> : (index + 1)}
                    </div>
                    <div>
                      <p className="font-medium text-[#FFC900]">
                        {user.first_name || 'User'} {user.last_name ? user.last_name.charAt(0) + '.' : ''}
                      </p>
                      <p className="text-xs text-[#FFC900]/70">{user.exercises_completed} exercises completed</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-[#FFC900]">{user.total_points}</p>
                    <p className="text-xs text-[#FFC900]/70">points</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 border-t border-[#FFC900]/10 pt-4">
              <Button 
                onClick={handlePickWinner} 
                className="w-full bg-[#FFC900] text-[#22251e] hover:bg-[#FFC900]/90"
              >
                <Trophy className="mr-2 h-4 w-4" />
                Select Winner
              </Button>
              
              {selectedWinner && (
                <div className="mt-4 p-4 border border-[#FFC900]/20 rounded-lg bg-[#FFC900]/10 text-center">
                  <p className="text-[#FFC900] font-medium">🎉 This month's winner</p>
                  <p className="text-xl font-bold text-[#FFC900]">
                    {selectedWinner.first_name || 'User'} {selectedWinner.last_name ? selectedWinner.last_name.charAt(0) + '.' : ''}
                  </p>
                  <p className="text-sm text-[#FFC900]/70 mt-1">{selectedWinner.total_points} points</p>
                </div>
              )}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default KudosLeaderboard;
