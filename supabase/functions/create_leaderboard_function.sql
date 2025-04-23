
-- Function to get the kudos leaderboard
CREATE OR REPLACE FUNCTION public.get_kudos_leaderboard()
RETURNS TABLE (
  user_id uuid,
  first_name text,
  last_name text,
  total_points bigint,
  exercises_completed bigint
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  RETURN QUERY
  SELECT
    p.id as user_id,
    p.first_name,
    p.last_name,
    COALESCE(SUM(k.points), 0)::bigint as total_points,
    COUNT(k.id)::bigint as exercises_completed
  FROM
    profiles p
  LEFT JOIN
    exercise_kudos k ON p.id = k.user_id
  GROUP BY
    p.id, p.first_name, p.last_name
  ORDER BY
    total_points DESC;
END;
$$;
