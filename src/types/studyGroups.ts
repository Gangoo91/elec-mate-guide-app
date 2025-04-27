
export interface StudyGroupSchedule {
  id: string;
  group_id: string;
  day_of_week: string;
  start_time: string;
  duration_minutes: number;
  meeting_link?: string;
}

export interface StudyGroupResource {
  id: string;
  group_id: string;
  title: string;
  description?: string;
  resource_type: string;
  url?: string;
  created_by: string;
}

export interface StudyGroupDiscussion {
  id: string;
  group_id: string;
  user_id: string;
  message: string;
  parent_id?: string;
  created_at: string;
}

export interface StudyGroup {
  id: string;
  name: string;
  description?: string;
  topic: string;
  level: string;
  max_participants: number;
  created_by: string;
  next_meeting_at?: string;
  meeting_link?: string;
  tags?: string[];
  is_private: boolean;
  study_materials: any[];
}
