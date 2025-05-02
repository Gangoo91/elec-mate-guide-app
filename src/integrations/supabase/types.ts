export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      apprentice_milestones: {
        Row: {
          completed_at: string | null
          created_at: string
          description: string | null
          id: string
          status: string
          target_completion_date: string | null
          title: string
          type: string
          updated_at: string
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string
          description?: string | null
          id?: string
          status?: string
          target_completion_date?: string | null
          title: string
          type: string
          updated_at?: string
          user_id: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string
          description?: string | null
          id?: string
          status?: string
          target_completion_date?: string | null
          title?: string
          type?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      audio_tutorials: {
        Row: {
          audiourl: string
          category: string
          created_at: string
          description: string
          duration: string
          id: string
          kudospoints: number
          title: string
          unitnumber: string | null
        }
        Insert: {
          audiourl: string
          category: string
          created_at?: string
          description: string
          duration: string
          id?: string
          kudospoints?: number
          title: string
          unitnumber?: string | null
        }
        Update: {
          audiourl?: string
          category?: string
          created_at?: string
          description?: string
          duration?: string
          id?: string
          kudospoints?: number
          title?: string
          unitnumber?: string | null
        }
        Relationships: []
      }
      chat_comments: {
        Row: {
          content: string
          created_at: string
          id: string
          message_id: string
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          message_id: string
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          message_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "chat_comments_message_id_fkey"
            columns: ["message_id"]
            isOneToOne: false
            referencedRelation: "chat_messages"
            referencedColumns: ["id"]
          },
        ]
      }
      chat_messages: {
        Row: {
          content: string
          created_at: string
          downvotes: number
          id: string
          upvotes: number
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          downvotes?: number
          id?: string
          upvotes?: number
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          downvotes?: number
          id?: string
          upvotes?: number
          user_id?: string
        }
        Relationships: []
      }
      chat_reactions: {
        Row: {
          created_at: string
          id: string
          message_id: string
          reaction_type: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          message_id: string
          reaction_type: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          message_id?: string
          reaction_type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "chat_reactions_message_id_fkey"
            columns: ["message_id"]
            isOneToOne: false
            referencedRelation: "chat_messages"
            referencedColumns: ["id"]
          },
        ]
      }
      client_jobs: {
        Row: {
          client_id: string
          created_at: string
          id: string
          job_id: string | null
          notes: string | null
        }
        Insert: {
          client_id: string
          created_at?: string
          id?: string
          job_id?: string | null
          notes?: string | null
        }
        Update: {
          client_id?: string
          created_at?: string
          id?: string
          job_id?: string | null
          notes?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "client_jobs_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "client_jobs_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      clients: {
        Row: {
          address: string
          created_at: string
          email: string | null
          id: string
          name: string
          notes: string | null
          phone: string | null
          type: string
          updated_at: string
          user_id: string
        }
        Insert: {
          address: string
          created_at?: string
          email?: string | null
          id?: string
          name: string
          notes?: string | null
          phone?: string | null
          type: string
          updated_at?: string
          user_id: string
        }
        Update: {
          address?: string
          created_at?: string
          email?: string | null
          id?: string
          name?: string
          notes?: string | null
          phone?: string | null
          type?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      course_content: {
        Row: {
          content: Json
          created_at: string | null
          id: string
          order_index: number
          section_title: string
          unit_id: string
          updated_at: string | null
        }
        Insert: {
          content: Json
          created_at?: string | null
          id?: string
          order_index: number
          section_title: string
          unit_id: string
          updated_at?: string | null
        }
        Update: {
          content?: Json
          created_at?: string | null
          id?: string
          order_index?: number
          section_title?: string
          unit_id?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      exam_attempts: {
        Row: {
          created_at: string | null
          id: string
          level: string
          qualification_type: string
          score: number
          time_taken: number
          total_questions: number
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          level: string
          qualification_type: string
          score: number
          time_taken: number
          total_questions: number
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          level?: string
          qualification_type?: string
          score?: number
          time_taken?: number
          total_questions?: number
          user_id?: string
        }
        Relationships: []
      }
      exam_questions: {
        Row: {
          correct_answer: string
          created_at: string | null
          difficulty: string
          explanation: string | null
          id: string
          level: string
          options: Json
          qualification_type: string
          question_text: string
          topic: string
          unit_code: string | null
          unit_description: string | null
          unit_title: string | null
          updated_at: string | null
        }
        Insert: {
          correct_answer: string
          created_at?: string | null
          difficulty: string
          explanation?: string | null
          id?: string
          level: string
          options: Json
          qualification_type: string
          question_text: string
          topic: string
          unit_code?: string | null
          unit_description?: string | null
          unit_title?: string | null
          updated_at?: string | null
        }
        Update: {
          correct_answer?: string
          created_at?: string | null
          difficulty?: string
          explanation?: string | null
          id?: string
          level?: string
          options?: Json
          qualification_type?: string
          question_text?: string
          topic?: string
          unit_code?: string | null
          unit_description?: string | null
          unit_title?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      exercise_kudos: {
        Row: {
          created_at: string
          exercise_id: string
          id: string
          points: number
          user_id: string
        }
        Insert: {
          created_at?: string
          exercise_id: string
          id?: string
          points?: number
          user_id: string
        }
        Update: {
          created_at?: string
          exercise_id?: string
          id?: string
          points?: number
          user_id?: string
        }
        Relationships: []
      }
      interactive_content: {
        Row: {
          content: Json
          content_type: string
          created_at: string | null
          description: string | null
          id: string
          title: string
          unit_id: string
          updated_at: string | null
        }
        Insert: {
          content: Json
          content_type: string
          created_at?: string | null
          description?: string | null
          id?: string
          title: string
          unit_id: string
          updated_at?: string | null
        }
        Update: {
          content?: Json
          content_type?: string
          created_at?: string | null
          description?: string | null
          id?: string
          title?: string
          unit_id?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      invoices: {
        Row: {
          client_address: string | null
          client_email: string | null
          client_name: string
          created_at: string
          due_date: string
          id: string
          invoice_number: string
          issue_date: string
          items: Json
          notes: string | null
          status: string
          subtotal: number
          terms: string | null
          total: number
          updated_at: string
          user_id: string
          vat_amount: number
          vat_rate: number
        }
        Insert: {
          client_address?: string | null
          client_email?: string | null
          client_name: string
          created_at?: string
          due_date: string
          id?: string
          invoice_number: string
          issue_date?: string
          items?: Json
          notes?: string | null
          status?: string
          subtotal: number
          terms?: string | null
          total: number
          updated_at?: string
          user_id: string
          vat_amount: number
          vat_rate?: number
        }
        Update: {
          client_address?: string | null
          client_email?: string | null
          client_name?: string
          created_at?: string
          due_date?: string
          id?: string
          invoice_number?: string
          issue_date?: string
          items?: Json
          notes?: string | null
          status?: string
          subtotal?: number
          terms?: string | null
          total?: number
          updated_at?: string
          user_id?: string
          vat_amount?: number
          vat_rate?: number
        }
        Relationships: []
      }
      job_estimates: {
        Row: {
          client_name: string | null
          created_at: string
          estimate_response: string
          id: string
          job_description: string
          job_reference: string | null
          status: string | null
          template_description: string | null
          template_name: string | null
          template_type: string | null
          user_id: string
        }
        Insert: {
          client_name?: string | null
          created_at?: string
          estimate_response: string
          id?: string
          job_description: string
          job_reference?: string | null
          status?: string | null
          template_description?: string | null
          template_name?: string | null
          template_type?: string | null
          user_id: string
        }
        Update: {
          client_name?: string | null
          created_at?: string
          estimate_response?: string
          id?: string
          job_description?: string
          job_reference?: string | null
          status?: string | null
          template_description?: string | null
          template_name?: string | null
          template_type?: string | null
          user_id?: string
        }
        Relationships: []
      }
      jobs: {
        Row: {
          address: string
          client_name: string
          created_at: string | null
          date: string
          end_time: string
          id: string
          job_type: string
          notes: string | null
          start_time: string
          status: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          address: string
          client_name: string
          created_at?: string | null
          date: string
          end_time: string
          id?: string
          job_type: string
          notes?: string | null
          start_time: string
          status?: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          address?: string
          client_name?: string
          created_at?: string | null
          date?: string
          end_time?: string
          id?: string
          job_type?: string
          notes?: string | null
          start_time?: string
          status?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      mate_notifications: {
        Row: {
          created_at: string | null
          id: string
          message: string
          read: boolean | null
          recipient_id: string
          sender_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          message: string
          read?: boolean | null
          recipient_id: string
          sender_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          message?: string
          read?: boolean | null
          recipient_id?: string
          sender_id?: string
        }
        Relationships: []
      }
      mental_health_mates: {
        Row: {
          about_me: string | null
          created_at: string | null
          experience: string | null
          id: string
          is_available: boolean | null
          specialties: string[] | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          about_me?: string | null
          created_at?: string | null
          experience?: string | null
          id?: string
          is_available?: boolean | null
          specialties?: string[] | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          about_me?: string | null
          created_at?: string | null
          experience?: string | null
          id?: string
          is_available?: boolean | null
          specialties?: string[] | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      mental_health_resources: {
        Row: {
          benefits: string | null
          created_at: string | null
          description: string
          id: string
          reference_url: string | null
          resource_type: string
          steps: Json | null
          tips: string | null
          title: string
          updated_at: string | null
          url: string | null
        }
        Insert: {
          benefits?: string | null
          created_at?: string | null
          description: string
          id?: string
          reference_url?: string | null
          resource_type: string
          steps?: Json | null
          tips?: string | null
          title: string
          updated_at?: string | null
          url?: string | null
        }
        Update: {
          benefits?: string | null
          created_at?: string | null
          description?: string
          id?: string
          reference_url?: string | null
          resource_type?: string
          steps?: Json | null
          tips?: string | null
          title?: string
          updated_at?: string | null
          url?: string | null
        }
        Relationships: []
      }
      mentors: {
        Row: {
          created_at: string | null
          experience: string | null
          id: string
          is_active: boolean | null
          specialties: string[] | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          experience?: string | null
          id?: string
          is_active?: boolean | null
          specialties?: string[] | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          experience?: string | null
          id?: string
          is_active?: boolean | null
          specialties?: string[] | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      mentorships: {
        Row: {
          created_at: string | null
          id: string
          mentee_id: string
          mentor_id: string
          status: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          mentee_id: string
          mentor_id: string
          status?: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          mentee_id?: string
          mentor_id?: string
          status?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      messages: {
        Row: {
          content: string
          created_at: string | null
          id: string
          read: boolean | null
          receiver_id: string
          sender_id: string
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: string
          read?: boolean | null
          receiver_id: string
          sender_id: string
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: string
          read?: boolean | null
          receiver_id?: string
          sender_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          created_at: string | null
          first_name: string | null
          id: string
          last_name: string | null
          location: string | null
          phone_number: string | null
          qualification_level: string | null
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string | null
          first_name?: string | null
          id: string
          last_name?: string | null
          location?: string | null
          phone_number?: string | null
          qualification_level?: string | null
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          location?: string | null
          phone_number?: string | null
          qualification_level?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      progress_updates: {
        Row: {
          created_at: string
          id: string
          milestone_id: string
          note: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          milestone_id: string
          note: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          milestone_id?: string
          note?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "progress_updates_milestone_id_fkey"
            columns: ["milestone_id"]
            isOneToOne: false
            referencedRelation: "apprentice_milestones"
            referencedColumns: ["id"]
          },
        ]
      }
      quiz_attempts: {
        Row: {
          completed_at: string
          id: string
          score: number
          time_taken: number
          total_questions: number
          unit_id: string
          user_id: string
        }
        Insert: {
          completed_at?: string
          id?: string
          score?: number
          time_taken: number
          total_questions: number
          unit_id: string
          user_id: string
        }
        Update: {
          completed_at?: string
          id?: string
          score?: number
          time_taken?: number
          total_questions?: number
          unit_id?: string
          user_id?: string
        }
        Relationships: []
      }
      safety_quiz_questions: {
        Row: {
          category: string
          correct_answer: string
          created_at: string
          difficulty_level: string | null
          id: string
          options: Json
          question: string
        }
        Insert: {
          category: string
          correct_answer: string
          created_at?: string
          difficulty_level?: string | null
          id?: string
          options: Json
          question: string
        }
        Update: {
          category?: string
          correct_answer?: string
          created_at?: string
          difficulty_level?: string | null
          id?: string
          options?: Json
          question?: string
        }
        Relationships: []
      }
      study_group_discussions: {
        Row: {
          created_at: string | null
          group_id: string | null
          id: string
          message: string
          parent_id: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          group_id?: string | null
          id?: string
          message: string
          parent_id?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          group_id?: string | null
          id?: string
          message?: string
          parent_id?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "study_group_discussions_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "study_groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "study_group_discussions_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "study_group_discussions"
            referencedColumns: ["id"]
          },
        ]
      }
      study_group_members: {
        Row: {
          group_id: string
          id: string
          joined_at: string
          role: string
          user_id: string
        }
        Insert: {
          group_id: string
          id?: string
          joined_at?: string
          role?: string
          user_id: string
        }
        Update: {
          group_id?: string
          id?: string
          joined_at?: string
          role?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "study_group_members_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "study_groups"
            referencedColumns: ["id"]
          },
        ]
      }
      study_group_resources: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string | null
          group_id: string | null
          id: string
          resource_type: string
          title: string
          updated_at: string | null
          url: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          group_id?: string | null
          id?: string
          resource_type: string
          title: string
          updated_at?: string | null
          url?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          group_id?: string | null
          id?: string
          resource_type?: string
          title?: string
          updated_at?: string | null
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "study_group_resources_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "study_groups"
            referencedColumns: ["id"]
          },
        ]
      }
      study_group_schedules: {
        Row: {
          created_at: string | null
          day_of_week: string
          duration_minutes: number
          group_id: string | null
          id: string
          meeting_link: string | null
          start_time: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          day_of_week: string
          duration_minutes?: number
          group_id?: string | null
          id?: string
          meeting_link?: string | null
          start_time: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          day_of_week?: string
          duration_minutes?: number
          group_id?: string | null
          id?: string
          meeting_link?: string | null
          start_time?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "study_group_schedules_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "study_groups"
            referencedColumns: ["id"]
          },
        ]
      }
      study_groups: {
        Row: {
          created_at: string
          created_by: string
          description: string | null
          id: string
          is_private: boolean | null
          level: string
          max_participants: number
          meeting_link: string | null
          name: string
          next_meeting_at: string | null
          study_materials: Json | null
          tags: string[] | null
          topic: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          created_by: string
          description?: string | null
          id?: string
          is_private?: boolean | null
          level: string
          max_participants?: number
          meeting_link?: string | null
          name: string
          next_meeting_at?: string | null
          study_materials?: Json | null
          tags?: string[] | null
          topic: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          created_by?: string
          description?: string | null
          id?: string
          is_private?: boolean | null
          level?: string
          max_participants?: number
          meeting_link?: string | null
          name?: string
          next_meeting_at?: string | null
          study_materials?: Json | null
          tags?: string[] | null
          topic?: string
          updated_at?: string
        }
        Relationships: []
      }
      subscribers: {
        Row: {
          billing_period: string | null
          created_at: string
          email: string
          id: string
          is_trial: boolean | null
          price_id: string | null
          stripe_customer_id: string | null
          subscribed: boolean
          subscription_end: string | null
          subscription_tier: string | null
          trial_end: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          billing_period?: string | null
          created_at?: string
          email: string
          id?: string
          is_trial?: boolean | null
          price_id?: string | null
          stripe_customer_id?: string | null
          subscribed?: boolean
          subscription_end?: string | null
          subscription_tier?: string | null
          trial_end?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          billing_period?: string | null
          created_at?: string
          email?: string
          id?: string
          is_trial?: boolean | null
          price_id?: string | null
          stripe_customer_id?: string | null
          subscribed?: boolean
          subscription_end?: string | null
          subscription_tier?: string | null
          trial_end?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      team_member_presence: {
        Row: {
          created_at: string
          id: string
          last_seen: string
          online: boolean
          status: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          last_seen?: string
          online?: boolean
          status?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          last_seen?: string
          online?: boolean
          status?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      team_members: {
        Row: {
          availability: string | null
          created_at: string
          email: string | null
          id: string
          name: string
          phone: string | null
          role: string
          skills: string[] | null
          updated_at: string
        }
        Insert: {
          availability?: string | null
          created_at?: string
          email?: string | null
          id?: string
          name: string
          phone?: string | null
          role: string
          skills?: string[] | null
          updated_at?: string
        }
        Update: {
          availability?: string | null
          created_at?: string
          email?: string | null
          id?: string
          name?: string
          phone?: string | null
          role?: string
          skills?: string[] | null
          updated_at?: string
        }
        Relationships: []
      }
      team_messages: {
        Row: {
          chat_type: string
          content: string
          created_at: string
          id: string
          is_group_message: boolean
          read: boolean
          recipient_id: string | null
          sender_id: string
        }
        Insert: {
          chat_type?: string
          content: string
          created_at?: string
          id?: string
          is_group_message?: boolean
          read?: boolean
          recipient_id?: string | null
          sender_id: string
        }
        Update: {
          chat_type?: string
          content?: string
          created_at?: string
          id?: string
          is_group_message?: boolean
          read?: boolean
          recipient_id?: string | null
          sender_id?: string
        }
        Relationships: []
      }
      time_entries: {
        Row: {
          break_end: string | null
          break_start: string | null
          clock_in: string
          clock_out: string | null
          created_at: string | null
          id: string
          total_hours: number | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          break_end?: string | null
          break_start?: string | null
          clock_in: string
          clock_out?: string | null
          created_at?: string | null
          id?: string
          total_hours?: number | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          break_end?: string | null
          break_start?: string | null
          clock_in?: string
          clock_out?: string | null
          created_at?: string | null
          id?: string
          total_hours?: number | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      tutor_approvals: {
        Row: {
          applied_at: string
          approved_at: string | null
          id: string
          is_approved: boolean
          reviewer_notes: string | null
          user_id: string
        }
        Insert: {
          applied_at?: string
          approved_at?: string | null
          id?: string
          is_approved?: boolean
          reviewer_notes?: string | null
          user_id: string
        }
        Update: {
          applied_at?: string
          approved_at?: string | null
          id?: string
          is_approved?: boolean
          reviewer_notes?: string | null
          user_id?: string
        }
        Relationships: []
      }
      user_courses: {
        Row: {
          completed: number | null
          created_at: string
          description: string
          estimated_time: number | null
          id: string
          last_activity: string | null
          path: string
          time_spent: number | null
          title: string
          total: number | null
          unit_number: string
          updated_at: string
          user_id: string
        }
        Insert: {
          completed?: number | null
          created_at?: string
          description: string
          estimated_time?: number | null
          id?: string
          last_activity?: string | null
          path: string
          time_spent?: number | null
          title: string
          total?: number | null
          unit_number: string
          updated_at?: string
          user_id: string
        }
        Update: {
          completed?: number | null
          created_at?: string
          description?: string
          estimated_time?: number | null
          id?: string
          last_activity?: string | null
          path?: string
          time_spent?: number | null
          title?: string
          total?: number | null
          unit_number?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_progress: {
        Row: {
          content_id: string
          created_at: string | null
          id: string
          last_accessed: string | null
          progress: Json | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          content_id: string
          created_at?: string | null
          id?: string
          last_accessed?: string | null
          progress?: Json | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          content_id?: string
          created_at?: string | null
          id?: string
          last_accessed?: string | null
          progress?: Json | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_progress_content_id_fkey"
            columns: ["content_id"]
            isOneToOne: false
            referencedRelation: "interactive_content"
            referencedColumns: ["id"]
          },
        ]
      }
      video_lessons: {
        Row: {
          category: string
          created_at: string | null
          description: string
          duration: string
          id: string
          kudos_points: number
          thumbnail_url: string | null
          title: string
          updated_at: string | null
          video_url: string
        }
        Insert: {
          category: string
          created_at?: string | null
          description: string
          duration: string
          id?: string
          kudos_points?: number
          thumbnail_url?: string | null
          title: string
          updated_at?: string | null
          video_url: string
        }
        Update: {
          category?: string
          created_at?: string | null
          description?: string
          duration?: string
          id?: string
          kudos_points?: number
          thumbnail_url?: string | null
          title?: string
          updated_at?: string | null
          video_url?: string
        }
        Relationships: []
      }
      video_progress: {
        Row: {
          created_at: string | null
          id: string
          kudos_awarded: boolean | null
          last_position: number | null
          training_recorded: boolean | null
          updated_at: string | null
          user_id: string
          video_id: string
          watch_time: number | null
          watched: boolean | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          kudos_awarded?: boolean | null
          last_position?: number | null
          training_recorded?: boolean | null
          updated_at?: string | null
          user_id: string
          video_id: string
          watch_time?: number | null
          watched?: boolean | null
        }
        Update: {
          created_at?: string | null
          id?: string
          kudos_awarded?: boolean | null
          last_position?: number | null
          training_recorded?: boolean | null
          updated_at?: string | null
          user_id?: string
          video_id?: string
          watch_time?: number | null
          watched?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "video_progress_video_id_fkey"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "video_lessons"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_kudos_leaderboard: {
        Args: Record<PropertyKey, never>
        Returns: {
          user_id: string
          first_name: string
          last_name: string
          total_points: number
          exercises_completed: number
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
