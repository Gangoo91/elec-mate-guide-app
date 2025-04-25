
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

interface ExamQuestion {
  id: string;
  question_text: string;
  options: string[];
  difficulty: string;
  topic: string;
  unit_code: string | null;
  unit_title: string | null;
  unit_description: string | null;
}

export const useExamQuestions = (qualification: string, level: string) => {
  return useQuery({
    queryKey: ['exam-questions', qualification, level],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('exam_questions')
        .select('*')
        .eq('qualification_type', qualification)
        .eq('level', level)
        .order('unit_code');

      if (error) throw error;
      return data as ExamQuestion[];
    },
    enabled: !!qualification && !!level,
  });
};
