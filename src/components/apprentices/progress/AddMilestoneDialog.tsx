
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useApprenticeProgress } from "@/hooks/useApprenticeProgress";
import { supabase } from "@/integrations/supabase/client";

export default function AddMilestoneDialog() {
  const { toast } = useToast();
  const { addMilestone } = useApprenticeProgress();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState<'qualification' | 'certification' | 'skill' | 'module'>('skill');
  const [open, setOpen] = useState(false);

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
      status: 'not_started',
      user_id: user.id,
    };

    addMilestone(newMilestone);
    setOpen(false);
    setTitle('');
    setDescription('');
    setType('skill');
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full mb-4">Add New Milestone</Button>
      </DialogTrigger>
      <DialogContent>
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
            />
          </div>
          <div>
            <Input
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
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
          <Button type="submit" className="w-full">Create Milestone</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
