
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useApprenticeProgress } from "@/hooks/useApprenticeProgress";
import { supabase } from "@/integrations/supabase/client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useVideos } from "@/hooks/useVideos";
import { useNavigate } from 'react-router-dom';
import { Play, BookOpen, Headphones, CirclePlay, GraduationCap } from "lucide-react";
import { Separator } from '@/components/ui/separator';

export default function AddMilestoneDialog() {
  const { toast } = useToast();
  const { addMilestone } = useApprenticeProgress();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState<'qualification' | 'certification' | 'skill' | 'module'>('skill');
  const [open, setOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState<string | null>(null);
  const [resourceType, setResourceType] = useState<'video' | 'exam' | 'quiz' | 'audio' | 'none'>('none');
  const [trainingHours, setTrainingHours] = useState<string>('');
  const [qualificationFramework, setQualificationFramework] = useState<'city_guilds' | 'eal' | 'moet' | 'other'>('city_guilds');
  const [learningLevel, setLearningLevel] = useState<'level2' | 'level3' | 'level4' | null>('level2');
  const { videos } = useVideos();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      toast({
        title: "Error",
        description: "You must be logged in to create milestones",
        variant: "destructive",
      });
      return;
    }

    const newMilestone = {
      title,
      description,
      type,
      status: 'not_started' as 'not_started' | 'in_progress' | 'completed',
      user_id: user.id,
      target_completion_date: null,
      completed_at: null,
      resource_id: selectedResource,
      resource_type: resourceType !== 'none' ? resourceType : null,
      training_hours: trainingHours ? parseFloat(trainingHours) : null,
      qualification_framework: qualificationFramework,
      learning_level: learningLevel
    };

    addMilestone(newMilestone);
    setOpen(false);
    resetForm();
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setType('skill');
    setSelectedResource(null);
    setResourceType('none');
    setTrainingHours('');
    setQualificationFramework('city_guilds');
    setLearningLevel('level2');
  };

  const handleResourceSelect = (id: string, type: 'video' | 'exam' | 'quiz' | 'audio') => {
    setSelectedResource(id);
    setResourceType(type);
  };

  const goToResource = (type: string, id: string) => {
    switch(type) {
      case 'video':
        navigate('/apprentices/video-demonstrations');
        break;
      case 'exam':
        navigate('/apprentices/practice-exams');
        break;
      case 'quiz':
        // Navigate to the appropriate quiz page when available
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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full mb-4">Add New Milestone</Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Create New Milestone</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              placeholder="Milestone Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="mb-2"
            />
          </div>
          <div>
            <Input
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mb-2"
            />
          </div>
          <div className="mb-4">
            <Select value={type} onValueChange={(value: any) => setType(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="qualification">Qualification</SelectItem>
                <SelectItem value="certification">Certification</SelectItem>
                <SelectItem value="skill">Skill</SelectItem>
                <SelectItem value="module">Module</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="bg-[#22251e]/50 p-4 rounded-lg mb-4">
            <h3 className="font-medium mb-3 text-[#FFC900] flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              Learning Pathway
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-1 block text-[#FFC900]/80">
                  Qualification Framework
                </label>
                <Select 
                  value={qualificationFramework} 
                  onValueChange={(value: 'city_guilds' | 'eal' | 'moet' | 'other') => setQualificationFramework(value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select framework" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="city_guilds">City & Guilds</SelectItem>
                    <SelectItem value="eal">EAL</SelectItem>
                    <SelectItem value="moet">MOET</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-1 block text-[#FFC900]/80">
                  Learning Level
                </label>
                <Select 
                  value={learningLevel || ''} 
                  onValueChange={(value: 'level2' | 'level3' | 'level4' | '') => 
                    setLearningLevel(value === '' ? null : value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="level2">Level 2</SelectItem>
                    <SelectItem value="level3">Level 3</SelectItem>
                    <SelectItem value="level4">Level 4+</SelectItem>
                    <SelectItem value="">Not Applicable</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          <div className="mb-4">
            <label htmlFor="trainingHours" className="text-sm font-medium mb-1 block">
              Off-the-Job Training Hours
            </label>
            <Input
              id="trainingHours"
              type="number"
              min="0"
              step="0.5"
              placeholder="Enter hours (optional)"
              value={trainingHours}
              onChange={(e) => setTrainingHours(e.target.value)}
              className="w-full"
            />
            <p className="text-xs text-muted-foreground mt-1">
              Record time for off-the-job training activities (leave empty if unknown)
            </p>
          </div>
          
          <Separator className="my-4" />
          
          <div className="bg-[#22251e]/50 p-4 rounded-lg mb-4">
            <h3 className="text-sm font-medium mb-2 text-[#FFC900]">Link Learning Resource (Optional)</h3>
            
            <Tabs defaultValue="video" className="w-full">
              <TabsList className="w-full mb-4">
                <TabsTrigger value="video" className="flex items-center gap-1">
                  <Play className="h-4 w-4" /> Videos
                </TabsTrigger>
                <TabsTrigger value="exam" className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4" /> Exams
                </TabsTrigger>
                <TabsTrigger value="quiz" className="flex items-center gap-1">
                  <CirclePlay className="h-4 w-4" /> Quizzes
                </TabsTrigger>
                <TabsTrigger value="audio" className="flex items-center gap-1">
                  <Headphones className="h-4 w-4" /> Audio
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="video" className="max-h-40 overflow-y-auto p-2">
                {videos?.length > 0 ? (
                  videos.map(video => (
                    <div 
                      key={video.id} 
                      className={`p-2 mb-1 border rounded cursor-pointer flex items-center gap-2 ${selectedResource === video.id && resourceType === 'video' ? 'border-[#FFC900] bg-[#FFC900]/10' : 'border-gray-700 hover:border-[#FFC900]/50'}`}
                      onClick={() => handleResourceSelect(video.id, 'video')}
                    >
                      <Play className="h-4 w-4 text-[#FFC900]" />
                      <div className="text-sm">{video.title}</div>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-gray-400">No videos available.</p>
                )}
              </TabsContent>
              
              <TabsContent value="exam" className="max-h-40 overflow-y-auto p-2">
                <p className="text-sm text-gray-400">Mock exams will be available soon.</p>
              </TabsContent>
              
              <TabsContent value="quiz" className="max-h-40 overflow-y-auto p-2">
                <p className="text-sm text-gray-400">Mini quizzes will be available soon.</p>
              </TabsContent>
              
              <TabsContent value="audio" className="max-h-40 overflow-y-auto p-2">
                <p className="text-sm text-gray-400">Audio tutorials will be available soon.</p>
              </TabsContent>
            </Tabs>
            
            {selectedResource && resourceType !== 'none' && (
              <div className="mt-2 p-2 bg-[#FFC900]/10 rounded flex justify-between items-center">
                <span className="text-sm text-[#FFC900]">Resource selected</span>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => {setSelectedResource(null); setResourceType('none');}}
                  className="text-xs"
                >
                  Clear
                </Button>
              </div>
            )}
          </div>
          
          <Button type="submit" className="w-full">Create Milestone</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
