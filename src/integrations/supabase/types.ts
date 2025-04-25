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
      job_estimates: {
        Row: {
          client_name: string | null
          created_at: string
          estimate_response: string
          id: string
          job_description: string
          job_reference: string | null
          status: string | null
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
