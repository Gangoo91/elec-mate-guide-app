
export type Milestone = {
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

export type Update = {
  id: string;
  note: string;
  created_at: string;
  milestone_id: string;
};
