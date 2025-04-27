import React, { useState } from 'react';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatDistance } from 'date-fns';
import { 
  Calendar,
  MessageSquare, 
  Clock, 
  PlusCircle,
  ArrowUpRight,
  Play,
  BookOpen,
  CirclePlay,
  Headphones
} from 'lucide-react';
import MilestoneStatusButton from './MilestoneStatusButton';
import { Separator } from "@/components/ui/separator";
import { useApprenticeProgress } from '@/hooks/useApprenticeProgress';
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useNavigate } from 'react-router-dom';

type Milestone = {
  id: string;
  title: string;
  description: string | null;
  type: 'qualification' | 'certification' | 'skill' | 'module';
  status: 'not_started' | 'in_progress' | 'completed';
  target_completion_date: string | null;
  completed_at: string | null;
  resource_id: string | null;
  resource_type: 'video' | 'exam' | 'quiz' | 'audio' | null;
  created_at: string;
};

type Update = {
  id: string;
  note: string;
  created_at: string;
};

interface MilestoneDetailProps {
  milestone: Milestone;
}

const MilestoneDetail = ({ milestone }: MilestoneDetailProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [updateNote, setUpdateNote] = useState("");
  const { updateMilestone, addMilestoneUpdate, milestoneUpdates } = useApprenticeProgress();
  const navigate = useNavigate();
  
  const milestoneSpecificUpdates = milestoneUpdates.filter(
    update => update.milestone_id === milestone.id
  );

  const handleStatusChange = (status: 'not_started' | 'in_progress' | 'completed') => {
    const updates = {
      id: milestone.id,
      status,
      completed_at: status === 'completed' ? new Date().toISOString() : null
    };
    updateMilestone(updates);
  };
  
  const handleSubmitUpdate = () => {
    if (!updateNote.trim()) return;
    
    addMilestoneUpdate({
      milestone_id: milestone.id, 
      note: updateNote.trim()
    });
    setUpdateNote("");
  };
  
  const getResourceIcon = (resourceType: string | null) => {
    switch(resourceType) {
      case 'video':
        return <Play className="h-5 w-5 text-[#FFC900]" />;
      case 'exam':
        return <BookOpen className="h-5 w-5 text-[#FFC900]" />;
      case 'quiz':
        return <CirclePlay className="h-5 w-5 text-[#FFC900]" />;
      case 'audio':
        return <Headphones className="h-5 w-5 text-[#FFC900]" />;
      default:
        return null;
    }
  };

  const goToResource = (resourceType: string | null, resourceId: string | null) => {
    if (!resourceType || !resourceId) return;
    setIsOpen(false);
    
    switch(resourceType) {
      case 'video':
        navigate('/apprentices/video-demonstrations');
        break;
      case 'exam':
        navigate('/apprentices/practice-exams');
        break;
      case 'quiz':
        navigate('/apprentices/study-materials');
        break;
      case 'audio':
        navigate('/apprentices/audio-tutorials');
        break;
      default:
        break;
    }
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm"
          className="h-auto p-1 text-[#FFC900]/80 hover:text-[#FFC900] hover:bg-[#FFC900]/10"
        >
          <MessageSquare className="h-4 w-4 mr-1" />
          <span>Details</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-xl text-[#FFC900] flex items-center gap-3">
            <MilestoneStatusButton 
              status={milestone.status}
              onStatusChange={handleStatusChange}
            />
            {milestone.title}
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[500px] pr-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="text-[#FFC900]">
                {milestone.type}
              </Badge>
              <div className="flex items-center gap-2 text-sm text-[#FFC900]/70">
                <Calendar className="h-4 w-4" />
                <span>Created {formatDistance(new Date(milestone.created_at), new Date(), { addSuffix: true })}</span>
              </div>
            </div>
            
            {milestone.description && (
              <div>
                <h4 className="text-sm font-medium mb-1 text-[#FFC900]">Description</h4>
                <p className="text-[#FFC900]/70">{milestone.description}</p>
              </div>
            )}
            
            <div className="flex flex-wrap gap-4 text-sm">
              {milestone.target_completion_date && (
                <div className="flex items-center gap-2 bg-[#22251e]/80 p-2 rounded">
                  <Calendar className="h-4 w-4 text-[#FFC900]" />
                  <span className="text-[#FFC900]/80">Target: {new Date(milestone.target_completion_date).toLocaleDateString()}</span>
                </div>
              )}
              
              {milestone.completed_at && (
                <div className="flex items-center gap-2 bg-green-950/30 p-2 rounded">
                  <Clock className="h-4 w-4 text-green-500" />
                  <span className="text-green-500">
                    Completed {formatDistance(new Date(milestone.completed_at), new Date(), { addSuffix: true })}
                  </span>
                </div>
              )}
            </div>
            
            {milestone.resource_id && milestone.resource_type && (
              <div>
                <h4 className="text-sm font-medium mb-2 text-[#FFC900]">Linked Resource</h4>
                <div className="bg-[#22251e]/70 p-3 rounded-md border border-[#FFC900]/20 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    {getResourceIcon(milestone.resource_type)}
                    <span className="text-sm text-[#FFC900]/80">
                      {milestone.resource_type === 'video' ? 'Video tutorial' : 
                       milestone.resource_type === 'exam' ? 'Mock exam' :
                       milestone.resource_type === 'quiz' ? 'Mini quiz' : 'Audio lesson'}
                    </span>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="flex items-center gap-1 text-xs text-[#FFC900]"
                    onClick={() => goToResource(milestone.resource_type, milestone.resource_id)}
                  >
                    <span>Access</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            )}
            
            <Separator className="my-4 bg-[#FFC900]/20" />
            
            <div>
              <h4 className="text-sm font-medium mb-3 text-[#FFC900] flex items-center justify-between">
                <span>Progress Updates</span>
                <span className="text-xs text-[#FFC900]/60">
                  {milestoneSpecificUpdates.length} {milestoneSpecificUpdates.length === 1 ? 'update' : 'updates'}
                </span>
              </h4>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Textarea 
                    placeholder="Add progress note or update..."
                    value={updateNote}
                    onChange={(e) => setUpdateNote(e.target.value)}
                    className="flex-grow"
                  />
                  <Button 
                    onClick={handleSubmitUpdate}
                    className="self-end"
                    disabled={!updateNote.trim()}
                  >
                    <PlusCircle className="h-4 w-4 mr-2" />
                    Add
                  </Button>
                </div>
                
                {milestoneSpecificUpdates.length > 0 ? (
                  <div className="space-y-3 mt-4">
                    {milestoneSpecificUpdates.map((update) => (
                      <div key={update.id} className="bg-[#22251e]/50 p-3 rounded border border-[#FFC900]/10">
                        <p className="text-[#FFC900]/80 mb-2">{update.note}</p>
                        <p className="text-xs text-[#FFC900]/60">
                          {formatDistance(new Date(update.created_at), new Date(), { addSuffix: true })}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-[#FFC900]/60 italic">No updates yet. Add your first progress note above.</p>
                )}
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default MilestoneDetail;
